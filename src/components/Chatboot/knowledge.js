/** Knowledge + offline FAQ matcher for Bruno Holanda chatbot */

export const CV_PT =
  'https://drive.google.com/file/d/1-R9jxd51oo7prkAWmcfHh1bITrzq1pEZ/view?usp=sharing';
export const CV_EN =
  'https://drive.google.com/file/d/1KcMfJEVAf05Aiy9oYjDXeJpMgj9b59DG/view?usp=sharing';
export const WHATSAPP =
  'https://wa.me/5583998150712';
export const COURSE = 'https://curso.brunoholanda.com';
export const BOOK = 'https://pay.hotmart.com/G93146509W';
export const LINKEDIN = 'https://www.linkedin.com/in/brunoholanda/';
export const GITHUB = 'https://github.com/brunoholanda';
export const EMAIL = 'mailto:holanda_rodrigues@hotmail.com?subject=Contato%20pelo%20portf%C3%B3lio';

function normalize(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function scoreMatch(normalizedInput, keywords) {
  let score = 0;
  keywords.forEach((keyword) => {
    const key = normalize(keyword);
    if (!key) return;
    if (normalizedInput.includes(key)) {
      score += key.includes(' ') ? 3 : 2;
    }
  });
  return score;
}

const intents = [
  {
    id: 'greeting',
    keywords: ['oi', 'ola', 'olaa', 'hey', 'hello', 'hi', 'bom dia', 'boa tarde', 'boa noite'],
    answerPt:
      'Olá! Eu sou o Bruno IA 👋 Posso falar sobre a trajetória, stacks, projetos, certificações e formas de contato do Bruno. Escolha uma sugestão abaixo ou pergunte algo.',
    answerEn:
      'Hi! I’m Bruno IA 👋 I can talk about Bruno’s path, stacks, projects, certifications and contact info. Pick a suggestion below or ask anything.',
  },
  {
    id: 'who',
    keywords: [
      'quem e',
      'quem e o bruno',
      'quem e bruno',
      'sobre voce',
      'sobre o bruno',
      'apresenta',
      'who is',
      'about bruno',
      'about you',
    ],
    answerPt:
      'Bruno Holanda é Desenvolvedor Web FullStack. Trabalha na RPE (rpe.tech), a maior processadora de pagamentos do varejo no Brasil no ramo de cartões para lojas. Cria produtos com React/Node e já entregou SAAS (como o Marquei), sites e freelas em produção. Antes, foi gerente administrativo no Bradesco — e migrou de carreira para tech.',
    answerEn:
      'Bruno Holanda is a FullStack Web Developer. He works at RPE (rpe.tech), Brazil’s largest retail payment processor in store cards. He builds products with React/Node, and has shipped SAAS (like Marquei), websites and freelance work. Before that, he was an administrative manager at Bradesco — then moved into tech.',
  },
  {
    id: 'work',
    keywords: [
      'trabalho',
      'trabalha',
      'experiencia',
      'empresa',
      'elevaty',
      'rpe',
      'emprego',
      'cargo',
      'work',
      'job',
      'experience',
      'company',
      'processadora',
      'pagamento',
    ],
    answerPt:
      'Hoje Bruno é FullStack Pleno na RPE — Processadora de pagamentos varejo (<a href="https://www.rpe.tech/" target="_blank" rel="noreferrer">rpe.tech</a>), a maior no Brasil no ramo de cartões para lojas (desde maio/2023). Atua ponta a ponta com frontend, backend, banco de dados e cloud em times ágeis. Também desenvolve como autônomo desde 2022. Antes, foi Gerente Administrativo no Banco Bradesco (2012–2024).',
    answerEn:
      'Bruno is currently a Mid-level FullStack Developer at RPE — retail payment processor (<a href="https://www.rpe.tech/" target="_blank" rel="noreferrer">rpe.tech</a>), Brazil’s largest in store cards (since May 2023). He delivers end-to-end work across frontend, backend, databases and cloud in agile teams. He also freelances since 2022. Before that, he was Administrative Manager at Banco Bradesco (2012–2024).',
  },
  {
    id: 'career',
    keywords: [
      'carreira',
      'migracao',
      'bancario',
      'bradesco',
      'mudanca',
      'como comecou',
      'historia',
      'trajetoria',
      'career',
      'transition',
      'bank',
    ],
    answerPt:
      'A trajetória dele é bem forte para quem está começando: bancário por anos no Bradesco, e em paralelo migrou para desenvolvimento. Desde cedo criava coisas — aos 16 automatizou a casa dos pais com Arduino. Hoje entrega produto em produção e compartilha conteúdo para iniciantes.',
    answerEn:
      'His path is inspiring for beginners: years as a banker at Bradesco, while transitioning into development. He’s been a builder early on — at 16 he automated his parents’ home with Arduino. Today he ships production products and shares content for beginners.',
  },
  {
    id: 'skills',
    keywords: [
      'stack',
      'stacks',
      'habilidade',
      'habilidades',
      'tecnologia',
      'tecnologias',
      'react',
      'node',
      'typescript',
      'aws',
      'mobile',
      'skills',
      'tech',
    ],
    answerPt:
      'Stacks principais: React, Next.js, TypeScript, Node.js, NestJS, Fastify, Spring Boot, PostgreSQL, MongoDB, React Native, SDUI, AWS/Cloud, além de Git e ferramentas mobile (Android Studio / Xcode).',
    answerEn:
      'Main stacks: React, Next.js, TypeScript, Node.js, NestJS, Fastify, Spring Boot, PostgreSQL, MongoDB, React Native, SDUI, AWS/Cloud, plus Git and mobile tools (Android Studio / Xcode).',
  },
  {
    id: 'projects',
    keywords: [
      'projeto',
      'projetos',
      'portfolio',
      'marquei',
      'offroad',
      'offroad-r',
      'pdf',
      'pdf studio',
      'editor pdf',
      'dev tools',
      'devtools',
      'tools',
      'newsfeed',
      'feed',
      'noticias',
      'notícias',
      'quiosque',
      'campanhas',
      'kiosk',
      'curso',
      'codigo de partida',
      'código de partida',
      'pagina de vendas',
      'marketplace',
      'saas',
      'site',
      'cases',
      'project',
      'projects',
    ],
    answerPt:
      'Destaques: OffRoad-R, PDF Studio, Dev Tools, Feed de Notícias, Quiosque (campanhas em painéis — quiosque.brunoholanda.com) e a página do curso Código de Partida. Também: Marquei e freelas. Veja Projetos no portfólio.',
    answerEn:
      'Highlights: OffRoad-R, PDF Studio, Dev Tools, News Feed, Quiosque (campaigns on panels — quiosque.brunoholanda.com) and the Código de Partida course page. Also: Marquei and freelance work. Browse Projects in the portfolio.',
  },
  {
    id: 'education',
    keywords: [
      'formacao',
      'faculdade',
      'curso',
      'certificado',
      'certificacao',
      'aws',
      'unopar',
      'ifpb',
      'estudo',
      'education',
      'degree',
      'certificate',
    ],
    answerPt:
      'Formação: AWS Certified AI Practitioner, AWS Certified Cloud Practitioner, Análise e Desenvolvimento de Sistemas (Unopar) e Administração (IFPB). Também tem formações específicas em tech.',
    answerEn:
      'Education: AWS Certified AI Practitioner, AWS Certified Cloud Practitioner, Systems Analysis and Development (Unopar) and Business Administration (IFPB). He also has specific tech training.',
  },
  {
    id: 'contact',
    keywords: [
      'contato',
      'email',
      'telefone',
      'whatsapp',
      'falar',
      'humano',
      'mensagem',
      'contact',
      'phone',
      'reach',
    ],
    answerPt: `Pode falar com o Bruno por:
<a href="${WHATSAPP}" target="_blank" rel="noreferrer">WhatsApp</a> ·
<a href="${EMAIL}">Email</a> ·
<a href="${LINKEDIN}" target="_blank" rel="noreferrer">LinkedIn</a>
<br/>Ele mora em João Pessoa — PB.`,
    answerEn: `You can reach Bruno via:
<a href="${WHATSAPP}" target="_blank" rel="noreferrer">WhatsApp</a> ·
<a href="${EMAIL}">Email</a> ·
<a href="${LINKEDIN}" target="_blank" rel="noreferrer">LinkedIn</a>
<br/>He’s based in João Pessoa — PB, Brazil.`,
  },
  {
    id: 'cv',
    keywords: ['curriculo', 'currículo', 'cv', 'resume', 'baixar cv'],
    answerPt: `Claro! Currículos:
<a href="${CV_PT}" target="_blank" rel="noreferrer">Português</a> ·
<a href="${CV_EN}" target="_blank" rel="noreferrer">English</a>`,
    answerEn: `Sure! Resumes:
<a href="${CV_PT}" target="_blank" rel="noreferrer">Portuguese</a> ·
<a href="${CV_EN}" target="_blank" rel="noreferrer">English</a>`,
  },
  {
    id: 'products',
    keywords: [
      'livro',
      'curso',
      'hotmart',
      'aprender',
      'iniciantes',
      'mentoria',
      'book',
      'course',
      'beginner',
    ],
    answerPt: `Para quem está começando:
<a href="${COURSE}" target="_blank" rel="noreferrer">Curso Programação do Zero</a> ·
<a href="${BOOK}" target="_blank" rel="noreferrer">Livro de mudança de carreira</a>`,
    answerEn: `For beginners:
<a href="${COURSE}" target="_blank" rel="noreferrer">Programming from Zero course</a> ·
<a href="${BOOK}" target="_blank" rel="noreferrer">Career change book</a>`,
  },
  {
    id: 'location',
    keywords: ['onde mora', 'cidade', 'joao pessoa', 'paraiba', 'localizacao', 'where', 'live', 'location'],
    answerPt: 'Bruno mora em João Pessoa — Paraíba, Brasil.',
    answerEn: 'Bruno lives in João Pessoa — Paraíba, Brazil.',
  },
  {
    id: 'languages',
    keywords: ['ingles', 'idioma', 'english', 'espanhol', 'spanish', 'language'],
    answerPt:
      'Inglês avançado (comunicação, leitura e discussões técnicas). Também arrisca no espanhol. Tem visto de trabalho americano.',
    answerEn:
      'Advanced English (conversation, reading and technical discussions). He also gets by in Spanish and holds a US work visa.',
  },
  {
    id: 'hobbies',
    keywords: [
      'hobby',
      'hobbies',
      'arduino',
      'youtube',
      'esporte',
      'ciclismo',
      'natacao',
      'musculacao',
      'maker',
    ],
    answerPt:
      'Nos hobbies, Bruno cria automações e projetos maker (desde 2013 no YouTube), e pratica ciclismo, natação e musculação. Confira a página Hobbies do portfólio.',
    answerEn:
      'In his free time, Bruno builds automation/maker projects (on YouTube since 2013) and practices cycling, swimming and strength training. Check the Hobbies page.',
  },
  {
    id: 'thanks',
    keywords: ['obrigado', 'obrigada', 'valeu', 'thanks', 'thank you'],
    answerPt: 'Por nada! Se quiser, pergunte sobre projetos, stacks ou contato 😄',
    answerEn: 'You’re welcome! Feel free to ask about projects, stacks or contact 😄',
  },
];

export const suggestedQuestions = {
  'pt-br': [
    'Quem é o Bruno?',
    'Onde ele trabalha?',
    'Quais stacks ele usa?',
    'Quais projetos ele já fez?',
    'Como entro em contato?',
    'Tem currículo para baixar?',
  ],
  en: [
    'Who is Bruno?',
    'Where does he work?',
    'What stacks does he use?',
    'What projects has he shipped?',
    'How can I contact him?',
    'Can I download his resume?',
  ],
};

export function getOfflineReply(userInput, language = 'pt-br') {
  const isPt = language === 'pt-br';
  const normalized = normalize(userInput);

  if (!normalized) {
    return isPt
      ? 'Pode digitar sua pergunta ou escolher uma sugestão abaixo.'
      : 'Type a question or pick a suggestion below.';
  }

  let best = null;
  let bestScore = 0;

  intents.forEach((intent) => {
    const score = scoreMatch(normalized, intent.keywords);
    if (score > bestScore) {
      bestScore = score;
      best = intent;
    }
  });

  if (best && bestScore >= 2) {
    return isPt ? best.answerPt : best.answerEn;
  }

  return isPt
    ? 'Ainda não entendi essa pergunta 😅 Posso falar sobre quem é o Bruno, trabalho, stacks, projetos, formação, contato, CV, curso/livro e hobbies. Tente uma das sugestões!'
    : "I didn’t catch that 😅 I can talk about who Bruno is, work, stacks, projects, education, contact, resume, course/book and hobbies. Try a suggestion!";
}
