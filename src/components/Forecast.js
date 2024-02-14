const Forecast = ({ title }) => {
  return (
    <div className="mx-1 sm:mx-10 my-10 mb-10">
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-bold uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        <HourlyData
          img={"https://openweathermap.org/img/wn/01d@2x.png"}
          time={"04:30PM"}
          data={"22°"}
        />

        <HourlyData
          img={"https://openweathermap.org/img/wn/01d@2x.png"}
          time={"04:30PM"}
          data={"22°"}
        />

        <HourlyData
          img={"https://openweathermap.org/img/wn/01d@2x.png"}
          time={"04:30PM"}
          data={"22°"}
        />

        <HourlyData
          img={"https://openweathermap.org/img/wn/01d@2x.png"}
          time={"04:30PM"}
          data={"22°"}
        />

        <HourlyData
          img={"https://openweathermap.org/img/wn/01d@2x.png"}
          time={"04:30PM"}
          data={"22°"}
        />
      </div>
    </div>
  );
};
export default Forecast;

const HourlyData = ({ img, time, data }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <p className="font-light sm:text-sm text-xs">{time}</p>
      <img src={img} alt="" className="w-12" />
      <p className="font-medium">{data}</p>
    </div>
  );
};
