import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CountryDetails extends Component {


    findDetails = () => {
        console.log('country detail cca3:',this.props.match.params.hippopotamus, this.props.countries)
        let theCountry = this.props.countries.find(eachCountry => {
            return eachCountry.cca3 === this.props.match.params.hippopotamus
        })
        console.log("inide countryDetail",theCountry)
        return theCountry
        
    }
    listOfBorders=(theCountry)=>{
      let arrayOfBorderingCountries =[] //Array to push bordering countries found that equal the borders abbreviations
      let borders=theCountry.borders    //for the country currentlly selected, get the associated borders
      
      borders.map(eachAbbr => {         //loop through the borders array
        let borderCountries=this.props.countries.find(eachCountry=>{  //loop the countries passed as a prop and find the abbreviated border country
          return eachCountry.cca3 === eachAbbr
        })
        return arrayOfBorderingCountries.push(borderCountries) //push found country into array of borering countries and do next iteration in borders loop
      })
      return arrayOfBorderingCountries.map(country=>{ //since country object pushed into array and we need name, map through array and return link with country name
        return <li key={country.cca3}><Link to={`/country-details/${country.cca3}`}>{country.name.common}</Link></li>
      })
    }

    render() {
      let theCountry = this.findDetails() //need variable to hold what function find details will return as country object 
      console.log(theCountry)
        return (
            <div className="col-7">
          
            <h1>{theCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{theCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{theCountry.area} km
           <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {this.listOfBorders(theCountry)} 
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
    }
}

export default CountryDetails;