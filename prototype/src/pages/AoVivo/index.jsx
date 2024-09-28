import BoxesPequeno from "../../components/HIGHLIGHTS/BoxesPequeno"

export default function AoVivo() {

    

    const informacoes = [
        {
            imagem: 'carro.png',
            timer: '45:20',
            titulo: 'Titulo do Vídeo 1',
            date: '07 JUN'
        },

        {
            imagem: 'carro.png',
            timer: '50:12',
            titulo: 'Titulo do Vídeo 2',
            date: '15 AGO'
        },

        {
            imagem: 'carro.png',
            timer: '49:38',
            titulo: 'Titulo do Vídeo 3',
            date: '23 FEV'
        },

        {
            imagem: 'carro.png',
            timer: '47:28',
            titulo: 'Titulo do Vídeo 4',
            date: '18 MAR'
        },

    ]

    return (
        <>
            <div className="flex flex-col justify-center items-center mt-20">
                <h3 className="font-bold text-2xl mb-12">Lives Passadas</h3>
                <div className="grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-7 ">
                    <BoxesPequeno data={informacoes}/>
                </div>
            </div>
        </>
    )
}