import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    marginTop: "20px",
    marginRight: "20px",
    marginBottom: "20px",
    fontFamily: "Poppins"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    cursor: "pointer",
  },
  contenedor: {
    display: "flex",
    justifyContent: "center",
  },
  precio: {
    fontSize: "1.2em",
    textAlign: "center",
  },
  button: {
    background: "#E9BABC",
    fontSize: "0.7em",
    fontWeight: "bold",
    width: "100%",
    "&:hover": {
      backgroundColor: "#E9BABC",
    },
  },
  modal: {
    position: "absolute",
    width: 600,
    backgroundColor: "white",
    borderRadius: "4px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    fontFamily: "Poppins",
    outline: "none"
  },
  titleModal: {
    fontFamily: "Poppins"
  },
  iva: {
    fontSize: "12px",
    marginTop: "-20px"
  },
  divCont: {
    display: "flex",
  },
  divDesc: {
    marginLeft: "20px",
  },
  input: {
    marginRight: "20px",
    width: "50px",
    height: "30px",
  },
  imgCon: {
    marginTop: "20px",
  },
  imgClose: {
    position: "absolute",
    right: "30px",
    borderRadius: "50%",
    cursor: "pointer"
  },
  btnAgregar: {
    backgroundColor: "#E9BABC"
  }
}));
