import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";

function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
          <Typography
            variant="caption"
            component="span"
            align="right"
            mr={2}
            sx={{ flexGrow: 1 }}
          >
            Profile name
          </Typography>
          <Avatar>H</Avatar>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
