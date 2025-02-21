import { Link } from "react-router";
import bggn from "/home/image 11.png";
import awan from "/home/Group 5.png";
import pembats from "/home/Rectangle 18.png";
import Carousel from "react-multi-carousel";
import Gambar from "./component/Gambar";
import img1 from "/home/Rectangle 4.png";
import img2 from "/home/Rectangle 5.png";
import img3 from "/home/Rectangle 6.png";
import img4 from "/home/Rectangle 7.png";
import img5 from "/home/Rectangle 8.png";
import "react-multi-carousel/lib/styles.css";
import { motion } from "motion/react";
import LiquidChrome from "./component/LiquidChrome";

function Home() {
  return (
    <>
      <motion.nav
        whileHover={{ paddingRight: 30, paddingLeft: 30, translateX: -120 }}
        initial={{
          scale: 1,
          opacity: 1,
          translateX: -120,
          paddingTop: 8,
          paddingBottom: 8,
          paddingRight: 16,
          paddingLeft: 16,
        }}
        className="bottom-10 left-[50%] bg-[#A9C7FF] transform -translate-x-[50%] rounded-2xl  gilda text-[#1D3B6B] text-xl font-gilda fixed z-40"
      >
        <div className="flex justify-center items-center">
          <ul className="flex gap-5 text-center font-thin">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <Link to="#">Map</Link>
            </li>
            <li className="bg-[#1D3B6B] py-1 rounded-2xl px-2 text-white font">
              <Link to="#">Contact</Link>
            </li>
          </ul>
        </div>
      </motion.nav>
      <div className="gilda flex flex-col text-center justify-center mt-64 gap-10 font-gilda text-[#7B1010]">
        <div className=" text-3xl font-thin gilda">MULAI</div>
        <div className=" text-6xl font-thin gilda">PERJALANAN NUSANTARA</div>
      </div>
      <div className="w-screen h-auto absolute top-0 -z-20">
        <img className="object-fit w-full h-full" src={bggn} alt="BG GUNUNG" />
      </div>
      <motion.div
        initial={{ translateY: 0 }}
        animate={{ translateY: -650 }}
        transition={{ duration: 6, type: "spring", stiffness: 6 }}
        className="w-[2990px] h-auto absolute -left-[500px] -top-[300px] z-50"
      >
        <img className="object-fit w-full h-full" src={awan} alt="BG GUNUNG" />
      </motion.div>

      <div className="flex justify-center items-center gap-5 gilda mt-[300px] mr-24">
        <div className="bg-[#F5F5F5] h-[1px] w-20">.</div>
        <h1 className="text-[#F5F5F5] text-3xl">SCROLL</h1>
      </div>
      <div className="h-[88px] w-[1px] bg-[#F5F5F5] absolute top-[790px] left-[760px] z-10 transform animate-bounce">
        .
      </div>
      <div className="mt-20">
        <img className="object-cover w-screen" src={pembats} alt="" />
      </div>

      <section className="font-gilda">
        <div className="flex w-screen items-center justify-center">
          <h1 id="about" className="text-5xl mb-24">
            About
          </h1>
        </div>

        <div>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={1}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            customTransition="all 1s linear"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 3,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={0}
            swipeable
            transitionDuration={1000}
          >
            <Gambar gambar={img2} />
            <Gambar gambar={img1} />
            <Gambar gambar={img4} />
            <Gambar gambar={img3} />
            <Gambar gambar={img5} />
          </Carousel>
        </div>

        <div className="flex flex-col justify-center items-center mt-20 gap-12">
          <p className="text-center text-xl mx-72">
            Perjalanan Nusantara membawa kalian memjelajahi berbagai pulau yang
            ada di indonesia ,dengan peta yang ada dibawah ini kalian bisa
            mengetahui budaya dari 38 provinsi, membuat pengetahuan anda
            menambah, kalian bisa belajar dan mengetahui hal baru dengan
            menyenangkan{" "}
          </p>
          <h1 className="text-3xl">SELAMAT MENIKMATI PERJALANAN KALIAN</h1>
        </div>
      </section>

      <section className="mt-28 h-screen">
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <LiquidChrome
            baseColor={[0.1, 0.1, 0.3]}
            speed={0.4}
            amplitude={0.6}
            interactive={false}
          />
        </div>
      </section>
    </>
  );
}

export default Home;
