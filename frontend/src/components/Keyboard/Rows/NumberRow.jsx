import Key from '../Keys/Key'
const NumberRow = () => {
    return (
        <div className='h-[20%] w-full flex justify-center gap-3 items-center px-2'>
            <Key label={"ESC"} id={"Escape"} />
            <Key top={1} bottom={"!"} id={"Digit1"} />
            <Key top={2} bottom={"@"} id={"Digit2"} />
            <Key top={3} bottom={"#"} id={"Digit3"} />
            <Key top={4} bottom={"$"} id={"Digit4"} />
            <Key top={5} bottom={"%"} id={"Digit5"} />
            <Key top={6} bottom={"^"} id={"Digit6"} />
            <Key top={7} bottom={"&"} id={"Digit7"} />
            <Key top={8} bottom={"*"} id={"Digit8"} />
            <Key top={9} bottom={"("} id={"Digit9"} />
            <Key top={'0'} bottom={")"} id={"Digit0"} />
            <Key top={"-"} bottom={"_"} id={"Minus"} />
            <Key top={"="} bottom={"+"} id={"Equal"} />
            <Key width={120} label={"Backspace"} id={"Backspace"} />
        </div>
    )
}
export default NumberRow