import BoxesPequeno from "../BoxesPequeno";
import ImgVideo from './assets/carro.png'

export default function BoxGrande() {
    return(
        <>
        <div className="grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-7 ">

            <div className="">
                <BoxesPequeno
                imagem= {ImgVideo}
                timer= '4:23'
                titulo= 'Titulo do Vídeo 1'
                data= '07 JUN'
                />
            </div>
            
            <div className="">
                <BoxesPequeno
                imagem= {ImgVideo}
                timer= '3:35'
                titulo= 'Titulo do Vídeo 2'
                data= '15 AGO'
                />
            </div>

            <div className="">
                <BoxesPequeno
                imagem= {ImgVideo}
                timer= '6:20'
                titulo= 'Titulo do Vídeo 3'
                data= '23 FEV'
                />
            </div>

            <div className="">
                <BoxesPequeno
                imagem= {ImgVideo}
                timer= '4:20'
                titulo= 'Titulo do Vídeo 4'
                data= '18 MAR'
                />
            </div>

        </div>
        </>
    )
}