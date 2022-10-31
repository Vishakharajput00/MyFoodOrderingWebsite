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
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DELETE } from "../redux/action/Action";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { ADD, DES } from "../redux/action/Action";
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
  const dispatch = useDispatch();
  const [data, setData] = useState();
  console.log("----", data);
  const { id } = useParams();
  console.log(id);
  const history = useNavigate();
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
  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };
  const dlt = (id) => {
    dispatch(DELETE(id));
    history("/");
  };

  //remove one
  const remove = (item) => {
    dispatch(DES(item));
  };

  return (
    <div style={{ height: "88vh" }}>
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
                    <Box style={{ marginTop: "2rem", marginLeft: "10px" }}>
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
                        <b>Total :</b> &nbsp;&nbsp; {row.price * row.quantity}
                      </Typography>
                      &nbsp;&nbsp;&nbsp;
                      <Box>
                        <span
                          style={{ padding: "10px", backgroundColor: "grey" }}
                        >
                          <RemoveIcon
                            onClick={
                              row.quantity < 1
                                ? dlt(row.id)
                                : () => {
                                    remove(row);
                                  }
                            }
                          />
                          &nbsp; {row?.quantity} &nbsp;
                          <AddIcon
                            onClick={() => {
                              send(row);
                            }}
                          />
                        </span>
                      </Box>
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
                        <DeleteIcon
                          style={{ color: "red", cursor: "pointer" }}
                          onClick={() => {
                            dlt(row.id);
                          }}
                        />
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
