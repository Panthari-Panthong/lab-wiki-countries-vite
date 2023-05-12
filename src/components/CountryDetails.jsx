import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CountryDetails = ({ countries }) => {
  const [foundCountry, setFoundCountry] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { countrieCode } = useParams();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${countrieCode}`
      );
      if (response.status === 200) {
        setFoundCountry(response.data);
        setIsLoaded(true);
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [countrieCode]);

  useEffect(() => {
    if (!isLoaded) {
      fetchData();
    }
  }, [isLoaded]);

  // const foundCountry = countries.find((oneCountry) => {
  //   return oneCountry.alpha3Code === countrieCode;
  // });

  return (
    <div className="container text-center countryDetails">
      {isLoaded ? (
        <div className="col-7">
          <h1>{foundCountry.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: "30%" }}>Capital</td>
                {foundCountry.capital.length === 0 ? (
                  <td>No capital</td>
                ) : (
                  <td>{foundCountry.capital[0]}</td>
                )}
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {foundCountry.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {foundCountry.borders.length === 0 ? (
                      <li>No borders found!</li>
                    ) : (
                      foundCountry.borders.map((border) => {
                        return countries.map((country) => {
                          if (country.alpha3Code === border) {
                            return (
                              <Link
                                to={`/${country.alpha3Code}`}
                                key={country.alpha3Code}
                                onClick={() => setIsLoaded(false)}
                              >
                                <li>{country.name.common}</li>
                              </Link>
                            );
                          }
                        });
                      })
                    )}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
      {/* {!foundCountry && <h3>Country not found!</h3>}
      {foundCountry && (
        <>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
            alt={foundCountry.name.common}
          />
          <h3>{foundCountry.name.common}</h3>
          <div className="d-flex flex-row gap-3 justify-content-around">
            <h6>Capital</h6>
            {foundCountry.capital.length === 0 ? (
              <p>No capital</p>
            ) : (
              <p>{foundCountry.capital[0]}</p>
            )}
          </div>
          <hr />
          <div className="d-flex flex-row gap-3 justify-content-around">
            <h6>Area</h6>
            <p>
              {foundCountry.area} km<sup>2</sup>
            </p>
          </div>
          <hr />
          <div className="d-flex flex-row gap-5 justify-content-around">
            <h6>Borders</h6>
            <div className="d-flex flex-column">
              {foundCountry.borders.length === 0 ? (
                <p>No borders found!</p>
              ) : (
                foundCountry.borders.map((border) => {
                  return countries.map((country) => {
                    if (country.alpha3Code === border) {
                      return (
                        <Link
                          to={`/${country.alpha3Code}`}
                          key={country.alpha3Code}
                        >
                          <p>{country.name.common}</p>
                        </Link>
                      );
                    }
                  });
                })
              )}
            </div>
          </div>
        </>
      )} */}
    </div>
  );
};

export default CountryDetails;
