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
      let arrayOfBorderingCountries =[]
      let borders=theCountry.borders //for the country currentlly selected, get the associated borders
      console.log('Inside borders',borders)
      borders.map(eachAbbr => {       //loop through the borders array
        let borderCountries=this.props.countries.find(eachCountry=>{  //loop the countries passed as prop and find the abbreviated border country
          return eachCountry.cca3 === eachAbbr
        })
        return arrayOfBorderingCountries.push(borderCountries)
      })
      return arrayOfBorderingCountries.map(country=>{
        return <li><Link key={country.cca3} to={`/country-detail/${country.cca3}`}>{country.name.common}</Link></li>
      })
    }

    render() {
      let theCountry = this.findDetails()
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
                      {/* <li><a href="/AND">Andorra</a></li>
                      <li><a href="/BEL">Belgium</a></li>
                      <li><a href="/DEU">Germany</a></li>
                      <li><a href="/ITA">Italy</a></li>
                      <li><a href="/LUX">Luxembourg</a></li>
                      <li><a href="/MCO">Monaco</a></li>
                      <li><a href="/ESP">Spain</a></li>
                      <li><a href="/CHE">Switzerland</a></li> */}
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