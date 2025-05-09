document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    en: {
      navAbout: "About Us",
      navContact: "Contact",
      navWhatWeDo: "What We Do",
      navNews: "News",
      navForecast: "Forecast",
      searchPlaceholder: "Search for a place",
      searchBtn: "Search",
      notFound: "Location not found",
      error: "Error retrieving data",
      humidity: "Humidity",
      wind: "Wind",
      newsTitle: "Meteo's News",
      ForecastForTheWeek: "Forecast for the week",
      ForecastForTheNextDays: "The weather forecast for the next few days is particularly favorable. Learn more about what’s coming.",
      AboutUs: "About Us",
      Climafy: "Climafy is a weather app that provides accurate and up-to-date weather information. Our mission is to help you plan your day with confidence, no matter where you are in the world. We believe that everyone should have access to reliable weather data, and we strive to make our app user-friendly and informative.",
      ContactUs: "Contact Us",
      ContactUsText: "Do you have questions or suggestions? Feel free to contact us! Fill out the form below and we’ll get back to you as soon as possible.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      Social_Media: "Follow us on social media",
      FotAboutUs: "About Us",
      FotContacts: "Contact Us",
      Map: "Map",
      TermsOfService: "Terms of Service",
      searchcity: "Search for your preferred city and see the forecast for the next 5 days.",
    },
    it: {
      navAbout: "Chi siamo",
      navContact: "Contatti",
      navWhatWeDo: "Cosa facciamo",
      navNews: "Notizie",
      navForecast: "Previsioni",
      searchPlaceholder: "Cerca una località",
      searchBtn: "Cerca",
      notFound: "Località non trovata",
      error: "Errore nel recupero dei dati",
      humidity: "Umidità",
      wind: "Vento",
      newsTitle: "Notizie Meteo",
      ForecastForTheWeek: "Previsioni per la settimana",
      ForecastForTheNextDays: "Le previsioni meteo per i prossimi giorni sono particolarmente favorevoli. Scopri di più su quello che ci aspetta.",
      AboutUs: "Chi siamo",
      Climafy: "Climafy è un'app meteo che fornisce informazioni meteorologiche accurate e aggiornate. La nostra missione è aiutarti a pianificare la tua giornata con fiducia, ovunque tu sia nel mondo. Crediamo che tutti debbano avere accesso a dati meteorologici affidabili e ci impegniamo a rendere la nostra app facile da usare e informativa.",
      ContactUs: "Contattaci",
      ContactUsText: "Hai domande o suggerimenti? Non esitare a contattarci! Compila il modulo qui sotto e ti risponderemo il prima possibile.",
      name: "Nome",
      email: "Email",
      message: "Messaggio",
      send: "Invia",
      Social_Media: "Seguici sui  nostri social media",
      FotAboutUs: "Chi siamo",
      FotContacts: "Contattaci",
      Map: "Mappa",
      TermsOfService: "Termini di servizio",
      searchcity: "Cerca la città che preferisci e scopri come saranno le previsioni per i prossimi 5 giorni.",
    
    }
    
  };

  let lastSearchedCity = '';
  const apiKey = '7458c5fea51af7706f94fb7e3e15a615';
  const geoKey = '06501e47698e4652b3b031ff95bf62a6';

  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const weatherResults = document.getElementById('weatherResults');
  const toggleBtn = document.getElementById('toggleTheme');

  const savedLang = localStorage.getItem('lang') || 'it';
  const savedTheme = localStorage.getItem('theme') || 'light';

  // Funzione per recuperare i dati meteo
  function fetchWeather(city, lang) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=${lang}`)
      .then(res => res.json())
      .then(data => {
        if (data.cod !== "200") {
          weatherResults.innerHTML = `<p>${translations[lang].notFound}</p>`;
          return;
        }

        const cards = data.list
          .filter((_, i) => i % 8 === 0)
          .slice(0, 5)
          .map(entry => {
            const date = new Date(entry.dt_txt);
            const options = lang === 'en'
              ? { year: 'numeric', month: 'long', day: 'numeric' }
              : { day: '2-digit', month: '2-digit', year: 'numeric' };

            return `
              <div class="weather-card">
                <h3>${date.toLocaleDateString(lang, options)}</h3>
                <img src="https://openweathermap.org/img/wn/${entry.weather[0].icon}@2x.png" alt="${entry.weather[0].description}" />
                <p>${entry.weather[0].description}</p>
                <p>${entry.main.temp}°C</p>
                <p>${translations[lang].humidity}: ${entry.main.humidity}%</p>
                <p>${translations[lang].wind}: ${entry.wind.speed} m/s</p>
              </div>
            `;
          }).join('');

        weatherResults.innerHTML = cards;
      })
      .catch(() => {
        weatherResults.innerHTML = `<p>${translations[lang].error}</p>`;
      });
  }

  // Funzione per impostare la lingua
  const setLanguage = (lang) => {
    localStorage.setItem('lang', lang);
    document.getElementById('navAbout').textContent = translations[lang].navAbout;
    document.getElementById('navContact').textContent = translations[lang].navContact;
    document.getElementById('navWhatWeDo').textContent = translations[lang].navWhatWeDo;
    document.getElementById('navNews').textContent = translations[lang].navNews;
    document.getElementById('navForecast').textContent = translations[lang].navForecast;
    document.getElementById('searchInput').placeholder = translations[lang].searchPlaceholder;
    document.getElementById('searchBtn').textContent = translations[lang].searchBtn;
    document.getElementById('newsTitle').textContent = translations[lang].newsTitle; // Aggiunto per la traduzione del titolo
    document.getElementById('ForecastForTheWeek').textContent = translations[lang].ForecastForTheWeek; // Aggiunto per la traduzione del titolo
    document.getElementById('ForecastForTheNextDays').textContent = translations[lang].ForecastForTheNextDays; // Aggiunto per la traduzione del titolo
   document.getElementById('AboutUs').textContent = translations[lang].AboutUs; // Aggiunto per la traduzione del titolo
    document.getElementById('Climafy').textContent = translations[lang].Climafy; // Aggiunto per la traduzione del titolo
    document.getElementById('ContactUs').textContent = translations[lang].ContactUs; // Aggiunto per la traduzione del titolo
    document.getElementById('ContactUsText').textContent = translations[lang].ContactUsText; // Aggiunto per la traduzione del titolo
    document.getElementById('name').placeholder = translations[lang].name;
    document.getElementById('email').placeholder = translations[lang].email;
    document.getElementById('message').placeholder = translations[lang].message;
    document.getElementById('send').textContent = translations[lang].send;
    document.getElementById('Social_Media').textContent = translations[lang].Social_Media; // Aggiunto per la traduzione del titolo
    document.getElementById('FotAboutUs').textContent = translations[lang].FotAboutUs; // Aggiunto per la traduzione del titolo
    document.getElementById('FotContacts').textContent = translations[lang].FotContacts; // Aggiunto per la traduzione del titolo
    document.getElementById('Map').textContent = translations[lang].Map; // Aggiunto per la traduzione del titolo
    document.getElementById('TermsOfService').textContent = translations[lang].TermsOfService; // Aggiunto per la traduzione del titolo
    document.getElementById('searchcity').textContent = translations[lang].searchcity; // Aggiunto per la traduzione del titolo
    if (lastSearchedCity) {
      fetchWeather(lastSearchedCity, lang);
    }
  };

  // Imposta la lingua al caricamento della pagina
  setLanguage(savedLang);

  // Aggiungi gli event listener per i flag della lingua
  document.querySelectorAll('.lang-flag').forEach(flag => {
    flag.addEventListener('click', () => {
      const lang = flag.dataset.lang;
      setLanguage(lang);
    });
  });

  // Gestione tema scuro
  const toggleTheme = () => {
    document.body.classList.toggle('dark-mode');
    const newTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    toggleBtn.textContent = newTheme === 'dark' ? '🌙' : '☀️';  // Cambio di emoji
  };

  // Cambia tema scuro/chiaro al caricamento
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleBtn.textContent = '🌙';  // Imposta l'emoji per il tema scuro
  } else {
    toggleBtn.textContent = '☀️';  // Imposta l'emoji per il tema chiaro
  }

  toggleBtn.addEventListener('click', toggleTheme);

  // Autocompletamento geolocalizzato
  searchInput.addEventListener('focus', () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const { latitude, longitude } = pos.coords;
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${geoKey}&language=${savedLang}`;
        fetch(url)
          .then(res => res.json())
          .then(data => {
            const city = data.results[0]?.components?.city || data.results[0]?.components?.town;
            if (city) searchInput.value = city;
          });
      });
    }
  });

  // Ricerca meteo quando si clicca sul pulsante
  searchBtn.addEventListener('click', () => {
    const city = searchInput.value.trim();
    if (!city) return;
    lastSearchedCity = city;
    fetchWeather(city, savedLang);
  });

  // Impostazione del tema in base all'orario
  const hour = new Date().getHours();
  if (hour >= 18 || hour < 6) {
    document.body.classList.add('dark-mode');
    toggleBtn.textContent = '🌙';  // Imposta l'emoji per il tema scuro
  } else {
    document.body.classList.remove('dark-mode');
    toggleBtn.textContent = '☀️';  // Imposta l'emoji per il tema chiaro
  }
});
