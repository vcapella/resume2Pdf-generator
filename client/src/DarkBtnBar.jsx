import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


export default function DarkBtnBar({ colorMode, theme }) {

  return (
    <Box sx={{
      boxShadow: 0,
      flexGrow: 1,

    }}>
      <AppBar position="static" sx={{ boxShadow: 0, maxWidth: "480px", margin: "auto", borderRadius: 1, backgroundColor: "#424242" }}>
        <Toolbar sx={{}}>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, }}>
            PDF my resume
          </Typography>

          {/* {theme.palette.mode} mode */}
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

