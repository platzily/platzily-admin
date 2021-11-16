import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import PersonIcon from "@mui/icons-material/Person";
import LinkIcon from "@mui/icons-material/Link";
import CampaignIcon from "@mui/icons-material/Campaign";
import MenuItem from "./MenuItem";

const drawerWidth = 240;

function SideBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box>
          <List>
            <MenuItem TextItem="Links">
              <LinkIcon />
            </MenuItem>

            <MenuItem TextItem="Users">
              <PersonIcon />
            </MenuItem>

            <MenuItem TextItem="Campaign">
              <CampaignIcon />
            </MenuItem>
          </List>
          <Divider />
        </Box>
      </Drawer>
    </Box>
  );
}

export default SideBar;
