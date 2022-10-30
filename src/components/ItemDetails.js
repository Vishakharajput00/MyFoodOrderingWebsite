import {
  Container,
  Box,
  Typography,
  Card,
  Grid,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import DeleteIcon from "@material-ui/icons/Delete";
import StarBorderIcon from "@material-ui/icons/StarBorder";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: "4rem",
    marginBottom: "4rem",
  },
  root1: {
    maxWidth: "100%",
  },
});
function ItemDetails() {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="md">
        <Box
          style={{
            textAlign: "center",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Typography style={{ fontSize: "2rem", fontWeight: "600" }}>
            Order details...
          </Typography>
        </Box>
        <Card className={classes.root1}>
          <Grid container spacing={5}>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image="img/food1.jpg"
                    title="Contemplative Reptile"
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={6}>
              <Box style={{ marginTop: "2rem" }}>
                <Typography>
                  <b>Restaurant :</b> &nbsp;&nbsp; Masala Theorry
                </Typography>
                &nbsp;&nbsp;&nbsp;
                <Typography>
                  <b>Price :</b> &nbsp;&nbsp; 350
                </Typography>
                &nbsp;&nbsp;&nbsp;
                <Typography>
                  <b>Dishes :</b> &nbsp;&nbsp; North Indian, Biryani, Mughlai
                </Typography>
                &nbsp;&nbsp;&nbsp;
                <Typography>
                  <b>Total :</b> &nbsp;&nbsp; 350
                </Typography>
                &nbsp;&nbsp;&nbsp;
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={6}>
              <Box style={{ marginTop: "4rem", marginRight: "2rem" }}>
                <Typography>
                  <b>Rating :</b> &nbsp;&nbsp;{" "}
                  <span
                    style={{
                      backgroundColor: "green",
                      width: "3rem",
                      color: "white",
                      borderRadius: "5px",
                      paddingLeft: "3px",
                    }}
                  >
                    3.8
                    <StarBorderIcon style={{ fontSize: "18px" }} />
                  </span>
                </Typography>
                &nbsp;&nbsp;&nbsp;
                <Typography>
                  <b>Order Review :</b> &nbsp;&nbsp; 1154+ order placed from
                  here recently
                </Typography>
                &nbsp;&nbsp;&nbsp;
                <Typography>
                  <b>Remove :</b> &nbsp;&nbsp;
                  <DeleteIcon style={{ color: "red" }} />
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </div>
  );
}

export default ItemDetails;
