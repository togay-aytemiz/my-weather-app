const apiKey = "a2255490692f978e31709c59ecb83bd7";
const baseUrl = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
  const url = `${baseUrl}/${infoType}?${searchParams}&appid=${apiKey}&units=metric`;

  return fetch(url).then((res) => res.json());
};

const formatCurrentData = (data) => {
  // console.log("current data: ", data);
  const {
    coord: { lon, lat },
    main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main, icon, description } = weather[0];

  return {
    lon,
    lat,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    pressure,
    name,
    dt,
    country,
    sunrise,
    sunset,
    main,
    icon,
    description,
    speed,
  };
};

const formatForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;
  daily = daily.slice(1, 6).map((day) => {
    const date = new Date(day.dt);
    return {
      day,
    };
  });
  return { timezone, daily, hourly };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentData);

  const { lat, lon } = formattedCurrentWeather;
  const formattedForecastWeather = await getWeatherData(
    "onecall",
    `lat=${lat}&lon=${lon}&exclude=current,minutely,alerts&units=metric`
  ).then(formatForecastWeather);

  return { formattedCurrentWeather, formattedForecastWeather };
};

export default getFormattedWeatherData;
