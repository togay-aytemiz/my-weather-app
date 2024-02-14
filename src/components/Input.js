import { UilSearch, UilMapMarker } from "@iconscout/react-unicons";

const Inputs = () => {
  return (
    <div className="flex flex-row justify-center my-6 mx-1 sm:mx-10 sm:gap-8 gap-6">
      <div className="flex flex-row w-full items-center justify-center space-x-4 bg-white shadow-xl rounded-lg p-1 pr-4">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search..."
          className="text-xl font-light p-2 focus:outline-none w-full capitalize"
        />
        <UilSearch
          size={35}
          className="text-gray-400 cursor-pointer transition ease-out hover:scale-125"
        />
        <UilMapMarker
          size={35}
          className="text-gray-400 cursor-pointer transition ease-out hover:scale-125"
        />
      </div>

      <div className="flex flex-row justify-end items-center ">
        <button
          name="metric"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
        >
          °C
        </button>
        <p className="text-xl text-white opacity-60 font-light mx-2"> or </p>
        <button
          name="imperial"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
        >
          °F
        </button>
      </div>
    </div>
  );
};
export default Inputs;
