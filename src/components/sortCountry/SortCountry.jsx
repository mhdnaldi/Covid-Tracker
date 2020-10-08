import React, { useState, useEffect } from "react";
import { FormControl, NativeSelect } from "@material-ui/core";
import axios from "axios";
import styles from "./SortCountry.module.css";

const SortCountry = ({ handleCountryChange }) => {
  // SAMA SEPERTI STATE
  const [countries, setCountries] = useState([]);
  // USE EFFECT SM SEPERTI CREATED DI VUE
  useEffect(() => {
    getCountry();
  }, []);

  function getCountry() {
    axios
      .get("https://covid.mathdro.id/api/countries")
      .then((res) => {
        let { countries } = res.data;
        countries = countries.map((value) => value.name);
        //SET COUNTRIES UTK SET DATA COUNTRIES KE STATE
        setCountries(countries);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        variant="standard"
        onChange={(event) => handleCountryChange(event)}
      >
        <option value="">Global</option>
        {countries.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default SortCountry;
