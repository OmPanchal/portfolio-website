import { useGlobals } from "@/context/GeneralContext";
import { useWindowSize } from "@/hooks/useWindowSize";
import { COLOURS, POWER_UPS } from "@/utils/constants";
import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import AboutStatsRow from "./AboutStatsRow";
import { MdStarRate, MdWorkOutline } from "react-icons/md";
import AboutStatsPageHeading from "./AboutStatsPageHeading";
import { LuGamepad } from "react-icons/lu";
import AboutStatsPageGroup from "./AboutStatsPageGroup";
import { RiGraduationCapFill, RiGraduationCapLine } from "react-icons/ri";
import AboutStatsDetailedRow from "./AboutStatsDetailedRow";
import AboutStatsLongDesc from "./AboutStatsLongDesc";
import { GoCode } from "react-icons/go";
import Link from "next/link";
import { SiSpaceship } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const AboutStatsPage = () => {
  const {
    isAboutStatsPageOpen,
    setIsAboutStatsPageOpen,
    isAboutSidebarOpen,
    setIsAboutSidebarOpen,
  } = useGlobals();
  const windowSize = useWindowSize();

  return (
    <>
      {isAboutStatsPageOpen && (
        <div className="fixed w-svw h-svh top-0 left-0 flex flex-col items-center justify-center lg:px-72 lg:py-48 px-0 py-0 font-[HyperSpace]">
          <div className="bg-black w-full h-full sm:border sm:text-6xl text-3xl max-h-full overflow-auto no-scrollbar">
            {windowSize.width >= 640 ? (
              <div
                className="w-full flex flex-row items-center justify-between p-8 cursor-pointer sticky top-0 bg-black border-b"
                onClick={() => {
                  setIsAboutStatsPageOpen(false);
                }}
              >
                <h1 className="font-bold">Player Stats/Controls</h1>X
              </div>
            ) : (
              <div
                className="w-full flex flex-row items-center justify-between p-8 cursor-pointer "
                onClick={() => {
                  setIsAboutSidebarOpen(true);
                }}
              >
                <p className="font-bold">Player Stats</p>
                <CiMenuBurger />
              </div>
            )}
            {windowSize.width < 640 && (
              <AboutStatsPageGroup>
                <AboutStatsRow
                  colour="gold"
                  name="[Info]:Open this on a larger screen for the full experience!!!"
                />
              </AboutStatsPageGroup>
            )}
            {/* ABOUT */}
            <AboutStatsPageGroup>
              <AboutStatsPageHeading heading="About Player">
                <SiSpaceship className="sm:text-4xl text-2xl sm:mx-2 transition-all" />
              </AboutStatsPageHeading>
              <AboutStatsRow
                colour="white"
                name="Name"
                description="Om Panchal"
              />
              <AboutStatsRow
                colour="white"
                name="Spawnpoint"
                description="London"
              />
              <AboutStatsRow
                colour="white"
                name="Email"
                description={
                  <a className="underline" href="mailto:oapanchal@gmail.com">
                    oapanchal@gmail.com
                  </a>
                }
              />
              <AboutStatsRow
                colour="white"
                name="Log"
                description="Currently in the second year of University, I have a strong interest in Mathematics and Computer Science, particularly in the ML/DL space with experience using modern libraries such as Tensorflow and Keras as well as creating my own projects/models from scratch. My experience in creating web apps using nextJS and tailwindcss has made this website possible and for it to take on its unique theme. I hope you like it :)."
              />
              <AboutStatsRow
                colour="white"
                name="Profiles"
                description={
                  <span className="flex flex-row items-end gap-4">
                    <a
                      href="https://github.com/OmPanchal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 hover:bg-white hover:text-black font-bold flex flex-row items-center gap-4"
                    >
                      <FaGithub />
                      Github
                    </a>

                    <a
                      href="https://www.linkedin.com/in/panchal-om/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 hover:bg-white hover:text-black font-bold flex flex-row items-center gap-4"
                    >
                      <FaLinkedin />
                      Linkedin
                    </a>
                  </span>
                }
              />
            </AboutStatsPageGroup>

            {/* POWER UPS*/}
            <AboutStatsPageGroup>
              <AboutStatsPageHeading heading="Power Ups">
                <MdStarRate />
              </AboutStatsPageHeading>
              <AboutStatsRow
                colour="#ad07fa"
                name="Machine Gun"
                description="Massively increased fire rate. The strongest power up in the game."
              />
              <AboutStatsRow
                colour="#fcba03"
                name="Triple Shot"
                description="Fires three bullets in a spread instead of one."
              />
              <AboutStatsRow
                colour="#e81c4f"
                name="Rampage"
                description="Ship destroys asteroids on contact instead of taking damage."
              />
              <AboutStatsRow
                colour="#3458eb"
                name="Invincibility"
                description="Asteroids pass through the ship without dealing damage."
              />
              <AboutStatsRow
                colour="#9dc4e0"
                name="[Info]"
                description="Power-ups spawn on screen at random whenever you break the smallest asteroid. Fly into one to pick it up and activate its effect."
              />
            </AboutStatsPageGroup>

            {/* EDUCATION*/}
            <AboutStatsPageGroup>
              <AboutStatsPageHeading heading="Education">
                <RiGraduationCapLine />
              </AboutStatsPageHeading>
              {/* WARWICK */}
              <AboutStatsDetailedRow
                heading="University of Warwick [Coventry]"
                shortDescription="Computer Science Meng"
                date="[Oct 2025 - Present]"
              >
                <AboutStatsLongDesc powerUp={POWER_UPS[2]} increment={2}>
                  First Year Average - 72.6% [First Class]
                </AboutStatsLongDesc>
              </AboutStatsDetailedRow>
              {/* ST DOMS*/}
              <AboutStatsDetailedRow
                heading="St Dominic's Sixth Form College [Harrow on the Hill]"
                shortDescription="Mathematics, Further Mathematics, Computer Science"
                date="[Sep 2023 - Jun 2025]"
              >
                <AboutStatsLongDesc powerUp={POWER_UPS[2]} increment={3}>
                  A level Achieved: A*,A*,A*
                </AboutStatsLongDesc>
              </AboutStatsDetailedRow>
              {/* BUSHEY */}
              <AboutStatsDetailedRow
                heading="Bushey Meads School [Bushey]"
                shortDescription="Maths, L2 Further Maths, English, Science (triple), Spanish, Computer Science, DT"
                date="[Sep 2018 - Jun 2023]"
              >
                <AboutStatsLongDesc powerUp={POWER_UPS[3]} increment={2}>
                  GCSEs Achieved (Respectively): 9,9,9,9,9,9,9,9,9,8
                </AboutStatsLongDesc>
              </AboutStatsDetailedRow>
            </AboutStatsPageGroup>

            {/* EXPERIENCE*/}
            <AboutStatsPageGroup>
              <AboutStatsPageHeading heading="Experience">
                <MdWorkOutline />
              </AboutStatsPageHeading>
              <AboutStatsDetailedRow
                heading="Ace Badminton Club [Harrow]"
                shortDescription="Level 1 Badminton Coach"
                date="[Jul 2024 – Sep 2025]"
              >
                <AboutStatsLongDesc powerUp={POWER_UPS[0]} increment={3}>
                  Conducted one-on-one and group coaching sessions
                </AboutStatsLongDesc>
                <AboutStatsLongDesc>
                  Demonstrated shots to groups of 10 – 20 students
                </AboutStatsLongDesc>
              </AboutStatsDetailedRow>

              <AboutStatsDetailedRow
                heading="A STAR TUTORS UK LTD [Kenton]"
                shortDescription="Mathematics Tutor"
                date="[Jan 2025 – Mar 2025"
              >
                <AboutStatsLongDesc powerUp={POWER_UPS[0]} increment={4}>
                  Delivered GCSE Maths content to classes of 15
                </AboutStatsLongDesc>
                <AboutStatsLongDesc>
                  Invigilated and coordinated exams for 100+ students over 5
                  days
                </AboutStatsLongDesc>
                <AboutStatsLongDesc>
                  Provided tailored feedback on challenging questions
                </AboutStatsLongDesc>
              </AboutStatsDetailedRow>
            </AboutStatsPageGroup>

            {/* PROJECTS */}
            <AboutStatsPageGroup>
              <AboutStatsPageHeading heading="Projects">
                <GoCode />
              </AboutStatsPageHeading>
              <AboutStatsDetailedRow
                heading="Autodiff"
                shortDescription="Automatic differentiation library — Python & NumPy"
                date="[Aug 2025 – Sep 2025]"
              >
                <AboutStatsLongDesc powerUp={POWER_UPS[3]} increment={4}>
                  Calculates partial derivatives of any multivariable function
                </AboutStatsLongDesc>
                <AboutStatsLongDesc>
                  Builds a binary tree representation of tensor operations via
                  OOP
                </AboutStatsLongDesc>
                <AboutStatsLongDesc>
                  Dynamically generates functions by traversing the tree
                </AboutStatsLongDesc>
                <AboutStatsLongDesc>
                  Released open source on PyPI and GitHub
                </AboutStatsLongDesc>
              </AboutStatsDetailedRow>

              <AboutStatsDetailedRow
                heading="AlexNet"
                shortDescription="Classic CNN architecture from Scratch using TensorFlow"
                date="[Oct 2023 – Dec 2023]"
              >
                <AboutStatsLongDesc powerUp={POWER_UPS[1]} increment={3}>
                  Implemented the AlexNet architecture, trained on an ImageNet
                  subset
                </AboutStatsLongDesc>
                <AboutStatsLongDesc>
                  Programmed a fast Local Response Normalisation using Depthwise
                  Convolutions and Data Augmentation Layer
                </AboutStatsLongDesc>
              </AboutStatsDetailedRow>
              <AboutStatsDetailedRow
                heading="Bren"
                shortDescription="Autodiff Powered Neural network library — Python"
                date="[Jan 2023 – Jul 2023]"
              >
                <AboutStatsLongDesc powerUp={POWER_UPS[1]} increment={4}>
                  Released open source on PyPI and GitHub
                </AboutStatsLongDesc>
                <AboutStatsLongDesc>
                  Modeled on TensorFlow/Keras for accessibility
                </AboutStatsLongDesc>
                <AboutStatsLongDesc>
                  20+ core features: layers, metrics, custom components
                </AboutStatsLongDesc>
                <AboutStatsLongDesc>
                  Trained on MNIST to 90%+ accuracy
                </AboutStatsLongDesc>
              </AboutStatsDetailedRow>
              <Link
                href="/projects"
                className="sm:text-4xl text-2xl hover:bg-white hover:text-black w-fit p-4 font-bold"
              >
                + More Projects
              </Link>
            </AboutStatsPageGroup>

            {/* CONTROLS*/}
            <AboutStatsPageGroup>
              <AboutStatsPageHeading heading="Controls">
                <LuGamepad />
              </AboutStatsPageHeading>
              <AboutStatsRow
                colour="white"
                name="W "
                description="Thrust Forward"
              />
              <AboutStatsRow
                colour="white"
                name="A/D "
                description="Rotate Left/Right"
              />
              <AboutStatsRow colour="white" name="Q " description="Quit Game" />
            </AboutStatsPageGroup>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutStatsPage;
