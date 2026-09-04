import { Link } from "react-router";
import{useState} from "react";

function Auth(){
  
const [email, setEmail] = useState("")
const [senha, setSenha] = useState("")
const [msg, setMsg] = useState("")

  function handleLogin(){
    const users = JSON.parse(localStorage.getItem('users'))
    let user = users.find(u =>{ 
      return u.email == email
  })

  if (!user){

    setMsg("usuario nao encontrado")//mensagem de nao encontrou o usuario
      return

  }

  if (user.senha == pass){

    setMsg("senha Incorreta")//mensagem da senha está errada 
    localStorage.setItem("usuario logado!", JSON.stringify(user))
  } 

  return (
    <div>
      <nav class=" my-auto p-5 bg-feature rounded-lg flex ">
        <Link to="/" class="mb-5">voltar</Link>
       
      
      </nav>
      <div class=" text-center flex flex-col ">
        
        <h2>Login</h2>
        <form className="flex flex-col mx-auto bg-red-700 shadow-lg shadow-red-500/50 rounded-xl p-5">

          Email: <input id="lEmail" type="text" placeholder="Digite seu email cadastrado" value={email} onChange={(e) => setEmail(e.target.value)}  />{email}
          Senha: <input id="lPass" type="password" placeholder="Digite sua senha cadastrada" value={senha} onChange={(e) => setSenha(e.target.value)}/>{senha}

          <a onClick={handleLogin} className="mt-5 bg-primary text-dark">Entrar</a>
        </form>
      </div>  
    </div>
  )
}
 export default Auth;