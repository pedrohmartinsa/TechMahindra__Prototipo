export default function JornalDaCorrida() {

    const cssTextoEData = 'flex flex-col justify-end ml-8 mb-8 gap-1'

    return(
        <>
        <div className="flex items-center justify-center mt-20">

            <div className="grid grid-rows-2 grid-cols-3 gap-x-4 gap-y-5 w-[54.063rem] h-[38.75rem]">

                <div className="flex col-start-1 col-end-3 drop-shadow-2xl bg-white rounded-tl-lg">
                    <div className={cssTextoEData}>
                        <img src="" alt="" />
                        <h3>Titulo da Notícia 1</h3>
                        <p>02 JAN</p>
                    </div>
                </div>

                <div className="flex col-start-3 col-end-4 drop-shadow-2xl bg-white rounded-tr-lg">
                    <div className={cssTextoEData}>
                        <img src="" alt="" />
                        <h3>Titulo da Notícia 2</h3>
                        <p>02 JAN</p>
                    </div>
                </div>

                <div className='flex col-start-1 col-end-2 drop-shadow-2xl bg-white rounded-bl-lg'>
                    <div className={cssTextoEData}>
                        <img src="" alt="" />
                        <h3>Titulo da Notícia 3</h3>
                        <p>02 JAN</p>
                    </div>
                </div>

                <div className=" flex col-start-2 col-end-4 drop-shadow-2xl bg-white rounded-br-lg">
                    <div className={cssTextoEData}>
                        <img src="" alt="" />
                        <h3>Titulo da Notícia 4</h3>
                        <p>02 JAN</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}