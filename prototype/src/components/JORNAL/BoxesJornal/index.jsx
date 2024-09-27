export default function BoxesJornal({ imagem, titulo, data }) {
    return (
        <>
        <div className="flex bg-white rounded-tl-lg">

            <div className="flex flex-col justify-end ml-8 mb-8 gap-1">
                <img src={imagem} alt="" />
                <h3>{titulo}</h3>
                <p>{data}</p>
            </div>

        </div>
        </>
        
    )
}