// Barra di ricerca// 
const searchBar = document.getElementById('searchBar');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const lenses = document.querySelectorAll('.lente'); 

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
    !e.target.closest('.lente') &&
    e.target !== searchButton
  ) {
    searchBar.classList.remove('active');
  }
});

searchInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') searchButton.click();
});


// Tema scuro/chiaro persistente//
const toggleBtn = document.getElementById('darkModeToggle');
let currentTheme = localStorage.getItem('theme') || 'dark';

if (currentTheme === 'light') {
  document.body.classList.add('light-mode');
  toggleBtn.textContent = '🌙';
} else {
  toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
  toggleBtn.textContent = currentTheme === 'light' ? '🌙' : '☀️';
  localStorage.setItem('theme', currentTheme);
});


// Menu Toggle //
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuToggle.classList.toggle("active");
});


// Traduzioni//
const translations = {
  it: {
    "competenze": "COMPETENZE",
    "lavori":"LAVORI",
    "team":"TEAM",
    "recensioni":"RECENSIONI",
    "contatti":"CONTATTI",
    "cerca": "Cerca",
    "Le-nostre-competenze": "Le nostre competenze",
    "paragrafo-competenze": "Scopri le tecnologie e gli strumenti con cui lavoriamo quotidianamente per portare i nostri progetti al successo.",
    "paragrafo-Vue": "E' un framework JavaScript progressivo utilizzato per creare interfacce utente interattive e moderne. È noto per la sua reattività e facilità d'uso.",
    "paragrafo-React": "Consente di creare applicazioni mobili native usando JavaScript e React. È il framework preferito per lo sviluppo cross-platform mobile.",
    "paragrafo-Design": "Il design dell'interfaccia utente (UI) e l'esperienza utente (UX) sono fondamentali per creare prodotti digitali intuitivi e coinvolgenti.",
    "paragrafo-Python": "E' un linguaggio di programmazione, utilizzato per lo sviluppo di applicazioni web e analisi dei dati. E' ideale per prototipi rapidi e progetti complessi.",
    "paragrafo-Data": "Permette di estrarre informazioni significative dai dati.",
    "Testimonianze": "Testimonianze",
    "testimonianza-1": "\"Lavorare con questo team è stato incredibile!\"",
    "Cliente-1": "- Cliente XYZ",
    "privacy-policy": "Privacy Policy",
    "termini-di-servizio": "Termini di Servizio",
    "seguici-su": "Seguici su",
    "copyright": "© 2025 Sito prova. Tutti i diritti riservati.",
    "testimonianza-2": "\"La loro esperienza è stata fondamentale!\"",
    "Cliente-2": "- Cliente ABC",
    "Cta": "Interessato a lavorare con noi?",
    "paragrafo-Cta": "Se hai un progetto in mente, contattaci!",
    "bottone-Cta": "Contattaci",
    "torna-alla-home": "Torna alla Home",
    "nome":"Nome",
    "email":"Email",
    "cognome":"Cognome",
    "messaggio":"Messaggio",
    "invia":"Invia",
    "inserisci-il-tuo-nome":"Inserisci il tuo nome",
    "inserisci-il-tuo-cognome":"Inserisci il tuo cognome",
    "inserisci-la-tua-email":"Inserisci la tua email",
    "scrivi-il-tuo-messaggio":"Scrivi il tuo messaggio",
    "contattaci":"CONTATTACI",
    "paragrafo-Vue": "E' un framework JavaScript progressivo utilizzato per creare interfacce utente interattive e moderne. È noto per la sua reattività e facilità d'uso.",
    "paragrafo-React": "Consente di creare applicazioni mobili native usando JavaScript e React. È il framework preferito per lo sviluppo cross-platform mobile.",
    "paragrafo-Design": "Il design dell'interfaccia utente (UI) e l'esperienza utente (UX) sono fondamentali per creare prodotti digitali intuitivi e coinvolgenti.",
    "paragrafo-Python": "E' un linguaggio di programmazione, utilizzato per lo sviluppo di applicazioni web e analisi dei dati. È ideale per prototipi rapidi e progetti complessi.",
    "paragrafo-Data": "Permette di estrarre informazioni significative dai dati. Utilizzando strumenti come Python e SQL, per analizzare grandi quantità di dati.",
    "inviando": "Invio in corso...",
    "nome-error":"Il nome è obbligatorio",
    "cognome-error":"Il cognome è obbligatorio",
    "email-error":"Per favore inserisci una email valida",
    "messaggio-error":"Il messaggio è obbligatorio"
  },

  en: {
    "competenze": "SKILLS",
    "inviando": "Sending...",
    "nome-error":"Name is required",
    "cognome-error":"Surname is required",
    "email-error":"Please enter a valid email",
    "messaggio-error":"Message is required",
    "lavori":"WORKS",
    "recensioni":"REVIEWS",
    "contatti":"CONTACTS",
    "cerca": "Search",
    "Le-nostre-competenze": "Our skills",
    "paragrafo-competenze": "Discover the technologies and tools we use daily.",
    "paragrafo-Vue": "A progressive JavaScript framework.",
    "paragrafo-React": "Allows native mobile development with React.",
    "paragrafo-Design": "UI and UX design are essential for great products.",
    "paragrafo-Python": "A programming language ideal for data analysis.",
    "paragrafo-Data": "Allows extracting meaningful information.",
    "Testimonianze": "Testimonials",
    "testimonianza-1": "\"Working with this team was amazing!\"",
    "Cliente-1": "- Client XYZ",
    "privacy-policy": "Privacy Policy",
    "termini-di-servizio": "Terms of Service",
    "seguici-su": "Follow us on",
    "copyright": "© 2025 Demo Site. All rights reserved.",
    "testimonianza-2": "\"Their expertise was crucial!\"",
    "Cliente-2": "- Client ABC",
    "Cta": "Interested in working with us?",
    "paragrafo-Cta": "If you have a project in mind, contact us!",
    "bottone-Cta": "Contact us",
    "torna-alla-home": "Back to Home",
     "nome":"Name",
     "cognome":"Surname",
    "email":"Email",
    "messaggio":"Message",
    "invia":"Send",
    "inserisci-il-tuo-nome":"Enter your name",
    "inserisci-il-tuo-cognome":"Enter your surname",
    "inserisci-la-tua-email":"Enter your email",
    "scrivi-il-tuo-messaggio":"Write your message",
    "contattaci":"CONTACT US",
    "paragrafo-Vue": "A progressive JavaScript framework used to build interactive and modern user interfaces. Known for its reactivity and ease of use.",
    "paragrafo-React": "Allows you to create native mobile apps using JavaScript and React. It’s one of the most used frameworks for cross-platform mobile development.",
    "paragrafo-Design": "UI and UX design are essential for creating clear and engaging digital products.",
    "paragrafo-Python": "A programming language used for web development and data analysis. Ideal for fast prototypes and complex projects.",
    "paragrafo-Data": "Allows extracting meaningful information from data using tools like Python and SQL."
  }
};

// CAMBIO LINGUA
function setLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    const txt = translations[lang][key];
    if (txt) el.textContent = txt;
  });
}

// Gestione Lingua//
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



// Logo → homepage//
const logo = document.querySelector('.logo a');
logo?.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'Sito.html';
});


// CAROSELLO COMPETENZE//
const slidesWrapper2 = document.querySelector('.stage');
const slides2 = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;
let auto;

function updateCarousel2() {
  slides2.forEach(slide => {
    slide.classList.remove('active');
    slide.querySelector('.skill-bar-fill').style.width = "0";
  });

  const active = slides2[index];
  active.classList.add('active');
  active.querySelector('.skill-bar-fill').style.width = active.querySelector('.skill-bar-fill').dataset.width;

  const wrapperWidth = slidesWrapper2.offsetWidth;
  slidesWrapper2.style.transform = `translateX(-${index * wrapperWidth}px)`;
}

prev.addEventListener("click", () => {
  stopAuto();
  index = (index - 1 + slides2.length) % slides2.length;
  updateCarousel2();
  startAuto();
});

next.addEventListener("click", () => {
  stopAuto();
  index = (index + 1) % slides2.length;
  updateCarousel2();
  startAuto();
});

function startAuto() {
  auto = setInterval(() => {
    index = (index + 1) % slides2.length;
    updateCarousel2();
  }, 5000);
}

function stopAuto() {
  clearInterval(auto);
}

// Inizializza il carosello//
updateCarousel2();
startAuto();



// Chart.js grafico//
document.addEventListener('DOMContentLoaded', function () {
  var ctx = document.getElementById('skillsChart')?.getContext('2d');
  if (ctx) {
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Vue.js', 'React Native', 'Python', 'Data Analysis'],
        datasets: [{
          label: 'Anni di esperienza',
          data: [3, 4, 2, 1],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      }
    });
  }
});



// Validazione modulo contatti //

document.querySelector("form").addEventListener("submit",function (event) {
  event.preventDefault(); // Blocca l'invio del modulo per fare la validazione

  console.log('Form submit triggered'); // Verifica se il submit è stato triggerato

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

  // Se il modulo è valido, mostra il messaggio di invio e invia il modulo
  if (valid) {
    console.log('Form is valid'); // Verifica se il modulo è valido
    const formMessage = document.createElement("p");
formMessage.textContent = translations[currentLang].inviando;
    formMessage.style.color = "green";
    this.appendChild(formMessage);

    const submitButton = this.querySelector("button[type='submit']");
    submitButton.disabled = true;

    setTimeout(() => {
      console.log('Form is being submitted'); // Verifica se il modulo viene inviato
      this.submit(); // Invia il modulo
    }, 2000);
  } else {
    console.log('Form is not valid'); // Verifica se il modulo non è valido
  }
});
