import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <button
      className="lang-toggle-btn"
      onClick={handleLanguageChange}
      title={i18n.language === 'en' ? 'Switch to French' : 'Changer en Anglais'}
      aria-label="Language toggle"
    >
      <span className="lang-toggle-icon">🌐</span>
      <span className="lang-toggle-text">
        {i18n.language === 'en' ? 'FR' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
