import { NavLink } from "react-router-dom";
import FormsButton from "../../components/FormsButton";

export default function Login() {
    return (
        <>
        <div>
            <h1>NomeDaPágina</h1>
            <p> - login</p>
        </div>
        <div>
            <label htmlFor="userName">Nome de Usuário:</label>
            <input type="text" id="userName" placeholder="userName..."/>

            <div>
                <label htmlFor="senha">Senha:</label>
                <input type="text" id="senha" placeholder="Senha..." />
                <div>
                    <NavLink to='newPassword'>Esqueci minha senha.</NavLink>
                    <NavLink to='/registro'>Não tenho cadastro.</NavLink>
                </div>
            </div>
            <FormsButton buttonText = "Entrar"/>
        </div>
        
        </>
    )
}