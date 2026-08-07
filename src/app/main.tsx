import { createRoot } from 'react-dom/client';
import { store } from '@/app/store/store';
import { Provider } from 'react-redux';
import './styles/index.scss';
import { App } from './App.tsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root Element not found');
}

createRoot(rootElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
