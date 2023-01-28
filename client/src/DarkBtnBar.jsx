import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

export default function DarkBtnBar() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box sx={{
      flexGrow: 1,
      bgcolor: 'background.default',
      color: 'text.primary',
    }}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
            PDF my resume
          </Typography>

          {theme.palette.mode} mode
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

