import {createContext, useState} from 'react';
import {DefaultTheme} from '@react-navigation/native';
import {lightColor} from '../Styles/LightColor';
import {darkColor} from '../Styles/DarkColor';
import {Appearance} from 'react-native';
import {useEffect} from 'react/cjs/react.production.min';

export const ThemeContext = createContext({
  themeColors: {},
  theme: {},
  changeTheme: () => {},
  isDarkMode: false,
});
const lightTheme = {
  colors: {
    ...lightColor,
  },
};

const darkTheme = {
  colors: {
    ...darkColor,
  },
};
const ThemeContextProvider = ({children}) => {
  const colorScheme = Appearance.getColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const preferredMode = colorScheme === 'dark' ? darkTheme : lightTheme;
  const [theme, setTheme] = useState(preferredMode);

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
