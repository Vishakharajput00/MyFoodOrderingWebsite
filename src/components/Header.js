import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import CloseIcon from "@material-ui/icons/Close";
import { Box, Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { useSelector } from "react-redux";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

function Header() {
  const getData = useSelector((state) => state.cartReducer);
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
            <StyledBadge badgeContent={4} color="secondary">
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
          </Menu>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
