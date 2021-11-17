import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

function Footer() {
  return (
    <AppBar
      position="static"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        position: "absolute",
        bottom: 0,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            variant="string"
            align="center"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Hecho con ❤️ Platzi Master
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;
