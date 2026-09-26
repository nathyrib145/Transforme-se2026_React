import { useState, useEffect } from 'react';
import { Link } from 'react-router'
import { supabase } from '../../utils/supabase';




function Painel() {

    const [modal, setModal] = useState(false) //bollean, verdadeiro falso
    const [users, setUsers] = useState([]) //vetor
    const [user, setUser] = useState({}) //objeto
    const [logged, setlogged] = useState({})
    const [isEdit, setIsEdit] = useState(false)
    const [index, setIndex] = useState(-1)

    const[spiner, setSpiner] = useState(false)
    const [msg, setMsg] = useState('Nao registrado')

    useEffect( ()=>{
       loadUsers()
    },[]);

    //read
    async function loadUsers(){
      const {data, error} = await supabase.from('profiles').select('*')
      if(error){
        setMsg (error.message)
        return;
      }

      setUsers(data)

    }

    function updateUser(user){
        setModal(true)
        setUser(user)
        setIndex(user.id)
    }

     async function deleteUser(index){
      const { error } = await supabase
    .from('profiles')
    .delete( user )
    .eq('id', index);
    
        if (error){
            setMsg(error.message)
            setSpiner(false)
            return

        }
        loadUsers()
    }
     async function editUser(){
        setSpiner(true)
    const { data, error } = await supabase
    .from('profiles')
    .update( user )
    .eq('id', index);
    
    if (error){
        setMsg(error.message)
        setSpiner(false)
        return;
    }
      
    setMsg("Usuario editado")
        setSpiner(false)
        loadUsers()

    }

   
     async function handleRegister(){ 
        setSpiner(true)
        setMsg("")
       const { data: authData, error:authError } =  await supabase.auth.signUp({
            email: user.email,
            password: user.senha
        });



        if (authError){
            //console.log(authError)
            setMsg(authError.message)
            setSpiner(false)
            return;
        }

      
        if(!authData) {
            setMsg("Não foi possivel cadastrar, verifique sua internet")
            setSpiner(false)
            return;
        }

        const{
            data: loginData, error:loginError} = await supabase.auth.signWithPassword({
                email: user.email,
                password: user.password
            });

        
        const { error: profileError } = await supabase.from('profiles').insert({
           ...user,
            user_id: loginData.user.id
        });

        if (profileError){
            setMsg(profileError.message);
            setSpiner(false)
            return;
        }

        setMsg("cadastrado com sucesso!");
        setSpiner(false)

    }

    return (

       
        <>
        <h3>Bem vindo, {logged?.nome}</h3> 
            {modal && (
                <div className=" fixed top-0 right-0 bottom-0 left-0 items-center flex justify-center bg-black/50 z-50 rounded  ">
                    <div id="modalRegister" className="p-5 relative max-w-md w-full rounded-lg shadow-md flex flex-col bg-red-700">

                        <a onClick={() => {setModal(false); setIsEdit(false); setIndex(-1); setUser({})}} className="bg-red absolute top-0 right-0 px-2 rounded-full hover:shadow-inner-red cursor-pointer">X</a>

                        <h2>Novo Cadastro</h2>

                        <p>Preencha as informações abaixo</p>

                        {isEdit ? (
                        <form className="flex flex-col">

                        
                            Nome:
                            <input value = {user.name} onChange={ (e) => setUser({...user, name: e.target.value})} type="text" placeholder="Digite seu nome inteiro" />

                           {index == -1 &&(
                           <>
                            Email:
                            <input value = {user.email} onChange={ (e) => setUser({...user, email: e.target.value})} type="text" placeholder="Digite seu melhor email" />
                           
                            Senha:
                            <input onChange={ (e) => setUser({...user, password: e.target.value})} type="password" placeholder="Letra maiuscula e minuscula" />
                            
                            </>
                            )}

                             CPF:
                            <input value = {user.CPF} onChange={ (e) => setUser({...user, cpf: e.target.value})} type="text" placeholder="Digite seu CPF" />

                            Data Nascimento:
                            <input onChange={ (e) => setUser({...user, birth: e.target.value})} type="date" placeholder="DD/MM/HH" />


                            <a onClick={()=>{if (index == -1) handleRegister(); else editUser()}} className="mt-5 bg-red-500 text-white text-center rounded-md py-2">{spiner? '...':'Registrar'}</a> {msg}
                           {index != -1 && <a onClick={()=> setIsEdit (false)} className="mt-5 bg-red-500 text-white text-center rounded-md py-2">Cancelar</a>}
                            
                        </form>): //else 
                        (
                            <>
                           <p> Nome: {user.name} </p>
                           <p> email: {user.email} </p>
                           <p> CPF: {user.cpf} </p>
                           <p> birth: {user.birth} </p>
                            <a onClick={()=> setIsEdit(true)} className="mt-5 bg-red-500 text-white text-center rounded-md py-2">Editar</a>
                            </>
                        )
                        }
                    </div>
                </div>
            )}
            <h2 className="py-2 px-4">Resposta</h2>
            <h2 className="py-2 px-4"></h2>
            <table className="py-2 px-4 mb-15">
                <thead>
                    <tr>
                    <th className="text-white">Nome</th>
                    <th className="text-white">Email</th>
                    <th className="text-white">Ações</th>
                    </tr>
                </thead>
                <tbody className="font-secondary">
                {users.map( (u) => (
                    <tr key={u.id}>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>
                            <a className='cursor-pointer px-3 mx-4 houver:shadow shadow-md text-white rounded-full bg-green-500' onClick={()=> updateUser(u)}>V</a>
                            <a className='cursor-pointer px-3 mx-4 houver:shadow shadow-md text-white rounded-full bg-red-500' onClick={()=> deleteUser(u)}>X</a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <a onClick= {() => {setModal(true); setIsEdit(true)}} className= "rounded-full bg-primary text-white px-4 py-2 fixed bottom-0 right-0">+</a>

        </>

    )
}



export default Painel;