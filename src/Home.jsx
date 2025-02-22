import { Link } from "react-router";
import bggn from "/home/image 11.png";
import awan from "/home/Group 5.png";
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
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

function Home() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 7 }}
        className="absolute left-10 top-10 z-30 text-md font-gilda text-[#1D3B6B] 2xl:text-2xl max-sm:left-20"
      >
        Dari Sabang Sampai Merauke
      </motion.h1>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 7 }}
        className="flex gap-5 text-center font-thin absolute right-10 top-10 z-30 text-md 2xl:text-2xl font-gilda text-[#1D3B6B] max-sm:hidden"
      >
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <Link to="#">Map</Link>
        </li>
        <li className="bg-[#1D3B6B] py-1 rounded-2xl px-2 text-white font">
          <Link to="#">Contact</Link>
        </li>
      </motion.ul>

      <ParallaxProvider>
        <Parallax speed={20}>
          <div className="gilda flex flex-col text-center justify-center  4k:mt-[500px] laptopL:mt-[320px] md:mt-[270px] gap-10 font-gilda text-[#7B1010] max-sm:mt-56">
            <div className=" lg:text-3xl md:text-xl 4k:text-5xl font-thin gilda">MULAI</div>
            <div className=" lg:text-5xl md:text-2xl  4k:text-8xl font-thin gilda">
              PERJALANAN NUSANTARA
            </div>
          </div>
        </Parallax>
      </ParallaxProvider>
      <div className="w-screen h-auto absolute top-0 -z-20 max-sm:w-[713px] max-sm:h-[680px] max-sm:-left-72">
        <img className="object-cover w-full h-full" src={bggn} alt="BG GUNUNG" />
      </div>
      <motion.div
        initial={{ translateY: 0 }}
        animate={{ translateY: -650 }}
        transition={{ duration: 6, type: "spring", stiffness: 6 }}
        className="w-[2990px] h-auto absolute 2xl:w-[3700px] max-sm:w-[713px]  max-sm:top-0 -left-[500px] -top-[550px] z-20"
      >
        <img className="object-fit w-full h-full" src={awan} alt="BG GUNUNG" />
      </motion.div>

      <div className="flex justify-center items-center gap-5 4k:mt-[500px] laptopL:mt-[240px] md:-mt-16 gilda max-sm:mt-48 mr-24 ">
        <div className="bg-[#F5F5F5] h-[1px] w-20">.</div>
        <h1 className="text-[#F5F5F5] md:text-xl 4k:text-4xl">SCROLL</h1>
      </div>
      <div className="h-[88px] w-[1px] text-white bg-[#F5F5F5] absolute 4k:top-[1260px] laptopL:top-[750px] md:top-[370px] left-[50%] z-10 transform animate-bounce">
        .
      </div>
      <div className="mt-5 pembats 2xl:h-[400px]">
        .
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

        <div className="flex flex-col justify-center items-center mt-32 gap-12  text-center ">
          <p className="text-center laptopL:text-xl mx-72 max-sm:mx-10 md:mx-24">
            Perjalanan Nusantara membawa kalian memjelajahi berbagai pulau yang
            ada di indonesia ,dengan peta yang ada dibawah ini kalian bisa
            mengetahui budaya dari 38 provinsi, membuat pengetahuan anda
            menambah, kalian bisa belajar dan mengetahui hal baru dengan
            menyenangkan{" "}
          </p>
          <h1 className="laptopL:text-3xl">SELAMAT MENIKMATI PERJALANAN KALIAN</h1>
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
