import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ToggleColorMode from "./DarkMode";
// import Button from "@mui/material/Button";

export default function NavAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PDF my resume
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <ToggleColorMode />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
