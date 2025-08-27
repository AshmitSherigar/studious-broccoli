import React, { useState, useEffect, useRef } from "react";

const TypingTest = () => {
  const [targetText, setTargetText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const inputRef = useRef(null);

  // Fetch random words from API
  const fetchWords = async () => {
    const res = await fetch(
      "https://random-word-api.herokuapp.com/word?number=10"
    );
    const data = await res.json();
    setTargetText(data.join(" "));
    setUserInput("");
    setStartTime(null);
    setWpm(0);
    if (inputRef.current) inputRef.current.focus();
  };

  useEffect(() => {
    fetchWords();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;

    // start timer on first keystroke
    if (!startTime && value.length === 1) {
      setStartTime(Date.now());
    }

    setUserInput(value);

    // calculate WPM live
    if (startTime) {
      const elapsedMinutes = (Date.now() - startTime) / 1000 / 60;
      const wordsTyped = value.length / 5;
      setWpm(Math.round(wordsTyped / elapsedMinutes));
    }

    // if finished typing, fetch new words
    if (value.length === targetText.length) {
      setTimeout(fetchWords, 1000); // short delay so user sees last result
    }
  };

  return (
    <div className="h-[45vh] w-full bg-[#0d0d0d] flex flex-col items-center justify-center px-10 gap-4">
      {/* WPM Display */}
      <div className="text-2xl font-bold bg-gradient-to-r from-[#ff00ff] to-[#00ffff] bg-clip-text text-transparent">
        WPM: {wpm}
      </div>

      <div className="relative bg-[#212121] h-[15vh] w-full p-4 rounded-md font-mono text-lg leading-relaxed overflow-hidden">
        <div className="absolute top-4 left-4 right-4 text-[#444] select-none">
          {targetText}
        </div>

        <div className="absolute top-4 left-4 right-4">
          {targetText.split("").map((char, index) => {
            let color = "text-[#e8e7e7]";
            if (index < userInput.length) {
              color =
                userInput[index] === char
                  ? "text-[#00ff9f]" // correct
                  : "text-[#ff1e56]"; // wrong
            }
            return (
              <span key={index} className={color}>
                {char}
              </span>
            );
          })}
        </div>
      </div>

      <input
        ref={inputRef}
        type="text"
        value={userInput}
        onChange={handleChange}
        autoFocus
        className="bg-[#212121] text-white caret-[#00ffff] p-2 rounded-md outline-none w-full"
        placeholder="Start typing..."
      />
    </div>
  );
};

export default TypingTest;
