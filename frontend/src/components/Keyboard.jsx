import React, { useEffect, useState } from 'react'
import NumberRow from './Keyboard/Rows/NumberRow'
import HomeRow from './Keyboard/Rows/HomeRow'
import BottomRow from './Keyboard/Rows/BottonRow'
import MiddleRow from './Keyboard/Rows/MiddleRow'
import SpacebarRow from './Keyboard/Rows/SpacebarRow'
import useKeySound from '../hooks/useKeySound'
import { KeyboardContext } from '../contexts/KeyboardContext'


const Keyboard = () => {
    const [pressedKeys, setPressedKeys] = useState(new Set())
    const playKeySound = useKeySound() // gets the play function 

    useEffect(() => {
        const keyDown = (e) => {
            setPressedKeys(prev => new Set(prev).add(e.code));
            playKeySound()
        }

        const keyUp = (e) => {
            setPressedKeys((prev) => {
                const next = new Set(prev)
                next.delete(e.code)
                return next
            })


        }

        window.addEventListener("keydown", keyDown);
        window.addEventListener("keyup", keyUp);

        return () => {
            window.removeEventListener("keydown", keyDown);
            window.removeEventListener("keyup", keyUp);
        }
    }, [playKeySound]) //  in case across re render the playSoundKey gets changed as it is a function

    return (
        <KeyboardContext.Provider value={{ pressedKeys }}>

            <div className='h-[63vh] w-full bg-[#0d0d0d] px-5 py-5 flex items-center justify-center'>
                <div className="h-full w-[75%] bg-[#1a1a40] rounded-lg flex flex-col gap-2 px-3 py-3">
                    <NumberRow pressedKeys={pressedKeys} />
                    <HomeRow />
                    <MiddleRow />
                    <BottomRow />
                    <SpacebarRow />
                </div>
            </div>
        </KeyboardContext.Provider>
    )
}

export default Keyboard