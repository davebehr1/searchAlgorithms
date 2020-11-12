import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "80%",
    backgroundColor: "transparent",
    border: "2px solid orange",
  },
  tab: {
    border: "2px solid orange",
    margin: "10px",
    color: "orange",
  },
  indicator: {
    backgroundColor: "orange",
  },
  appbar: {
    boxShadow: "none",
    backgroundColor: "transparent",
  },
  panel: {
    color: "orange",
  },
}));
export default useStyles;
