import { useState } from 'react';
import { Link } from 'react-router'



function Painel() {

    const [modal, setModal] = useState(false)

    return (

        
        <>
            {modal && (
                <div class=" fixed top-0 right-0 bottom-0 left-0 item-center flex justify-center bg-black/50 z-50 rounded  ">
                    <div id="modalRegister" class="p-5 bg-about rounded-lg shadow-md flex-col bg-red">

                        <a onClick={() => setModal(false)} id="bt_close" class="bg-red absolute top-0 right-0 px-2 rounded-full hover:shadow-inner-red cursor-pointer">X</a>

                        <h2>Novo Cadastro</h2>

                        <p>Preencha as informações abaixo</p>

                        <form class="flex-col, ">

                            Nome:
                            <input id="iName" type="text" placeholder="Digite seu nome inteiro" />

                            Email:
                            <input id="iEmail" type="text" placeholder="Digite seu melhor email" />

                            Senha:
                            <input id="iPass" type="password" placeholder="Letra maiuscula e minuscula" />

                            Data Nascimento
                            <input id="iBirth" type="date" placeholder="DD/MM/HH" />


                            <a id="formRegister" class="mt-5 bg-primary text-white text-center rounded-md py-2">Registrar</a>


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