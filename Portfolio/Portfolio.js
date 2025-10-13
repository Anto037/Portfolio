(function(){
    const dict = {
        it:{
            'nav.home': 'HOME',
            'nav.about': 'CHI SONO',
            'nav.projects': 'PROGETTI',
            'nav.skills': 'COMPETENZE',
            'nav.contact': 'CONTATTI',
            'mail.text': 'CONTATTI',
            'mail.aria': 'Invia email ad Antonio Florea',
            'about.h2': 'Chi sono',
            'about.p': 'Questa è la sezione chi sono dove mi presento.',
            'projects.h2': 'Progetti',
            'projects.p': 'Questa è la sezione progetti dove mostro il mio lavoro.',
            'skills.h2': 'Competenze',
            'skills.p': 'Qui descrivo le mie competenze.',
            'contact.h2': 'Contatti',
            'contact.p': 'Questa è la sezione contatti con i miei riferimenti.'
        },
        en: {
            'nav.home': 'HOME',
            'nav.about': 'ABOUT',
            'nav.projects': 'PROJECTS',
            'nav.skills': 'SKILLS',
            'nav.contact': 'CONTACT',
            'mail.text': 'CONTACT',
            'mail.aria': 'Send email to Antonio Florea',
            'about.h2': 'About Me',
            'about.p': 'This is the about section where I will introduce myself.',
            'projects.h2': 'My Projects',
            'projects.p': 'This is the projects section where I showcase my work.',
            'skills.h2': 'Skills',
            'skills.p': 'Here I describe my skills.',
            'contact.h2': 'Contact Me',
            'contact.p': 'This is the contact section where I provide my contact info.'
        }
    };

    // Initialize after DOM is ready to avoid querySelector errors
    function init() {
    let current = localStorage.getItem('lang') || 'it';
    const toggle = document.getElementById('lang-toggle');
    // Use the actual filenames in the assets folder
    const flags = { it: 'assets/logo-ITALIA.png', en: 'assets/Logo-Inghilterra.svg' };

        const apply = (lang) => {
            // Replace only elements that explicitly opt-in via data-i18n-key
            document.querySelectorAll('[data-i18n-key]').forEach(el => {
                const key = el.getAttribute('data-i18n-key');
                if(dict[lang] && dict[lang][key]) el.textContent = dict[lang][key];
            });

            // update mail aria-label
            const mail = document.querySelector('.mail-link');
            if(mail && dict[lang]['mail.aria']) mail.setAttribute('aria-label', dict[lang]['mail.aria']);

            // update section headings and paragraphs
            // For section headings and paragraphs: only update if the element is empty
            // or explicitly marked with data-i18n-key (so manual edits are preserved)
            const sections = ['about', 'projects', 'skills', 'contact'];
            sections.forEach(id => {
                const h2 = document.querySelector(`#${id} h2`);
                const p = document.querySelector(`#${id} p`);
                const h2Key = `${id}.h2`;
                const pKey = `${id}.p`;
                if(h2) {
                    const hasKey = h2.hasAttribute('data-i18n-key');
                    if(hasKey && dict[lang] && dict[lang][h2Key]) h2.textContent = dict[lang][h2Key];
                    else if(!h2.textContent.trim() && dict[lang] && dict[lang][h2Key]) h2.textContent = dict[lang][h2Key];
                }
                if(p) {
                    const hasKeyP = p.hasAttribute('data-i18n-key');
                    if(hasKeyP && dict[lang] && dict[lang][pKey]) p.textContent = dict[lang][pKey];
                    else if(!p.textContent.trim() && dict[lang] && dict[lang][pKey]) p.textContent = dict[lang][pKey];
                }
            });

            // update the flag image to show the OPPOSITE language (so the toggle displays the language
            // the user can switch to next). Works whether #lang-toggle is an <img> or a container with an <img>.
            if(toggle) {
                const opposite = lang === 'it' ? 'en' : 'it';
                const srcToShow = flags[opposite];
                const altText = opposite === 'it' ? 'Lingua Italiana' : 'Lingua Inglese';
                if(toggle.tagName && toggle.tagName.toLowerCase() === 'img') {
                    toggle.src = srcToShow;
                    toggle.alt = altText;
                } else {
                    const img = toggle.querySelector && toggle.querySelector('img');
                    if(img) {
                        img.src = srcToShow;
                        img.alt = altText;
                    }
                }
                // aria-pressed still reflects whether current language is English
                toggle.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
                // helpful tooltip/title indicating the action
                toggle.setAttribute('title', opposite === 'it' ? 'Cambia in Italiano' : 'Switch to English');
            }

            // save preference
            localStorage.setItem('lang', lang);
        };

        const toggleLang = () => {
            current = current === 'it' ? 'en' : 'it';
            apply(current);
        };

        if(toggle) {
            toggle.addEventListener('click', toggleLang);
            toggle.addEventListener('keydown', (e) => {
                if(e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleLang();
                }
            });
        }

        // apply initial language
        apply(current);
    }

    if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
