import Key from '../Keys/Key'
 
const SpacebarRow = () => {
    return (
        <div className='h-[20%] w-full flex justify-center gap-4 items-center px-1'>
            <Key width={120} label={"Ctrl"} />
            <Key label={"Win"} />
            <Key width={90} label={"Alt"} />
            <div className='border-1 h-[55px] w-[36%] flex items-start justify-start px-1 py-1  bg-white rounded-sm cursor-pointer' />
            <Key label={"Alt"} />
            <Key label={"Opt"} />
            <Key label={""} />
            <Key label={""} />
            <Key label={""} />
        </div>
    )
}
export default SpacebarRow