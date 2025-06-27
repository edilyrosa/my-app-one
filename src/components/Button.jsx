import Link from "next/link";

export default function Button({children, direccion}){
    //aca todas las funciones, constantes y var de estado que tu boton requiera para funciaonar
    function handleClick(){}
    function handleSubmit(){}
    
    return(
        <button 
        className="bg-blue-600 text-white rounded-lg p-2 m-4">
            <Link href={direccion}> {children}</Link>
        </button>
    )
}