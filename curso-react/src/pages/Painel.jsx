import { useState, useEffect } from 'react';
import { Link } from 'react-router'




function Painel() {

    const [modal, setModal] = useState(false) //bollean, verdadeiro falso
    const [users, setUsers] = useState([]) //vetor
    const [user, setUser] = useState({}) //objeto
    const [logged, setlogged] = useState({})
    const [isEdit, setIsEdit] = useState(false)
    const [index, setIndex] = useState(-1)

    useEffect( ()=>{
        const logged = JSON.parse(localStorage.getItem("logged"))
        setlogged(logged)
    },[]);
    useEffect( ()=>{
        const usersTemp = JSON.parse(localStorage.getItem('users'))
        if (usersTemp) setUsers(usersTemp)
    },[]);

    function updateUser(indice){
        setModal(true)
        setUser( users[indice] )
        setIndex(indice)
    }

    function deleteUser(index){
        const newUsers = users.filter((u, i) =>{ 
            return i != index
        })
        setUsers(newUsers);
        localStorage.getItem('users', JSON.stringify(newUsers));

    }

    function handleRegister(){ 
        let newUsers = [] 
        if(index != -1){
            newUsers = [...users]
            newUsers[index] = user; 
        }else{
            const newUsers = [...users, user]
            newUsers[i] = user
        }
        
        setUsers(newUsers);
        localStorage.setItem('users', JSON.stringify(newUsers));
        setUser({})
        setModal(false)
        setIndex(-1)
        setIsEdit(false)

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
                            <input value = {user.nome} onChange={ (e) => setUser({...user, nome: e.target.value})} type="text" placeholder="Digite seu nome inteiro" />

                            Email:
                            <input value = {user.email} onChange={ (e) => setUser({...user, email: e.target.value})} type="text" placeholder="Digite seu melhor email" />

                            Senha:
                            <input onChange={ (e) => setUser({...user, senha: e.target.value})} type="password" placeholder="Letra maiuscula e minuscula" />

                            Data Nascimento
                            <input onChange={ (e) => setUser({...user, nascimento: e.target.value})} type="date" placeholder="DD/MM/HH" />


                            <a onClick={handleRegister} className="mt-5 bg-red-500 text-white text-center rounded-md py-2">Registrar</a>
                           {index != -1 && <a onClick={()=> setIsEdit (false)} className="mt-5 bg-red-500 text-white text-center rounded-md py-2">Cancelar</a>}

                        </form>): //else 
                        (
                            <>
                           <p> Nome: {user.nome} </p>
                           <p> Nome: {user.email} </p>
                           <p> Nome: {user.nascimento} </p>
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
                {users.map( (u,i) => (
                    <tr>
                        <td>{u.nome}</td>
                        <td>{u.email}</td>
                        <td>
                            <a className='cursor-pointer px-3 mx-4 houver:shadow shadow-md text-white rounded-full bg-green-500' onClick={()=> updateUser(i)}>V</a>
                            <a className='cursor-pointer px-3 mx-4 houver:shadow shadow-md text-white rounded-full bg-red-500' onClick={()=> deleteUser(i)}>X</a>
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