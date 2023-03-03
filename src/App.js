import './App.scss';
import theme from './styles/theme';
import { ThemeProvider} from '@mui/material';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <div>ABC</div>
      </ThemeProvider>
  );
}

export default App;
