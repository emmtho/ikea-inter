import { AppContextProvider } from "../../provider/AppContextProvider";
import { Navbar } from "../Navbar/Navbar";
import { Listing } from "../Listing/Listing";

export const Home = () => {
    return (
        <AppContextProvider>
            <div className="App">
            <header className="App-header">
                <Navbar />
            </header>
            <main>
                <Listing />
            </main>
            </div>
        </AppContextProvider>
    );
};