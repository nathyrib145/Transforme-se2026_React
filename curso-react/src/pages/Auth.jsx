import { Link } from "react-router";
import{useState} from "react";

function Auth() {
  
  const [batatinha, setBatatinha] = useState(0);

  function sub(){
    setBatatinha(batatinha - 1)
  }

  return (
    <div>
      <nav class=" my-auto p-5 bg-feature rounded-lg flex ">
        <Link to="/" class="mb-5">voltar</Link>
       
      
      </nav>
      <div class=" text-center flex flex-col ">
         <div className = "bg-primary rounded-full p-1" onClick={sub}>-</div>
           {batatinha}
        <div className = "bg-secondary rounded-full p-1" onClick={() => setBatatinha(batatinha + 1)}>+</div>
      
        <h2>Login</h2>
        <form className="flex flex-col mx-auto bg-white rounded-xl p-5">

          Email: <input id="lEmail" type="text" placeholder="Digite seu email cadastrado"/>
          Senha: <input id="lPass" type="password" placeholder="Digite sua senha cadastrada"/>

          <Link className="mt-5 bg-primary text-dark">Entrar</Link>
        </form>
      </div>  
    </div>
  )
}

      export default Auth;