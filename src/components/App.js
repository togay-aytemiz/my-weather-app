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

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getFormattedWeatherData("q=Istanbul");
      console.log(data);
      setData(data);
    };

    fetchWeather();
  }, []);

  return (
    <div className="mx-4">
      <div className="mx-auto max-w-screen-md mt-4 mb-10 py-5 px-4 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-300 rounded-lg">
        <TopButtons />
        <Inputs />

        <TimeAndLocation cityAndCountry={`${data.name},${data.country}`} />
        <TemperatureDetails details={data} />
        <Forecast title={"Hourly Forecast"} />
        <Forecast title={"daily Forecast"} />
      </div>
    </div>
  );
};
export default App;
