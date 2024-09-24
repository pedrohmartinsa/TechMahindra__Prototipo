import Seta from './assets/setinha.svg'

export default function CreatePassword() {
    return (
        <>
         <main className="bg-white border-[0.063rem] m-20 flex justify-center rounded drop-shadow-2xl">
            <div className="">
                <div className="flex items-end gap-5">
                    <img src={Seta} alt="setinha de voltar" />
                    <h2 className="text-3xl">NomeDaPlataforma</h2>
                    <p className="text-sm"> - cadastro</p>
                </div>
                
                <div className="flex ">
                    <div className="">
                        <div>
                            <label for="userName">Nome de Usuário:</label>
                            <input type="text" id="userName" placeholder="userName..."/>
                        </div>
                        <div>
                            <label for="password">E-mail:</label>
                            <input type="text" id="password" placeholder="Senha..."/>
                        </div>
                        <div>
                            <label for="password2">Celular:</label>
                            <input type="text" id="password2" placeholder="Senha..."/>
                        </div>
                    </div>
                    
                    <FormsButton buttonText = "Definir Senha"/>
                </div>
            </div>
        </main>
        </>
    )
}