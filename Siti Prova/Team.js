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

// Recupera il tema salvato da localStorage //
let currentTheme = localStorage.getItem('theme') || 'dark'; // default dark //
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




// Menu Toggle//
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  toggle.classList.toggle('active');
});



// Traduzioni//
const translations = {
  it: {
    "recensioni": "RECENSIONI",
    "lavori": "LAVORI",
    "competenze":"COMPETENZE",
    "contatti":"CONTATTI",
    "team":"TEAM",
    "cerca": "Cerca",
    "cosa-dicono-i-nostri-clienti": "Cosa dicono i nostri clienti",
    "recensione1": "Il team ha fatto un lavoro straordinario! Hanno ascoltato tutte le nostre esigenze e le hanno realizzate perfettamente. Consiglio vivamente.",
    "recensione2":"Il nostro sito web ha finalmente raggiunto il livello che volevamo. Un team altamente competente, affidabile e sempre disponibile!",
    "recensione3":"Il nostro sito web ha finalmente raggiunto il livello che volevamo. Un team altamente competente, affidabile e sempre disponibile!",
    "recensione4":"Lavorare con questo team è stata un'esperienza fantastica. Hanno realizzato un progetto su misura per noi e siamo entusiasti dei risultati!",
    "recensione5":"La nostra azienda ha ottenuto una spinta incredibile grazie ai servizi offerti. Consigliamo vivamente il team per chi cerca un approccio professionale.",
    "recensione6":"Il supporto continuo e la qualità del lavoro sono stati eccezionali. Hanno superato le nostre aspettative!",
    "recensione7":"Un team dinamico che ha portato un valore reale al nostro business. Hanno sempre risposto rapidamente e con soluzioni efficaci.",
    "recensione8":"Non avremmo mai potuto trovare un team migliore per la creazione del nostro sito web. Il risultato è eccezionale!",
    "recensione9":"Ottima esperienza! I loro consigli sono stati fondamentali per il miglioramento delle nostre strategie online.",
    "privacy-policy": "Privacy Policy",
    "termini-di-servizio": "Termini di Servizio",
    "seguici-su": "Seguici su",
    "copyright": "© 2025 Sito prova. Tutti i diritti riservati.",
    "torna-alla-home": "Torna alla Home",
    "settore-education": "Settore: Education",
    "settore-marketing": "Settore: Marketing",
    "settore-e-commerce": "Settore: E-commerce",
    "settore-hr": "Settore: HR",
    "settore-business consulting": "Settore: Business Consulting",
    "settore-finance": "Settore: Finance",
    "settore-startups": "Settore: Startups",
    "settore-business": "Settore: Business",
    "contattaci": "CONTATTACI",
    "nome":"Nome",
    "cognome":"Cognome",
    "email":"Email",
    "messaggio":"Messaggio",
    "invia":"Invia",
    "inserisci-il-tuo-nome":"Inserisci il tuo nome",
    "inserisci-il-tuo-cognome":"Inserisci il tuo cognome",
    "inserisci-la-tua-email":"Inserisci la tua email",
    "scrivi-il-tuo-messaggio":"Scrivi il tuo messaggio",
    "Nostro-Team":"Il nostro Team",
    "ruolo-Anna":"Sviluppatrice",
    "paragrafo-Marco":"Marco è il fondatore della nostra azienda, con una visione innovativa e una passione per la tecnologia.",
    "paragrafo-Anna":"Anna si occupa dello sviluppo software con una particolare attenzione alla sicurezza e all'efficienza.",
    "paragrafo-Luca":"Luca è responsabile del design e dell'esperienza utente, creando interfacce intuitive e accattivanti.",
    "paragrafo-Giulia":"Giulia è la nostra esperta di marketing, capace di far crescere il brand attraverso strategie innovative e creative.",
    "paragrafo-Edoardo":"Edoardo è il direttore commerciale, con un talento speciale per le vendite e il mantenimento di relazioni con i clienti.",
    "paragrafo-Elena":"Elena si occupa delle risorse umane, gestendo i talenti e creando un ambiente di lavoro positivo e stimolante.",
    "Timeline":"Le tappe del Nostro Team",
    "Timeline-2020":"2020 - Fondazione",
    "Timeline-2021":"2021 - Primo Prodotto",
    "Timeline-2023":"2023 - Internalizzazione",
    "Timeline-2024":"2024 - Innovazione",
    "Timeline-2025":"2025 - Riconoscimenti",
    "paragrafo-Timeline-2020":"Il nostro team è nato con un obiettivo chiaro: innovare nel campo delle tecnologie digitali.",
    "paragrafo-Timeline-2021":"Abbiamo lanciato il nostro primo prodotto sul mercato, con un'accoglienza entusiasta da parte dei clienti.",
    "paragrafo-Timeline-2023":"Abbiamo iniziato a espanderci in nuovi mercati internazionali, portando i nostri prodotti a un pubblico globale.",
    "paragrafo-Timeline-2024":"Abbiamo rilasciato una serie di aggiornamenti che hanno rivoluzionato la nostra offerta, migliorando l'esperienza utente e la performance del prodotto.",
    "paragrafo-Timeline-2025":"Il nostro lavoro è stato riconosciuto da diverse organizzazioni del settore, vincendo premi per l'innovazione e l'eccellenza tecnologica."

  },
  en: {
    "recensioni": "REVIEWS",
    "lavori":"WORKS",
    "competenze":"SKILLS",
    "team":"TEAM",
    "contatti":"CONTACTS",
    "cerca": "Search",
    "privacy-policy": "Privacy Policy",
    "termini-di-servizio": "Terms of Service",
    "seguici-su": "Follow us on",
    "copyright": "© 2025 Demo Site. All rights reserved.",
    "torna-alla-home": "Back to Home",
    "cosa-dicono-i-nostri-clienti": "What Our Clients Say",
    "recensione1": "The team did an outstanding job! They listened to all our needs and executed them perfectly. Highly recommend.",
    "recensione2":"Our website has finally reached the level we wanted. A highly skilled, reliable, and always available team!",
    "recensione3":"Our website has finally reached the level we wanted. A highly skilled, reliable, and always available team!",
    "recensione4":"Working with this team was a fantastic experience. They created a tailor-made project for us and we are thrilled with the results!",
    "recensione5":"Our company received an incredible boost thanks to the services offered. We highly recommend the team for those seeking a professional approach.",
    "recensione6":"The ongoing support and quality of work have been exceptional. They exceeded our expectations!",
    "recensione7":"A dynamic team that brought real value to our business. They always responded quickly with effective solutions.",
    "recensione8":"We could not have found a better team to create our website. The result is outstanding!",
    "recensione9":"Great experience! Their advice was crucial in improving our online strategies.",
    "settore-education": "Sector: Education",
    "settore-marketing": "Sector: Marketing",
    "settore-e-commerce": "Sector: E-commerce",
    "settore-hr": "Sector: HR",
    "settore-business consulting": "Sector: Business Consulting",
    "settore-finance": "Sector: Finance",
    "settore-startups": "Sector: Startups",
    "settore-business": "Sector: Business",
    "contattaci": "CONTACT US",
    "nome":"Name",
    "cognome":"Surname",
    "email":"Email",
    "messaggio":"Message",
    "invia":"Send",
    "inserisci-il-tuo-nome":"Enter your name",
    "inserisci-il-tuo-cognome":"Enter your surname",
    "inserisci-la-tua-email":"Enter your email",
    "scrivi-il-tuo-messaggio":"Write your message",
    "Nostro-Team":"Our Team",
    "ruolo-Anna":"Developer",
    "paragrafo-Marco":"Marco is the founder of our company, with an innovative vision and a passion for technology.",
    "paragrafo-Anna":"Anna handles software development with a particular focus on security and efficiency.",
    "paragrafo-Luca":"Luca is responsible for design and user experience, creating intuitive and engaging interfaces.",
    "paragrafo-Giulia":"Giulia is our marketing expert, capable of growing the brand through innovative and creative strategies.",
    "paragrafo-Edoardo":"Edoardo is the sales director, with a special talent for sales and maintaining customer relationships.",
    "paragrafo-Elena":"Elena manages human resources, handling talents and creating a positive and stimulating work environment.",
    "Timeline":"Our Team's Milestones",
    "Timeline-2020":"2020 - Foundation",
    "Timeline-2021":"2021 - First Product",
    "Timeline-2023":"2023 - Internationalization",
    "Timeline-2024":"2024 - Innovation",
    "Timeline-2025":"2025 - Awards",
    "paragrafo-Timeline-2020":"Our team was born with a clear goal: to innovate in the field of digital technologies.",
    "paragrafo-Timeline-2021":"We launched our first product on the market, with enthusiastic reception from customers.",
    "paragrafo-Timeline-2023":"We began expanding into new international markets, bringing our products to a global audience.",
    "paragrafo-Timeline-2024":"We released a series of updates that revolutionized our offering, improving user experience and product performance.",
    "paragrafo-Timeline-2025":"Our work has been recognized by several industry organizations, winning awards for innovation and technological excellence."
  
  }
};

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


// Ricarica pagina o torna alla homepage cliccando sul logo //
const logo = document.querySelector('.logo a');

logo.addEventListener('click', (e) => {
  e.preventDefault(); // impedisce il comportamento predefinito del link //

  // Vai alla homepage senza ricaricare //
  window.location.href = 'Sito.html';  // sostituisci 'Sito.html' con l'URL della tua homepage //
});




// Seleziona le frecce e le slides //
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelectorAll('.slide');
const slidesWrapper = document.querySelector('.slides-wrapper');

// Inizializza l'indice della slide corrente //
let currentIndex = 0;

// Funzione per aggiornare le slide //
function updateSlides() { 
  // Nascondi tutte le slides //
  slides.forEach(slide => slide.classList.remove('active'));

  // Mostra la slide corrente //
  slides[currentIndex].classList.add('active');

  // Muovi il wrapper delle slide per visualizzare la slide corretta //
  const offset = -currentIndex * 100; // Ogni slide ha 100% della larghezza //
  slidesWrapper.style.transform = `translateX(${offset}%)`;
}

// Funzione per la freccia precedente //
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--; // Vai alla slide precedente //
  } else {
    currentIndex = slides.length - 1; // Torna all'ultima slide //
  }
  updateSlides(); // Aggiorna le slide //
});

// Funzione per la freccia successiva //
nextButton.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++; // Vai alla slide successiva //
  } else {
    currentIndex = 0; // Torna alla prima slide //
  }
  updateSlides(); // Aggiorna le slide //
});

// Inizializza il carosello al caricamento //
updateSlides();


// Automatizzare il carosello//
let autoSlideInterval;

// Funzione per avviare il carosello automatico //
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    nextButton.click(); // Simula un click sul pulsante "next" //
  }, 3000); // Cambia la slide ogni 3 secondi //
}

// Funzione per fermare il carosello automatico (se necessario)//
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Funzione per aggiornare le slide //
function updateSlides() {
  // Nascondi tutte le slides//
  slides.forEach(slide => slide.classList.remove('active'));

  // Mostra la slide corrente//
  slides[currentIndex].classList.add('active');

  // Muovi il wrapper delle slide per visualizzare la slide corretta//
  const offset = -currentIndex * 100; // Ogni slide ha 100% della larghezza//
  slidesWrapper.style.transform = `translateX(${offset}%)`;
}

// Funzione per la freccia precedente//
prevButton.addEventListener('click', () => {
  stopAutoSlide(); // Ferma il carosello automatico quando l'utente interagisce //
  if (currentIndex > 0) {
    currentIndex--; // Vai alla slide precedente//
  } else {
    currentIndex = slides.length - 1; // Torna all'ultima slide//
  }
  updateSlides(); // Aggiorna le slide //
  startAutoSlide(); // Riatta il carosello automatico //
});

// Funzione per la freccia successiva //
nextButton.addEventListener('click', () => {
  stopAutoSlide(); // Ferma il carosello automatico quando l'utente interagisce //
  if (currentIndex < slides.length - 1) {
    currentIndex++; // Vai alla slide successiva //
  } else {
    currentIndex = 0; // Torna alla prima slide //
  }
  updateSlides(); // Aggiorna le slide //
  startAutoSlide(); // Riatta il carosello automatico //
});

// Inizializza il carosello al caricamento //
updateSlides();
startAutoSlide(); // Avvia il carosello automatico al caricamento della pagina //

document.addEventListener('DOMContentLoaded', function () {
        var ctx = document.getElementById('skillsChart').getContext('2d');
        var skillsChart = new Chart(ctx, {
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
    formMessage.textContent = "Invio in corso...";
    formMessage.style.color = "green";
    this.appendChild(formMessage);

    // Ritardo di 2 secondi per l'invio
    setTimeout(() => {
      this.submit(); // Invia il modulo
    }, 2000); // Puoi modificare il ritardo (ad esempio 2000ms = 2 secondi)
  }
});