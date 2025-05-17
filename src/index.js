import { useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { getTheme } from './theme';

function Root() {
  const [mode, setMode] = useState('light');
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App toggleTheme={() => setMode((prev) => (prev === 'light' ? 'dark' : 'light'))} mode={mode} />
      </ThemeProvider>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
