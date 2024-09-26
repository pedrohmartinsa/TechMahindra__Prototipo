export default function Highlights() {
    return(
        <>
            <div className="flex items-center justify-center mt-20">
                <div className="grid grid-cols-4 grid-rows-2 gap-x-5 gap-y-7">

                    <div className="h-72 w-[26.25rem] col-start-1 col-end-3 drop-shadow-2xl bg-white rounded-tl-lg">
                        <div>
                            <div>
                                imagem
                                <div>6:29</div>
                            </div>
                            <div>
                                <h3>Titulo do Vídeo 1</h3>
                                <p>02 JAN</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-start-3 col-end-5 drop-shadow-2xl bg-white rounded-tr-lg">
                        <div>
                            <div>
                                imagem
                                <div>6:29</div>
                            </div>
                            <div>
                                <h3>Titulo do Vídeo 2</h3>
                                <p>02 JAN</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="col-start-1 col-end-3 drop-shadow-2xl bg-white rounded-bl-lg">
                        <div>
                            <div>
                                imagem
                                <div>6:29</div>
                            </div>
                            <div>
                                <h3>Titulo do Vídeo 3</h3>
                                <p>02 JAN</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="col-start-3 col-end-5 drop-shadow-2xl bg-white rounded-br-lg">
                        <div className="flex flex-col justify-start">
                            <div>
                                imagem
                                <div>6:29</div>
                            </div>
                            <div>
                                <h3>Titulo do Vídeo 4</h3>
                                <p>02 JAN</p>
                            </div>
                        </div>
                    </div>

                </div>
        </div>
        </>
    )
}