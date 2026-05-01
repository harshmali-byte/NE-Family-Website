import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const translations = {
  en: {
    navbar: {
      myPolicy: 'My Policy',
      getNewPolicy: 'Get A New Policy',
      reviews: 'Reviews',
      contactUs: 'Contact Us',
      aboutUs: 'About Us',
      getQuote: 'Get a Quote',
      language: 'Language',
      payMyBill: 'Pay My Bill',
      policyChange: 'Policy Change',
      certificate: 'Certificate',
      fileAClaim: 'File A Claim',
    },
    hero: {
      badge: 'Trusted Insurance Advisors',
      headingStart: "We're not just the",
      headingEnd: "We're both in equal measures.",
      rotatingWords: ['best price', 'best service'],
      subtext:
        'A redesigned, modern experience built around clarity, trust, and coverage confidence for every stage of life.',
      bestPrice: 'Best Price Guarantee',
      getPolicy: 'Get A New Policy',
      myPolicy: 'My Policy',
    },
    contact: {
      title: 'OUR TEAM IS READY TO HELP',
      text: 'Text',
      whatsapp: 'WhatsApp',
      email: 'Email',
      call: 'Call',
      fax: 'Fax',
      fullName: 'Full Name',
      emailAddress: 'Email',
      message: 'Message',
      robot: "I'm not a robot",
      submit: 'SUBMIT',
      submitting: 'Submitting...',
      success: 'Form submitted successfully',
    },
    policy: {
      payMyBillTitle: 'PAY MY BILL',
      payMyBillPrompt: 'How Would You Like To Pay',
      policyChangeTitle: 'POLICY CHANGE',
      policyChangePrompt: 'How Would You Like To Do This',
      fileClaimTitle: 'FILE A CLAIM',
      fileClaimPrompt: 'Which Type of Policy is this Claim for',
      doItHere: 'Do It Here',
      text: 'Text',
      whatsapp: 'WhatsApp',
      callUs: 'Call Us',
      auto: 'Auto',
      home: 'Home',
      business: 'Business',
    },
    getNewPolicy: {
      howItWorks: 'How It Works',
      steps: [
        'Choose the type of policy you want',
        'Answer a few questions or attach a picture',
        'Save, sign & never get screwed by insurance companies again',
      ],
      getStarted: 'GET STARTED',
      imageAlt: 'Office and policy support',
      cards: [
        {
          title: 'Ecommerce Business Insurance:',
          text: 'Insurance providers cover your whole process of ecommerce business procedures from manufacturer to end-user. In case of any uncertainties, ecommerce business insurance provides you an instant backup plan.',
        },
        {
          title: 'Life Insurance:',
          text: 'Life insurance, also referred to as basic life insurance, ensures a nominee receives a particular amount of money upon the insured person’s death or when the policy gets matured.',
        },
        {
          title: 'Life Insurance for Children:',
          text: 'Life insurance for children provides long-term financial support and helps with studies and major life expenses with future planning confidence.',
        },
      ],
    },
    about: {
      title: 'Insurance Solutions for Your Family and Business Needs',
      paragraphs: [
        'At New England Family Insurance, we are experts in offering the best insurance capacity to fulfill the individual requirements of individuals, families, and companies in the region. If you are looking for house insurance to cover your home or family insurance to help ensure the well-being of your loved ones, our team of insurance professionals is here to help. We realize that insurance is not a one-size-fits-all solution, so we work closely with you to specify the appropriate range.',
        'With years of experience as Massachusetts insurance consultants, we provide a selection of policies ranging from simple insurance to thorough, full-coverage choices. To provide you access to the best policies, our insurance agency works with major insurance carriers. Whether your business requires general contractor insurance or vehicle inspections for your automobile, we walk you through the procedure that can help ensure you have the necessary protection.',
        'We also provide specific products to protect your priceless items, including estate plans, inland marine coverage, and art insurance. Our staff can help with certificate of insurance writing, subrogation waivers, and adding extra insured parties to your policy.',
        'Trust our staff of insurance professionals to assist you in spotting possible hazards and provide solutions for risk management and prevention. Dedicated to being your go-to insurance provider for all your personal and business needs, we service areas throughout Insurance MA and Insurance RI.',
      ],
      teamImageAlt: 'New England Family team',
      slideImageAltPrefix: 'About slide',
      rightTitle: 'Raising the Bar. Breaking the Mold',
      rightSections: [
        {
          heading: 'Stop fighting with robots',
          text: 'Stop fighting with robots for 10 mins yelling representative. Text, WhatsApp, or call a real person and get clear simple answers to all your questions.',
        },
        {
          heading: 'The Inflation Excuse',
          text: 'Ah I bet your company loooves to use this excuse on you. Inflation does not mean there are not companies willing to save you money for the right coverage.',
        },
        {
          heading: 'Claims',
          text: 'When you need insurance most we are there every step of the way. We hate when companies say they appreciate you, take your money, and then tell you to call an 800 number when you need help.',
        },
      ],
      rightIntro:
        'Our primary goal is to treat our clients better than any of our competitors so they never leave. We raise their expectations for service to a level so high if they ever have temporary amnesia and test the grass on the other side, they are quickly disappointed and come right back.',
    },
    reviews: {
      title: 'EXCELLENT',
      basedOn: 'Based on 2,832 reviews',
      verifiedBy: 'Verified by Trustindex',
      goToReview: 'Go to review',
      cards: [
        { name: 'Paulo Ferreira', time: '1 year ago', text: 'Décio, ótimo atendimento..' },
        {
          name: 'Henry Teixeira',
          time: '1 year ago',
          text: 'Thank you Angie for saving me so much money on my vehicles. It is always a pleasure seeing you.',
        },
        { name: 'Rodolfo Vital', time: '1 year ago', text: 'Thank you for your kindness and courtesy in every interaction.' },
        { name: 'Alex Huerta', time: '1 year ago', text: 'Excellent service, very friendly and professional, thank you Decio.' },
      ],
    },
  },
  es: {
    navbar: {
      myPolicy: 'Mi Póliza',
      getNewPolicy: 'Nueva Póliza',
      reviews: 'Reseñas',
      contactUs: 'Contáctanos',
      aboutUs: 'Sobre Nosotros',
      getQuote: 'Cotizar',
      language: 'Idioma',
      payMyBill: 'Pagar Factura',
      policyChange: 'Cambiar Póliza',
      certificate: 'Certificado',
      fileAClaim: 'Presentar Reclamo',
    },
    hero: {
      badge: 'Asesores de Seguros de Confianza',
      headingStart: 'No solo somos el',
      headingEnd: 'Tenemos ambas cualidades en equilibrio.',
      rotatingWords: ['mejor precio', 'mejor servicio'],
      subtext:
        'Una experiencia moderna diseñada para brindar claridad, confianza y seguridad en tu cobertura.',
      bestPrice: 'Mejor Precio Garantizado',
      getPolicy: 'Obtener Nueva Póliza',
      myPolicy: 'Mi Póliza',
    },
    contact: {
      title: 'NUESTRO EQUIPO ESTÁ LISTO PARA AYUDAR',
      text: 'Mensaje',
      whatsapp: 'WhatsApp',
      email: 'Correo',
      call: 'Llamar',
      fax: 'Fax',
      fullName: 'Nombre completo',
      emailAddress: 'Correo electrónico',
      message: 'Mensaje',
      robot: 'No soy un robot',
      submit: 'ENVIAR',
      submitting: 'Enviando...',
      success: 'Formulario enviado correctamente',
    },
    policy: {
      payMyBillTitle: 'PAGAR MI FACTURA',
      payMyBillPrompt: '¿Cómo te gustaría pagar?',
      policyChangeTitle: 'CAMBIO DE PÓLIZA',
      policyChangePrompt: '¿Cómo te gustaría hacer esto?',
      fileClaimTitle: 'PRESENTAR RECLAMO',
      fileClaimPrompt: '¿Para qué tipo de póliza es este reclamo?',
      doItHere: 'Hazlo aquí',
      text: 'Mensaje',
      whatsapp: 'WhatsApp',
      callUs: 'Llámanos',
      auto: 'Auto',
      home: 'Hogar',
      business: 'Negocio',
    },
    getNewPolicy: {
      howItWorks: 'Cómo Funciona',
      steps: [
        'Elige el tipo de póliza que deseas',
        'Responde algunas preguntas o adjunta una imagen',
        'Guarda, firma y evita problemas con las compañías de seguros',
      ],
      getStarted: 'COMENZAR',
      imageAlt: 'Oficina y soporte de pólizas',
      cards: [
        {
          title: 'Seguro para Negocio de Ecommerce:',
          text: 'Las aseguradoras cubren todo tu proceso de ecommerce desde el fabricante hasta el cliente final. En caso de imprevistos, este seguro te brinda un respaldo inmediato.',
        },
        {
          title: 'Seguro de Vida:',
          text: 'El seguro de vida garantiza que un beneficiario reciba una cantidad de dinero en caso de fallecimiento del asegurado o al vencimiento de la póliza.',
        },
        {
          title: 'Seguro de Vida para Niños:',
          text: 'El seguro de vida para niños brinda apoyo financiero a largo plazo y ayuda con estudios y gastos importantes en el futuro.',
        },
      ],
    },
    about: {
      title: 'Soluciones de Seguro para tu Familia y Negocio',
      paragraphs: [
        'En New England Family Insurance somos expertos en ofrecer la mejor capacidad de seguros para cubrir las necesidades de personas, familias y empresas en la región. Si buscas seguro de vivienda o seguro familiar para proteger a tus seres queridos, nuestro equipo está aquí para ayudarte.',
        'Con años de experiencia como consultores de seguros en Massachusetts, ofrecemos desde coberturas básicas hasta opciones completas. Trabajamos con aseguradoras importantes para darte acceso a las mejores pólizas.',
        'También ofrecemos productos específicos para proteger bienes valiosos, incluyendo planes patrimoniales, cobertura inland marine y seguro de arte. Nuestro equipo puede ayudarte con certificados de seguro y coberturas adicionales.',
        'Confía en nuestro equipo para identificar riesgos y ofrecer soluciones de prevención y gestión. Estamos comprometidos a ser tu proveedor de seguros de confianza para necesidades personales y comerciales en MA y RI.',
      ],
      teamImageAlt: 'Equipo de New England Family',
      slideImageAltPrefix: 'Diapositiva',
      rightTitle: 'Elevando el Nivel. Rompiendo el Molde',
      rightIntro:
        'Nuestro objetivo principal es tratar a nuestros clientes mejor que cualquier competidor para que nunca se vayan. Elevamos sus expectativas de servicio a un nivel tan alto que siempre regresan.',
      rightSections: [
        {
          heading: 'Deja de pelear con robots',
          text: 'Deja de perder tiempo con menús automáticos. Escribe por texto, WhatsApp o llama y habla con una persona real.',
        },
        {
          heading: 'La Excusa de la Inflación',
          text: 'La inflación no significa que no existan compañías dispuestas a ahorrarte dinero con la cobertura correcta.',
        },
        {
          heading: 'Reclamos',
          text: 'Cuando más necesitas tu seguro, estamos contigo en cada paso. No te dejamos solo con un número 800.',
        },
      ],
    },
    reviews: {
      title: 'EXCELENTE',
      basedOn: 'Basado en 2,832 reseñas',
      verifiedBy: 'Verificado por Trustindex',
      goToReview: 'Ir a la reseña',
      cards: [
        { name: 'Paulo Ferreira', time: 'hace 1 año', text: 'Décio, excelente atención..' },
        {
          name: 'Henry Teixeira',
          time: 'hace 1 año',
          text: 'Gracias Angie por ahorrarme tanto dinero en mis vehículos, siempre es un placer verte.',
        },
        { name: 'Rodolfo Vital', time: 'hace 1 año', text: 'Gracias por la amabilidad y educación en todo momento.' },
        { name: 'Alex Huerta', time: 'hace 1 año', text: 'Excelente servicio, muy amable y profesional, gracias Decio.' },
      ],
    },
  },
  pt: {
    navbar: {
      myPolicy: 'Minha Apólice',
      getNewPolicy: 'Nova Apólice',
      reviews: 'Avaliações',
      contactUs: 'Contato',
      aboutUs: 'Sobre Nós',
      getQuote: 'Fazer Cotação',
      language: 'Idioma',
      payMyBill: 'Pagar Conta',
      policyChange: 'Alterar Apólice',
      certificate: 'Certificado',
      fileAClaim: 'Abrir Sinistro',
    },
    hero: {
      badge: 'Consultores de Seguros de Confiança',
      headingStart: 'Nós não somos apenas o',
      headingEnd: 'Temos as duas qualidades na medida certa.',
      rotatingWords: ['melhor preço', 'melhor serviço'],
      subtext:
        'Uma experiência moderna baseada em clareza, confiança e segurança de cobertura para cada etapa da vida.',
      bestPrice: 'Melhor Preço Garantido',
      getPolicy: 'Nova Apólice',
      myPolicy: 'Minha Apólice',
    },
    contact: {
      title: 'NOSSA EQUIPE ESTÁ PRONTA PARA AJUDAR',
      text: 'Mensagem',
      whatsapp: 'WhatsApp',
      email: 'Email',
      call: 'Ligar',
      fax: 'Fax',
      fullName: 'Nome completo',
      emailAddress: 'Email',
      message: 'Mensagem',
      robot: 'Não sou um robô',
      submit: 'ENVIAR',
      submitting: 'Enviando...',
      success: 'Formulário enviado com sucesso',
    },
    policy: {
      payMyBillTitle: 'PAGAR MINHA CONTA',
      payMyBillPrompt: 'Como você gostaria de pagar?',
      policyChangeTitle: 'ALTERAÇÃO DE APÓLICE',
      policyChangePrompt: 'Como você gostaria de fazer isso?',
      fileClaimTitle: 'ABRIR SINISTRO',
      fileClaimPrompt: 'Para qual tipo de apólice é este sinistro?',
      doItHere: 'Fazer aqui',
      text: 'Mensagem',
      whatsapp: 'WhatsApp',
      callUs: 'Ligue para nós',
      auto: 'Auto',
      home: 'Casa',
      business: 'Empresa',
    },
    getNewPolicy: {
      howItWorks: 'Como Funciona',
      steps: [
        'Escolha o tipo de apólice que você deseja',
        'Responda algumas perguntas ou envie uma foto',
        'Salve, assine e evite problemas com seguradoras',
      ],
      getStarted: 'COMEÇAR',
      imageAlt: 'Escritório e suporte de apólices',
      cards: [
        {
          title: 'Seguro para Ecommerce:',
          text: 'As seguradoras cobrem todo o processo do seu ecommerce, do fabricante ao consumidor final. Em casos de imprevistos, você tem um plano de apoio imediato.',
        },
        {
          title: 'Seguro de Vida:',
          text: 'O seguro de vida garante que um beneficiário receba um valor em caso de falecimento do segurado ou no vencimento da apólice.',
        },
        {
          title: 'Seguro de Vida para Crianças:',
          text: 'Oferece apoio financeiro de longo prazo e ajuda com estudos e despesas importantes no futuro.',
        },
      ],
    },
    about: {
      title: 'Soluções de Seguro para sua Família e Negócio',
      paragraphs: [
        'Na New England Family Insurance, somos especialistas em oferecer as melhores soluções de seguro para pessoas, famílias e empresas da região. Se você procura seguro residencial ou familiar, nossa equipe está pronta para ajudar.',
        'Com anos de experiência como consultores de seguro em Massachusetts, oferecemos desde coberturas básicas até opções completas. Trabalhamos com grandes seguradoras para garantir as melhores apólices.',
        'Também oferecemos produtos para proteger bens valiosos, incluindo planejamento patrimonial, inland marine e seguro de arte. Nossa equipe pode ajudar com certificados e coberturas adicionais.',
        'Conte com nossos profissionais para identificar riscos e oferecer soluções de prevenção e gestão. Estamos comprometidos em ser sua seguradora de confiança em MA e RI.',
      ],
      teamImageAlt: 'Equipe New England Family',
      slideImageAltPrefix: 'Slide',
      rightTitle: 'Elevando o Padrão. Quebrando o Modelo',
      rightIntro:
        'Nosso principal objetivo é tratar nossos clientes melhor do que qualquer concorrente para que nunca queiram sair. Elevamos a experiência de atendimento a um nível muito alto.',
      rightSections: [
        {
          heading: 'Pare de lutar com robôs',
          text: 'Fale com uma pessoa real por texto, WhatsApp ou ligação e receba respostas simples e claras.',
        },
        {
          heading: 'A Desculpa da Inflação',
          text: 'Inflação não significa que não existam empresas dispostas a economizar seu dinheiro com a cobertura certa.',
        },
        {
          heading: 'Sinistros',
          text: 'Quando você mais precisa, estamos com você em cada etapa. Nada de te deixar sozinho com um número 0800.',
        },
      ],
    },
    reviews: {
      title: 'EXCELENTE',
      basedOn: 'Baseado em 2.832 avaliações',
      verifiedBy: 'Verificado pela Trustindex',
      goToReview: 'Ir para avaliação',
      cards: [
        { name: 'Paulo Ferreira', time: '1 ano atrás', text: 'Décio, ótimo atendimento..' },
        {
          name: 'Henry Teixeira',
          time: '1 ano atrás',
          text: 'Obrigado Angie por me ajudar a economizar tanto nos meus veículos. É sempre um prazer.',
        },
        { name: 'Rodolfo Vital', time: '1 ano atrás', text: 'Obrigado pela gentileza e educação em todo atendimento.' },
        { name: 'Alex Huerta', time: '1 ano atrás', text: 'Excelente serviço, muito amigável e profissional, obrigado Decio.' },
      ],
    },
  },
}

const languageMeta = {
  en: { label: 'English', flagUrl: 'https://flagcdn.com/w40/us.png', alt: 'United States flag' },
  es: { label: 'Español', flagUrl: 'https://flagcdn.com/w40/es.png', alt: 'Spain flag' },
  pt: { label: 'Português', flagUrl: 'https://flagcdn.com/w40/pt.png', alt: 'Portugal flag' },
}

const I18nContext = createContext(null)

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('nef_language') || 'en')

  useEffect(() => {
    localStorage.setItem('nef_language', language)
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      languageMeta,
      t: translations[language],
    }),
    [language],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

/** Hook is intentionally co-located with `I18nProvider` for a single module boundary. */
// eslint-disable-next-line react-refresh/only-export-components -- provider + hook pattern
export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used inside I18nProvider')
  }
  return context
}
