const Forecast = ({ title, forecastData, type }) => {
  const convertUnixTimeStampHour = (timestamp) => {
    let unix_timestamp = timestamp;
    let date = new Date(unix_timestamp * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    return hours + ":" + minutes.substr(-2);
  };

  const monthAbbreviations = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const convertUnixTimeStampDay = (timestamp) => {
    let unix_timestamp = timestamp;
    let date = new Date(unix_timestamp * 1000);
    let day = date.getDate();
    let month = monthAbbreviations[date.getMonth()];
    return day + " " + month;
  };

  console.log(forecastData);

  return (
    <div className="mx-1 sm:mx-10 my-10 mb-10">
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-bold uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        {type === "hourly" ? (
          forecastData && forecastData.length > 0 ? (
            forecastData
              .slice(1, 6)
              .map((data, index) => (
                <HourlyData
                  key={index}
                  img={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  time={convertUnixTimeStampHour(data.dt)}
                  data={data.temp}
                />
              ))
          ) : (
            <p>Loading...</p>
          )
        ) : forecastData && forecastData.length > 0 ? (
          forecastData
            .slice(0, 5)
            .map((data, index) => (
              <HourlyData
                key={index}
                img={`https://openweathermap.org/img/wn/${data.day.weather[0].icon}@2x.png`}
                time={convertUnixTimeStampDay(data.day.dt)}
                data={data.day.temp.day}
              />
            ))
        ) : (
          <p>Loading...</p>
        )}
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
      <p className="font-medium">{data}°</p>
    </div>
  );
};
