import Center from "./componants/Center"
import LeftSide from "./componants/LeftSide"
import NavBar from "./componants/NavBar"
import RightSide from "./componants/RightSide"


const App = () => {
  return (
    <div className="bg-gray-950 overflow-x-hidden">
      <NavBar />

      <div className="pt-14 md:pt-20 flex justify-between">
        <LeftSide />

        {/* Center */}
        <div className="flex-1 w-full md:max-w-2xl mx-auto px-2">
          <Center />
        </div>

        <RightSide className="pt-14 md:pt-20"/>
      </div>
    </div>
  );
};

export default App;