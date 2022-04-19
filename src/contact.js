import * as React from "react";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { makeStyles } from "@mui/styles";
import EmailIcon from "@mui/icons-material/Email";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const useStyles = makeStyles((theme) => ({
  content: {
    minHeight: 23.4,
    fontSize: "18px",
    margin: "2px 0",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  icon: {
    width: "23.4px",
    float: "left",
    lineHeight: "1.3",
    margin: 15,
    color: "#008fc8",
  },
  text: {
    padding: "0 3px",
    flex: 1,
    alignSelf: "flex-start",
    margin: 15,
  },
}));

function Contact() {
  const classes = useStyles();

  return (
    <div>
      <div
        className={classes.content}
        style={{ marginTop: 130, marginLeft: "10vw" }}
      >
        <div className={classes.icon}>
          <SupervisedUserCircleIcon
            style={{
              display: "inline-block",
              height: 50,
              width: 50,
              color: "#008fc8",
            }}
          />
        </div>
        <div className={classes.text}>
          <h1 style={{ display: "inline-block" }}>Connect with us today</h1>
        </div>
      </div>
      <div
        className={classes.content}
        style={{ marginTop: 30, marginLeft: "10vw" }}
      >
        <div className={classes.icon}>
          <EmailIcon style={{ color: " #ffeb3b", height: 30, width: 30 }} />
        </div>
        <div className={classes.text}>
          <Typography> E-mail: maiden.easydesign@gmail.com</Typography>
        </div>
      </div>
      <div
        className={classes.content}
        style={{ marginTop: 10, marginLeft: "10vw" }}
      >
        <div className={classes.icon}>
          <LinkedInIcon style={{ color: "#0288d1", height: 30, width: 30 }} />
        </div>
        <div className={classes.text}>
          LinkedIn:
          <a
            href="https://www.linkedin.com/in/maiden-easy-design-opc-pvt-ltd-know-your-experiments-772936212"
            style={{
              color: "black",
              hover: {
                color: "#eeeeee",
                opacity: 0.72,
                borderBottom: "3px solid #008fc8",
              },
            }}
          >
            {"  "} Maiden easy design
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
