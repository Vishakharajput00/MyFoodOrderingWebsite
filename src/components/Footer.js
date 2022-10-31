import React from "react";
import {
  Box,
  makeStyles,
  Typography,
  Container,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles({
  footer: {
    backgroundColor: "black",
    position: "fixed",
    bottom: "0px",
    width: "100vw",
  },

  typo: {
    color: "#fff",
    "@media(max-width:600px)": {
      fontSize: "10px",
    },
  },
});

export default function Navbar() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.footer}>
        <Box
          style={{
            textAlign: "center",
            marginTop: "12px",
            marginBottom: "12px",
          }}
        >
          <Typography className={classes.typo}>
            © 2022 All Right Reserved
          </Typography>
        </Box>
      </Box>
    </>
  );
}
