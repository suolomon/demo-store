import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#800080",
    "& a": {
      color: "#ffff",
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    textAlign: "center",
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 200,
    objectFit: "contain",
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  form: { 
    maxWidth: 800,
    margin: '0 auto'
  },
  navbarButton: { 
    color: '#fff',
    textTransform: 'initial',
  }
});

export default useStyles