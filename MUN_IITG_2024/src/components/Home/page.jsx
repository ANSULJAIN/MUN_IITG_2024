import "./mun.css";
import "./position.css";
import "./mobile_ver.css";
import { Carousel } from '@heathmont/moon-core-tw';
// import {XVIIAnimation} from "page2.jsx";

import { ControlsChevronLeftSmall, ControlsChevronRightSmall } from '@heathmont/moon-icons-tw';

// import { Carousel } from 'flowbite-react';

import ecofin_pic from "./resources/ecofin_left_pic.png";
import disec_pic from "./resources/disec1.png"
import globe from "./resources/disec2.png";
import ls1 from "./resources/ls1.png";
import ls2 from "./resources/ls2.png";
import logo_1 from "./resources/g.png";
import logo_2 from "./resources/Group 34471.png";
import logo_3 from "./resources/Group 34473.png";
import logo_4 from "./resources/Wilson.png";
import lok_sabha from "./resources/Group 111.png";
import img_1 from "./resources/img_1.png";
import img_2 from "./resources/img_2.png";
import img_3 from "./resources/img_4.png";
import img_4 from "./resources/img_3.png";
import league from "./resources/image 19.png";
import left_point from "./resources/left_point.png";
import right_point from "./resources/right_point.png";
import rectangle_1 from "./resources/Rectangle 12.png";
import male_profile from "./resources/Male profile.png";
import green_frame from "./resources/green_frame.png";
import grey_frame from "./resources/grey_frame.png";
import blue_frame from "./resources/blue_frame.png";
import orange_frame from "./resources/orange_frame.png";
import pink_left from "./resources/pink_left.png";
import pink_right from "./resources/pink_right.png";
import Navbar from '../general/Navbar';
import mountain from './resources/mouuntain.png'
import seal from './resources/seal.png';
import women from './resources/women.png';
import sealbase from './resources/sealbase.png';
import sponsor1 from './new_resources/news18 assam north east combined 1.png';
// import sponsor1 from './new_resources/news18 assam north east combined 1.png';
import sponsor2 from './new_resources/sp wall.png';
import sponsor3 from './new_resources/spns33new.png';
import sponsor4 from './new_resources/tesmaco.png';
import sponsor11 from './new_resources/dev remake 1.png';
import sponsor12 from './new_resources/axis.png';
import sponsor13 from './new_resources/group.png';
import { useState, useEffect } from "react";
import Footer from "../general/Footerm";
import quotes_left from "./resources/quotes_left.png";
import quotes_right from "./resources/quotes_right.png";
import ham_logo from "./resources/Vector 11.png";
import cross_logo from "./resources/Vector 10.png";
import home_logo from "./resources/Frame 72.png";
import unhrc from "./resources/UNHRC.png";
import unoc from "./resources/UNOC.png";
import ccd from "./resources/ccd.jpg";

import { Link } from "react-router-dom";

const Mun = () => {
    const [isMobileView, setIsMobileView] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = Array.from({ length: 25 }, (index) => index);
    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 600); 
        };
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const handleLeftArrowClick = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? Data.length - 1 : prevIndex - 1));
    };

    // Define a function to handle right arrow click
    const handleRightArrowClick = () => {
        setCurrentIndex(prevIndex => (prevIndex === Data.length - 1 ? 0 : prevIndex + 1));
    };

    const [state, setState] = useState("hide_content mobile_line_2");
    var [state2, setState2] = useState(true);
    const [state3, setState3] = useState("hide_content mobile_line_2");
    const [state4, setState4] = useState("hide_content mobile_line_2");
    const [state5, setState5] = useState("hide_content mobile_line_2");

    function showMore() {
        setState("show_content mobile_line_2");
    }

    function seeLess() {
        setState("hide_content mobile_line_2");
    }

    function showMore3() {
        setState3("show_content mobile_line_2");
    }

    function seeLess3() {
        setState3("hide_content mobile_line_2");
    }


    function showMore4() {
        setState4("show_content mobile_line_2");
    }

    function seeLess4() {
        setState4("hide_content mobile_line_2");
    }


    function showMore5() {
        setState5("show_content mobile_line_2");
    }

    function seeLess5() {
        setState5("hide_content mobile_line_2");
    }


    function handleClick() {
        setState2(!state2);
    }


    return (


        <div className="mun_container">

            <div className={state}>
                <div className="inside_cont">
                    <div className="up_box">
                        <div className="l_box">
                            <p className="comp_title cabi_font all_font cf1">Lok Sabha</p>
                            <img src={lok_sabha} className="lok_sabha" alt="" />
                        </div>
                        <div className="r_box">
                            <p className="up_txt f_size_12 all_font">This committee is committed to promoting meaningful discussions and improving accessibility in our democratic process, with the ultimate goal of strengthening the Indian democratic system.
                            </p>
                        </div>
                    </div>
                    <div className="down_box">
                        <h1 className="cabi_font head_lorem cf1 all_font down_txt t1">Election Evolution</h1>
                        <p className="mons_font all_font f_size_12 down_txt t2">
                        The focal points of our dialogue will include addressing issues related to the Election Commission, examining the nuances of the anti-defection law, delving into the intricacies of delimitation, scrutinizing the impact of election freebies, and exploring the feasibility of implementing the concept of "one nation, one election".

                        </p>
                        <a onClick={seeLess} className="see_less f_size_12 down_txt all_font t3">See Less</a>
                    </div>
                </div>
            </div>
            <div className={state3}>
                <div className="inside_cont">
                    <div className="up_box">
                        <div className="l_box">
                            <p className="comp_title cabi_font all_font cf1 text-[#D87B38]">UNHRC</p>
                            <img src={unhrc} className="lok_sabha" alt="" />
                        </div>
                        <div className="r_box">
                            <p className="up_txt f_size_12 all_font">A Call to Action on the Human Cost of War.
                            This committee is dedicated to highlighting the plight experienced by refugees and internally displaced individuals.
                            </p>
                        </div>
                    </div>
                    <div className="down_box">
                        <h1 className="cabi_font head_lorem cf1 all_font down_txt t1 text-[#D87B38]">Beyond broken borders</h1>
                        <p className="mons_font all_font f_size_12 down_txt t2">
                        We meticulously examine four major conflicts. These encompass the appalling conditions suffered by the Rohingyas, the brutal ethnic cleansing in Nagorno-Karabakh, the adversities confronting Syrian refugees, and the hazardous journey northward embarked upon by Central American migrants in pursuit of a more promising life.

                        </p>
                        <a onClick={seeLess3} className="see_less f_size_12 down_txt all_font t3">See Less</a>
                    </div>
                </div>
            </div>
            <div className={state4}>
                <div className="inside_cont">
                    <div className="up_box">
                        <div className="l_box">
                            <p className="comp_title cabi_font all_font cf1">UNOC</p>
                            <img src={unoc} className="league unoc_img" alt="" />
                        </div>
                        <div className="r_box">
                            <p className="up_txt f_size_12 all_font">
                            This conference is set to delve into the intricate challenges posed by water pollution on a global scale. The committee will focus on the impact of water pollution on human health, the environment, and the economy, and will work towards formulating a comprehensive plan to address these issues.
                            </p>
                        </div>
                    </div>
                    <div className="down_box">
                        <h1 className="cabi_font head_lorem cf1 all_font down_txt t1">Battles Below</h1>
                        <p className="mons_font all_font f_size_12 down_txt t2">
                        Alongside this, the discussions will encompass the far-reaching consequences of armed conflicts on marine ecosystems, unraveling the complex relationship between warfare and aquatic life. Simultaneously, the committee aims to navigate the nuanced terrain of water conflicts, endeavoring to craft pragmatic strategies for sustainable resolutions.
                        </p>
                        <a onClick={seeLess4} className="see_less f_size_12 down_txt all_font t3">See Less</a>
                    </div>
                </div>
            </div>
            <div className={state5}>
                <div className="inside_cont">
                    <div className="up_box">
                        <div className="l_box">
                            <p className="comp_title cabi_font all_font cf2">League of Nations</p>
                            <img src={league} className="lok_sabha" alt="" />
                        </div>
                        <div className="r_box">
                            <p className="up_txt f_size_12 all_font">This conference is set to delve into the failures and shortcomings of the League of Nations, and the lessons that can be learned from its legacy. The League of Nations was the first worldwide intergovernmental organisation whose principal mission was to maintain world peace
                            </p>
                        </div>
                    </div>
                    <div className="down_box">
                        <h1 className="cabi_font head_lorem cf2 all_font down_txt t1">Harmony Haven</h1>
                        <p className="mons_font all_font f_size_12 down_txt t2">
                        The precursor to the modern United Nations, it created a template for the world to follow in the decades after its end. Understanding the
                            failings of the League and the way the world improved upon the template it created, is key to understanding modern diplomacy.

                        </p>
                        <a onClick={seeLess5} className="see_less f_size_12 down_txt all_font t3">See Less</a>
                    </div>
                </div>
            </div>
            <div className="blue_block mobile_line_2">
                <div className="ham_box_senior">
                    <img src={home_logo} className="home_logo_img" />
                    <img src={ham_logo} onClick={handleClick} className={state2 ? "ham_logo" : "no_logo"} />
                    <img src={cross_logo} onClick={handleClick} className={state2 ? "no_logo" : "cross_logo"} />
                </div>
                <div className={state2 ? "no_logo" : "hamburger_menu"}>
                    <img src={ham_logo} onClick={handleClick} className={state2 ? "ham_logo fix_position" : "no_logo"} />
                    <img src={cross_logo} onClick={handleClick} className={state2 ? "no_logo" : "cross_logo fix_position"} />
                    <div className="ham_box">
                        <div className="link_box"><Link to="/" className="link_txt">Home</Link></div>
                        <div className="link_box"><Link to="/AboutUs" className="link_txt">About Us</Link></div>
                        <div className="link_box"><Link to="/PreviousEditions" className="link_txt">Previous Editions</Link></div>
                        <div className="link_box"><Link to="/ContactUs" className="link_txt">Contact Us</Link></div>
                    </div>
                </div>
            </div>
            {!isMobileView && <Navbar />}

            <div className="logo_container">
                <img src={logo_1} alt="" />

            </div>
            <div className="quotes_container">
                <div className="quotes_box">
                    <p className="font_cal mons_font line_1">"That the powerful play goes on, and you may contribute a verse."</p>
                    <div className="mobile_quotes">
                        <img src={quotes_left} className="quotes_img quotes_img_left" alt="" />
                        <p className="font_cal cabi_font line_2 desktop_line">"What verse shall be yours?"</p>
                        <p className="font_cal cabi_font line_2 mobile_line">What verse shall be yours?</p>
                        <img src={quotes_right} className="quotes_img quotes_img_right" alt="" />
                    </div>
                    <p className="font_cal mons_font line_3">O me! O life!, Walt Whitman</p>
                    <p className="font_cal mons_font line_4">Dead Poets society</p>
                </div>
            </div>

            <div className="comm_post_container">

<div className="flex flex-row flex-nowrap px-9 w-full align-center justify-center items-center h-[5vw]">
    <p className="mq350:text-[18px] font-raleway font-black mq520:text-xl text-2xl sm:text-3xl md:text-4xl mr-4 mq520:text-wrap text-nowrap" style={{ color: '#051c46' }}>Join Our Commities </p>
    <hr className="w-full opacity-100 border-t-2 -translate-y-1" style={{ color: '#3245A9' }} />
</div>
<div className="comm_comp">
    <div className="left_box">
        <p className="comp_title cabi_font all_font cf1" style={{ color: '#00a59e' }}>UNGA ECOFIN</p>
        <img src={ecofin_pic} style={{ width: '16vw', height: '14vw' }}  alt="ecofin picture" />
    </div>
    <div className="right_box">
        <div className="center_box">
            <p className="mons_font comp_lorem all_font display_type" style={{ color: "black" }}>
            This committee dedicates it's time to address the rising global income inequality inter and internationally.                            </p>
            <h1 className="cabi_font head_lorem cf1 all_font" style={{ color: '#00a59e' }}>BRIDGING BARRIERS</h1>
            <p className="mons_font comp_lorem lower_para all_font display_type" style={{ color: "black" }}>
            While on the topic, the plenary also extends discussion on the topic of redistribution mechanisms, including UBI, CCTs and others as well. Simultaneously, the committee warrants discussion on the emerging poverty crisis, crafting pragmatic solutions for sustainable development.                        </p>
            <p className="mobile_line f_size_12 roadmap_txt all_font mons_font">
                {/* A Roadmap to Strengthening
                Democracy in India */}
            </p>
            <a onClick={showMore} className="see_more f_size_12 mobile_line see_txt all_font mons_font">
                See More
            </a>
        </div>

       
        <img src={img_2} style={{ width: '20vw', height: '23vw',transform:'translateX(-6vw)' }} alt="" />
    </div>
</div>
<div className="comm_comp">
    <div className="left_box">
        <p className="comp_title_2 cabi_font all_font cf1 text-[#D87B38]" style={{ color: '#051c46' }}>UNGA DISEC</p>
        <img src={disec_pic} className="league" alt="" />
    </div>
    <div className="right_box">
        <div className="center_box">
            <p className="mons_font comp_lorem all_font display_type" style={{ color: "black" }}>
            The committee focuses on reforming UN peacekeeping for greater effectiveness and accountability                            </p>
            <h1 className="cabi_font head_lorem cf1 all_font text-[#D87B38] " style={{ color: '#051c46' }}>CONFLICT TO CONSENSUS</h1>
            <p className="mons_font comp_lorem lower_para all_font display_type" style={{ color: "black" }}>
            Addressing hybrid threats like cyber warfare and terrorism, and implementing DDR frameworks in post-conflict zones. Along with discussion on issues like regulating private military companies, preventing outer space weaponization, and lastly developing international guidelines for autonomous weapons and emerging military technologies.                             </p>
            <p className="mobile_line f_size_12 roadmap_txt all_font mons_font" style={{ color: "black" }}>
            World Without borders
            </p>
            <a onClick={showMore3} className="see_more f_size_12 mobile_line see_txt all_font mons_font">
                See More
            </a>
        </div>
        
        <img src={globe} style={{ width: '20vw', height: '23vw',transform:'translateX(-12vw)' }} alt="" />
    </div>
</div>
<div className="comm_comp">
    <div className="left_box">
        <p className="comp_title_2 cabi_font all_font cf1" style={{ color: '#662e93' }}>Lok Sabha</p>
        <img src={ls1} style={{ width: '12vw', height: '14vw' }} alt="" />
    </div>
    <div className="right_box">
        <div className="center_box">
            <p className="mons_font comp_lorem all_font display_type" style={{ color: "black" }}>
            The committee focuses on concerns about secularism in India, its historical roots, and related rules, regulations.and issues.                            </p>
            <h1 className="cabi_font head_lorem cf1 all_font" style={{ color: '#662e93' }}>THE SECULAR DILEMMA</h1>
            <p className="mons_font comp_lorem lower_para all_font display_type" style={{ color: "black" }}>
            The committee will delve into the concept of secularism in India, analyzing its historical evolution and its connection to the partition of India. It will also address related issues such as the Uniform Civil Code and anti-conversion laws. Additionally, the committee will shed light on ongoing debates and issues such as the Places of Worship Act ,The Madrasa Act etc.             </p>
            <p className="mobile_line f_size_12 roadmap_txt all_font mons_font" style={{ color: "black" }}>
            Unifying efforts to cleanse our oceans 
            </p>
            <a onClick={showMore4} className="see_more f_size_12 mobile_line see_txt all_font mons_font">
                See More
            </a>
        </div>
        
        <img src={ls2} style={{ width: '14vw', height: '20.5vw',transform:'translateX(-6vw) translateY(2.8vw)' }} alt="" />
    </div>
</div>

</div>
            <div className="red_container">
                <div className="divis">
                    <div className="text">
                    1200+
                    <p className="para">Delegates</p>
                    <p className="para">from all over India</p>
                </div>
                </div>
                <div className="divis">
                <div className="text">
                    75+
                    <p className="para">Executives</p>
                    <p className="para">Overall</p>
                </div></div>
                <div className="divis">
                <div className="text">
                    100+
                    <p className="para">International Presses</p>
                    <p className="para">From Country and Beyond</p>
                </div></div>
            </div>

            <div className="flex flex-row flex-nowrap px-9 w-full align-center justify-center items-center h-[25vh] bg-[#FFF7E4] modify_carousel">
          <p className="mq350:text-[18px] font-raleway font-black mq520:text-xl text-2xl sm:text-3xl md:text-4xl mr-4 mq520:text-wrap text-nowrap" style={{ color: '#3245A9' }}>Lets Read Some Reviews</p>  
                <hr className="w-full opacity-100 border-t-2 -translate-y-1" style={{ color: '#3245A9' }} />
            </div>

            <div className="review_container">

                <Carousel className='carosol_container' >
                    {({ firstVisibleIndex, lastVisibleIndex }) => (
                        <>
                            <Carousel.Reel style={{ overflow: 'hidden' }} className="reel_container">
                                {Data.map((data, index) => (
                                    <Carousel.Item key={index} className="w-100 h-70">

                                        <div className="review_card_cat_1">
                                            {/* <img src={data.image} className="rectangle t-3" alt="" /> */}
                                            <img src={data.profileImage} className="male_profile" alt="" />
                                            <div className="bio_heading">
                                                <h2 className="mons_font cf2 review_f_size all_font">{data.title}</h2>
                                                <p className="mons_font cf2 review_f_size all_font">{data.role}</p>
                                            </div>
                                            <div className="comment">
                                                <p className="mons_font cf2 review_f_size all_font para_position">{data.comment}
                                                </p>
                                            </div>
                                            <div className="stars_box"></div>
                                        </div>

                                    </Carousel.Item>
                                ))}
                                <div className="color"></div>
                            </Carousel.Reel>
                            {/* <Carousel.RightArrow>
            <ControlsChevronRightSmall />
          </Carousel.RightArrow> */}

                        </>
                    )}

                </Carousel>
            </div>


            <div className="flex flex-row flex-nowrap px-9 w-full align-center justify-center items-center h-[5vw]">
                <p className="mq350:text-[18px] font-raleway font-black mq520:text-xl text-2xl sm:text-3xl md:text-4xl mr-4 mq520:text-wrap text-nowrap" style={{ color: '#3245A9' }}>In Collaboration with</p>
                <hr className="w-full opacity-100 border-t-2 -translate-y-1" style={{ color: '#3245A9' }} />
            </div>
            <div className="sponsor_logo">
                <div></div>
                <div className="sponsorone"><img src={sponsor11} alt="" className="s_logo1" /></div>
                <div className="sponsortwo"><img src={sponsor12} alt="" className="s_logo2" /></div>
                <div className="sponsorthree"><img src={sponsor13} alt="" className="s_logo1" /></div>
                {/* <div><br /></div> */}
                {/* <br /> */}
                </div>
                <p><br /></p>
                <div className="sponsor_logo">
                <div className="sponsorone"><img src={sponsor1} alt="" className="s_logo1" /></div>
                <div className="sponsortwo"><img src={sponsor2} alt="" className="s_logo2" /></div>
                <div className="sponsortwo"><img src={sponsor3} alt="" className="s_logo3" /></div>
                {/* <div className="sponsortwo"><img src={sponsor4} alt="" className="s_logo4" /></div> */}
                <div className="sponsorthree"><img src={sponsor4} alt="" className="s_logo1" /></div>
            </div>

            <Footer />
            <div className="bubble-container">
                <a href="https://forms.gle/KLBcRyHyniV1zgxk6" target="_blank" className="bubble">
                    Apply
                </a>
            </div>
        </div>
    );
}


const Data = [
    {
        image: pink_right,
        profileImage: male_profile,
        title: "Vishwaprasanna Hariharan",
        role: "Delegate",
        comment: "It's a really amazing platform to learn not only about the affairs of the world but also about how to articulate your thoughts and put them into words."
    },
    // Add more review objects as needed

    {
        image: orange_frame,
        profileImage: male_profile,
        title: "Aditya Gupta",
        role: "Delegate",
        comment: "Had a great time at the conference. It was a great learning experience and I got to meet a lot of new people. Looking forward to the next edition."
    },
    {
        image: green_frame,
        profileImage: male_profile,
        title: "Sanya Sarhma",
        role: "IP",
        comment: "Clicked some of my best pictures here. Had a great time capturing the moments and writing about them. The Secretariat was very supportive and helpful."
    },
    {
        image: grey_frame,
        profileImage: male_profile,
        title: "Parth Shrivatsava",
        role: "Delegate",
        comment: "The conference really had me on my toes all the time. Not one single dull moment. The debates were intense and the discussions were very engaging. "
    },
    {
        image: rectangle_1,
        profileImage: male_profile,
        title: "Anubhav Trivedi",
        role: "Delegate",
        comment: "As a first timer, I was a bit nervous but the Secretariat was very supportive and helpful. The conference was very well organized and I had a great time."
    },
];
export default Mun;
