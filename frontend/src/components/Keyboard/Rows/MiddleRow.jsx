import Key from '../Keys/Key'

const MiddleRow = () => {
    return (
        <div className='h-[20%] w-full flex justify-center gap-3 items-center px-3'>
            <Key width={120} id={"CapsLock"} label={'Caps'} />
            <Key label={"A"} id={"a"} />
            <Key label={"S"} id={"s"} />
            <Key label={"D"} id={"d"} />
            <Key label={"F"} id={"f"} />
            <Key label={"G"} id={"g"} />
            <Key label={"H"} id={"h"} />
            <Key label={"J"} id={"j"} />
            <Key label={"K"} id={"k"} />
            <Key label={"L"} id={"l"} />
            <Key top={":"} bottom={";"} />
            <Key top={"\""} bottom={"'"} />
            <Key top={"#"} bottom={"~"} />
            <Key label={"Prt Sc"} id={'PrintScreen'} />
            <Key label={"Ins"} id={'Insert'} />
        </div>
    )
}
export default MiddleRow