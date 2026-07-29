/** @typedef {{ id: string; year: string; age: string; title: string; tag: string; summary: string; body: string }} Milestone */

/** @type {{ pt: Milestone[]; en: Milestone[] }} */
export const milestonesByLang = {
  pt: [
    {
      id: '1992',
      year: '1992',
      age: 'Início',
      title: 'Nascido em uma família humilde',
      tag: 'Origem',
      summary:
        'Criação rigorosa em ética, respeito e valores — e a consciência precoce de que eu precisava mudar a realidade da minha família.',
      body: 'Nascido em 1992 em uma família humilde, minha criação foi rigorosa quanto à ética, respeito e valores familiares sólidos. Porém tínhamos poucos recursos: tudo era limitado. Aprendi desde cedo que precisava fazer algo para mudar a realidade da minha família.',
    },
    {
      id: '1997',
      year: '~1997',
      age: '5 anos',
      title: 'Curiosidade que desmontava o mundo',
      tag: 'Infância',
      summary:
        'Desmontava brinquedos para entender molas, engrenagens, motores e lampadinhas — até os pais pararem de comprar o que se mexia.',
      body: 'Dos meus 5 anos em diante, lembro que sempre fui curioso. Desmontava todos os poucos brinquedos que eu tinha para ver como funcionavam e montar outra coisa com as peças — molas, engrenagens, circuitos eletrônicos básicos, pequenos motores e lampadinhas. Essa curiosidade me gerou problemas: meus pais não compreendiam por que eu sempre fazia isso, ao ponto de pararem de comprar qualquer brinquedo que se movesse ou acendesse alguma luz.',
    },
    {
      id: '2002',
      year: '~2002',
      age: '10 anos',
      title: 'Consertando bicicletas na rua',
      tag: 'Primeiro ofício',
      summary:
        'Marchas, freios, alinhamento, correntes e lubrificação — e o trocado virava balinha e figurinha.',
      body: 'Aos 10 anos, consertava as bicicletas dos meus colegas: regulava as marchas, os freios, alinhava as rodas, apertava correntes e lubrificava. Cobhava valores baixos, mas que serviam para eu comprar balinhas na venda da esquina e figurinhas.',
    },
    {
      id: '2004',
      year: '~2004',
      age: '12 anos',
      title: 'Lan House e a paixão por computadores',
      tag: 'Hardware',
      summary:
        'Cuidar de uma Lan House, Counter-Strike e a satisfação de formatar, instalar e achar o programa certo.',
      body: 'Aos 12 anos comecei a tomar conta de uma Lan House — lugares onde você pagava por hora para usar o computador, navegar, estudar, criar documentos e, o mais legal, jogar online jogos consagrados como Counter-Strike. Ali, somado à minha curiosidade, nascia uma paixão por computadores. Aprendi tudo sobre hardware e amava formatar máquinas, instalar programas e buscar coisas gratuitas na internet. Naquela época era especial procurar e achar programas que resolviam praticamente tudo.',
    },
    {
      id: '2008',
      year: '~2008',
      age: '16 anos',
      title: 'Estágio na Caixa e o primeiro YouTube',
      tag: 'Corporativo',
      summary:
        'Mundo bancário, empresas e a ideia de empreender — em paralelo, engenhocas com Arduino no canal.',
      body: 'Aos 16 anos comecei a trabalhar como estagiário na Caixa Econômica Federal. Foi meu primeiro contato com o mundo corporativo: dinheiro, cobrança, relações interpessoais, compliance e tudo o que você imaginar relacionado a bancos. Trabalhava atendendo empresas e comecei a perceber que ser empresário seria uma boa ideia. Sempre me destacava por aprender rápido. No mesmo período nasceu meu primeiro canal no YouTube, onde eu ensinava a fazer engenhocas com Arduino — fechadura eletrônica, geladeira, máquina de refrigerante e muito mais.',
    },
    {
      id: '2010',
      year: '2010–11',
      age: '18–19 anos',
      title: 'Formatando PCs por toda João Pessoa',
      tag: 'Empreender',
      summary:
        'Ônibus, mochila com HDs e CDs — cerca de 50 clientes. Depois, a decisão de parar antes que o ofício morresse.',
      body: 'Dos 18 aos 19 anos eu formatava computadores em toda a grande João Pessoa. Alguém precisava, me ligava e eu ia de ônibus com uma mochila nas costas: HDs para backups, pasta térmica, borrachas e CDs com software de tudo que você imaginar. Tinha uns 50 clientes que só formatavam comigo. Ao final dos 19, precisei parar: percebi que aquilo não seria mais necessário — os sistemas ficavam mais fáceis de instalar, o Windows não corrompia com qualquer queda de energia, e eu precisava estudar outras coisas.',
    },
    {
      id: '2011',
      year: '~2011',
      age: '19 anos',
      title: 'Aprendiz no Bradesco — “Posso ajudar?”',
      tag: 'Pessoas',
      summary:
        'Seis horas em pé, todo tipo de cliente, e a arte de resolver conflito sem tornar nada pessoal.',
      body: 'Aos 19 anos comecei como aprendiz no Bradesco, atuando como os famosos “posso ajudar”. Era complicado: passava seis horas do dia em pé atendendo todo tipo de pessoa — inclusive as rudes, desrespeitosas e sem noção. Ali aprendi a lidar com gente de forma imparcial. Às vezes ainda me impressiono com a capacidade que desenvolvi de resolver conflitos e não tornar nada pessoal quando o assunto era trabalho. Foram dois anos de muito esforço e aprendizado. Mesmo como aprendiz, mantive o canal no YouTube ensinando a programar, resolver problemas do Windows e muito mais.',
    },
    {
      id: '2014',
      year: '~2014',
      age: '22 anos',
      title: 'Efetivado — 12 anos de banco',
      tag: 'Trajetória',
      summary:
        'Escriturário, liderança, soluções inovadoras. A paixão era tech — mas o caminho ainda não estava claro.',
      body: 'Aos 22 anos fui efetivado no Bradesco como escriturário. Vi uma oportunidade de mudar a realidade da minha família. Embora minha paixão fosse tecnologia, eu ainda não tinha ideia de como trabalhar como programador e ganhar bem com isso. Muitos diziam que eu estava me perdendo no banco; eu não concordava — sabia que precisava fazer aquilo. Fiquei 12 anos na empresa, passei por cargos variados, virei líder, sugeri soluções inovadoras e fui referência no que fazia.',
    },
    {
      id: '2019',
      year: '~2019',
      age: '27 anos',
      title: 'A decisão de não ficar bancário para sempre',
      tag: 'Virada',
      summary:
        'Nova formação em tecnologia, Alura, Udemy e YouTube — enquanto ainda trabalhava no banco.',
      body: 'Aos 27 anos percebi que não queria passar o resto da vida como bancário. Precisava mudar. Comecei a estudar de novo: uma nova formação superior em tecnologia — nessa altura eu já era formado em Administração de Empresas. Além da graduação, comecei a devorar cursos de programação. Conheci plataformas como Alura e Udemy, e o próprio YouTube tinha muitas aulas de graça.',
    },
    {
      id: '2021',
      year: '~2021',
      age: '29 anos',
      title: 'Primeira proposta como programador',
      tag: 'Startup',
      summary:
        'Horista em startup: Scrum, Git profundo e o ritmo real de um time de software.',
      body: 'Aos 29 anos, ainda no banco, recebi uma proposta para trabalhar numa startup como horista, prestando serviços de programador. Ali comecei a aprender sobre Scrum, a me aprofundar no Git e a entender como equipes de desenvolvimento trabalhavam. Meu gosto por aquilo aumentava cada vez mais.',
    },
    {
      id: '2022',
      year: '~2022',
      age: '30 anos',
      title: 'Adeus ao banco — 100% programador',
      tag: 'Carreira',
      summary:
        'Dois dias para decidir. Aceitei o full-time e a brincadeira ficou séria — e melhor a cada dia.',
      body: 'Completando 30 anos, recebi a proposta para trabalhar full-time na empresa em que eu já atuava como horista. Pensei bem e, depois de dois dias, aceitei. Já não me sentia bem no banco e sabia que precisava mudar de carreira com urgência. Passei a trabalhar 100% como programador. Aí a brincadeira ficou mais séria — e melhor a cada dia. Desde então, todos os dias aprendo coisas novas, implemento funcionalidades e sei o quanto meu trabalho é importante.',
    },
    {
      id: 'hoje',
      year: 'Hoje',
      age: '33 anos',
      title: 'Soluções ponta a ponta',
      tag: 'Presente',
      summary:
        'Startups e empresas grandes, cloud, duas certificações AWS — transformar ideia em realidade.',
      body: 'Hoje, com 33 anos, já trabalhei em vários projetos — de startups a empresas grandes. Aprendi muito sobre diversas tecnologias, me apaixonei por cloud e isso já me rendeu duas certificações AWS. Basicamente me especializei em fornecer soluções ponta a ponta: se alguém precisa de um sistema robusto, escalável e de baixo custo, eu sou a pessoa certa para transformar uma ideia em realidade.',
    },
  ],
  en: [
    {
      id: '1992',
      year: '1992',
      age: 'The start',
      title: 'Born into a humble family',
      tag: 'Origin',
      summary:
        'A strict upbringing in ethics, respect and solid values — and early awareness that I had to change my family’s reality.',
      body: 'Born in 1992 into a humble family, I was raised with rigorous ethics, respect and solid family values. We had few resources; everything was limited. I learned early that I needed to do something to change my family’s reality.',
    },
    {
      id: '1997',
      year: '~1997',
      age: 'Age 5',
      title: 'Curiosity that took toys apart',
      tag: 'Childhood',
      summary:
        'I dismantled toys to understand springs, gears, motors and tiny bulbs — until my parents stopped buying anything that moved.',
      body: 'From age 5 onward I was always curious. I took apart the few toys I had to see how they worked and rebuild something else from the pieces — springs, gears, basic electronic circuits, small motors and light bulbs. That curiosity caused trouble: my parents didn’t understand why I always did it, to the point of stopping buying any toy that moved or lit up.',
    },
    {
      id: '2002',
      year: '~2002',
      age: 'Age 10',
      title: 'Fixing bikes on the street',
      tag: 'First craft',
      summary:
        'Gears, brakes, alignment, chains and lubrication — small fees that bought candy and stickers.',
      body: 'At 10 I fixed my friends’ bikes: adjusted gears and brakes, aligned wheels, tightened chains and lubricated them. I charged little, but enough to buy candy at the corner shop and trading cards.',
    },
    {
      id: '2004',
      year: '~2004',
      age: 'Age 12',
      title: 'Lan House and a love for computers',
      tag: 'Hardware',
      summary:
        'Running a cybercafé, Counter-Strike, and the joy of formatting, installing and finding the right free tool.',
      body: 'At 12 I started looking after a Lan House — places where you paid by the hour to use a computer, browse, study, create documents and, best of all, play online classics like Counter-Strike. There, plus my curiosity, a passion for computers was born. I learned everything about hardware and loved formatting machines, installing programs and hunting free tools online. Back then it was special to search and find software that solved almost anything.',
    },
    {
      id: '2008',
      year: '~2008',
      age: 'Age 16',
      title: 'Caixa internship and first YouTube',
      tag: 'Corporate',
      summary:
        'Banking world, companies and the idea of entrepreneurship — plus Arduino hacks on a channel.',
      body: 'At 16 I started as an intern at Caixa Econômica Federal. It was my first contact with the corporate world: money, collections, interpersonal skills, compliance and everything related to banks. I worked with companies and began to see that entrepreneurship could be a good path. I stood out by learning fast. That same year my first YouTube channel was born, where I taught Arduino gadgets — electronic locks, fridge builds, soda machines and more.',
    },
    {
      id: '2010',
      year: '2010–11',
      age: 'Ages 18–19',
      title: 'Formatting PCs across João Pessoa',
      tag: 'Hustle',
      summary:
        'Bus rides, a backpack of hard drives and CDs — about 50 clients. Then the decision to stop before the craft died.',
      body: 'From 18 to 19 I formatted computers across greater João Pessoa. Someone needed help, called me, and I took the bus with a backpack: hard drives for backups, thermal paste, erasers and CDs with every kind of software. I had about 50 clients who only formatted with me. By the end of 19 I had to stop: I saw it wouldn’t be necessary anymore — systems got easier to install, Windows stopped corrupting from every power blip, and I needed to study other things.',
    },
    {
      id: '2011',
      year: '~2011',
      age: 'Age 19',
      title: 'Bradesco apprentice — “Can I help?”',
      tag: 'People',
      summary:
        'Six hours on my feet, every kind of customer, and learning to resolve conflict without taking it personally.',
      body: 'At 19 I became an apprentice at Bradesco, working as the famous “can I help you?” floor role. It was tough: six hours a day on my feet serving every kind of person — including rude, disrespectful ones. There I learned to deal with people impartially. I still surprise myself with the ability I built to resolve conflicts and not take work personally. Two years of hard work and growth. Even as an apprentice I kept my YouTube channel teaching programming, Windows fixes and more.',
    },
    {
      id: '2014',
      year: '~2014',
      age: 'Age 22',
      title: 'Hired full-time — 12 years in banking',
      tag: 'Path',
      summary:
        'Clerk, leadership, innovative ideas. Tech was the passion — the career path wasn’t clear yet.',
      body: 'At 22 I was hired full-time at Bradesco as a clerk. I saw a chance to change my family’s reality. Although my passion was technology, I still had no idea how to work as a programmer and earn well from it. Many said I was losing myself in the bank; I disagreed — I knew I needed to do that. I stayed 12 years, held varied roles, became a leader, proposed innovative solutions and became a reference in what I did.',
    },
    {
      id: '2019',
      year: '~2019',
      age: 'Age 27',
      title: 'Refusing a lifetime as a banker',
      tag: 'Turning point',
      summary:
        'A new tech degree, Alura, Udemy and YouTube — while still working at the bank.',
      body: 'At 27 I realized I didn’t want to spend the rest of my life as a banker. I needed to change. I started studying again: a new higher education path in technology — by then I already had a Business Administration degree. Beyond college I began devouring programming courses. I found platforms like Alura and Udemy, and YouTube itself had plenty of free lessons.',
    },
    {
      id: '2021',
      year: '~2021',
      age: 'Age 29',
      title: 'First offer as a programmer',
      tag: 'Startup',
      summary:
        'Hourly work at a startup: Scrum, deeper Git, and how real software teams operate.',
      body: 'At 29, still at the bank, I received an offer to work at a startup as an hourly programmer. There I started learning Scrum, went deeper into Git and understood how software teams actually work. My taste for it kept growing.',
    },
    {
      id: '2022',
      year: '~2022',
      age: 'Age 30',
      title: 'Leaving the bank — 100% developer',
      tag: 'Career',
      summary:
        'Two days to decide. I took the full-time role and the game got serious — and better every day.',
      body: 'Turning 30, I got an offer to work full-time at the company where I already worked hourly. I thought it through and accepted after two days. I no longer felt right at the bank and knew I needed an urgent career change. I started working 100% as a programmer. That’s when it got more serious — and better every day. Since then I learn something new daily, ship features and know how important my work is.',
    },
    {
      id: 'hoje',
      year: 'Today',
      age: 'Age 33',
      title: 'End-to-end solutions',
      tag: 'Present',
      summary:
        'Startups and large companies, cloud, two AWS certifications — turning ideas into reality.',
      body: 'Today, at 33, I have worked on many projects — from startups to large companies. I learned a lot across technologies, fell in love with cloud and earned two AWS certifications. I specialize in end-to-end solutions: if someone needs a robust, scalable, low-cost system, I’m the right person to turn an idea into reality.',
    },
  ],
};
