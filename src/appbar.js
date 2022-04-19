import * as React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "./assets/logo.png";

const useStyles = makeStyles((theme) => ({
  logodiv: {
    display: "flex",
    float: "left",
    objectFit: "cover",
    position: "sticky",
    height: "110px",
    width: "110px",
    marginTop: "5px",
    marginLeft: "15%",
    cursor: "pointer",
    "&:hover": { opacity: 0.72 },
  },
  appbar: {
    background: "rgba(255, 255, 255, 0.8)",
  },
  item: {
    marginLeft: 50,
    cursor: "Pointer",
    "&:hover": {
      color: "#eeeeee",
      opacity: 0.72,
      borderBottom: "3px solid #008fc8",
    },
  },
}));

function Appbar({ compChange }) {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="fixed" className={classes.appbar} elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={logo}
            className={classes.logodiv}
            alt="Logo"
            onClick={() => {
              compChange("home");
              setIndex(0);
            }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>
          <div
            className={classes.item}
            onClick={() => {
              compChange("hardware");
              setIndex(1);
            }}
            style={
              index === 1
                ? {
                    borderBottom: "3px solid #008fc8",
                    transition: "background .5s ease",
                  }
                : {}
            }
          >
            <Typography
              className={classes.text}
              style={index === 1 ? { color: "#008fc8" } : { color: "#424242" }}
            >
              HARDWARE
            </Typography>
          </div>
          <div
            className={classes.item}
            onClick={() => {
              compChange("software");
              setIndex(2);
            }}
            style={
              index === 2
                ? {
                    borderBottom: "3px solid #008fc8",
                    transition: "background .5s ease",
                  }
                : {}
            }
          >
            <Typography
              className={classes.text}
              style={index === 2 ? { color: "#008fc8" } : { color: "#424242" }}
            >
              SOFTWARE
            </Typography>
          </div>
          {/* <div
            className={classes.item}
            onClick={() => {
              compChange("solutions");
              setIndex(3);
            }}
            style={
              index === 3
                ? {
                    borderBottom: "3px solid #008fc8",
                    transition: "background .5s ease",
                  }
                : {}
            }
          >
            <Typography
              className={classes.text}
              style={index === 3 ? { color: "#008fc8" } : { color: "#424242" }}
            >
              SOLUTIONS
            </Typography>
          </div> */}
          <div
            className={classes.item}
            onClick={() => {
              compChange("company");
              setIndex(4);
            }}
            style={
              index === 4
                ? {
                    borderBottom: "3px solid #008fc8",
                    transition: "background .5s ease",
                  }
                : {}
            }
          >
            <Typography
              className={classes.text}
              style={index === 4 ? { color: "#008fc8" } : { color: "#424242" }}
            >
              COMPANY
            </Typography>
          </div>
          <div
            className={classes.item}
            onClick={() => {
              compChange("contact");
              setIndex(5);
            }}
            style={
              index === 5
                ? {
                    borderBottom: "3px solid #008fc8",
                    transition: "background .5s ease",
                  }
                : {}
            }
          >
            <Typography
              className={classes.text}
              style={index === 5 ? { color: "#008fc8" } : { color: "#424242" }}
            >
              CONTACT
            </Typography>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
Appbar.propTypes = {
  compChange: PropTypes.func,
};

export default Appbar;
