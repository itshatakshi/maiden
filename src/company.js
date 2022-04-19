import * as React from "react";
import maidenlogo2 from "./assets/maidenlogo2.png";
import companyimage from "./assets/companyimage.jpg";
import CompanyCard1 from "./companypage/companycard1";
import CompanyCard2 from "./companypage/companycard2";
import CompanyCard3 from "./companypage/companycard3";
import Grid from "@mui/material/Grid";

function Company() {
  return (
    <div>
      <div
        style={{
          background: "linear-gradient(to right, #f7f8fc,#e5e9f1,#e2e6f0)",
        }}
      >
        <hr style={{ marginTop: 100 }} />
        <h1 style={{ textAlign: "center" }}>
          Maiden Easy Design's Mission and Story
        </h1>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            marginRight: "auto",
            marginLeft: "auto",
            width: "45vw",
          }}
        >
          <hr style={{ width: "20vw", float: "right" }} />
          <img src={maidenlogo2} style={{ width: 25, height: 25 }} />
          <hr style={{ width: "20vw" }} />
        </div>
        <div>
          <img src={companyimage} />
        </div>
      </div>
      <div style={{ marginTop: 30 }}>
        <h1 style={{ textAlign: "center" }}>Potential Clients and Projects</h1>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <CompanyCard1 />
          </Grid>
          <Grid item xs={4}>
            <CompanyCard2 />
          </Grid>
          <Grid item xs={4}>
            <CompanyCard3 />
          </Grid>
        </Grid>{" "}
      </div>
    </div>
  );
}

export default Company;
