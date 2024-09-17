import './style.css'

function Input( { data } ) {
    return ( 
        <>
            {data.map((forms) =>(
                <div className="texto__e__input">
                <p>{forms.texto}</p>
                <input
                style={
                    {width: forms.width}
                } 
                type={forms.type} 
                id={forms.id} 
                placeholder={forms.backgroundText}
                />
            </div>
                
            
            
            ))}
            
        </>
     );
}

export default Input;