import { useContext } from 'react';
import Key from '../Keys/Key'
import { KeyboardContext } from '../../../contexts/KeyboardContext';

const SpacebarRow = () => {
    const { pressedKeys } = useContext(KeyboardContext);
    const isSpacePressed = pressedKeys.has("Space");

    return (
        <div className='h-[20%] w-full flex justify-center gap-4 items-center px-1'>
            <Key width={120} label={"Ctrl"} id={"ControlLeft"} />
            <Key label={"Win"} id={"MetaLeft"} />
            <Key width={90} label={"Alt"} id={"AltLeft"} />
            <div className={` ${isSpacePressed ? "scale-90 shadow-[0_0_12px_#ff00ff]" : "bg-[#212121]"} border-white border-1 h-[55px] w-[32%] flex items-start justify-start px-1 py-1 rounded-sm cursor-pointer`} />
            <Key label={"Alt"} id={"AltRight"} />
            <Key label={"Opt"} /> 
            {/* This key is left */}
            <Key label={""} id={"ArrowLeft"} />
            <Key label={""} id={"ArrowDown"} />
            <Key label={""} id={"ArrowRight"} />
        </div>
    )
}
export default SpacebarRow