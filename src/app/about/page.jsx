import Button from "@/components/Button";

export default function About() {
      //aca todas las funciones, constantes y var de estado que tu boton requiera para funciaonar
    function handleClick(){}
    function handleSubmit(){}

    return(
      <div className="h-screen w-full flex flex-col gap-4 justify-center items-center text-2xl font-bold">
        <p>hola</p>
        <Button
            direccion={'./'}
        >
            ⬅️ go to Home
        </Button>
        </div>
    )
}