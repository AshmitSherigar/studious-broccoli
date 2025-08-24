import Key from '../Keys/Key'

const HomeRow = () => {
    return (
        <div className='h-[20%] w-full flex justify-center gap-3 items-center px-3'>

            <Key width={120} label={"Tab"} />
            <Key label={"Q"} id={"KeyQ"}/>
            <Key label={"W"} id={"KeyW"}/>
            <Key label={"E"} id={"KeyE"}/>
            <Key label={"R"} id={"KeyR"}/>
            <Key label={"T"} id={"KeyT"}/>
            <Key label={"Y"} id={"KeyY"}/>
            <Key label={"U"} id={"KeyU"}/>
            <Key label={"I"} id={"KeyI"}/>
            <Key label={"O"} id={"KeyO"}/>
            <Key label={"P"} id={"KeyP"}/>
            <Key top={"{"} bottom={"["} id={"BracketLeft"} />
            <Key top={"}"} bottom={"]"} id={"BracketRight"}/>
            <Key label={"Enter"} id={"Enter"}/>
            <Key label={"Del"} id={"Delete"}/>

        </div>
    )
}
export default HomeRow