import { AppContextProvider } from "../../provider/AppContextProvider";
import { Navbar } from "../Navbar/Navbar";
import { Listing } from "../Listing/Listing";

export const Home = () => {
    return (
        <AppContextProvider>
            <div className="App">
            <main>
                <Listing />
            </main>
            </div>
        </AppContextProvider>
    );
};