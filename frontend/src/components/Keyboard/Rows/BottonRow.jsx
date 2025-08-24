import Key from '../Keys/Key'

const BottomRow = () => {
    return (
        <div className='h-[20%] w-full flex justify-center gap-3 items-center px-2'>
            <Key width={120} label={"Shift"} id={"ShiftLeft"}/>
            <Key label={"\\"} id={'Backslash'}/>
            <Key label={"Z"} id={'KeyZ'}/>
            <Key label={"X"} id={'KeyX'}/>
            <Key label={"C"} id={'KeyC'}/>
            <Key label={"V"} id={'KeyV'}/>
            <Key label={"B"} id={'KeyB'}/>
            <Key label={"N"} id={'KeyN'}/>
            <Key label={"M"} id={'KeyM'}/>
            <Key top={"<"} bottom={","} id={"Comma"}/>
            <Key top={">"} bottom={"."} id={"Period"}/>
            <Key top={"?"} bottom={"/"} id={"Slash"}/>
            <Key label={"Shift"} id={"ShiftRight"}/>
            <Key label={""} id={"ArrowUp"}/>
            <Key label={"Ctrl"} id={"ControlRight"}/>
        </div>
    )
}

export default BottomRow