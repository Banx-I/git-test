import { useEffect, useState } from "react";

type Country = {
  name: {
    common: string;
  };
  flags: {
    svg: string;
  };
  population: number;
  area: number;
  capital: string;
};

const Croatia = () => {
  const [countryData, setCountryData] = useState<Country[]>([]);

  useEffect(() => {
    fetchAllCountries();
  }, []);

  const fetchAllCountries = () => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const selectedCountries = ["Croatia", "Germany", "France", "Luxemburg", "Slovakia", "South Korea", "Japan", "Poland", "Vietnam"];
        const filteredData = data.filter((country: Country) =>
          selectedCountries.includes(country.name.common)
        );
        setCountryData(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2rem",
          rowGap: "20rem", // Razmak po visini između redova
        }}
      >
        {countryData.map((country, index) => (
          <div key={index} style={{ width: "20rem", height: "12rem" }}>
            <h2>{country.name.common}</h2>
            <img
              src={country.flags.svg}
              alt={`Flag of ${country.name.common}`}
              style={{ width: "100%", height: "auto" }}
            />
            <p>Population: {country.population}</p>
            <p>Area: {country.area} km²</p>
            <p>Capital: {country.capital}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Croatia;
