import Key from '../Keys/Key'

const HomeRow = () => {
    return (
        <div className='h-[20%] w-full flex justify-center gap-3 items-center px-3'>

            <Key width={120} label={"Tab"} />
            <Key label={"Q"} id={"q"}/>
            <Key label={"W"} id={"w"}/>
            <Key label={"E"} id={"e"}/>
            <Key label={"R"} id={"r"}/>
            <Key label={"T"} id={"t"}/>
            <Key label={"Y"} id={"y"}/>
            <Key label={"U"} id={"u"}/>
            <Key label={"I"} id={"i"}/>
            <Key label={"O"} id={"o"}/>
            <Key label={"P"} id={"p"}/>
            <Key top={"{"} bottom={"["} />
            <Key top={"}"} bottom={"]"} />
            <Key label={"Enter"} id={"Enter"}/>
            <Key label={"Del"} id={"Delete"}/>

        </div>
    )
}
export default HomeRow