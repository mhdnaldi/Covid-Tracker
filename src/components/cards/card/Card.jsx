import React, { useState, useEffect } from "react";
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
        <Typography color="textSecondary" gutterButtom>
          {cardTitle}
        </Typography>
        <Typography variant="h5">
          <CountUp start={0} end={value} duration={1} seperator=","></CountUp>
        </Typography>
        <Typography color="textSecondary">People</Typography>
        <Typography variant="body2" componentes="p">
          {cardSubtitle}
        </Typography>
      </CardContent>
    </Grid>
  );
};

export default card;
