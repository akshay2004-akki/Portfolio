import React, { useState } from "react";
import grid1 from "../assets/aboutImg.png";
import grid2 from "../assets/techStack.png";
import grid3 from "../assets/grid3.png";
import grid4 from "../assets/grid4.png";
import tick from '../assets/tick.svg'
import copy from '../assets/copy.svg'
import Globe from "react-globe.gl";
import Button from "../Models3D/Button";

const About = () => {

    const [hasCopied, setHasCopied] = useState(false)

    const handleCopy = ()=>{
        navigator.clipboard.writeText("akshay1622004@gmail.com")
        setHasCopied(true)

        setTimeout(()=>{
            setHasCopied(false)
        }, 2000)
    }

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src={grid1}
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I'm Akshay</p>
              <p className="grid-subtext">
                A passionate web development technologist is dedicated to
                creating dynamic and user-friendly websites. They continuously
                learn and experiment with the latest.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src={grid2}
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain border-black-300"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I Have a Hands-on experience on MERN Stack, DSA, DBMS, OOPs,
                JavaScript
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgoundImageOpacity={0.5}
                showAtmosphere
                // showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="/unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 30.6944978,
                    lng: 76.6650876,
                    text: "My Location !",
                    Color: "white",
                    size: 30,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely Across most Timezones
              </p>
              <p className="grid-subtext">
                I'm Based in Punjab, India, with Online Work availabe !
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full m-10" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src={grid3} alt="grid-3" loop autoPlay className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src={grid4}
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? tick : copy} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">akshay1622004@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
