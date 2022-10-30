import {
  Container,
  Box,
  Typography,
  Card,
  Grid,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import DeleteIcon from "@material-ui/icons/Delete";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
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

  const [data, setData] = useState();
  console.log("----", data);
  const { id } = useParams();
  console.log(id);

  const getData = useSelector((state) => state.cartReducer.carts);
  console.log("getData", getData);

  const compare = () => {
    let compareData = getData.filter((e) => {
      return e.id == id;
    });
    setData(compareData);
  };

  useEffect(() => {
    compare();
  }, []);
  let imagedata;
  {
    data?.map((row) => (imagedata = row?.img1));
  }
  console.log("jkmimim", imagedata);

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
          {data?.map((row) => {
            console.log("sdcdsc", row);
            return (
              <>
                <Grid container spacing={5}>
                  <Grid item lg={4} md={4} sm={4} xs={12}>
                    <Card className={classes.root}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="200"
                          src={row?.img1}
                          title="Contemplative Reptile"
                        />
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item lg={4} md={4} sm={4} xs={6}>
                    <Box style={{ marginTop: "2rem" }}>
                      <Typography>
                        <b>Restaurant :</b> &nbsp;&nbsp; {row?.restaurant}
                      </Typography>
                      &nbsp;&nbsp;&nbsp;
                      <Typography>
                        <b>Price :</b> &nbsp;&nbsp; {row.price}
                      </Typography>
                      &nbsp;&nbsp;&nbsp;
                      <Typography>
                        <b>Dishes :</b> &nbsp;&nbsp; {row?.dishName}
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
                        <b>Order Review :</b> &nbsp;&nbsp;{row?.orderreview}
                      </Typography>
                      &nbsp;&nbsp;&nbsp;
                      <Typography>
                        <b>Remove :</b> &nbsp;&nbsp;
                        <DeleteIcon style={{ color: "red" }} />
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </>
            );
          })}
        </Card>
      </Container>
    </div>
  );
}

export default ItemDetails;
