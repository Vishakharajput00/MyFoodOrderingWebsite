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
import { useDispatch } from "react-redux";
import { ADD } from "../redux/action/Action";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function Cardvalue() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };
  const cardData = [
    {
      id: "1",
      img1: "https://thumbs.dreamstime.com/b/fast-food-concept-greasy-fried-restaurant-take-out-as-onion-rings-burger-hot-dogs-fried-chicken-french-fries-31114163.jpg",
      dishName: "Pizza-Burger",
      price: 340,
      orderreview: "34+",
      restaurant: "Zomato",
      quantity: 0,
    },
    {
      id: "2",
      img1: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80",
      dishName: "Pizza Mania",
      price: 340,
      orderreview: "394+",
      restaurant: "Zomato",
      quantity: 0,
    },
    {
      id: "3",
      img1: "https://images.all-free-download.com/images/graphiclarge/food_picture_01_hd_pictures_167558.jpg",
      dishName: "Momo Tikka",
      price: 340,
      orderreview: "3234+",
      restaurant: "Zomato",
      quantity: 0,
    },
    {
      id: "4",
      img1: "https://img.freepik.com/premium-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?w=2000",
      dishName: "Masala Chiken",
      price: 340,
      orderreview: "876+",
      restaurant: "Zomato",
      quantity: 0,
    },
    {
      id: "5",
      img1: "https://images.alphacoders.com/862/thumb-1920-862639.jpg",
      dishName: "Masala Dosa",
      price: 340,
      orderreview: "32+",
      restaurant: "Zomato",
      quantity: 0,
    },
    {
      id: "6",
      img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9t9xOYc_56W7vQjSkgkqqLbXA4HmGsLqK2Q&usqp=CAU",
      dishName: "Masala Non-veg",
      price: 340,
      orderreview: "2+",
      restaurant: "Zomato",
      quantity: 0,
    },
    {
      id: "7",
      img1: "https://img.freepik.com/free-photo/raw-giant-shrimps-dark-table_1220-4998.jpg?w=2000",
      dishName: "Sushi",
      price: 340,
      orderreview: "54+",
      restaurant: "Zomato",
      quantity: 0,
    },
    {
      id: "8",
      img1: "http://www.zedamagazine.com/wp-content/uploads/2018/06/Indian-Food-Samosa-Dish-HD-Wallpapers.jpg",
      dishName: "Samosa",
      price: 340,
      orderreview: "7+",
      restaurant: "Zomato",
      quantity: 0,
    },
  ];
  return (
    <div style={{ paddingBottom: "4rem" }}>
      <Container maxWidth="md">
        <Box
          style={{
            textAlign: "center",
            marginTop: "1rem",
            marginBottom: "1rem",
            // color: "white",
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
                          Price: &nbsp;<b>{data?.price}</b>
                        </Typography>
                      </CardContent>
                    </CardActionArea>

                    <CardActions>
                      <Button
                        variant="contained"
                        fullWidth
                        color="primary"
                        onClick={() => {
                          send(data);
                        }}
                      >
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
