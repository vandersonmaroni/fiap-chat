// import "./page.css";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col h-screen w-screen justify-center items-center bg-background-900">
      <p className="font-sans text-2xl text-fontColor-900">FIAP Chat</p>
      <div className="flex flex-1 flex-col max-h-[45vh] w-[80vw] justify-center items-center bg-background-800 rounded-[10px]">
        <p className="font-sans text-lg mb-2 text-fontColor-900  bg-background-800 ">Digite um nome de usuário</p>
        <input className="font-sans text-lg text-fontColor-900 bg-background-900 border-fontColor-900 rounded-3xl p-2 w-5/6" type="text" placeholder="" />
        <button className="w-32 h-12 mt-2 font-sans bg-fontColor-900 rounded-xl hover:opacity-80 text-[#fff]">Entrar</button>
      </div>
    </main>
  );
}
