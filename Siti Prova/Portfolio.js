// ==============================
// Barra di ricerca
// ==============================
const searchBar = document.getElementById('searchBar');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const lenses = document.querySelectorAll('.lente'); // include desktop e mobile

lenses.forEach(lente => {
  lente.addEventListener('click', () => {
    searchBar.classList.toggle('active');
    if (searchBar.classList.contains('active')) {
      searchInput.focus();
    }
  });
});

searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim().toLowerCase();

  const sections = {
    'chi siamo': 'chi-siamo',
    'servizi': 'servizi',
    'contatti': 'Contatti',
    'home': 'home',
    'orologio': 'orologio-section',
    'portfolio': 'Lavori',
    'competenze': 'Competenze',
    'team': 'team',
    'testimonianze': 'Recensioni'
  };

  if (sections[query]) {
    const target = document.getElementById(sections[query]);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  } else {
    alert('Sezione non trovata');
  }
});

document.addEventListener('click', e => {
  if (
    !searchBar.contains(e.target) &&
    !e.target.classList.contains('lente') &&
    !e.target.closest('.lente') &&
    !e.target.closest('#searchButton')
  ) {
    searchBar.classList.remove('active');
  }
});

searchInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') searchButton.click();
});

// ==============================
// Tema scuro/chiaro persistente
// ==============================
const toggleBtn = document.getElementById('darkModeToggle');

// Recupera il tema salvato da localStorage
let currentTheme = localStorage.getItem('theme') || 'dark'; // default dark
if (currentTheme === 'light') {
  document.body.classList.add('light-mode');
  toggleBtn.textContent = '🌙';
} else {
  document.body.classList.remove('light-mode');
  toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  if (document.body.classList.contains('light-mode')) {
    currentTheme = 'light';
    toggleBtn.textContent = '🌙';
  } else {
    currentTheme = 'dark';
    toggleBtn.textContent = '☀️';
  }
  localStorage.setItem('theme', currentTheme);
});




// ==============================
// Menu Toggle (pulito)
// ==============================
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuToggle.classList.toggle("active");
});


// ==============================
// Traduzioni
// ==============================
// ==============================
// Traduzioni
// ==============================
const translations = {
  it: {
    "portfolio": "PORTFOLIO",
    "cerca": "Cerca",
    "lavori":"LAVORI",
    "competenze":"COMPETENZE",
    "team":"TEAM",
    "recensioni":"RECENSIONI",
    "contattaci":"CONTATTACI",
    "progetto-1": "App Mobile",
    "summary-1": "App multi-piattaforma per ottimizzare l’esperienza utente e migliorare la produttività.",
    "obiettivi": "Obiettivi",
    "obiettivo1-1": "Ottimizzare l'esperienza dell'utente",
    "obiettivo1-2": "Creare una piattaforma multi-piattaforma",
    "obiettivo1-3": "Integrare funzionalità avanzate di gestione dati",
    "risultati": "Risultati",
    "risultati1-text": "Abbiamo superato gli obiettivi iniziali del progetto, con una crescita del 25% nelle conversioni...",
    "tecnologie": "Tecnologie Utilizzate",
    "tech1": "React Native",
    "tech2": "Node.js",
    "tech3": "MongoDB",
    "tech4": "AWS",
    "testimonial1": "“Questo progetto ha cambiato il nostro modo di lavorare quotidianamente.” — Cliente XYZ",

    "progetto-2": "Sito E-commerce",
    "summary-2": "Realizzazione di un sito e-commerce responsive con integrazione di pagamenti online.",
    "obiettivo2-1": "Creare una piattaforma sicura e scalabile",
    "obiettivo2-2": "Integrare sistema di pagamento",
    "obiettivo2-3": "Ottimizzare SEO e performance",
    "risultati2-text": "Il sito ha aumentato le vendite online del 40% nel primo mese di lancio.",
    "tech5": "HTML5 / CSS3 / JavaScript",
    "tech6": "React",
    "tech7": "Stripe API",
    "tech8": "Node.js / Express",
    "testimonial2": "“Un’esperienza d’acquisto semplice e veloce per i nostri clienti.” — Cliente ABC",

    "progetto-3": "Piattaforma Analisi Dati",
    "summary-3": "Sviluppo di una piattaforma per l’analisi dei dati aziendali con dashboard interattive.",
    "obiettivo3-1": "Visualizzare i dati in tempo reale",
    "obiettivo3-2": "Creare report personalizzabili",
    "obiettivo3-3": "Integrare machine learning per previsioni",
    "risultati3-text": "La piattaforma ha migliorato l’efficienza delle decisioni aziendali riducendo i tempi di analisi del 30%.",
    "tech9": "Python / Django",
    "tech10": "React",
    "tech11": "PostgreSQL",
    "tech12": "Power BI",
    "testimonial3": "“Uno strumento indispensabile per il nostro reparto analitico.” — Cliente DEF",

    "torna-home": "⬅ Torna alla Home",
    "privacy-policy": "Privacy Policy",
    "termini-di-servizio": "Termini di Servizio",
    "seguici-su": "Seguici su",
    "copyright": "© 2025 Sito prova. Tutti i diritti riservati.",

    "skills": "Competenze e Badge",
  "statistics": "Statistiche di Progetto",
  "conversion-rate": "Aumento conversioni: 25%",
  "user-engagement": "Coinvolgimento utenti: +30%",
  "sales-increase": "Aumento vendite online: 40%",
  "checkout-success": "Tasso checkout completato: 90%",
  "analysis-efficiency": "Efficienza analisi: +30%",
  "decision-speed": "Velocità decisionale migliorata: +20%",
  "i-nostri-progetti":"I nostri progetti",
  "nome":"Nome",
  "cognome":"Cognome",
    "email":"Email",
    "messaggio":"Messaggio",
    "invia":"Invia",
    "inserisci-il-tuo-nome":"Inserisci il tuo nome",
    "inserisci-il-tuo-cognome":"Inserisci il tuo cognome",
    "inserisci-la-tua-email":"Inserisci la tua email",
    "scrivi-il-tuo-messaggio":"Scrivi il tuo messaggio",
  },
  en: {
    "portfolio": "PORTFOLIO",
    "cerca": "Search",
    "i-nostri-progetti": "Our Projects",
    "progetto-1": "Mobile App",
    "summary-1": "Cross-platform app to optimize user experience and improve productivity.",
    "obiettivi": "Goals",
    "obiettivo1-1": "Optimize user experience",
    "obiettivo1-2": "Create a cross-platform solution",
    "obiettivo1-3": "Integrate advanced data management features",
    "risultati": "Results",
    "risultati1-text": "We exceeded the initial project goals, achieving a 25% increase in conversions...",
    "tecnologie": "Technologies Used",
    "tech1": "React Native",
    "tech2": "Node.js",
    "tech3": "MongoDB",
    "tech4": "AWS",
    "testimonial1": "“This project changed our daily workflow.” — Client XYZ",
    "lavori": "WORKS",
    "competenze":"SKILLS",
    "team":"TEAM",
    "recensioni":"REVIEWS",
    "contattaci":"CONTACT US",
    "progetto-2": "E-commerce Site",
    "summary-2": "Development of a responsive e-commerce site with online payment integration.",
    "obiettivo2-1": "Create a secure and scalable platform",
    "obiettivo2-2": "Integrate payment system",
    "obiettivo2-3": "Optimize SEO and performance",
    "risultati2-text": "The site increased online sales by 40% in the first month after launch.",
    "tech5": "HTML5 / CSS3 / JavaScript",
    "tech6": "React",
    "tech7": "Stripe API",
    "tech8": "Node.js / Express",
    "testimonial2": "“A simple and fast shopping experience for our customers.” — Client ABC",

    "progetto-3": "Data Analytics Platform",
    "summary-3": "Development of a platform for business data analysis with interactive dashboards.",
    "obiettivo3-1": "Display data in real time",
    "obiettivo3-2": "Create customizable reports",
    "obiettivo3-3": "Integrate machine learning for predictions",
    "risultati3-text": "The platform improved decision-making efficiency by reducing analysis time by 30%.",
    "tech9": "Python / Django",
    "tech10": "React",
    "tech11": "PostgreSQL",
    "tech12": "Power BI",
    "testimonial3": "“An indispensable tool for our analytics department.” — Client DEF",

    "torna-home": "⬅ Back to Home",
    "privacy-policy": "Privacy Policy",
    "termini-di-servizio": "Terms of Service",
    "seguici-su": "Follow us on",
    "copyright": "© 2025 Demo Site. All rights reserved.",

    "skills": "Skills & Badges",
  "statistics": "Project Statistics",
  "conversion-rate": "Conversion Increase: 25%",
  "user-engagement": "User Engagement: +30%",
  "sales-increase": "Online Sales Increase: 40%",
  "checkout-success": "Checkout Completion Rate: 90%",
  "analysis-efficiency": "Analysis Efficiency: +30%",
  "decision-speed": "Decision Speed Improved: +20%",
  "nome":"Name",
  "cognome":"Surname",
    "email":"Email",
    "messaggio":"Message",
    "invia":"Send",
    "inserisci-il-tuo-nome":"Enter your name",
    "inserisci-la-tua-email":"Enter your email",
    "scrivi-il-tuo-messaggio":"Write your message",
    "inserisci-il-tuo-cognome":"Enter your surname"
  }
};

// ==============================
// Gestione lingua pulita
// ==============================
let currentLang = localStorage.getItem('lang') || 'it';
const langDesktop = document.getElementById('languageToggle');
const langMobile = document.getElementById('languageToggleMobile');

function updatePlaceholders(lang) {
  document.querySelectorAll('input[data-18n], textarea[data-18n]').forEach(el => {
    const key = el.getAttribute('data-18n');
    if (translations[lang][key]) el.placeholder = translations[lang][key];
  });
}

function updateText(lang) {
  document.querySelectorAll('[data-18n]').forEach(el => {
    const key = el.getAttribute('data-18n');
    if (translations[lang][key] && !(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) {
      el.textContent = translations[lang][key];
    }
  });
}

function updateLanguageButtons() {
  const label = currentLang === 'it' ? 'EN' : 'IT';
  if (langDesktop) langDesktop.textContent = label;
  if (langMobile) langMobile.textContent = label;
}

function toggleLanguage() {
  currentLang = currentLang === 'it' ? 'en' : 'it';
  localStorage.setItem('lang', currentLang);
  updateText(currentLang);
  updatePlaceholders(currentLang);
  updateLanguageButtons();
}

[langDesktop, langMobile].forEach(btn => btn?.addEventListener('click', toggleLanguage));

// inizializza lingua
updateText(currentLang);
updatePlaceholders(currentLang);
updateLanguageButtons();


// Ricarica pagina o torna alla homepage cliccando sul logo
const logo = document.querySelector('.logo a');

logo.addEventListener('click', (e) => {
  e.preventDefault(); // impedisce il comportamento predefinito del link

  // Vai alla homepage senza ricaricare
  window.location.href = 'Sito.html';  // sostituisci 'Sito.html' con l'URL della tua homepage
});

const newDiv = document.createElement('div');
newDiv.setAttribute('data-18n', 'progetto-4'); // chiave traduzione
document.body.appendChild(newDiv);



