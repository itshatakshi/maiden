import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import Avatar from "@mui/material/Avatar";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";

function SoftwareCards() {
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
              <SettingsSystemDaydreamIcon style={{ height: 60, width: 60 }} />
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
              Centralized Dashboard
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
              <EqualizerIcon style={{ height: 80, width: 80 }} />
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
              Real-Time Status
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
              Easy Web-Based Software Portal
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
              <SwapHorizIcon style={{ height: 80, width: 80 }} />
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
              CLEAN API
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
              <TextSnippetIcon style={{ height: 80, width: 80 }} />
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
              Full Suite Of Reports
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
              <NotificationImportantIcon style={{ height: 80, width: 80 }} />
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
              Push Notifications
            </Typography>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}

export default SoftwareCards;
