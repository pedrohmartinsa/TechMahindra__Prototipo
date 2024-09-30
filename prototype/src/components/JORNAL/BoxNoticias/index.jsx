import BoxesJornal from "../../../components/JORNAL/BoxesJornal"

export default function BoxNoticias() {
 
    return(
        <>
        <div className="grid grid-rows-2 grid-cols-3 gap-x-4 gap-y-5 w-[54.063rem] h-[38.75rem]">

            <div className="flex col-start-1 col-end-3 drop-shadow-2xl bg-white rounded-br-lg">
                <BoxesJornal
                imagem=''
                titulo='Título da notícia 1'
                data='08 DEZ'
                />
            </div>

            <div className="flex col-start-3 col-end-4 drop-shadow-2xl bg-white rounded-bl-lg">
                <BoxesJornal
                imagem=''
                titulo='Título da notícia 2'
                data='04 FEV'
                />
            </div>

            <div className='flex col-start-1 col-end-2 drop-shadow-2xl bg-white rounded-bl-lg'>
                <BoxesJornal
                imagem=''
                titulo='Título da notícia 3'
                data='18 JAN'
                />
            </div>

            <div className=" flex col-start-2 col-end-4 drop-shadow-2xl bg-white rounded-br-lg">
                <BoxesJornal
                imagem=''
                titulo='Título da notícia 4'
                data='12 JUN'
                />
            </div>

        </div>
        </>
    )
}