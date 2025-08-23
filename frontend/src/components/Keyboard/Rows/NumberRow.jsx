import Key from '../Keys/Key'
const NumberRow = ({ pressedKeys }) => {
    return (
        <div className='h-[20%] w-full flex justify-center gap-3 items-center px-2'>
            <Key label={"ESC"} id={"Escape"} />
            <Key top={1} bottom={"!"} />
            <Key top={2} bottom={"@"} />
            <Key top={3} bottom={"#"} />
            <Key top={4} bottom={"$"} />
            <Key top={5} bottom={"%"} />
            <Key top={6} bottom={"^"} />
            <Key top={7} bottom={"&"} />
            <Key top={8} bottom={"*"} />
            <Key top={9} bottom={"("} />
            <Key top={'0'} bottom={")"} />
            <Key top={"-"} bottom={"_"} />
            <Key top={"="} bottom={"+"} />
            <Key width={120} label={"Backspace"} />
        </div>
    )
}
export default NumberRow