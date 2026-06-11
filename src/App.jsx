import Center from "./componants/Center"
import LeftSide from "./componants/LeftSide"
import NavBar from "./componants/NavBar"
import RightSide from "./componants/RightSide"


const App = () => {
  return (
    <div className=" bg-gray-950"> 
     <NavBar/>
  <div className="pt-14 md:pt-20 flex justify-between">
  <LeftSide />

  <div className="md:ml-[400px] flex-1 md:px-4">
    <Center />
  </div>

  <RightSide />
</div>
     </div>
  )
}

export default App