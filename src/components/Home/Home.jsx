import { AppContextProvider } from "../../provider/AppContextProvider";
import { Listing } from "../Listing/Listing";

export const Home = () => {
    return (
        <div className="App">
        <main>
            <Listing />
        </main>
        </div>
    );
};