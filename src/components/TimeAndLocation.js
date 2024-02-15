const TimeAndLocation = ({ cityAndCountry }) => {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white sm:text-xl text-lg font-extralight">
          Tuesday, 31 May 2022 | 12:46 PM
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-white sm:text-5xl text-3xl font-bold">
          {cityAndCountry}
        </p>
      </div>
    </div>
  );
};
export default TimeAndLocation;
