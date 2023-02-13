import {createContext, useState} from 'react';
import {DefaultTheme} from '@react-navigation/native';
import {lightColor} from '../Styles/LightColor';
import {darkColor} from '../Styles/DarkColor';

export const ThemeContext = createContext({
  themeColors: {},
  theme: {},
  changeTheme: () => {},
  isDarkMode: false,
});
const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...lightColor,
  },
};

const darkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...darkColor,
  },
};
const ThemeContextProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState(lightTheme);

  const changeTheme = () => {
    if (isDarkMode) {
      setIsDarkMode(prevState => !prevState);
      setTheme(lightTheme);
    } else {
      setIsDarkMode(prevState => !prevState);
      setTheme(darkTheme);
    }
  };

  const values = {
    themeColors: theme.colors,
    theme,
    changeTheme,
    isDarkMode,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
