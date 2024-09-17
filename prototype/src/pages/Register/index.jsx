import FormsButton from "../../components/FormsButton";
import SetOfInputs from "../../components/SetOfInputs";
import './style.css'

function Register() {
    return ( 
        <>
        <body>
            <div className="formulario__cadastro">
                <SetOfInputs/>
                <FormsButton buttonText = "Confirmar"/>
            </div>
        </body>
        </>
     );
}

export default Register;