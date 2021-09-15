import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: "1.5em",
    color: "white",
    fontWeight: "bold",
  },
  AppBarBackg: {
    background: "#E9BABC",
  },
  Button: {
    fontSize: "1.1em",
    color: "white",
  },
}));
