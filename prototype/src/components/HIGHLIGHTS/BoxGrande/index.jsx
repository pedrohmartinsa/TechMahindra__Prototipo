import BoxesPequeno from "../BoxesPequeno";
import carroImg from '../../../../public/carro.png'

export default function BoxGrande() {

    const informacoes = [
        {
            imagem: carroImg,
            timer: '4:23',
            titulo: 'Titulo do Vídeo 1',
            date: '07 JUN'
        },

        {
            imagem: carroImg,
            timer: '3:35',
            titulo: 'Titulo do Vídeo 2',
            date: '15 AGO'
        },

        {
            imagem: carroImg,
            timer: '6:20',
            titulo: 'Titulo do Vídeo 3',
            date: '23 FEV'
        },

        {
            imagem: carroImg,
            timer: '4:20',
            titulo: 'Titulo do Vídeo 4',
            date: '18 MAR'
        },

    ]


    return(
        <>
        <div className="flex flex-wrap justify-center gap-5 max-w-4xl ">
            <BoxesPequeno data={informacoes}/>
        </div>
        </>
    )
}