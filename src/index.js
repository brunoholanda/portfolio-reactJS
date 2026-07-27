import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import AppRoutes from 'routes';
import { hotjar } from 'react-hotjar';
import { LanguageProvider } from 'Context/LanguageContext';
import { ThemeProvider } from 'Context/ThemeContext';
import useGeoLanguage from 'hook/useGeoLanguage';

const hotjarId = '4997618';
const hotjarVersion = 6;

hotjar.initialize(hotjarId, hotjarVersion);

const GeoLanguageWrapper = ({ children }) => {
  useGeoLanguage();
  return children;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <GeoLanguageWrapper>
          <AppRoutes />
        </GeoLanguageWrapper>
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
);
