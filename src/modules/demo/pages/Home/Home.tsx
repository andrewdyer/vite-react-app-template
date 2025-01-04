import { useTranslation } from 'react-i18next';

import reactLogo from '@demo/assets/react.svg';
import viteLogo from '@demo/assets/vite.svg';
import { Counter } from '@demo/components';

import './Home.css';

const Home = () => {
  const { t } = useTranslation('demo');

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt={t('home.viteLogoAlt')} />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="logo react"
            alt={t('home.reactLogoAlt')}
          />
        </a>
      </div>
      <h1>{t('home.title')}</h1>
      <Counter />
      <p className="read-the-docs">{t('home.description')}</p>
    </>
  );
};

export default Home;
