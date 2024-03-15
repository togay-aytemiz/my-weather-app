import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./TopButtons";
import Inputs from "./Input";
import TimeAndLocation from "./TimeAndLocation";
import TemperatureDetails from "./TemperatureDetails";
import Forecast from "./Forecast";
import getFormattedWeatherData from "@/services/weatherService";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState("");
  const [forecastData, setForecastData] = useState("");
  const [location, setLocation] = useState("Istanbul");
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getFormattedWeatherData(`q=${location}`);
      // console.log(data);
      setData(data.formattedCurrentWeather);
      setForecastData(data.formattedForecastWeather);
    };

    fetchWeather();
    setisLoading(false);
  }, [location]);

  return (
    <div className="mx-4">
      <div className="mx-auto max-w-screen-md mt-4 mb-10 py-5 px-4 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-300 rounded-lg">
        <TopButtons setLocation={setLocation} />
        <Inputs setLocation={setLocation} />

        {!isLoading ? (
          <>
            <TimeAndLocation cityAndCountry={`${data.name},${data.country}`} />
            <TemperatureDetails details={data} />
            <Forecast
              title={"Hourly Forecast"}
              forecastData={forecastData.hourly}
              type={"hourly"}
            />
            <Forecast
              title={"daily Forecast"}
              forecastData={forecastData.daily}
              type={"daily"}
            />
          </>
        ) : (
          <p className="text-white sm:text-5xl text-3xl font-bold text-center">
            Loading...
          </p>
        )}
      </div>
    </div>
  );
};
export default App;
