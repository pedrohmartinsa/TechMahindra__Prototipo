import FormsButton from "../../components/FormsButton";
import SetOfInputs from "../../components/SetOfInputs";
import Seta from './assets/setinha.svg'

function Register() {
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
                    <div>
                        <div>
                            <label for="name">Nome:</label>
                            <input type="text" id="name" placeholder="Nome..."/>
                        </div>
                        <div>
                            <label for="name">Nome:</label>
                            <input type="text" id="name" placeholder="Nome..."/>
                        </div>
                        <div>
                            <label for="name">Nome:</label>
                            <input type="text" id="name" placeholder="Nome..."/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label for="name">Nome:</label>
                            <input type="text" id="name" placeholder="Nome..."/>
                        </div>
                        <div>
                            <label for="name">Nome:</label>
                            <input type="text" id="name" placeholder="Nome..."/>
                        </div>
                        <div>
                            <label for="name">Nome:</label>
                            <input type="text" id="name" placeholder="Nome..."/>
                        </div>
                    </div>
                    
                    
                    <FormsButton buttonText = "Confirmar"/>
                </div>
            </div>
        </main>
        </>
     );
}

export default Register;