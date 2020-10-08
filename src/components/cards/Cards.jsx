import React from "react";
import styles from "./Cards.module.css";
import { Grid } from "@material-ui/core";

import Card from "./card/Card";

const cards = ({ data: { confirmed, recovered, deaths } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Card
          className={styles.confirmed}
          cardTitle="Cases"
          value={confirmed.value}
          cardSubtitle="TOTAL COVID-19 CASES"
        />
        <Card
          className={styles.recovered}
          cardTitle="Recovered"
          value={recovered.value}
          cardSubtitle="TOTAL COVID-19 RECOVERED"
        />
        <Card
          className={styles.deaths}
          cardTitle="Deaths"
          value={deaths.value}
          cardSubtitle="TOTAL COVID-19 DEATHS"
        />
      </Grid>
    </div>
  );
};

export default cards;
