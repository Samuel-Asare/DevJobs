import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

export const MyThemeContext = createContext();

const INITIAL_NIGHT_STATE = { nightmode: false };

const themeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE":
            return {
                nightmode: !state.nightmode,
            };
        default:
            return state;
    }
};

export const ThemeContextProviderComponent = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, INITIAL_NIGHT_STATE);

    return (
        <MyThemeContext.Provider value={{ state, dispatch }}>
            {children}
        </MyThemeContext.Provider>
    );
};

ThemeContextProviderComponent.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ThemeContextProviderComponent;
