import FormsButton from "../../components/FormsButton";
import SetOfInputs from "../../components/SetOfInputs";

function Register() {
    return ( 
        <>
            <div>
                <SetOfInputs/>
                <FormsButton
                buttonText = "Confirmar"/>
            </div>
        </>
     );
}

export default Register;