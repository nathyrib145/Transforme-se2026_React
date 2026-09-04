import { useState } from 'react';
import { Link } from 'react-router'



function Painel() {

    const [modal, setModal] = useState(false) //bollean, verdadeiro falso
    const [users, setUsers] = useState([]) //vetor
    const [user, setUser] = useState({}) //objeto

    function handleRegister(){
        const newUsers = [...user, user]
        setUsers([...users, user]);
        localStorage.setItem('users', JSON.stringify(newUsers));
        setUser({})
        setModal(false);

    }
    return (

        
        <>
            {modal && (
                <div className=" fixed top-0 right-0 bottom-0 left-0 items-center flex justify-center bg-black/50 z-50 rounded  ">
                    <div id="modalRegister" className="p-5 relative max-w-md w-full rounded-lg shadow-md flex flex-col bg-red-700">

                        <a onClick={() => setModal(false)} id="bt_close" className="bg-red absolute top-0 right-0 px-2 rounded-full hover:shadow-inner-red cursor-pointer">X</a>

                        <h2>Novo Cadastro</h2>

                        <p>Preencha as informações abaixo</p>

                        <form className="flex flex-col">

                        
                            Nome:
                            <input onChange={ (e) => setUser({...user, nome: e.target.value})} type="text" placeholder="Digite seu nome inteiro" />

                            Email:
                            <input onChange={ (e) => setUser({...user, email: e.target.value})} type="text" placeholder="Digite seu melhor email" />

                            Senha:
                            <input onChange={ (e) => setUser({...user, senha: e.target.value})} type="password" placeholder="Letra maiuscula e minuscula" />

                            Data Nascimento
                            <input onChange={ (e) => setUser({...user, nascimento: e.target.value})} type="date" placeholder="DD/MM/HH" />


                            <a onClick={handleRegister} className="mt-5 bg-red-500 text-white text-center rounded-md py-2">Registrar</a>

                        </form>
                    </div>
                </div>
            )}
            <h2 className="py-2 px-4">Resposta</h2>
            <h2 className="py-2 px-4"></h2>
            <table className="py-2 px-4 mb-15">
                <thead>
                    <th className="text-white">Nome</th>
                    <th className="text-white">Email</th>
                    <th className="text-white">Ações</th>
                </thead>
                <tbody className="font-secondary">

                </tbody>
            </table>
            <a onClick= {() => setModal(true)} className= "rounded-full bg-primary text-white px-4 py-2 fixed bottom-0 right-0">+</a>

        </>

    )
}

export default Painel;