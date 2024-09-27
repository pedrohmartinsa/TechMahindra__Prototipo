import BoxesPequeno from "../BoxesPequeno";
import ImgVideo from './assets/carro.png'

import highlights from '../../../data/highlights.json'

export default function BoxGrande() {

    const informacoes = [
        {
            imagem: ImgVideo,
            timer: '4:23',
            titulo: 'Titulo do Vídeo 1',
            date: '07 JUN'
        },

        {
            imagem: ImgVideo,
            timer: '3:35',
            titulo: 'Titulo do Vídeo 2',
            date: '15 AGO'
        },

        {
            imagem: ImgVideo,
            timer: '6:20',
            titulo: 'Titulo do Vídeo 3',
            date: '23 FEV'
        },

        {
            imagem: ImgVideo,
            timer: '4:20',
            titulo: 'Titulo do Vídeo 4',
            date: '18 MAR'
        },

    ]


    return(
        <>
        <div className="grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-7 ">
            <BoxesPequeno data={informacoes}/>
        </div>
        </>
    )
}