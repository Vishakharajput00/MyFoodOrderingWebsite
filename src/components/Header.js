import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import { NavLink, useNavigate } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import CloseIcon from "@material-ui/icons/Close";
import { Box, Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});

function Header() {
  const classes = useStyles();
  const navigate = useNavigate();
  const getData = useSelector((state) => state.cartReducer.carts);
  console.log("getData", getData);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="#" className="text-decoration-none text-light">
            Add to Cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink
              to="#home"
              className="text-decoration-none text-light mx-3"
            >
              Home
            </NavLink>
          </Nav>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={getData.length} color="secondary">
              <ShoppingCartIcon
                style={{ color: "white", fontSize: "25px" }}
                onClick={handleClick}
              />
            </StyledBadge>
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {getData.length ? (
              <>
                <Box style={{ margin: "10px" }}>
                  <TableContainer>
                    <Table
                      className={classes.table}
                      size="small"
                      aria-label="a dense table"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell>
                            <b>Photos</b>
                          </TableCell>
                          <TableCell align="left">
                            <b>Restaurant Name</b>
                          </TableCell>
                          <TableCell align="left"></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {getData.map((row) => (
                          <TableRow key={row.img1}>
                            <TableCell component="th" scope="row">
                              <NavLink to={`/item_details/${row.id}`}>
                                <img
                                  src={row.img1}
                                  alt=""
                                  style={{ height: "5rem", width: "5rem" }}
                                />
                              </NavLink>

                              <br />
                              <br />
                            </TableCell>
                            <TableCell component="th" scope="row" align="left">
                              {row.dishName}
                              <br />
                              <br />
                              Price: {row.price}
                              <br />
                              <br />
                              Quantity:
                            </TableCell>
                            <TableCell component="th" scope="row">
                              <DeleteIcon style={{ color: "red" }} />
                              <br />
                              <br />
                              <br />
                              <br />
                              <br />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Typography>
                    <b>Total: {getData.price}</b>
                  </Typography>
                </Box>
              </>
            ) : (
              <>
                <Box>
                  <Box style={{ display: "flex", justifyContent: "end" }}>
                    <CloseIcon
                      onClick={handleClose}
                      style={{ cursor: "pointer" }}
                    />
                  </Box>
                  <Box style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
                    <Typography>
                      {" "}
                      Your cart is empty <RemoveShoppingCartIcon />
                    </Typography>
                  </Box>
                </Box>
              </>
            )}
          </Menu>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
