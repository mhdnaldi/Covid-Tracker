import React from "react";
import axios from "axios";
import styles from "./Home.module.css";
import headerImage from "../../images/virus.png";
import Typography from "@material-ui/core/Typography";
import SortCountry from "../../components/sortCountry/SortCountry";
import Cards from "../../components/cards/Cards";
// COMPONENT
class Home extends React.Component {
  state = {
    data: {},
  };

  componentDidMount() {
    console.log("kalo di vue ini sama kyk created()");
    this.getDataGlobal();
  }

  handleCountryChange = (event) => {
    let country = event.target.value;
    this.getDataGlobal(country);
    const setCountry = country ? country : "Global";
    this.props.history.push({
      search: `?country=${setCountry}`,
    });
  };

  getDataGlobal = (country) => {
    let setUrl = "https://covid19.mathdro.id/api";
    setUrl = country ? `${setUrl}/countries/${country}` : setUrl;
    axios
      .get(setUrl)
      .then((res) => {
        // SETSTATE UTK MENGUBAH DATA STATE
        this.setState({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // RENDER TEMPAT TEMPLATE HTML
  render() {
    const { data } = this.state;
    const lastUpdate = new Date(data.lastUpdate).toDateString();
    return (
      <div className={styles.container}>
        <img className={styles.image} src={headerImage} alt="Covid-19" />
        <Typography color="error" gutterBottom variant="h3">
          COVID-19
        </Typography>
        <Typography variant="subtitle2" color="error" gutterBottom>
          Last Update: {lastUpdate}
        </Typography>
        <SortCountry handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
      </div>
    );
  }
}

export default Home;
