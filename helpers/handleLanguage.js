import { i18n } from '../i18n'

const handleLanguage = () => {
    document.body.style.opacity = 0;
    setTimeout(function () {
        const language = i18n.language === 'en' ? 'de' : i18n.language === 'de' ? 'tr' : 'en'
        i18n.changeLanguage(language)
        document.body.style.opacity = 1;
    }, 150);
}

export default handleLanguage