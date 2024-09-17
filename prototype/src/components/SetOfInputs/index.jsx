import Input from "../Input";


function SetOfInputs( { forms } ) {
    
    const formulario = [
        {
            texto: "Nome:",
            width: "26rem",
            type: "text",
            id: "name",
            backgroundText: "Nome..." 
        },
        {
            texto: "E-mail:",
            width: "26rem",
            type: "email",
            id: "email",
            backgroundText: "E-mail..."
        },
        {
            texto: "Celular:",
            width: "13rem",
            type: "number",
            id: "cel",
            backgroundText: "(11) 99999-9999"
        },
        {
            texto: "CPF:",
            width: "13rem",
            type: "number",
            id: "cpf",
            backgroundText: "CPF..."
        },
        {
            texto: "Data de Nascimento:",
            width: "13rem",
            type: "date",
            id: "old"
        }
    ]
    return ( 
        <>
        <Input data={formulario}/>
        </>
     );
}

export default SetOfInputs;