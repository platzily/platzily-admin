import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

type Props = {
  children: JSX.Element,
  TextItem: string
};

function MenuItem({ children, TextItem }: Props) {
  return (
    <ListItem button>
      <ListItemIcon>{children}</ListItemIcon>
      <ListItemText>{TextItem}</ListItemText>
    </ListItem>
  );
}

export default MenuItem;
