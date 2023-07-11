import Header from "./components/Header";
import "./css/App.css";
import { useContext } from "react";
import JobComponent from "./pages/JobComponent";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { MyThemeContext } from "./Context/ThemeContextProviderComponent";
// to get the Input Context.........
import InputContextProvider from "./Context/InputContextProvider";

// ....

const App = () => {
    const theme = useContext(MyThemeContext);
    const night = theme.state.nightmode;

    return (
        <div style={{ backgroundColor: night && "#19202d" }}>
            <Header />
            <InputContextProvider>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/:id" element={<JobComponent />} />
                </Routes>
            </InputContextProvider>
        </div>
    );
};

export default App;
