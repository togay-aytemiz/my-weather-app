import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./TopButtons";
import Inputs from "./Input";

const App = () => {
  return (
    <div className="mx-4">
      <div className="mx-auto max-w-screen-md mt-4 py-5 px-4 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-300 rounded-lg">
        <TopButtons />
        <Inputs />
      </div>
    </div>
  );
};
export default App;
