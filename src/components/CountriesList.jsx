import { Link } from "react-router-dom";

const CountriesList = ({ countries }) => {
  return (
    <div className="container d-flex flex-column gap-3 justify-content-start countriesList">
      {countries &&
        countries.map((countrie) => {
          return (
            <div
              className="card d-flex justify-content-center align-items-center"
              key={countrie.name.common}
              style={{ width: "18rem", height: "15rem" }}
            >
              <Link to={`/${countrie.alpha3Code}`}>
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${countrie.alpha2Code.toLowerCase()}.png`}
                  alt={countrie.name.common}
                />
                <h3>{countrie.name.common}</h3>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default CountriesList;
