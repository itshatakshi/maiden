import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CellTowerIcon from "@mui/icons-material/CellTower";
import Avatar from "@mui/material/Avatar";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import ConstructionIcon from "@mui/icons-material/Construction";
import BatteryCharging90Icon from "@mui/icons-material/BatteryCharging90";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function HardwareCards() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Card style={{ margin: "80px 35px 80px 35px", background: "black" }}>
          <div>
            <Avatar
              style={{
                background: "black",
                border: "1px solid",
                borderColor: "#008fc8",
                marginRight: "auto",
                marginLeft: "auto",
                marginTop: 15,
                height: 90,
                width: 90,
              }}
            >
              <CellTowerIcon style={{ height: 80, width: 80 }} />
            </Avatar>
          </div>
          <div
            style={{
              marginTop: 10,
              justifyContent: "center",
              display: "flex",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            <Typography style={{ fontSize: "20px", color: "white" }}>
              Wireless Transmission
            </Typography>
          </div>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card style={{ margin: "80px 35px 80px 35px", background: "black" }}>
          <div>
            <Avatar
              style={{
                background: "black",
                border: "1px solid",
                borderColor: "#008fc8",
                marginRight: "auto",
                marginLeft: "auto",
                marginTop: 15,
                height: 90,
                width: 90,
              }}
            >
              <GraphicEqIcon style={{ height: 80, width: 80 }} />
            </Avatar>
          </div>
          <div
            style={{
              marginTop: 10,
              justifyContent: "center",
              display: "flex",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            <Typography style={{ fontSize: "20px", color: "white" }}>
              Ultrasonic Technology
            </Typography>
          </div>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card style={{ margin: "80px 35px 10px 35px", background: "black" }}>
          <div>
            <Avatar
              style={{
                background: "black",
                border: "1px solid",
                borderColor: "#008fc8",
                marginRight: "auto",
                marginLeft: "auto",
                marginTop: 15,
                height: 90,
                width: 90,
              }}
            >
              <ImportantDevicesIcon style={{ height: 65, width: 65 }} />
            </Avatar>
          </div>
          <div
            style={{
              marginTop: 10,
              justifyContent: "center",
              display: "flex",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            <Typography style={{ fontSize: "20px", color: "white" }}>
              Remote Monitoring
            </Typography>
          </div>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card style={{ margin: "80px 35px 80px 35px", background: "black" }}>
          <div>
            <Avatar
              style={{
                background: "black",
                border: "1px solid",
                borderColor: "#008fc8",
                marginRight: "auto",
                marginLeft: "auto",
                marginTop: 15,
                height: 90,
                width: 90,
              }}
            >
              <ConstructionIcon style={{ height: 80, width: 80 }} />
            </Avatar>
          </div>
          <div
            style={{
              marginTop: 10,
              justifyContent: "center",
              display: "flex",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            <Typography style={{ fontSize: "20px", color: "white" }}>
              Easy Installation
            </Typography>
          </div>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card style={{ margin: "80px 35px 80px 35px", background: "black" }}>
          <div>
            <Avatar
              style={{
                background: "black",
                border: "1px solid",
                borderColor: "#008fc8",
                marginRight: "auto",
                marginLeft: "auto",
                marginTop: 15,
                height: 90,
                width: 90,
              }}
            >
              <BatteryCharging90Icon style={{ height: 80, width: 80 }} />
            </Avatar>
          </div>
          <div
            style={{
              marginTop: 10,
              justifyContent: "center",
              display: "flex",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            <Typography style={{ fontSize: "20px", color: "white" }}>
              Ultra Low Power
            </Typography>
          </div>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card style={{ margin: "80px 35px 80px 35px", background: "black" }}>
          <div>
            <Avatar
              style={{
                background: "black",
                border: "1px solid",
                borderColor: "#008fc8",
                marginRight: "auto",
                marginLeft: "auto",
                marginTop: 15,
                height: 90,
                width: 90,
              }}
            >
              <DeleteOutlineIcon style={{ height: 80, width: 80 }} />
            </Avatar>
          </div>
          <div
            style={{
              marginTop: 10,
              justifyContent: "center",
              display: "flex",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            <Typography style={{ fontSize: "20px", color: "white" }}>
              Suitable for all trash cans
            </Typography>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}

export default HardwareCards;
