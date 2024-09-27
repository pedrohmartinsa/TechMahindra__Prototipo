export default function BoxesPequeno({imagem, timer, titulo, data, borda}) {


    const cssImg = "object-cover w-[100%] h-[12.5rem] rounded" + borda

    return(

        <>
        <div className="flex flex-col w-[26.25rem] h-[18.75rem] drop-shadow-2xl bg-white">
            <div className="">
                <div className="relative">
                    <img src={imagem} alt="" className={cssImg}/>
                    <div className=""><span className="absolute bottom-3 right-3 text-white bg-black/30 rounded-md px-1">{timer}</span></div>
                </div>
                <div className="ml-6 mt-6">
                    <h3 className="">{titulo}</h3>
                    <p className="text-slate-500 mt-2">{data}</p>
                </div>
            </div>
        </div>
        
        </>
    )

}