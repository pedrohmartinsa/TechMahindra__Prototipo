function Input( { data } ) {
    return ( 
        <>
            {data.map((forms) =>(
                <div className="">
                <p className="ml-4">{forms.texto}</p>
                <input
                style={
                    {width: forms.width}
                } 
                type={forms.type} 
                id={forms.id} 
                placeholder={forms.backgroundText}
                className="h-10 bg-gray-500 border border-black rounded-lg"/>
            </div>
                
            
            
            ))}
            
        </>
     );
}

export default Input;