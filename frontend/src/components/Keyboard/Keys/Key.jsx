import { KeyboardContext } from "../../../contexts/KeyboardContext";
import { memo, useContext } from "react";

const Key = memo(({ label, top, bottom, width = 50 , id}) => {
    // console.log(id);
    
    const { pressedKeys } = useContext(KeyboardContext);
    const keyValue = id
    const isPressed = pressedKeys?.has(keyValue);
    return (
        <div className={`${isPressed ? "scale-90 bg-gray-300 shadow-inner" : ""} border-1 h-[50px] flex items-start justify-start px-1 py-1 bg-white rounded-sm cursor-pointer`}
            style={{ width }}>
            {top && bottom ? (
                <div className='flex flex-col items-center'>
                    <p>{top}</p>
                    <p>{bottom}</p>
                </div>
            ) : (
                <p>{label}</p>
            )}

        </div>
    )
})
export default Key