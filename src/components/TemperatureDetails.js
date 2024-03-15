import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

import moment from "moment";

const TemperatureDetails = ({ details }) => {
  const convertUnixTimeStamp = (timestamp) => {
    let unix_timestamp = timestamp;
    let date = new Date(unix_timestamp * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    return hours + ":" + minutes.substr(-2);
  };

  // console.log(details);
  return (
    <div>
      <div className="flex items-center justify-center sm:text-2xl text-xl text-cyan-500">
        <p>{details.main}</p>
      </div>

      <div className="flex sm:flex-row flex-col items-center justify-evenly text-white py-3">
        {/* Image */}
        <img
          src={`https://openweathermap.org/img/wn/${details.icon}@2x.png`}
          alt=""
          className="w-20"
        />

        {/* actual degree */}
        <p className="text-5xl">{details.temp}°</p>

        {/* div for other details */}
        <div className="flex flex-col items-start space-y-2 mt-4 sm:mt-0">
          {/* item1 */}
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1">{details.feels_like}°</span>
          </div>

          {/* item2 */}
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{details.humidity}%</span>
          </div>

          {/* item3 */}
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{details.speed} k/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-rowitems-center justify-center gap-2 text-sm flex-wrap py-6">
        <div className="flex flex-row items-center mr-3">
          <UilSun className="text-white mr-2" />
          <p className="font-light text-white mr-1">Rise:</p>
          <span className="text-white font-semibold">
            {convertUnixTimeStamp(details.sunrise)}
          </span>
        </div>

        <div className="flex flex-row items-center mr-3">
          <UilSunset className="text-white mr-2" />
          <p className="font-light text-white mr-1">Set:</p>
          <span className="text-white font-semibold">
            {convertUnixTimeStamp(details.sunset)}
          </span>
        </div>

        <div className="flex flex-row items-center mr-3">
          <UilArrowUp className="text-white mr-2" />
          <p className="font-light text-white mr-1">High:</p>
          <span className="text-white font-semibold">{details.temp_max}°</span>
        </div>

        <div className="flex flex-row items-center mr-3">
          <UilArrowDown className="text-white mr-2" />
          <p className="font-light text-white mr-1">Low:</p>
          <span className="text-white font-semibold">{details.temp_min}°</span>
        </div>
      </div>
    </div>
  );
};
export default TemperatureDetails;
