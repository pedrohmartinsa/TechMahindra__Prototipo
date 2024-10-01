import BoxesPequeno from "../../HIGHLIGHTS/BoxesPequeno";
import carroImg from '../../../../public/carro.png'

export default function BoxNoticias() {

    const informacoes = [
        {
            imagem: 'https://racingonline.com.br/wp-content/uploads/2023/07/EPS915_160646SB1_0856-2048x2048-1.jpg',
            titulo: 'Titulo da Notícia 1',
            date: '07 JUN'
        },

        {
            imagem: 'https://racingonline.com.br/wp-content/uploads/2023/07/EPS915_160646SB1_0856-2048x2048-1.jpg',
            titulo: 'Titulo da Notícia 2',
            date: '15 AGO'
        },

        {
            imagem: 'https://racingonline.com.br/wp-content/uploads/2023/07/EPS915_160646SB1_0856-2048x2048-1.jpg',
            titulo: 'Titulo da Notícia 3',
            date: '23 FEV'
        },
        
        {
            imagem: 'https://racingonline.com.br/wp-content/uploads/2023/07/EPS915_160646SB1_0856-2048x2048-1.jpg',
            titulo: 'Titulo da Notícia 4',
            date: '18 MAR'
        },
    ]


    return(
        <>
        <div className="flex flex-wrap justify-center gap-5 max-w-4xl">
            <BoxesPequeno data={informacoes}/>
        </div>
        </>
    )
}