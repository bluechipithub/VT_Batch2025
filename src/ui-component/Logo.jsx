
import { useTheme } from '@mui/material/styles';
import logo from 'assets/images/logo.jpg';

export default function Logo() {
  const theme = useTheme();

  return (
     <img src={logo} alt="Berry" width="100" />
  );
}
