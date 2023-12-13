import React, { useEffect, useState } from "react";
import "./TempApp.css";
const TempApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c173796eecfe7908ca1c436e70d0cadc`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson);
    };
    fetchApi();
  }, []);
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        <div className="info">
          <h2 className="location">
            <i className="fa-solid fa-street-view" color="color: #11fd11"></i>
            {search}
          </h2>
          <h1 className="temp">5.25°Cel</h1>
          <h3>Min : 5.25°Cel | Max : 5.25°Cel</h3>
        </div>
      </div>
    </>
  );
};

export default TempApp;
