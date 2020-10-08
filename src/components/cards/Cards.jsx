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
          cardTitle="Case"
          value={confirmed.value}
          cardSubtitle="Total COVID-19 Case"
        />
        <Card
          className={styles.recovered}
          cardTitle="Recovered"
          value={recovered.value}
          cardSubtitle="Total COVID-19 Recovered"
        />
        <Card
          className={styles.deaths}
          cardTitle="Deaths"
          value={deaths.value}
          cardSubtitle="Total COVID-19 Deaths"
        />
      </Grid>
    </div>
  );
};

export default cards;
