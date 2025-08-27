import { useEffect, useRef } from "react"

export default function useKeySound() {
    const audioRef = useRef(null) // Holds the memory of the audio and wont change across re renders
    useEffect(() => {
        audioRef.current = new Audio("/sounds/key.mp3")  // on mount it gets the memory of the sound
    }, [])
    function play() {
        if (!audioRef.current) return; // if the function is called before the mount then return 
        const clone = audioRef.current.cloneNode() // create clone element of the same audio so it can run indepentandly 
        clone.volume = 0.6
        clone.play().catch(() => { }) // plays the sound and also if there is any error the catch will swallow it ()=>{}
    }

    return play // return play function 
}