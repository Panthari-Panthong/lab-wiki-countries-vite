import { Link, useParams } from "react-router-dom";

const CountryDetails = ({ countries }) => {
  const { countrieCode } = useParams();

  const foundCountry = countries.find((oneCountry) => {
    return oneCountry.alpha3Code === countrieCode;
  });

  return (
    <div className="container text-center countryDetails">
      {!foundCountry && <h3>Country not found!</h3>}
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
      )}
    </div>
  );
};

export default CountryDetails;
