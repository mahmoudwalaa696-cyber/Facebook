import { img1, img10, img12, img13, img2, img3, img4, img5, img6, img7, img8, img9, profile } from "../assets"
import { FaVideo } from "react-icons/fa";
import { IoImages } from "react-icons/io5";
import { RiVideoFill } from "react-icons/ri";
import { FaCircleCheck } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import { FaThumbsUp } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { IoIosText } from "react-icons/io";
import { PiThumbsUp } from "react-icons/pi";
import { BsChatText } from "react-icons/bs";
import { PiShareFatBold } from "react-icons/pi";

const Center = () => {
  return (
    <div className="w-full sm:mt-3 md:mx-2 overflow-x-hidden">

{/* part what's your mind */}
<div className="sm:w-full md:w-full p-3 flex gap-2 items-center bg-gray-900 rounded-lg">
    <img src={profile} alt="" className="w-12 h-10 rounded-full" />

<input
  type="text"
  placeholder="What's on your mind, Walaa"
  className="w-full bg-gray-600 focus:outline-none rounded-full px-4 py-2"
/>

<div></div>

<FaVideo className="text-3xl text-red-400"/>
<IoImages className="text-3xl text-green-400"/>
<RiVideoFill className="text-3xl text-red-400"/>
</div>

{/* part story */}
<div className="my-3 flex gap-2 overflow-x-auto pb-2">

<div className="w-36 h-48 bg-gray-900 rounded-md flex-shrink-0">
  <div className="relative">
    <img src={profile} alt="" className="w-36 h-36 rounded-md object-cover" />

    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gray-800 p-1 rounded-full">
      <GoPlus className="text-3xl bg-blue-500 text-white rounded-full" />
    </div>
  </div>

  <h2 className="text-gray-300 text-center mt-5">
    Create Story
  </h2>
</div>

{/* story 2 */}
<div className="w-36 h-48 rounded-md relative overflow-hidden flex-shrink-0">
  <img src={img2} className="w-full h-48 rounded-md object-cover" />

  <div className="absolute top-2 left-2 bg-blue-500 p-1 rounded-full">
    <img src={img1} className="w-10 h-10 rounded-full" />
  </div>

  <div className="absolute bottom-2 left-2 flex items-center gap-1">
    <h2 className="text-white text-sm font-medium">اسلام صبحى</h2>
    <FaCircleCheck className="text-blue-400 text-sm" />
  </div>
</div>

{/* story 3 */}
<div className="w-36 h-48 rounded-md relative overflow-hidden flex-shrink-0">
  <img src={img4} className="w-full h-48 rounded-md object-cover" />

  <div className="absolute top-2 left-2 bg-blue-500 p-1 rounded-full">
    <img src={img3} className="w-10 h-10 rounded-full" />
  </div>

  <div className="absolute bottom-2 left-2 flex items-center gap-1">
    <h2 className="w-20 text-white text-sm font-medium">
      Passant Nur El-Din بسنت نور الدين
    </h2>
    <FaCircleCheck className="text-blue-400 text-sm" />
  </div>
</div>

{/* story 4 */}
<div className="hidden md:flex w-36 h-48 rounded-md relative overflow-hidden flex-shrink-0">
  <img src={img5} className="w-full h-48 rounded-md object-cover" />

  <div className="absolute top-2 left-2 bg-blue-500 p-1 rounded-full">
    <img src={img6} className="w-10 h-10 rounded-full" />
  </div>

  <div className="absolute bottom-2 left-2 flex items-center gap-1">
    <h2 className="text-white text-sm font-medium">Maher Zain</h2>
    <FaCircleCheck className="text-blue-400 text-sm" />
  </div>
</div>

</div>

{/* ================= POST 1 ================= */}
<div className="w-full h-full pb-1 pt-3 mt-4 bg-gray-900 rounded-md overflow-hidden">

<div className="flex justify-between items-center px-2">

<div className="flex gap-2 items-center">
  <img src={img7} className="w-16 h-16 rounded-full"/>

<div>
  <h2 className="text-gray-400 font-bold hover:underline">حكا يةة</h2>
  <h4 className="text-gray-400">1h.</h4>
</div>

</div>

<div className="flex gap-2 items-center">
  <IoIosMore className="text-4xl text-gray-400"/>
  <IoClose className="text-4xl text-gray-400"/>
</div>

</div>

<h2 className="text-right px-3 my-2 text-gray-100">
  ضاقَت وأنتَ المُرتَجى لِلحَلِّ <br/> !♡ فَرِّج عن المَكروبِ يا ذا الفَضل
</h2>

<img src={img8} className="w-full max-h-[500px] object-cover" />

<div className="flex justify-between items-center px-2 my-2">

<div className="flex text-xl rounded-full">
  <div className="bg-blue-500 rounded-full">
    <FaThumbsUp className="text-white p-1"/>
  </div>
  <MdFavorite className="text-red-500"/>
</div>

<div className="flex gap-1 items-center text-gray-400">
  <div className="flex gap-1 items-center">
    <h2>17</h2><IoIosText/>
  </div>
  <div className="flex gap-1 items-center">
    <h2>38</h2><FaShare/>
  </div>
</div>

</div>

<div className="flex justify-around items-center px-2">

<div className="flex gap-1 items-center text-gray-400 py-2 px-4 md:px-12 hover:bg-gray-500 rounded-md">
<PiThumbsUp/><h3>Like</h3>
</div>

<div className="flex gap-1 items-center text-gray-400 py-2 px-4 md:px-12 hover:bg-gray-500 rounded-md">
<BsChatText/><h3>Comment</h3>
</div>

<div className="flex gap-1 items-center text-gray-400 py-2 px-4 md:px-12 hover:bg-gray-500 rounded-md">
<PiShareFatBold/><h3>Share</h3>
</div>

</div>
</div>

{/* ================= POST 2 ================= */}
<div className="w-full h-full pb-1 pt-3 my-4 bg-gray-900 rounded-md overflow-hidden">

<div className="flex justify-between items-center px-2">

<div className="flex gap-2 items-center">
  <img src={img9} className="w-16 h-16 rounded-full"/>

<div>
  <h2 className="text-gray-400 font-bold hover:underline">نور</h2>
  <h4 className="text-gray-400">6h.</h4>
</div>

</div>

<div className="flex gap-2 items-center">
  <IoIosMore className="text-4xl text-gray-400"/>
  <IoClose className="text-4xl text-gray-400"/>
</div>

</div>

<h2 className="text-right px-3 my-2 text-gray-100">❤️❤️</h2>

<img src={img10} className="w-full max-h-[500px] object-cover"/>

<div className="flex justify-between items-center px-2 my-2">

<div className="flex text-xl rounded-full">
  <div className="bg-blue-500 rounded-full">
    <FaThumbsUp className="text-white p-1"/>
  </div>
  <MdFavorite className="text-red-500"/>
</div>

<div className="flex gap-1 items-center text-gray-400">
  <div className="flex gap-1 items-center">
    <h2>17</h2><IoIosText/>
  </div>
  <div className="flex gap-1 items-center">
    <h2>38</h2><FaShare/>
  </div>
</div>

</div>

<div className="flex justify-around items-center px-2">

<div className="flex gap-1 items-center text-gray-400 py-2 px-4 md:px-12 hover:bg-gray-500 rounded-md">
<PiThumbsUp/><h3>Like</h3>
</div>

<div className="flex gap-1 items-center text-gray-400 py-2 px-4 md:px-12 hover:bg-gray-500 rounded-md">
<BsChatText/><h3>Comment</h3>
</div>

<div className="flex gap-1 items-center text-gray-400 py-2 px-4 md:px-12 hover:bg-gray-500 rounded-md">
<PiShareFatBold/><h3>Share</h3>
</div>

</div>

</div>

{/* ================= POST 3 ================= */}
<div className="w-full h-full pb-1 pt-3 my-4 bg-gray-900 rounded-md overflow-hidden">

<div className="flex justify-between items-center px-2">

<div className="flex gap-2 items-center">
  <img src={img13} className="w-16 h-16 rounded-full"/>

<div>
  <h2 className="text-gray-400 font-bold hover:underline">byeol.talk</h2>
  <h4 className="text-gray-400">Jun 8 at 10:10 pm.</h4>
</div>

</div>

<div className="flex gap-2 items-center">
  <IoIosMore className="text-4xl text-gray-400"/>
  <IoClose className="text-4xl text-gray-400"/>
</div>

</div>

<h2 className="text-right px-3 my-2 text-gray-100">💜💜</h2>

<img src={img12} className="w-full max-h-[500px] "/>

<div className="flex justify-between items-center px-2 my-2">

<div className="flex text-xl rounded-full">
  <div className="bg-blue-500 rounded-full">
    <FaThumbsUp className="text-white p-1"/>
  </div>
  <MdFavorite className="text-red-500"/>
</div>

<div className="flex gap-1 items-center text-gray-400">
  <div className="flex gap-1 items-center">
    <h2>17</h2><IoIosText/>
  </div>
  <div className="flex gap-1 items-center">
    <h2>38</h2><FaShare/>
  </div>
</div>

</div>

<div className="flex justify-around items-center px-2">

<div className="flex gap-1 items-center text-gray-400 py-2 px-4 md:px-12 hover:bg-gray-500 rounded-md">
<PiThumbsUp/><h3>Like</h3>
</div>

<div className="flex gap-1 items-center text-gray-400 py-2 px-4 md:px-12 hover:bg-gray-500 rounded-md">
<BsChatText/><h3>Comment</h3>
</div>

<div className="flex gap-1 items-center text-gray-400 py-2 px-4 md:px-12 hover:bg-gray-500 rounded-md">
<PiShareFatBold/><h3>Share</h3>
</div>

</div>

</div>

    </div>
  )
}

export default Center