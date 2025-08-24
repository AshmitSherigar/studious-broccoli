import Key from '../Keys/Key'

const MiddleRow = () => {
    return (
        <div className='h-[20%] w-full flex justify-center gap-3 items-center px-3'>
            <Key width={120} id={"CapsLock"} label={'Caps'} />
            <Key label={"A"} id={"KeyA"} />
            <Key label={"S"} id={"KeyS"} />
            <Key label={"D"} id={"KeyD"} />
            <Key label={"F"} id={"KeyF"} />
            <Key label={"G"} id={"KeyG"} />
            <Key label={"H"} id={"KeyH"} />
            <Key label={"J"} id={"KeyJ"} />
            <Key label={"K"} id={"KeyK"} />
            <Key label={"L"} id={"KeyL"} />
            <Key top={":"} bottom={";"} id={'Semicolon'}/>
            <Key top={"\""} bottom={"'"} id={"Quote"}/>
            <Key top={"#"} bottom={"~"} />
            <Key label={"Prt Sc"} id={'PrintScreen'} />
            <Key label={"Ins"} id={'Insert'} />
        </div>
    )
}
export default MiddleRow