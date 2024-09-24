import Lupa from './assets/lupa.svg'

export default function BarraDePesquisa() {
    return (
        <>
            <div>
                <img src={Lupa} alt="" />
                <input type="text" placeholder={'Pesquisar...'} />
            </div>
        </>
    )
}