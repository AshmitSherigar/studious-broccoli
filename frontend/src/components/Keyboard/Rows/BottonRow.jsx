import Key from '../Keys/Key'

const BottomRow = () => {
    return (
        <div className='h-[20%] w-full flex justify-center gap-3 items-center px-3'>
            <Key width={120} label={"Shift"} id={"Shift"}/>
            <Key label={"\\"} id={'\\'}/>
            <Key label={"Z"} id={'z'}/>
            <Key label={"X"} id={'x'}/>
            <Key label={"C"} id={'c'}/>
            <Key label={"V"} id={'v'}/>
            <Key label={"B"} id={'b'}/>
            <Key label={"N"} id={'n'}/>
            <Key label={"M"} id={'m'}/>
            <Key top={"<"} bottom={","} />
            <Key top={">"} bottom={"."} />
            <Key top={"?"} bottom={"/"} />
            <Key label={"Shift"} id={"Shift"}/>
            <Key label={""} />
            <Key label={"Ctrl"} id={"Control"}/>
        </div>
    )
}

export default BottomRow