
import { Template } from "../components/template";

function Home(){
    return(
    <Template>
        <main  className="p-8">
            <section id="about">
                <div className="max-w-lg mx-auto py-6 shadow-lg shadow-red-700">
                    <h1 className="text-center">Sobre o Projeto</h1>

                    <p>
                         Olá, o intuito do nosso projeto é ajudar as pessoas que tem dificuldade de falar em público,
                         podendo ajudar essas pessoas da melhor maneira possivel a perder o medo da fala em público
                         Oferecendo salas personalizadas, conversas com pessoas reais para pedir dicas, caso as pessoas ja estejam ocupadas
                         teriamos chats de IA disponiveis quando quiser
                    </p>

                    <p>
                        iriamos organizar eventos sociais presencialmente e virtualmente para criar novas amizades e novos laços sociais.
                        sendo mais acessivel para as pessoas que não possui condição de bancar um curso de oratória ou algo do genero podem se desenvolver 
                        melhor na sociedade e perder o medo de se comunicar
                    </p>

                    <p>
                        Você poderá acompanhar oportunidades, organizar seus estudos,
                        praticar exercícios, realizar simulados e acompanhar sua evolução.
                    </p>

                </div>
            </section>
            <section id="prices">
                <div className="max-w-lg mx-auto py-6 shadow-lg shadow-red-700">
                    <h2>Planos</h2>

                    <p>
                       Para o inicio do projeto, seria de <i>graça</i>.. conforme for expandindo iriamos adicionando alguns planos pagos, mas sem ser aqueles 				preços abusivos.
                        Deixando acessivel para o publico de idades variadas, tendo 3 tipo de planos diferentes: um sendo barato mas com funções limitadas,
                        um com um preço um pouco maios só que com mais funçoes liberadas e um mais caro que eles só que com o maximo de funções disponiveis do 				site.
                        A pessoa ia escolher qual plano cabe no orçamento dela, ou caso os planos nao der para a pessoa.. terá o plano padrão
                    </p>
                    <p>
                         Se a plataforma ajudar você e estiver dentro das suas possibilidades,
                        você pode contribuir voluntariamente para ajudar na manutenção e evolução do projeto
                    </p>

                    <p>
                          A doação é totalmente opcional.
                        Você poderá utilizar a plataforma mesmo sem realizar qualquer contribuição.  
                    </p>
                    
                    <p>
                        <b>Contato para apoiar nosso projeto: nathyrib145@gmail.com</b>
                    </p>

                </div>
            </section>
            <section id="features">
               <div className="max-w-lg mx-auto py-6 shadow-lg shadow-red-700">
                            <h2>Nossos benefícios:</h2>
                            <div className="flex gap-8">
                        <article>
                            <h3>Não perca mais oportunidades</h3>

                            <p>
                                perder o medo de falar em publico, diminuir a ansiedade, ajudar a ter menos dificuldade na
                                hora de se aprensentar
                                para ter uma melhora na fala, na forma que a pessoa se expressa deixando mais
                                natural
                            </p>
                        </article>
                            <p>
                                Pode ser em apresentação de escola, trabalho, um TCC e por ai vai.
                                Podendo também melhorar a pessoa para o mundo do trabalho aumentando a confiança,
                                facilitando também no ciclo social da pessoa.
                            </p>
                       

                    </div>
                </div>
            </section>
        </main>
    </Template>
    )
}
export default Home;