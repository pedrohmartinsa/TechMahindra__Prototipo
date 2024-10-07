import More from './assets/more.svg'
import CustomizacaoIlustrativa from './assets/relampago.png'

export default function SuasCustomizacoes() {
    return(
        <div className="flex justify-start mt-16">
            <div className="flex justify-center gap-x-4 w-[37.5rem]">
                <div className="relative w-48 h-56 drop-shadow-2xl bg-white rounded-lg">
                    <img className='rounded-lg h-56 w-48' src={CustomizacaoIlustrativa} alt="" />
                    <a href="" className='absolute right-1 top-2'><img src={More} alt="" /></a>
                </div>

                <div className="relative w-48 h-56 drop-shadow-2xl bg-white rounded-lg">
                    <img className='rounded-lg h-56 w-48' src={CustomizacaoIlustrativa} alt="" />
                    <a href="" className='absolute right-1 top-2'><img src={More} alt="" /></a>
                </div>

                <div className="relative w-48 h-56 drop-shadow-2xl bg-white rounded-lg">
                    <img className='rounded-lg h-56 w-48' src={CustomizacaoIlustrativa} alt="" />
                    <a href="" className='absolute right-1 top-2'><img src={More} alt="" /></a>
                </div>
            </div>
        </div>
    )
}