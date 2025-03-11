import './App.css';
import { AppContextProvider } from './provider/AppContextProvider';

function App() {
  return (
    <AppContextProvider>
      <div className="App">
      </div>
    </AppContextProvider>
  );
}

export default App;