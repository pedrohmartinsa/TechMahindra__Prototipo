function Input( { data } ) {
    return ( 
        <>
            {data.map((forms) =>(
                <div className="">
                <p>{forms.texto}</p>
                <input
                style={
                    {width: forms.width}
                } 
                type={forms.type} 
                id={forms.id} 
                placeholder={forms.backgroundText}
                className="border-black border-2"
                />
            </div>
                
            ))}
            
        </>
     );
}

export default Input;