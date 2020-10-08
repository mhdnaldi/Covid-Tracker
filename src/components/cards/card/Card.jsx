import React from "react";
import styles from "./Card.module.css";
import CountUp from "react-countup";
import cn from "classnames";

import { Grid, Card, CardContent, Typography } from "@material-ui/core";

const card = ({ className, cardTitle, value, cardSubtitle }) => {
  return (
    <Grid
      item
      xs={12}
      md={3}
      component={Card}
      className={cn(styles.card, className)}
    >
      <CardContent>
        <Typography align="center" color="primary" gutterButtom>
          {cardTitle}
        </Typography>
        <Typography align="center" variant="h5" className={styles.number}>
          <CountUp start={0} end={value} duration={1} seperator=","></CountUp>
        </Typography>
        <Typography align="center" color="primary">
          People
        </Typography>
        <Typography
          className={styles.cardSubtitle}
          align="center"
          variant="body2"
          components="p"
        >
          {cardSubtitle}
        </Typography>
      </CardContent>
    </Grid>
  );
};

export default card;
