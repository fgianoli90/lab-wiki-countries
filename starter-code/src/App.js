import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import CountryDetails from './CountryDetails.jsx'
import './App.css';
import countries from './countries.json'

class App extends Component {

  state = {
    countries   // Same thing ===> countries:countries
  }

//Method that returns list of countries as links 
  showCountryLinks = () => {
    let countryList = [...this.state.countries]
    return countryList.map(eachCountry => {
      //link to must equal that of which is in route
      return <Link key={eachCountry.cca3} to={`/country-details/${eachCountry.cca3}`}><span role="img">{eachCountry.flag}</span>{eachCountry.name.common}</Link>
    })
  }

  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">WikiCountries</a>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-5">
                <div className="list-group">
                  {this.showCountryLinks()}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**Invisible; route path must be equal to that which is in <Link/>; must past props to Country Detail component to have browser history; can pass countries here since its been imported already or import in Country Detail component*/}
        <Switch>
          <Route exact path="/country-details/:hippopotamus" render={(props) => <CountryDetails {...props} countries={this.state.countries} />} />

        </Switch>
      </div>
    );
  }
}

export default App;