import { Link } from "react-router"
function Home() {

    return (
        <div>
            <nav class="flex items-center py-3 px-4 shadow-lg fixed top-0 w-full bg-red-900">
                <a class="mr-2 p-2 rounded-full hover:bg-red-600  hover:text-white" href="#about">Sobre</a>
                <a class="mr-2 p-2 rounded-full hover:bg-red-600  hover:text-white" href="#prices">Preços</a>
                <a class="mr-2 rounded-full p-2 hover:bg-red-600 hover:text-white" href="#features">Benefícios</a>
                <Link class="mr-5 py-2 px-4 bg-primary hover:shadow-inner rounded-full text-white ml-auto " to="/auth">Acessar</Link>
            </nav>
            <div>
                <div id="about">
                    <div class="max-w-lg mx-auto py-6 shadow-lg shadow-red-700">
                        <h1 class="text-center">Sobre o projeto</h1>
                        
                        <p>
                            Olá, o intuito do nosso projeto é ajudar as pessoas que tem dificuldade de falar em público,
                            podendo ajudar essas pessoas da melhor maneira possivel a perder o medo da fala em público
                            Oferecendo salas personalizadas, conversas com pessoas reais para pedir dicas, caso as pessoas ja estejam ocupadas
                            teriamos chats de IA disponiveis quando quiser
                        </p>
                        
                        <p>
                            Iriamos organizar eventos sociais presencialmente e virtualmente para criar novas amizades e novos laços sociais.
                            sendo mais acessivel para as pessoas que não possui condição de bancar um curso de oratória ou algo do genero podem se desenvolver melhor na sociedade e perder o medo de se comunicar
                        </p>

                    </div>
                </div>
                <div id="prices">
                    <div class="max-w-lg mx-auto py-6 shadow-lg shadow-red-700">
                        <h2>Preços</h2>

                        <p>
                            Para o inicio do projeto, seria de <i>graça</i>.. conforme for expandindo iriamos adicionando alguns planos pagos, mas sem ser aqueles preços abusivos.
                            Deixando acessivel para o publico de idades variadas, tendo 3 tipo de planos diferentes: um sendo barato mas com funções limitadas,
                            um com um preço um pouco maios só que com mais funçoes liberadas e um mais caro que eles só que com o maximo de funções disponiveis do site.
                            A pessoa ia escolher qual plano cabe no orçamento dela, ou caso os planos nao der para a pessoa.. terá o plano padrão
                        </p>

                        <p>
                            Se a plataforma ajudar você e estiver dentro das suas possibilidades,
                            você pode contribuir voluntariamente para ajudar
                            na manutenção e evolução do projeto.
                        </p>

                        <p>
                            A doação é totalmente opcional.
                            Você poderá utilizar a plataforma mesmo sem realizar qualquer contribuição.
                        </p>
                    </div>
                </div>
                <div id="features">
                    <div class="max-w-lg mx-auto py-6 shadow-lg shadow-red-700">
                        <h2>Nossos benefícios:</h2>
                        <div class="flex gap-8">
                            <div>
                                <h3>Não perca mais oportunidades</h3>

                                <p>
                                    <p>perder o medo de falar em publico, diminuir a ansiedade, ajudar a ter menos dificuldade na
                                        hora de se aprensentar
                                        para ter uma melhora na fala, na forma que a pessoa se expressa deixando mais
                                        natural</p>
                                </p>

                                <p>
                                    Pode ser em apresentação de escola, trabalho, um TCC e por ai vai.
                                    Podendo também melhorar a pessoa para o mundo do trabalho aumentando a confiança,
                                    facilitando também no ciclo social da pessoa.
                                </p>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                site criado por: Nathalia
            </footer>
        </div>
    )
}
export default Home