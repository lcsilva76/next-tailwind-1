import Image from "next/image";


export default function Home() {
  return (
      <main className="w-full flex">

        <section className=" hidden w-full h-screen bg-indigo-950 md:flex justify-center items-center flex-col">

          <Image src='/logo.png' alt="logo" width='224' height='224' 
          className="hover:scale-110 duration-500"/>
          
          <h1 className="text-5xl font-bold text-white">Storm<span className="text-indigo-500">Music</span></h1>

        </section>
        <section className="w-full h-screen bg-indigo-900 flex flex-col items-center justify-evenly">
          
          <Image src={'/user.png'} alt="Logo User" width={144} height={144}
          className="hover:scale-110 duration-500"/>
          
          <h2 className="text-3xl text-white my-7">Área de Login</h2>
          
          <form action="" className="w-full p-2">

            <input type="text" className="w-full p-4 rounded-lg outline-slate-500 text-xl "
            placeholder="Digite o seu E-mail"/>
            
            <input type="password" className="w-full p-4 rounded-lg outline-slate-500 text-xl "
            placeholder="Digite a sua senha"/>
          
            <div>
              <div>
                  <input type="checkbox" name="lembrarsenha" id="lembrarsenha" 
                  className="size-4"/>
          
                  <label htmlFor="lembrarsenha"
                  className="font-medium text-white">Lembrar Senha</label>
          
              </div>
          
              <a href="#" className="text-white font-bold hover:text-indigo-500">Esqueceu a senha?</a>
          
            </div>
          
            <button className="w-full border-white border p-2 rounded-lg text-xl font-semibold text-white my-2 hover:bg-indigo-600 duration-500">Acessar</button>

            <p className="text-white ">Não possui uma conta? 
               <a href="" className="font-semibold hover:text-indigo-300 duration-200">Criar uma conta.</a>
          
            </p>
          </form>
        </section>

      </main>
  );
}
