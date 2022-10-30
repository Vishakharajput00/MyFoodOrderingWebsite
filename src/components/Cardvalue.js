import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  makeStyles,
} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function Cardvalue() {
  const classes = useStyles();

  const cardData = [
    {
      img1: "img/food1.jpg",
      dishName: "Masala Non-veg",
      price: "340",
    },
    {
      img1: "img/food2.jpg",
      dishName: "Masala Non-veg",
      price: "340",
    },
    {
      img1: "img/food3.webp",
      dishName: "Masala Non-veg",
      price: "340",
    },
    {
      img1: "img/food4.webp",
      dishName: "Masala Non-veg",
      price: "340",
    },
    {
      img1: "img/food1.jpg",
      dishName: "Masala Non-veg",
      price: "340",
    },
    {
      img1: "img/food2.jpg",
      dishName: "Masala Non-veg",
      price: "340",
    },
    {
      img1: "img/food3.webp",
      dishName: "Masala Non-veg",
      price: "340",
    },
    {
      img1: "img/food4.webp",
      dishName: "Masala Non-veg",
      price: "340",
    },
  ];
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
            Order your fav Food Now...
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {cardData?.map((data, i) => {
            return (
              <>
                <Grid item lg={4} md={4} sm={6} xs={12}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        image={data?.img1}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography>
                          <b>{data?.dishName}</b>
                        </Typography>
                        <Typography>
                          Price: &nbsp; &nbsp; &nbsp;<b>{data?.price}</b>
                        </Typography>
                      </CardContent>
                    </CardActionArea>

                    <CardActions>
                      <Button variant="contained" fullWidth color="primary">
                        Add to cart
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default Cardvalue;
