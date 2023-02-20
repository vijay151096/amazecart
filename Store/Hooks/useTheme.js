import {useContext} from 'react';
import {ThemeContext} from '../ThemeContextProvider';

export default function useTheme() {
  const theme = useContext(ThemeContext);

  return theme;
}
