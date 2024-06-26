import React, {  useState } from "react";
import pksLogo from "../assets/img/pks_logo.png";
import HamburgerIcon from "./Hamburger";
import { useCycle, motion } from "framer-motion";
import FlashNews from "./FlashNews";

interface NavLink {
    url: string;
    text: string;
    onClick?: () => void;
}

const navLinks: NavLink[] = [
    { url: "#hero", text: "Home" },
    { url: "#history", text: "History" },
    { url: "#services", text: "Activities" },
    { url: "#portfolio", text: "Gallery" },
    { url: "#testimonials", text: "PKS Committee" },

    { url: "/noti", text: "Notification" },

    { url: "/events", text: "Events" },
    { url: "#contact", text: "Contact" },
];

const NewHeader: React.FC = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    
    const [notificationState, setNotificationState] = useState(false);

    const handleNotificationClick = () => {
        setNotificationState(!notificationState);
        console.log("Notification link clicked!", notificationState);
    };
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrolled = window.scrollY > 0;
    //         setIsScrolled(scrolled);
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    return (
        <>
            <motion.header
                className={`bg-[#3088bae5] transition-all duration-500 fixed top-0 left-0 w-screen z-50 flex justify-between items-center py-3 px-5 xl:justify-center xl:gap-x-[20%] `}
            >
                {/* left */}
                <div>
                    {/* logo */}
                    <div className="flex gap-3 items-center">
                        <img
                            src={pksLogo}
                            alt="logo"
                            className="w-10 aspect-square"
                        />
                        <h1 className="text-lg font-black text-white lg:text-2xl">
                            POONA KERALEEYA SAMAJ
                        </h1>
                    </div>
                </div>
                {/* right */}
                <div>
                    {/* desktop nav */}
                    <nav className="hidden lg:flex gap-x-3">
                        {navLinks.map((link) => (
                            <a
                                onClick={
                                    link.text === "Notification"
                                        ? handleNotificationClick
                                        : undefined
                                }
                                key={link.url}
                                className=" text-white font-bold hover:bg-[#b8f6ff2c] py-2 px-3 h-min text-nowrap grid place-items-center"
                                href={link.url}
                            >
                                {link.text}
                            </a>
                        ))}
                    </nav>

                    {/* hamburger icon */}
                    <HamburgerIcon
                        className="z-[100] lg:hidden"
                        isOpen={isOpen}
                        toggleOpen={toggleOpen}
                    />
                    {/* backdrop + mobile nav */}
                    <motion.div
                        animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`${
                            isOpen
                                ? "pointer-events-auto"
                                : "pointer-events-none"
                        } fixed w-screen h-screen bg-[#3088bae5] top-0 left-0 p-3 lg:hidden`}
                    >
                        {/* white container */}
                        <motion.div
                            animate={
                                isOpen
                                    ? {
                                          opacity: 1,
                                          y: "0%",
                                          transition: { duration: 0.2 },
                                      }
                                    : {
                                          opacity: 0,
                                          y: "100%",
                                          transition: { duration: 0.2 },
                                      }
                            }
                            className={`bg-white w-full h-[85%] mt-20 rounded-md py-5 md:py-10 lg:bg-transparent`}
                        >
                            {/* links */}
                            <div className="grid">
                                {navLinks.map((link) => (
                                    <motion.a
                                        onClick={() => toggleOpen()}
                                        key={link.url}
                                        initial={{ opacity: 0, y: 100 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        className="font-semibold hover:text-sky-400 p-4 hover:bg-[#0000001a] w-full"
                                        href={link.url}
                                    >
                                        {link.text}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.header>
            <FlashNews />
        </>
    );
};

export default NewHeader;
