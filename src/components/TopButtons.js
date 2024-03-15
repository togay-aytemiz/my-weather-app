const TopButtons = ({ setLocation }) => {
  const cities = [
    { id: 1, title: "Istanbul" },
    { id: 2, title: "London" },
    { id: 3, title: "Sydney" },
    { id: 4, title: "Tokyo" },
    { id: 5, title: "Toronto" },
  ];

  return (
    <div className="flex items-center justify-around">
      {cities.map((city) => {
        return (
          <button
            key={city.id}
            className="text-white sm:text-lg text-base sm:font-medium font-normal sm:hover:scale-125 sm:transition ease-out"
            onClick={() => setLocation(city.title)}
          >
            {city.title}
          </button>
        );
      })}
    </div>
  );
};
export default TopButtons;
