import { KeyboardContext } from "../../../contexts/KeyboardContext";
import { memo, useContext } from "react";

const Key = memo(({ label, top, bottom, width = 50 , id}) => {
    const { pressedKeys } = useContext(KeyboardContext);
    const keyValue = id
    const isPressed = pressedKeys?.has(keyValue);
    return (
        <div className={`${isPressed ? "scale-90 shadow-[0_0_12px_#ff00ff]" : "bg-[#212121]"} border-1 h-[50px] flex items-start justify-start px-1 py-1  rounded-sm cursor-pointer select-none text-[#fefefe]`}
            style={{ width }}>
            {top && bottom ? (
                <div className='flex flex-col items-center justify-center'>
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