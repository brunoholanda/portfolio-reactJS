import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'Context/ThemeContext';
import { useLanguage } from 'Context/LanguageContext';
import styles from './ThemeToggle.module.scss';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();
  const isDark = theme === 'dark';
  const label = isDark
    ? language === 'pt-br'
      ? 'Ativar tema claro'
      : 'Switch to light theme'
    : language === 'pt-br'
      ? 'Ativar tema escuro'
      : 'Switch to dark theme';

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      aria-pressed={isDark}
    >
      {isDark ? <Sun size={18} strokeWidth={2.25} /> : <Moon size={18} strokeWidth={2.25} />}
    </button>
  );
}
