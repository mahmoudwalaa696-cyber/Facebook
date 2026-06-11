import { img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, profile } from "../assets"


const LeftSide = () => {
  return (
<div className="leftside-scroll hidden md:flex flex-col w-[330px] h-screen fixed left-0 px-3  overflow-y-auto bg-gray-950">

    <div className="flex gap-5 w-[280px] h-16 pl-3 py-3 items-center hover:bg-gray-700 rounded-md">
        <img src={profile} alt="" className="w-12 h-12 rounded-full" />
        <h2 className="text-white">Walaa Mahmoud</h2>
      </div>

       <div className="flex gap-5 w-[280px] h-16 pl-3 py-3 items-center hover:bg-gray-700 rounded-md">
        <img src={img15} alt="" className="w-12 h-12 rounded-full" />
        <h2 className="text-white">Frinds</h2>
      </div>

        <div className="flex gap-5 w-[280px] h-16 pl-3 py-3 items-center hover:bg-gray-700 rounded-md">
        <img src={img21} alt="" className="w-12 h-12 rounded-full" />
        <h2 className="text-white">Jops</h2>
      </div>


        <div className="flex gap-5 w-[280px] h-16 pl-3 py-3 items-center hover:bg-gray-700 rounded-md">
        <img src={img16} alt="" className="w-12 h-12 rounded-full" />
        <h2 className="text-white">Dashboard</h2>
      </div>

  <div className="flex gap-5 w-[280px] h-16 pl-3 py-3 items-center hover:bg-gray-700 rounded-md">
        <img src={img17} alt="" className="w-12 h-12 rounded-full" />
        <h2 className="text-white">Memories</h2>
      </div>

  <div className="flex gap-5 w-[280px] h-16 pl-3 py-3 items-center hover:bg-gray-700 rounded-md">
        <img src={img18} alt="" className="w-12 h-12 rounded-full" />
        <h2 className="text-white">Saved</h2>
      </div>

  <div className="flex gap-5 w-[280px] h-16 pl-3 py-3 items-center hover:bg-gray-700 rounded-md">
        <img src={img19} alt="" className="w-12 h-12 rounded-full" />
        <h2 className="text-white">Groups</h2>
      </div>

  <div className="flex gap-5 w-[280px] h-16 pl-3 py-3 items-center hover:bg-gray-700 rounded-md">
        <img src={img20} alt="" className="w-12 h-12 rounded-full" />
        <h2 className="text-white">Reels</h2>
      </div>
 
  <div className="flex gap-5 w-[280px] h-16 pl-3 py-3 items-center hover:bg-gray-700 rounded-md">
        <img src={img22} alt="" className="w-12 h-12 rounded-full" />
        <h2 className="text-white">Events</h2>
      </div>

        <div className="flex gap-5 w-[280px] h-16 pl-3 py-3 items-center hover:bg-gray-700 rounded-md">
        <img src={img23} alt="" className="w-12 h-12 rounded-full" />
        <h2 className="text-white">Messenger</h2>
      </div>

        <div className="flex gap-5 w-[280px] h-16 pl-3 py-3 items-center hover:bg-gray-700 rounded-md">
        <img src={img24} alt="" className="w-12 h-12 rounded-full" />
        <h2 className="text-white">Pages</h2>
      </div>

<div className="w-[280px] m-2 border-t bg-gray-400"></div>

<div className="flex justify-between items-center">
  <h2 className="text-white">Your shortcuts</h2>
  <h3 className="text-blue-500 p-3 rounded-md hover:bg-gray-900">Edit</h3>
</div>

<div className="flex justify-between items-center m-2 hover:bg-gray-700 px-2 py-1 rounded-md">
 <img src={img14} alt=""  className="w-9 h-9 rounded-lg"/>
  <h3 className="text-white">الاقصريات فى الخير</h3>
</div>

<p className="text-white mb-24 mt-4 font-thin text-sm">Privacy  · Terms  · Advertising  · Ad Choices   · Cookies  · </p>
  </div>
    
  )
}

export default LeftSide