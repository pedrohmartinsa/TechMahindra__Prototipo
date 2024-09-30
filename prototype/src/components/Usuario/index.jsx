import User from './assets/usuario.png' 

export default function Usuario() {
    return(
        <>
            <div className="flex items-center justify-center gap-x-2 border drop-shadow p-2 rounded-xl mt-10 ml-5">
                <img className='w-7 h-7' src={User} alt="" />
                <p>{localStorage.getItem('name') === null ? 'Usuário' : localStorage.getItem('name')}</p>
            </div>
        </>
    )
}