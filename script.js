'use strict';

/* Update the main destination URLs here. Markup contains the same URLs as a no-JavaScript fallback. */
const LINKS = Object.freeze({
  resources: 'https://aipmlab.propertydex.xyz/resources',
  youtube: 'https://openinapp.link/aipmlab',
  discovery: 'https://calendly.com/trigosatconsulting/30min',
  framework: 'https://framework.propertydex.xyz/?open=signup',
  propertydex: 'https://propertydex.xyz',
  // Temporary destination for the Connect card. Replace it here when a dedicated community channel is available.
  community: 'https://openinapp.link/aipmlab'
});

const TRANSLATIONS = {
  en: {
    skipLink: 'Skip to main content', menuLabel: 'Open navigation', navResources: 'Resources', navAudience: 'Who It’s For', navCase: 'Case Study', navCall: 'Book a Call',
    heroEyebrow: 'AI PM LAB · by TrigoSat Consulting', heroTitle: 'Practical AI systems for projects, operations and business.', heroText: 'Turn scattered information, repetitive work and unclear processes into practical AI-assisted workflows.', heroPrimary: 'Explore Free AI Resources', heroSecondary: 'Book a Discovery Call', heroNote: 'A practical laboratory for professionals, small businesses and project teams.', visualCaption: 'Structured systems. Human approval.',
    quickTitle: 'Quick Access', quickSubtitle: 'Explore the main AI PM Lab resources, channels and case studies.', quickResourcesTitle: 'Free AI Resources', quickResourcesText: 'Guides, templates and practical AI workflows.', quickYoutubeTitle: 'AI PM Lab on YouTube', quickYoutubeText: 'Practical tutorials, demonstrations and use cases.', quickCallTitle: 'Book a Discovery Call', quickCallText: 'Discuss a workflow, project or business process.', quickFrameworkTitle: 'AI PM Framework', quickFrameworkText: 'Explore the structure behind practical AI-assisted workflows.', quickPropertyTitle: 'PropertyDEX Case Study', quickPropertyText: 'Real estate, project workflows and tokenization.', quickCommunityTitle: 'Connect with AI PM Lab', quickCommunityText: 'Follow updates, new resources and upcoming content.', quickOpenButton: 'Open link', quickBookButton: 'Book now', quickFollowButton: 'Follow',
    introKicker: 'From complexity to clarity', introTitle: 'AI that supports the way real work gets done.', introText: 'AI PM Lab helps professionals, small businesses and project teams turn scattered information, repetitive work and unclear processes into practical AI-assisted workflows.',
    audienceKicker: 'Built for practical work', audienceTitle: 'Who AI PM Lab is for', audienceSmallTitle: 'Small businesses', audienceSmallText: 'Organize requests, documents, recurring work and operational processes.', audiencePmTitle: 'Project managers', audiencePmText: 'Structure project information, decisions, risks, tasks and reporting.', audienceRealTitle: 'Real estate professionals', audienceRealText: 'Improve property, client, vendor and workflow management with practical AI systems.', audienceIndependentTitle: 'Independent professionals', audienceIndependentText: 'Build repeatable systems without needing a large technical team.',
    findKicker: 'Useful by design', findTitle: 'What you will find', findIntro: 'Resources that connect AI capabilities to specific activities, decisions and business contexts.', findWorkflowTitle: 'Practical AI Workflows', findWorkflowText: 'Step-by-step systems for real business and project activities.', findGuidesTitle: 'Free Guides and Resources', findGuidesText: 'Downloadable resources designed to be used, not only read.', findTutorialsTitle: 'Tutorials and Demonstrations', findTutorialsText: 'Practical videos showing how AI tools are applied.', findCasesTitle: 'Business Case Studies', findCasesText: 'Realistic examples connecting AI, operations, project management and real estate.',
    resourcesKicker: 'Your next step', resourcesTitle: 'Start here', freeLabel: 'Free AI resources', resourcesFreeTitle: 'Free AI Workflow Resources', resourcesFreeText: 'Access practical guides, templates and workflow examples for business and project work.', resourcesFreeButton: 'Explore Free Resources', resourcesYoutubeTitle: 'Watch AI PM Lab on YouTube', resourcesYoutubeText: 'See practical demonstrations of ChatGPT, Codex, AI workflows and project systems.', resourcesYoutubeButton: 'Watch the Tutorials', callLabel: 'Discovery call', resourcesCallTitle: 'Discuss Your Workflow', resourcesCallText: 'Book a 30-minute introductory call to discuss a business process, project workflow or operational challenge.', resourcesCallButton: 'Book a Discovery Call',
    caseKicker: 'Featured Case Study', caseSubtitle: 'AI, project workflows and real estate tokenization', caseText: 'PropertyDEX is presented as a practical case study showing how project management, digital workflows, business modelling and emerging technology can be organized within one structured initiative.', caseFramework: 'Explore the Framework', caseWebsite: 'Visit PropertyDEX', caseNote: 'PropertyDEX is presented as a project and technology case study. This page does not provide financial or investment advice.',
    processKicker: 'A structured approach', processTitle: 'How AI PM Lab works', processIntro: 'The work starts with the operating context—not with a prompt box.', processIdentifyTitle: 'Identify', processIdentifyText: 'Identify the operational problem, missing information and desired result.', processStructureTitle: 'Structure', processStructureText: 'Convert scattered inputs into a clear workflow, project or operating system.', processBuildTitle: 'Build', processBuildText: 'Create practical documents, tools, prompts, automations or task structures.', processValidateTitle: 'Validate', processValidateText: 'Review outputs, correct errors and retain human approval over important decisions.',
    finalKicker: 'Start with one real process', finalTitle: 'Have a workflow that is still managed manually?', finalText: 'Bring one real process, recurring activity or project challenge. The first step is understanding what should be organized before deciding what should be automated.', finalResources: 'Explore Free Resources', finalCall: 'Book a Discovery Call',
    footerDescription: 'An educational and consulting initiative focused on practical AI adoption for projects, operations and business.', footerExplore: 'Explore', footerResources: 'Free Resources', footerCall: 'Discovery Call', footerContact: 'Contact', contactEmail: 'trigosatconsulting@gmail.com', privacyNote: 'Privacy: this site does not use cookies or tracking tools. External services have their own privacy policies.', rights: 'All rights reserved.', backTop: 'Back to top ↑',
    resourcesAria: 'Open AI PM Lab free resources in a new tab', youtubeAria: 'Open AI PM Lab on YouTube in a new tab', callAria: 'Book a discovery call in a new tab', frameworkAria: 'Open the PropertyDEX framework in a new tab', propertydexAria: 'Visit the PropertyDEX website in a new tab', communityAria: 'Follow AI PM Lab updates on YouTube in a new tab'
  },
  it: {
    skipLink: 'Vai al contenuto principale', menuLabel: 'Apri la navigazione', navResources: 'Risorse', navAudience: 'A chi è rivolto', navCase: 'Caso studio', navCall: 'Prenota una call',
    heroEyebrow: 'AI PM LAB · by TrigoSat Consulting', heroTitle: 'Sistemi AI pratici per progetti, operazioni e business.', heroText: 'Trasforma informazioni sparse, attività ripetitive e processi poco chiari in flussi di lavoro pratici supportati dall’AI.', heroPrimary: 'Esplora le risorse AI gratuite', heroSecondary: 'Prenota una discovery call', heroNote: 'Un laboratorio pratico per professionisti, piccole imprese e team di progetto.', visualCaption: 'Sistemi strutturati. Approvazione umana.',
    quickTitle: 'Accesso rapido', quickSubtitle: 'Esplora le principali risorse, i canali e i casi studio di AI PM Lab.', quickResourcesTitle: 'Risorse AI gratuite', quickResourcesText: 'Guide, modelli e workflow AI pratici.', quickYoutubeTitle: 'AI PM Lab su YouTube', quickYoutubeText: 'Tutorial pratici, dimostrazioni e casi d’uso.', quickCallTitle: 'Prenota una discovery call', quickCallText: 'Parla di un workflow, un progetto o un processo aziendale.', quickFrameworkTitle: 'Framework AI PM', quickFrameworkText: 'Esplora la struttura alla base dei workflow supportati dall’AI.', quickPropertyTitle: 'Caso studio PropertyDEX', quickPropertyText: 'Real estate, workflow di progetto e tokenizzazione.', quickCommunityTitle: 'Connettiti con AI PM Lab', quickCommunityText: 'Segui aggiornamenti, nuove risorse e prossimi contenuti.', quickOpenButton: 'Apri link', quickBookButton: 'Prenota', quickFollowButton: 'Segui',
    introKicker: 'Dalla complessità alla chiarezza', introTitle: 'AI a supporto del lavoro reale.', introText: 'AI PM Lab aiuta professionisti, piccole imprese e team di progetto a trasformare informazioni sparse, attività ripetitive e processi poco chiari in flussi di lavoro pratici supportati dall’AI.',
    audienceKicker: 'Pensato per il lavoro concreto', audienceTitle: 'A chi è rivolto AI PM Lab', audienceSmallTitle: 'Piccole imprese', audienceSmallText: 'Organizza richieste, documenti, attività ricorrenti e processi operativi.', audiencePmTitle: 'Project manager', audiencePmText: 'Struttura informazioni di progetto, decisioni, rischi, attività e report.', audienceRealTitle: 'Professionisti immobiliari', audienceRealText: 'Migliora la gestione di immobili, clienti, fornitori e flussi di lavoro con sistemi AI pratici.', audienceIndependentTitle: 'Professionisti indipendenti', audienceIndependentText: 'Costruisci sistemi ripetibili senza aver bisogno di un grande team tecnico.',
    findKicker: 'Utile per scelta', findTitle: 'Cosa troverai', findIntro: 'Risorse che collegano le capacità dell’AI ad attività, decisioni e contesti aziendali specifici.', findWorkflowTitle: 'Flussi di lavoro AI pratici', findWorkflowText: 'Sistemi passo-passo per attività aziendali e di progetto reali.', findGuidesTitle: 'Guide e risorse gratuite', findGuidesText: 'Risorse scaricabili pensate per essere utilizzate, non solo lette.', findTutorialsTitle: 'Tutorial e dimostrazioni', findTutorialsText: 'Video pratici che mostrano come vengono applicati gli strumenti AI.', findCasesTitle: 'Casi studio aziendali', findCasesText: 'Esempi realistici che collegano AI, operazioni, project management e real estate.',
    resourcesKicker: 'Il tuo prossimo passo', resourcesTitle: 'Inizia da qui', freeLabel: 'Risorse AI gratuite', resourcesFreeTitle: 'Risorse gratuite per workflow AI', resourcesFreeText: 'Accedi a guide pratiche, modelli ed esempi di workflow per attività aziendali e di progetto.', resourcesFreeButton: 'Esplora le risorse gratuite', resourcesYoutubeTitle: 'Guarda AI PM Lab su YouTube', resourcesYoutubeText: 'Scopri dimostrazioni pratiche di ChatGPT, Codex, workflow AI e sistemi di progetto.', resourcesYoutubeButton: 'Guarda i tutorial', callLabel: 'Discovery call', resourcesCallTitle: 'Parliamo del tuo workflow', resourcesCallText: 'Prenota una call introduttiva di 30 minuti per discutere un processo aziendale, un workflow di progetto o una sfida operativa.', resourcesCallButton: 'Prenota una discovery call',
    caseKicker: 'Caso studio in evidenza', caseSubtitle: 'AI, workflow di progetto e tokenizzazione immobiliare', caseText: 'PropertyDEX viene presentato come caso studio pratico che mostra come project management, workflow digitali, modellazione del business e tecnologie emergenti possano essere organizzati in un’unica iniziativa strutturata.', caseFramework: 'Esplora il framework', caseWebsite: 'Visita PropertyDEX', caseNote: 'PropertyDEX è presentato come caso studio di progetto e tecnologia. Questa pagina non fornisce consulenza finanziaria o di investimento.',
    processKicker: 'Un approccio strutturato', processTitle: 'Come lavora AI PM Lab', processIntro: 'Il lavoro parte dal contesto operativo, non da una semplice casella per i prompt.', processIdentifyTitle: 'Identifica', processIdentifyText: 'Identifica il problema operativo, le informazioni mancanti e il risultato desiderato.', processStructureTitle: 'Struttura', processStructureText: 'Trasforma input sparsi in un workflow, progetto o sistema operativo chiaro.', processBuildTitle: 'Costruisci', processBuildText: 'Crea documenti, strumenti, prompt, automazioni o strutture di attività pratiche.', processValidateTitle: 'Valida', processValidateText: 'Rivedi i risultati, correggi gli errori e mantieni l’approvazione umana sulle decisioni importanti.',
    finalKicker: 'Parti da un processo reale', finalTitle: 'Hai un workflow ancora gestito manualmente?', finalText: 'Porta un processo reale, un’attività ricorrente o una sfida di progetto. Il primo passo è capire cosa organizzare prima di decidere cosa automatizzare.', finalResources: 'Esplora le risorse gratuite', finalCall: 'Prenota una discovery call',
    footerDescription: 'Un’iniziativa educativa e di consulenza dedicata all’adozione pratica dell’AI per progetti, operazioni e business.', footerExplore: 'Esplora', footerResources: 'Risorse gratuite', footerCall: 'Discovery call', footerContact: 'Contatti', contactEmail: 'trigosatconsulting@gmail.com', privacyNote: 'Privacy: questo sito non utilizza cookie o strumenti di tracciamento. I servizi esterni hanno le proprie informative sulla privacy.', rights: 'Tutti i diritti riservati.', backTop: 'Torna in alto ↑',
    resourcesAria: 'Apri le risorse gratuite di AI PM Lab in una nuova scheda', youtubeAria: 'Apri AI PM Lab su YouTube in una nuova scheda', callAria: 'Prenota una discovery call in una nuova scheda', frameworkAria: 'Apri il framework PropertyDEX in una nuova scheda', propertydexAria: 'Visita il sito PropertyDEX in una nuova scheda', communityAria: 'Segui gli aggiornamenti di AI PM Lab su YouTube in una nuova scheda'
  }
};

const languageButtons = document.querySelectorAll('[data-language]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const navigation = document.querySelector('[data-navigation]');

function setLanguage(language) {
  const selectedLanguage = TRANSLATIONS[language] ? language : 'en';
  const dictionary = TRANSLATIONS[selectedLanguage];

  document.documentElement.lang = selectedLanguage;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });
  document.querySelectorAll('[data-aria-i18n]').forEach((element) => {
    const key = element.dataset.ariaI18n;
    if (dictionary[key]) element.setAttribute('aria-label', dictionary[key]);
  });
  languageButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.language === selectedLanguage));
  });
  try {
    localStorage.setItem('ai-pm-lab-language', selectedLanguage);
  } catch (_) {
    // The page remains bilingual when storage is unavailable.
  }
}

document.querySelectorAll('[data-link]').forEach((link) => {
  const destination = LINKS[link.dataset.link];
  if (destination) link.href = destination;
});

languageButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});

function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
    menuToggle.focus();
  }
});

let preferredLanguage = 'en';
try {
  preferredLanguage = localStorage.getItem('ai-pm-lab-language') || 'en';
} catch (_) {
  preferredLanguage = 'en';
}
setLanguage(preferredLanguage);

document.querySelector('[data-current-year]').textContent = new Date().getFullYear();

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reducedMotion && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('reveal-ready');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}
