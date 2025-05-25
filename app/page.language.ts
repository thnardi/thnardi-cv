import { createLanguageObject, LanguageObject } from "languages-module";

export interface CVLanguage extends LanguageObject {
  title: string;
  description: string;
  skills: string;
  experience: string;
  projects: string;
  contact: string;
  languagePt: string;
  languageEn: string;
  languageEs: string;
  experienceDescription: string;
  location: string;
  aboutMe: string;
  aboutMeDescriptionP1: string;
  aboutMeDescriptionP2: string;
  aboutMeDescriptionP3: string;
  reactAndReactNative: string;
  years: string;
  languageIntermediary: string;
  languageBasic: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  downloadCv: string;
  systemAnalyst: string;
  developerReactPleno: string;
  computerScienceProfessor: string;
  freelancer: string;
  mtcidadao: string;
  sisgesp: string;
  fialBarbantes: string;
  fialBarbantesDescription: string;
  fialBarbantesFeatures: string;
  fialBarbantesLink: string;
  rw3Tecnologia: string;
  mti: string;
  ifpr: string;
  developerReactPlenoDescriptionP1: string;
  developerReactPlenoDescriptionMTIP1: string;
  developerReactPlenoDescriptionMTIP2: string;
  developerReactPlenoDescriptionMTIP3: string;
  developerReactPlenoDescriptionMTIP4: string;
  developerReactPlenoDescriptionMTIP5: string;
  developerReactPlenoDescriptionMTIP6: string;
  computerScienceProfessorDescriptionP1: string;
  computerScienceProfessorDescriptionP2: string;
  freelancerDescriptionP1: string;
  freelancerDescriptionP2: string;
  freelancerDescriptionP3: string;
  freelancerDescriptionP4: string;
  freelancerDescriptionP5: string;
  systemAnalystDescriptionP1: string;
  systemAnalystDescriptionP2: string;
  workExperience: string;
  mtcidadaoDescription: string;
  sisgespDescription: string;
  restApi: string;
  serverSideRendering: string;
  php8: string;
  biometry: string;
  notifications: string;
  keycloack: string;
}

const language = {
  pt_br: {
    title: "Thiago A. Nardi",
    description: "Desenvolvedor Full Stack",
    skills: "Habilidades",
    experience: "Experiência",
    projects: "Projetos",
    contact: "Contato",
    languagePt: "Português",
    languageEn: "Inglês",
    languageEs: "Espanhol",
    experienceDescription:
      "Possui +5 anos de experiência em desenvolvimento de aplicações web e mobile com foco em React e React-Native. Atualmente faz parte do time de desenvolvimento do app MTCIDADÃO, onde atua como desenvolvedor React Pleno, tanto no front-end desktop quanto no mobile.",
    location: "Toledo, PR - Brasil",
    aboutMe: "Sobre mim",
    aboutMeDescriptionP1:
      "Comecei em 2015 como freelancer em projetos de website para pequenas empresas da minha cidade. Gradativamente os projetos foram se tornando mais complexos e a minha experiência foi se expandindo.",
    aboutMeDescriptionP2:
      "Durante este processo tive a oportunidade de atuar em todas as etapas, desde a concepção, venda desenvolvimento, implantação e manutenção, lidando diretamente com clientes e usuários.",
    aboutMeDescriptionP3:
      "Faço parte atualmente como desenvolvedor pleno de um time focado no produto MTCIDADAO, destinado ao cidadão do estado do Mato Grosso, com +250k usuários.",
    reactAndReactNative: "React e RN",
    years: "anos",
    languageIntermediary: "Intermediário",
    languageBasic: "Básico",
    email: "Email",
    phone: "Telefone",
    linkedin: "LinkedIn",
    github: "GitHub",
    downloadCv: "Download CV",
    developerReactPleno: "Desenvolvedor React Pleno",
    computerScienceProfessor: "Professor de Informática",
    freelancer: "Autônomo",
    systemAnalyst: "Analista de Sistemas",
    mtcidadao: "MTCIDADAO",
    sisgesp: "SISGESP",
    fialBarbantes: "Fial Barbantes",
    fialBarbantesDescription:
      "Site institucional com sistema de gerenciamento de conteúdo e integração com sistema de gestão da indústria.",
    fialBarbantesFeatures: "Features",
    fialBarbantesLink: "Link",
    rw3Tecnologia: "RW3 Tecnologia",
    mti: "MTI - Empresa Mato-Grossense de Tecnologia da Informação",
    ifpr: "Instituto Federal do Paraná - IFPR.",
    developerReactPlenoDescriptionP1:
      "Contratado pela RW3 para continuar como Desenvolvedor Pleno React na mesma equipe de desenvolvimento da MTCIDADAO após o término do contrato temporário.",
    developerReactPlenoDescriptionMTIP1:
      "Processo seletivo temporário (2 anos) para desenvolvedor React Pleno.",
    developerReactPlenoDescriptionMTIP2:
      "Sustentação e desenvolvimento de novas funcionalidades de aplicações web com React e React Native.",
    developerReactPlenoDescriptionMTIP3:
      "Experiência com publicação de Apps no Google Play e App Store.",
    developerReactPlenoDescriptionMTIP4:
      "Participação de time de desenvolvimento agile na metodologia SCRUM.",
    developerReactPlenoDescriptionMTIP5:
      "Utilização de Openshift e GCP para consulta de logs e deploy de aplicações.",
    developerReactPlenoDescriptionMTIP6:
      "Utilização de Node.js para construção de endpoints e integração com APIs.",
    computerScienceProfessorDescriptionP1:
      "Professor substituto do Curso técnico em informática do IFPR.",
    computerScienceProfessorDescriptionP2:
      "Aulas de Banco de dados, Redes, S. O. e Engenharia de Software.",
    freelancerDescriptionP1:
      "Apresentação e venda de projetos de sistemas web, mobile e desktop.",
    freelancerDescriptionP2: "Programador Full Stack.",
    freelancerDescriptionP3: "Suporte técnico aos clientes.",
    freelancerDescriptionP4:
      "Lider técnico de time envolvendo até 5 pessoas (a partir de 2018).",
    freelancerDescriptionP5:
      "Diversas stacks ao longo do tempo, como: PHP, Node.js, React, React Native, etc.",
    systemAnalystDescriptionP1:
      "Departamento de TI: manutenção básica de hardware e software incluindo suporte ao usuário presencialmente e via acesso remoto.",
    systemAnalystDescriptionP2:
      "Configuração de impressoras, redes, servidores linux, entre outras atividades.",
    workExperience: "Experiência Profissional",
    mtcidadaoDescription:
      "Aplicativo para o cidadão do estado do Mato Grosso. O app possui integrações com diversos órgãos como Detran e Sesp. Oferece serviços como RG Digital, CRLV, pagamento de IPVA, transferência de veículos, carteira do autista, entre outros.",
    sisgespDescription:
      "Sistema de Gestão de Serviços Públicos para prefeituras. Módulos de carta de Serviços, Controlde de Equipamentos e Controle de Endemias, incluíndo interface web e App. App RN com modo offline para agentes de endemia atuarem no campo (com sistema de sincronização de dados).",
    restApi: "REST API",
    serverSideRendering: "Server Side Rendering",
    php8: "PHP 8",
    biometry: "Biometria",
    notifications: "Envio de notificações",
    keycloack: "Login com Keycloack",
  } as CVLanguage,
  es_es: {
    title: "Thiago A. Nardi",
    description: "Desarrollador Full Stack",
    skills: "Habilidades",
    experience: "Experiencia",
    projects: "Proyectos",
    contact: "Contacto",
    languagePt: "Português",
    languageEn: "Inglês",
    languageEs: "Español",
    experienceDescription:
      "Tiene más de 5 años de experiencia en el desarrollo de aplicaciones web y móviles con enfoque en React y React-Native. Actualmente forma parte del equipo de desarrollo del app MTCIDADÃO, donde trabaja como desarrollador React Pleno, tanto en el front-end de escritorio como en el móvil.",
    location: "Toledo, PR - Brasil",
    aboutMe: "Acerca de mí",
    aboutMeDescriptionP1:
      "Comencé en 2015 como freelancer en proyectos de sitios web para pequeñas empresas de mi ciudad. Gradualmente los proyectos se fueron volviendo más complejos y mi experiencia se fue expandiendo.",
    aboutMeDescriptionP2:
      "Durante este proceso tuve la oportunidad de trabajar en todas las etapas, desde la concepción, venta, desarrollo, implementación y mantenimiento, tratando directamente con clientes y usuarios.",
    aboutMeDescriptionP3:
      "Actualmente formo parte como desarrollador pleno de un equipo enfocado en el producto MTCIDADAO, destinado al ciudadano del estado de Mato Grosso, con +250k usuarios.",
    reactAndReactNative: "React e RN",
    years: "años",
    languageIntermediary: "Intermedio",
    languageBasic: "Básico",
    email: "Email",
    phone: "Teléfono",
    linkedin: "LinkedIn",
    github: "GitHub",
    downloadCv: "Descargar CV",
    developerReactPleno: "Desarrollador React Pleno",
    computerScienceProfessor: "Profesor de Informática",
    freelancer: "Autónomo",
    systemAnalyst: "Analista de Sistemas",
    mtcidadao: "MTCIDADAO",
    sisgesp: "SISGESP",
    fialBarbantes: "Fial Barbantes",
    fialBarbantesFeatures: "Features",
    fialBarbantesLink: "Link",
    rw3Tecnologia: "RW3 Tecnologia",
    mti: "MTI - Empresa Mato-Grossense de Tecnologia da Informação",
    ifpr: "Instituto Federal do Paraná - IFPR.",
    developerReactPlenoDescriptionP1:
      "Contratado por RW3 para continuar como Desarrollador Completo de React en el mismo equipo de desarrollo de MTCIDADAO luego de finalizar el contrato temporal",
    developerReactPlenoDescriptionMTIP1:
      "Proceso selectivo temporal (2 años) para desarrollador React Pleno.",
    developerReactPlenoDescriptionMTIP2:
      "Mantenimiento y desarrollo de nuevas funcionalidades para aplicaciones web con React y React Native.",
    developerReactPlenoDescriptionMTIP3:
      "Experiencia con publicación de Apps en Google Play y App Store.",
    developerReactPlenoDescriptionMTIP4:
      "Participación en el equipo de desarrollo ágil en la metodología SCRUM.",
    developerReactPlenoDescriptionMTIP5:
      "Utilización de Openshift y GCP para consulta de logs y despliegue de aplicaciones.",
    developerReactPlenoDescriptionMTIP6:
      "Utilización de Node.js para construcción de endpoints e integración con APIs.",
    computerScienceProfessorDescriptionP1:
      "Profesor sustituto del Curso técnico en informática del IFPR.",
    computerScienceProfessorDescriptionP2:
      "Clases de Base de datos, Redes, Sistemas Operativos e Ingeniería de Software.",
    freelancerDescriptionP1:
      "Presentación y venta de proyectos de sistemas web, móviles y de escritorio.",
    freelancerDescriptionP2: "Programador Full Stack.",
    freelancerDescriptionP3: "Soporte técnico a los clientes.",
    freelancerDescriptionP4:
      "Líder técnico de equipos involucrando hasta 5 personas (desde 2018).",
    freelancerDescriptionP5:
      "Diversas tecnologías a lo largo del tiempo, como: PHP, Node.js, React, React Native, etc.",
    systemAnalystDescriptionP1:
      "Departamento de TI: mantenimiento básico de hardware y software incluyendo soporte al usuario presencial y por acceso remoto.",
    systemAnalystDescriptionP2:
      "Configuración de impresoras, redes, servidores Linux, entre otras actividades.",
    workExperience: "Experiencia Profesional",
    mtcidadaoDescription:
      "Aplicación para el ciudadano del estado de Mato Grosso. La app posee integraciones con diversos órganos como Detran y Sesp. Ofrece servicios como RG Digital, CRLV, pago de IPVA, transferencia de vehículos, carné del autista, entre otros.",
    sisgespDescription:
      "Sistema de Gestión de Servicios Públicos para municipios. Módulos de Carta de Servicios, Control de Equipamientos y Control de Endemias, incluyendo interfaz web y App. App RN con modo offline para agentes de endemia trabajar en el campo (con sistema de sincronización de datos).",
    fialBarbantesDescription:
      "Sitio institucional con sistema de gestión de contenido e integración con sistema de gestión de la industria.",
    restApi: "REST API",
    serverSideRendering: "Server Side Rendering",
    php8: "PHP 8",
    biometry: "Biometría",
    notifications: "Envío de notificaciones",
    keycloack: "Inicio de sesión con Keycloack",
  } as CVLanguage,
  en_us: {
    title: "Thiago A. Nardi",
    description: "Full Stack Developer",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    languagePt: "Portuguese",
    languageEn: "English",
    languageEs: "Spanish",
    experienceDescription:
      "+5 years of experience in web and mobile application development with focus on React and React-Native. Currently in the development team of the MTCIDADÃO app, where works as Plain React Developer.",
    location: "Toledo, PR - Brazil",
    aboutMe: "About me",
    aboutMeDescriptionP1:
      "I started in 2015 as a freelancer in projects for small companies in my city. Gradually, the projects became more complex and my experience expanded.",
    aboutMeDescriptionP2:
      "During this process, I had the opportunity to work in all stages, from conception, sale, development, implementation and maintenance, dealing directly with clients and users.",
    aboutMeDescriptionP3:
      "I am currently part of a team focused on the MTCIDADÃO product, aimed at the citizen of the state of Mato Grosso, with +250k users.",
    reactAndReactNative: "React and RN",
    years: "years",
    languageIntermediary: "Intermediary",
    languageBasic: "Basic",
    email: "Email",
    phone: "Phone",
    linkedin: "LinkedIn",
    github: "GitHub",
    downloadCv: "Download CV",
    developerReactPleno: "React Developer",
    computerScienceProfessor: "Computer Science Professor",
    freelancer: "Freelancer",
    systemAnalyst: "System Analyst",
    mtcidadao: "MTCIDADAO",
    sisgesp: "SISGESP",
    fialBarbantes: "Fial Barbantes",
    fialBarbantesFeatures: "Features",
    fialBarbantesLink: "Link",
    rw3Tecnologia: "RW3 Tecnologia",
    mti: "MTI - Empresa Mato-Grossense de Tecnologia da Informação",
    ifpr: "Instituto Federal do Paraná - IFPR.",
    developerReactPlenoDescriptionP1:
      "Hired by RW3 to continue as React Full Developer in the same development team of MTCIDADAO after the end of temporary contract.",
    developerReactPlenoDescriptionMTIP1:
      "Temporary selective process (2 years) for React Pleno developer.",
    developerReactPlenoDescriptionMTIP2:
      "Maintenance and development of new features for web applications with React and React Native.",
    developerReactPlenoDescriptionMTIP3:
      "Experience with App publication in Google Play and App Store.",
    developerReactPlenoDescriptionMTIP4:
      "Participation in the agile development team in the SCRUM methodology.",
    developerReactPlenoDescriptionMTIP5:
      "Utilization of Openshift and GCP for log consultation and application deployment.",
    developerReactPlenoDescriptionMTIP6:
      "Utilization of Node.js for endpoint construction and integration with APIs.",
    computerScienceProfessorDescriptionP1:
      "Substitute professor for the Technical Computer Science Course at IFPR.",
    computerScienceProfessorDescriptionP2:
      "Classes in Database, Networks, Operating Systems and Software Engineering.",
    freelancerDescriptionP1:
      "Presentation and sale of web, mobile and desktop system projects.",
    freelancerDescriptionP2: "Full Stack Developer.",
    freelancerDescriptionP3: "Technical support for clients.",
    freelancerDescriptionP4:
      "Technical leader of teams involving up to 5 people (from 2018).",
    freelancerDescriptionP5:
      "Various stacks over time, such as: PHP, Node.js, React, React Native, etc.",
    systemAnalystDescriptionP1:
      "IT Department: basic hardware and software maintenance including on-site and remote user support.",
    systemAnalystDescriptionP2:
      "Printer configuration, networks, Linux servers, among other activities.",
    workExperience: "Work Experience",
    mtcidadaoDescription:
      "Application for citizens of the state of Mato Grosso. The app has integrations with various agencies such as Detran and Sesp. Offers services such as Digital ID, CRLV, IPVA payment, vehicle transfer, autism card, among others.",
    sisgespDescription:
      "Public Service Management System for municipalities. Service Letter, Equipment Control and Endemic Control modules, including web interface and App. RN App with offline mode for endemic agents to work in the field (with data synchronization system).",
    fialBarbantesDescription:
      "Institutional website with content management system and integration with industry management system.",
    restApi: "REST API",
    serverSideRendering: "Server Side Rendering",
    php8: "PHP 8",
    biometry: "Biometry",
    notifications: "Notifications",
    keycloack: "Keycloack Login",
  } as CVLanguage,
};

export const languageObject = createLanguageObject(
  language.pt_br,
  language.es_es,
  language.en_us
);
