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
    <div className="w-[600px] md:mx-2">
{/* part what's your mind */}
<div className="w-full p-3 flex justify-around gap-2 items-center bg-gray-900 rounded-lg">
    <img src={profile} alt="" className="w-12 h-10 rounded-full" />
<input
  type="text"
  placeholder="What's on your mind, Walaa"
  className="w-full bg-gray-600 focus:outline-none rounded-full px-4 py-2"
/>
<div>

</div>
<FaVideo className="text-4xl text-red-400"/>
<IoImages className="text-4xl text-green-400"/>
<RiVideoFill className="text-4xl text-red-400"/>
</div>
{/* part story */}
<div className="my-3 flex gap-2">

<div className="w-36 h-48 bg-gray-900 rounded-md">
  <div className="relative">
    <img
      src={profile}
      alt=""
      className="w-36 h-36 rounded-md object-cover"
    />

    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gray-800 p-1 rounded-full">
      <GoPlus className="text-3xl bg-blue-500 text-white rounded-full" />
    </div>
  </div>

  <h2 className="text-gray-300 text-center mt-5">
    Create Story
  </h2>
</div>

<div className="w-36 h-48 rounded-md relative overflow-hidden">
  <img
    src={img2}
    alt=""
    className="w-full h-48 rounded-md object-cover"
  />

  {/* الصورة الصغيرة فوق */}
  <div className="absolute top-2 left-2 bg-blue-500 p-1 rounded-full">
    <img
      src={img1}
      alt=""
      className="w-10 h-10 rounded-full"
    />
  </div>

  {/* الاسم أسفل الصورة */}
  <div className="absolute bottom-2 left-2 flex items-center gap-1">
    <h2 className="text-white text-sm font-medium">
      اسلام صبحى
    </h2>
    <FaCircleCheck className="text-blue-400 text-sm" />
  </div>
</div>

<div className="w-36 h-48 rounded-md relative overflow-hidden">
  <img
    src={img4}
    alt=""
    className="w-full h-48 rounded-md object-cover"
  />

  {/* الصورة الصغيرة فوق */}
  <div className="absolute top-2 left-2 bg-blue-500 p-1 rounded-full">
    <img
      src={img3}
      alt=""
      className="w-10 h-10 rounded-full"
    />
  </div>

  {/* الاسم أسفل الصورة */}
  <div className="absolute bottom-2 left-2 flex items-center gap-1">
    <h2 className="w-20 text-white text-sm font-medium">
     Passant Nur El-Din بسنت نور الدين
    </h2>
    <FaCircleCheck className="text-blue-400 text-sm" />
  </div>
</div>

<div className=" hidden md:flex w-36 h-48 rounded-md relative overflow-hidden">
  <img
    src={img5}
    alt=""
    className="w-full h-48 rounded-md object-cover"
  />

  {/* الصورة الصغيرة فوق */}
  <div className="absolute top-2 left-2 bg-blue-500 p-1 rounded-full">
    <img
      src={img6}
      alt=""
      className="w-10 h-10 rounded-full"
    />
  </div>

  {/* الاسم أسفل الصورة */}
  <div className="absolute bottom-2 left-2 flex items-center gap-1">
    <h2 className="text-white text-sm font-medium">
    Maher Zain
    </h2>
    <FaCircleCheck className="text-blue-400 text-sm" />
  </div>
</div>

</div>

{/* part post */}

{/* post 1 */}
<div className="w-full h-full pb-1 pt-3 mt-4 bg-gray-900 rounded-md">

<div className="flex justify-between items-center px-2">

<div className="flex gap-2 items-center">
  <img src={img7} alt=""  className="w-16 h-16 rounded-full"/>

<div>
  <h2 className="text-gray-400 font-bold hover:underline">حكا يةة</h2>
  <h4 className="text-gray-400">1h.</h4>
</div>

</div>

<div className="flex gap-2 items-center">
  <IoIosMore className="text-4xl text-gray-400 hover:bg-gray-600 rounded-full p-1"/>
<IoClose className="text-4xl text-gray-400 hover:bg-gray-600 rounded-full p-1"/>
</div>

</div>

<h2 className="text-right px-3 my-2 text-gray-100">ضاقَت وأنتَ المُرتَجى لِلحَلِّ <br/>
!♡ فَرِّج عن المَكروبِ يا ذا الفَضل</h2>

<img src={img8} alt="" className="w-full h-[500px]" />

<div className="flex justify-between items-center px-2 my-2">

<div className="flex text-xl rounded-full">
  <div className=" bg-blue-500  rounded-full">
    <FaThumbsUp className="text-white text-md p-1"/>
  </div>
<MdFavorite className="text-xl text-red-500"/>

  
</div>

{/* div icons */}
<div className="flex gap-1 items-center text-gray-400 ">
{/*  icon massege */}
<div className="flex gap-1 items-center text-gray-400 font-medium">
  <h2>17</h2>
  <IoIosText/>
</div>
{/*  icon share */}
<div className="flex gap-1 items-center text-gray-400 font-medium">
  <h2>38</h2>
  <FaShare/>
</div>

</div>

</div>

<div className="flex justify-around items-center px-2">
<div className="flex gap-1 items-center text-gray-400 py-2 px-12 hover:bg-gray-500 rounded-md font-medium ">
<PiThumbsUp/>
<h3>Like</h3>
</div>

<div className="flex gap-1 items-center text-gray-400 font-medium py-2 px-12 hover:bg-gray-500 rounded-md">
<BsChatText/>
<h3>Comment</h3>
</div>

<div className="flex gap-1 items-center text-gray-400 font-medium py-2 px-12 hover:bg-gray-500 rounded-md">
<PiShareFatBold/>
<h3>Share</h3>
</div>

</div>
</div>

{/* post 2 */}
<div className="w-full h-full pb-1 pt-3 my-4 bg-gray-900 rounded-md">

<div className="flex justify-between items-center px-2">

<div className="flex gap-2 items-center">
  <img src={img9} alt=""  className="w-16 h-16 rounded-full"/>

<div>
  <h2 className="text-gray-400 font-bold hover:underline"> نور</h2>
  <h4 className="text-gray-400">6h.</h4>
</div>

</div>

<div className="flex gap-2 items-center">
  <IoIosMore className="text-4xl text-gray-400 hover:bg-gray-600 rounded-full p-1"/>
<IoClose className="text-4xl text-gray-400 hover:bg-gray-600 rounded-full p-1"/>
</div>

</div>

<h2 className="text-right px-3 my-2 text-gray-100">❤️❤️</h2>

<img src={img10} alt="" className="w-full h-[500px]"/>

<div className="flex justify-between items-center px-2 my-2">

<div className="flex text-xl rounded-full">
  <div className=" bg-blue-500  rounded-full">
    <FaThumbsUp className="text-white text-md p-1"/>
  </div>
<MdFavorite className="text-xl text-red-500"/>

  
</div>

{/* div icons */}
<div className="flex gap-1 items-center text-gray-400 ">
{/*  icon massege */}
<div className="flex gap-1 items-center text-gray-400 font-medium ">
  <h2>257</h2>
  <IoIosText/>
</div>
{/*  icon share */}
<div className="flex gap-1 items-center text-gray-400 font-medium">
  <h2>482</h2>
  <FaShare/>
</div>

</div>

</div>
{/* liks-comment-share */}
<div className="flex justify-around items-center px-2">
<div className="flex gap-1 items-center text-gray-400 font-medium py-2 px-12 hover:bg-gray-500 rounded-md">
<PiThumbsUp/>
<h3>Like</h3>
</div>

<div className="flex gap-1 items-center text-gray-400 font-medium py-2 px-12 hover:bg-gray-500 rounded-md">
<BsChatText/>
<h3>Comment</h3>
</div>

<div className="flex gap-1 items-center text-gray-400 font-medium py-2 px-12 hover:bg-gray-500 rounded-md">
<PiShareFatBold/>
<h3>Share</h3>
</div>

</div>
</div>

{/* post 3 */}
<div className="w-full h-full pb-1 pt-3 my-4 bg-gray-900 rounded-md">

<div className="flex justify-between items-center px-2">

<div className="flex gap-2 items-center">
  <img src={img13} alt=""  className="w-16 h-16 rounded-full"/>

<div>
  <h2 className="text-gray-400 font-bold hover:underline">byeol.talk</h2>
  <h4 className="text-gray-400">Jun 8at 10:10 pm.</h4>
</div>

</div>

<div className="flex gap-2 items-center">
  <IoIosMore className="text-4xl text-gray-400 hover:bg-gray-600 rounded-full p-1"/>
<IoClose className="text-4xl text-gray-400 hover:bg-gray-600 rounded-full p-1"/>
</div>

</div>

<h2 className="text-right px-3 my-2 text-gray-100">💜💜</h2>

<img src={img12} alt="" className="w-full h-[500px]"/>

<div className="flex justify-between items-center px-2 my-2">

<div className="flex text-xl rounded-full">
  <div className=" bg-blue-500  rounded-full">
    <FaThumbsUp className="text-white text-md p-1"/>
  </div>
<MdFavorite className="text-xl text-red-500"/>

  
</div>

{/* div icons */}
<div className="flex gap-1 items-center text-gray-400 ">
{/*  icon massege */}
<div className="flex gap-1 items-center text-gray-400 font-medium">
  <h2>257</h2>
  <IoIosText/>
</div>
{/*  icon share */}
<div className="flex gap-1 items-center text-gray-400 font-medium">
  <h2>482</h2>
  <FaShare/>
</div>

</div>

</div>
{/* liks-comment-share */}
<div className="flex justify-around items-center px-2">
<div className="flex gap-1 items-center text-gray-400 font-medium py-2 px-12 hover:bg-gray-500 rounded-md">
<PiThumbsUp/>
<h3>Like</h3>
</div>

<div className="flex gap-1 items-center text-gray-400 font-medium py-2 px-12 hover:bg-gray-500 rounded-md">
<BsChatText/>
<h3>Comment</h3>
</div>

<div className="flex gap-1 items-center text-gray-400 font-medium py-2 px-12 hover:bg-gray-500 rounded-md">
<PiShareFatBold/>
<h3>Share</h3>
</div>

</div>
</div>
    </div>
  )
}

export default Center