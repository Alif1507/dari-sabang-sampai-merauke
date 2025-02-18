import { Link } from "react-router"
import bggn from "/home/Desain tanpa judul (3) 1.png"
import awan from "/home/Group 1.png"
import pembats from "/home/Rectangle 18.png"

function Home() {
  return (
    <>
    <nav className="flex justify-between items-center mx-20 mt-10 gilda text-[#1D3B6B] text-xl">
      <div><h1>Nama Tim</h1></div>
      <div>
        <ul className="flex gap-5 text-center font-thin">
          <li><Link to="#">About</Link></li>
          <li><Link to="#">Map</Link></li>
          <li className="bg-[#1D3B6B] py-1 rounded-2xl px-2 text-white font"><Link to="#">Contact</Link></li>
        </ul>
      </div>
    </nav>
    <div className="gilda flex flex-col text-center justify-center mt-64 gap-10">
      <div className="text-[#032356] text-3xl font-thin gilda">MULAI</div>
      <div className="text-[#F5F5F5] text-6xl font-thin gilda"><span className="text-[#1D3B6B]">PE</span>RJALANAN NUSANTARA</div>
    </div>
    <div className="w-screen h-auto absolute top-0 -z-20">
    <img className="object-fit w-full h-full" src={bggn} alt="BG GUNUNG" />
    </div>
    <div className="w-screen h-auto absolute top-0 -z-20">
    <img className="object-fit w-full h-full" src={awan} alt="BG GUNUNG" />
    </div>

    <div className="flex justify-center items-center gap-5 gilda mt-[390px] mr-24">
      <div className="bg-[#F5F5F5] h-[1px] w-20">.</div>
      <h1 className="text-[#F5F5F5] text-3xl">SCROLL</h1>
    </div>
    <div className="h-[88px] w-[1px] bg-[#F5F5F5] absolute top-[900px] left-[830px]">.</div>
    <div className="mt-6">
      <img className="object-cover w-screen" src={pembats} alt="" />
    </div>

    <section className="gilda">
          <div className="flex w-screen items-center justify-center">
            <h1 className="text-5xl">About</h1>
          </div>
      </section>
    
    </>
  )
}

export default Home