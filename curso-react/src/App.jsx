//java//
function App() {
  //tudo aqui fora será js//
  return (
    <div>
      <nav class="flex items-center py-3 px-4 shadow-lg fixed top-0 w-full bg-secondary"> 
        <a class="mr-2 p-2 hover:bg-primary hover:text-white" href="#about">Sobre</a>
        <a class="mr-2 p-2 hover:bg-primary hover:text-white" href="#prices">Preços</a>
        <a class="mr-2 p-2 hover:bg-primary hover:text-white" href="#features">Benefícios</a>
        <a class="mr-5 py-2 px-4 bg-primary hover:shadow-inner rounded text-white ml-auto shadow" href="auth.html">Acessar</a>
      </nav>
      <div>
        <div id="about">
          <div class="max-w-lg mx-auto py-6">
            <h1 class="text-center">Sobre o projeto</h1>

            <p>
              O <b>fale +</b> é uma plataforma para ajudar,
              pessoas que tenha dificuldade na fala ou que tenha vergonha.
              assim elas podem se desenvolver melhor na sociedade e perder o medo de se comunicar
            </p>

            <p>
              A proposta é reunir em um único lugar informações importantes,
              ferramentas de organização e recursos de estudo para que você
              tenha mais autonomia durante sua preparação.
            </p>

            <p>
              Você poderá acompanhar oportunidades, organizar seus estudos,
              praticar exercícios, realizar simulados e acompanhar sua evolução.
            </p>

            <h3>Educação gratuita de verdade</h3>

            <p>
              Não existe mensalidade, assinatura ou plano premium.
              Todo o conteúdo da plataforma é <i>gratuito</i>.
            </p>
          </div>
        </div>
        <div id="prices">
          <div class="max-w-lg mx-auto py-6">
            <h2>Ajude o Curso Popular a continuar gratuito</h2>

            <p>
              O <b>Curso Popular</b> é um projeto <i>gratuito</i> e depende
              da colaboração de pessoas que acreditam
              que educação deve ser acessível para todos.
            </p>

            <p>
              Se a plataforma ajudar você e estiver dentro das suas possibilidades,
              você pode contribuir voluntariamente para ajudar
              na manutenção e evolução do projeto.
            </p>

            <p>
              <b>Contato para apoiar o projeto:</b>
              jhorge.maricus@gmail.com
            </p>

            <p>
              A doação é totalmente opcional.
              Você poderá utilizar a plataforma mesmo sem realizar qualquer contribuição.
            </p>
          </div>
        </div>
        <div id="features">
          <div class="max-w-lg mx-auto py-6">
            <h2>O que você ganha usando a plataforma?</h2>
            <div class="flex gap-8">
              <div>
                <h3>Não perca mais oportunidades</h3>

                <p>
                  Acompanhe editais, datas de abertura, encerramento das inscrições,
                  pedidos de isenção e outros prazos importantes em um único lugar.
                </p>

                <p>
                  Assim, você consegue se organizar com antecedência
                  e reduz o risco de perder uma oportunidade simplesmente
                  porque não ficou sabendo do prazo.
                </p>
              </div>

              <div>
                <h3>Tenha clareza sobre o que estudar</h3>

                <p>
                  Organize os conteúdos que precisam ser estudados
                </p>

                <p>
                  Em vez de estudar sem saber se está avançando,
                  você consegue visualizar seu progresso e identificar
                  quais assuntos ainda precisam de atenção.
                </p>
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

export default App;