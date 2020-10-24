import { i18n } from '../i18n'

export const handleLanguage = () => {
    document.getElementById("text-container").style.opacity = 0;
    setTimeout(function () {
        const language = i18n.language === 'en' ? 'tr' : 'en'
        i18n.changeLanguage(language)
        document.getElementById("text-container").style.opacity = 1;
    }, 150);
}

export default handleLanguage