
// Barra di ricerca//
const searchBar = document.getElementById('searchBar');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const lenses = document.querySelectorAll('.lente'); // include desktop e mobile //

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

// Tema scuro/chiaro persistente//
const toggleBtn = document.getElementById('darkModeToggle');


// Recupera il tema salvato da localStorage//
let currentTheme = localStorage.getItem('theme') || 'dark'; // default dark//
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


// Orologio//
function aggiornaOrologio() {
  const ora = new Date();
  const h = ora.getHours().toString().padStart(2, '0');
  const m = ora.getMinutes().toString().padStart(2, '0');
  const s = ora.getSeconds().toString().padStart(2, '0');
  document.getElementById('orologio').textContent = `${h}:${m}:${s}`;
}
aggiornaOrologio();
setInterval(aggiornaOrologio, 1000);

// Menu Toggle//
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  toggle.classList.toggle('active');
});

//Traduzioni//
const translations = {
  it: {
    "benvenuto": "Benvenuti nel nostro sito",
    "lavori": "Lavori",
    "competenze": "Competenze",
    "team": "Team",
    "recensioni": "Recensioni",
    "contatti": "Contatti",
    "cerca": "Cerca",
    "ora attuale": "Ora attuale:",
    "i nostri lavori": "I nostri lavori",
    "progetto-1": "PROGETTO 1",
    "progetto-2": "PROGETTO 2",
    "progetto-3": "PROGETTO 3",
    "vedi tutti i progetti": "Vedi tutti i progetti",
    "scopri il team" : "Scopri il team",
    "paragrafo": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    "le nostre competenze": "Le nostre competenze",
    "html": "HTML/CSS",
    "JavaScript": "JavaScript",
    "seo": "SEO",
    "social media marketing": "Social Media Marketing",
    "wordpress": "Wordpress",
    "react": "React",
    "aggiungi altre recensioni" : "Aggiungi altre recensioni",
    "il nostro team": "Il nostro team",
    "anna rossi": "Anna Rossi",
    "marco bianchi": "Marco Bianchi",
    "ceo & founder": "CEO & Founder",
    "web developer": "Web Developer",
    "cosa dicono i nostri clienti": "Cosa dicono i nostri clienti",
    "contattaci": "Contattaci",
    "nome": "Nome:",
    "email": "Email:",
    "messaggio": "Messaggio:",
    "invia": "Invia",
    "privacy policy": "Privacy Policy",
    "termini di servizio": "Termini di Servizio",
    "seguici su": "Seguici su",
    "copyright": "© 2025 Sito prova. Tutti i diritti riservati.",
    "vedi tutte le competenze" : "Vedi tutte le competenze",
    "nome":"Nome",
    "cognome":"Cognome",
    "email":"Email",
    "messaggio":"Messaggio",
    "invia":"Invia",
    "inserisci-il-tuo-nome":"Inserisci il tuo nome",
    "inserisci-la-tua-email":"Inserisci la tua email",
    "inserisci-il-tuo-cognome":"Inserisci il tuo cognome",
    "scrivi-il-tuo-messaggio":"Scrivi il tuo messaggio",
    "nome-error":"Il nome è obbligatorio",
    "cognome-error":"Il cognome è obbligatorio",
    "email-error":"Per favore inserisci una email valida",
    "messaggio-error":"Il messaggio è obbligatorio",
    "inviando": "Invio in corso...",
    "recensione1-settore": "Settore: Informatica",
    "recensione1-recensione": "Team molto professionale",
    "recensione1-nome-cognome": "Anna Rossi",
    "recensione1-valutazione": "Valutazione: ★★★★★",
    "recensione2-nome-cognome": "Marco Lelly",
    "recensione2-settore": "Settore: Economia",
    "recensione2-valutazione": "Valutazione: ★★★★★",
    "recensione2-recensione": "Hanno migliorato la nostra presenza online"
  },
  en: {
    "benvenuto": "Welcome to our website",
    "recensione1-settore": "Sector: IT",
    "recensione1-valutazione": "Rating: ★★★★★",
    "recensione2-settore": "Sector: Economy",
    "recensione1-recensione": "Very professional team",
    "recensione2-recensione": "They improved our online presence",
    "recensione2-valutazione": "Rating: ★★★★★",
    "inviando": "Sending...",
    "aggiungi altre recensioni": "Add more reviews",
    "messaggio-error":"Message is required",
    "email-error":"Please enter a valid email",
    "cognome-error":"Surname is required",
    "nome-error":"Name is required",
    "lavori": "Works",
    "competenze": "Skills",
    "scopri le altre recensioni" : "Discover the reviews",
    "scopri il team" : "Discover the team",
    "team": "Team",
    "vedi tutti i progetti": "View all projects",
    "recensioni": "Reviews",
    "contatti": "Contacts",
    "cerca": "Search",
    "ora attuale": "Current time:",
    "vedi tutte le competenze" : "View all skills",
    "i nostri lavori": "Our works",
    "progetto-1": "PROJECT 1",
    "progetto-2": "PROJECT 2",
    "progetto-3": "PROJECT 3",
    "paragrafo": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    "le nostre competenze": "Our skills",
    "html": "HTML/CSS",
    "JavaScript": "JavaScript",
    "seo": "SEO",
    "social media marketing": "Social Media Marketing",
    "wordpress": "Wordpress",
    "react": "React",
    "il nostro team": "Our team",
    "anna rossi": "Anna Rossi",
    "marco bianchi": "Marco Bianchi",
    "ceo & founder": "CEO & Founder",
    "web developer": "Web Developer",
    "cosa dicono i nostri clienti": "What our clients say",
    "recensione1": "\"A professional and helpful team!\" – Anna R.",
    "recensione2": "\"They transformed our online presence.\" – Marco L.",
    "contattaci": "Contact us",
    "nome": "Name:",
    "email": "Email:",
    "messaggio": "Message:",
    "invia": "Send",
    "privacy policy": "Privacy Policy",
    "termini di servizio": "Terms of Service",
    "seguici su": "Follow us on",
    "copyright": "© 2025 Test site. All rights reserved.",
    "nome":"Name",
    "cognome":"Surname",
    "email":"Email",
    "messaggio":"Message",
    "invia":"Send",
    "inserisci-il-tuo-nome":"Enter your name",
    "inserisci-il-tuo-cognome":"Enter your surname",
    "inserisci-la-tua-email":"Enter your email",
    "scrivi-il-tuo-messaggio":"Write your message"
  }
};

// Gestione lingua//
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

// inizializza lingua //
updateText(currentLang);
updatePlaceholders(currentLang);
updateLanguageButtons();

// Ricarica pagina cliccando sul logo //
const logo = document.querySelector('.logo a');

logo.addEventListener('click', (e) => {
  e.preventDefault(); // impedisce il comportamento predefinito del link //
  location.reload();  // ricarica la pagina //
});



// Validazione modulo contatti //

document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Blocca l'invio del modulo per fare la validazione

  // Prendi i valori dei campi
  const nome = document.getElementById("nome").value.trim();
  const cognome = document.getElementById("cognome").value.trim();
  const email = document.getElementById("email").value.trim();
  const messaggio = document.getElementById("messaggio").value.trim();

  // Reset dei messaggi di errore
  document.querySelectorAll(".error-message").forEach(message => {
    message.style.display = "none";
  });

  let valid = true;

  // Validazione Nome
  if (!nome) {
    document.getElementById("nome-error").style.display = "block";
    valid = false;
  }

  // Validazione Cognome
  if (!cognome) {
    document.getElementById("cognome-error").style.display = "block";
    valid = false;
  }

  // Validazione Email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email || !emailRegex.test(email)) {
    document.getElementById("email-error").style.display = "block";
    valid = false;
  }

  // Validazione Messaggio
  if (!messaggio) {
    document.getElementById("messaggio-error").style.display = "block";
    valid = false;
  }

  // Se il modulo è valido, invia il messaggio
  if (valid) {
    // Mostra il messaggio di invio in corso
    const formMessage = document.createElement("p");
formMessage.textContent = translations[currentLang].inviando;
    formMessage.style.color = "green";
    this.appendChild(formMessage);

    // Ritardo di 2 secondi per l'invio
    setTimeout(() => {
      this.submit(); // Invia il modulo
    }, 2000); // Puoi modificare il ritardo (ad esempio 2000ms = 2 secondi)
  }
});


