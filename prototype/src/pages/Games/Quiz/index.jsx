import QuizIlustrativo from './assets/quizIlustrativo.jpeg'

export default function Quiz() {
    return (
        <>
            <div>
                <div className="flex items-center justify-center mt-20">

                    <div className="w-[26.25rem] h-[18.75rem] drop-shadow-2xl bg-white rounded-lg">
                        <img className='rounded-md' src={QuizIlustrativo} alt="" />
                    </div>
                        
                </div>
            </div>
        </>
    )
}