import './App.css';
import { AppContextProvider } from './provider/AppContextProvider';
import { Listing } from './components/Listing/Listing';

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <main>
          <Listing />
        </main>
      </div>
    </AppContextProvider>
  );
}

export default App;