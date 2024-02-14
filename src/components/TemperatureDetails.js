import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

const TemperatureDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-center sm:text-2xl text-xl text-cyan-500">
        <p>Clean</p>
      </div>

      <div className="flex flex-row items-center justify-evenly text-white py-3">
        {/* Image */}
        <img
          src="https://openweathermap.org/img/wn/01d@2x.png"
          alt=""
          className="w-20"
        />

        {/* actual degree */}
        <p className="text-5xl"> 34°</p>

        {/* div for other details */}
        <div className="flex flex-col items-start space-y-2 ">
          {/* item1 */}
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1">32°</span>
          </div>

          {/* item2 */}
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">43%</span>
          </div>

          {/* item3 */}
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">3 km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-rowitems-center justify-center gap-2 text-sm flex-wrap py-6">
        <div className="flex flex-row items-center mr-3">
          <UilSun className="text-white mr-2" />
          <p className="font-light text-white mr-1">Rise:</p>
          <span className="text-white font-semibold">04:50 AM</span>
        </div>

        <div className="flex flex-row items-center mr-3">
          <UilSunset className="text-white mr-2" />
          <p className="font-light text-white mr-1">Set:</p>
          <span className="text-white font-semibold">04:50 AM</span>
        </div>

        <div className="flex flex-row items-center mr-3">
          <UilArrowUp className="text-white mr-2" />
          <p className="font-light text-white mr-1">High:</p>
          <span className="text-white font-semibold">04:50 AM</span>
        </div>

        <div className="flex flex-row items-center mr-3">
          <UilArrowDown className="text-white mr-2" />
          <p className="font-light text-white mr-1">Low:</p>
          <span className="text-white font-semibold">04:50 AM</span>
        </div>
      </div>
    </div>
  );
};
export default TemperatureDetails;
