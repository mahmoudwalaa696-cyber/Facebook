import { FaGift } from "react-icons/fa6";
import { PiChatCenteredTextThin } from "react-icons/pi";

const RightSide = () => {
  return (
    <div className="hidden md:flex flex-col w-[300px] h-full fixed right-0 pl-2 text-white">

<h2 className="text-xl font-bold text-gray-400 pl-3">Birthdays</h2>

<div className="flex gap-5 w-[280px] h-16 pl-3 py-3 items-center hover:bg-gray-700 rounded-md">
        <FaGift className="w-12 h-12 text-red-400" />
        <h2 className="text-white">Walaa Mahmoud and 2 others have birthday today.</h2>
      </div>

<div className="fixed bottom-4 right-4">
  <PiChatCenteredTextThin className="w-14 h-14 text-gray-100 p-3 bg-gray-700 hover:bg-gray-600 rounded-full" />
</div>


    </div>
  )
}

export default RightSide