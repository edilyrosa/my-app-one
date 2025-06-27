import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col gap-4 justify-center items-center text-2xl font-bold">
      <h1>Soy un h1</h1>
      <h2>Soy un h2</h2>
      <span> soy un span</span>
      <p> A continuacion se renderizara un boton hijo</p>
      <Button
        direccion={'/about'}
      >
          ⬅➡️ go to About
      </Button>

    </div>
  );
}
