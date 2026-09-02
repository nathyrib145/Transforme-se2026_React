import { Link } from "react-router";

function Auth() {
  return (
    <div>
      <nav class=" my-auto p-5 bg-feature rounded-lg flex ">
        <Link to="/" class="mb-5">voltar</Link>
      </nav>
      <div class=" text-center flex flex-col ">
        <h2>Login</h2>
        <form class="flex flex-col mx-auto bg-white rounded-xl p-5">

          Email: <input id="lEmail" type="text" placeholder="Digite seu email cadastrado"/>
          Senha: <input id="lPass" type="password" placeholder="Digite sua senha cadastrada"/>

          <Link class="mt-5 bg-primary text-dark">Entrar</Link>
        </form>
      </div>  
    </div>
  )
}

      export default Auth;