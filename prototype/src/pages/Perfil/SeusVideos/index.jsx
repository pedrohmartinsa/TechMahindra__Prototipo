import More from './assets/more.svg'
import Play from './assets/play.svg'

export default function SeusVideos() {
    return(
        <>
        <div className="flex justify-start mt-16">
            <div className="flex justify-center gap-x-4 w-[37.5rem]">
                <div className="relative w-48 h-56 drop-shadow-2xl bg-white rounded-lg">
                    <img className='rounded-lg h-56 w-48' src="https://img.redbull.com/images/c_crop,x_1280,y_0,h_2560,w_1920/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2023/9/13/vorkrybatdzt4kehk0ll/f1-max-verstappen-gp-italia-2023" alt="" />
                    <a href="" className='absolute right-20 top-20'><img src={Play} alt="" /></a>
                    <a href="" className='absolute right-1 top-2'><img src={More} alt="" /></a>
                </div>

                <div className="relative w-48 h-56 drop-shadow-2xl bg-white rounded-lg">
                    <img className='rounded-lg h-56 w-48' src="https://img.redbull.com/images/c_crop,x_1280,y_0,h_2560,w_1920/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2023/9/13/vorkrybatdzt4kehk0ll/f1-max-verstappen-gp-italia-2023" alt="" />
                    <a href="" className='absolute right-20 top-20'><img src={Play} alt="" /></a>
                    <a href="" className='absolute right-1 top-2'><img src={More} alt="" /></a>
                </div>

                <div className="relative w-48 h-56 drop-shadow-2xl bg-white rounded-lg">
                    <img className='rounded-lg h-56 w-48' src="https://img.redbull.com/images/c_crop,x_1280,y_0,h_2560,w_1920/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2023/9/13/vorkrybatdzt4kehk0ll/f1-max-verstappen-gp-italia-2023" alt="" />
                    <a href="" className='absolute right-20 top-20'><img src={Play} alt="" /></a>
                    <a href="" className='absolute right-1 top-2'><img src={More} alt="" /></a>
                </div>
            </div>
        </div>
        </>
    )
}