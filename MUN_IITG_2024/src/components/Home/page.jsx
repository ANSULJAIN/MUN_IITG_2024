import "./mun.css";
import "./position.css";
import "./mobile_ver.css";
import { Carousel } from '@heathmont/moon-core-tw';


import { ControlsChevronLeftSmall, ControlsChevronRightSmall } from '@heathmont/moon-icons-tw';

// import { Carousel } from 'flowbite-react';

import logo_1 from "./resources/Group 112.png";
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
import sponsor1 from './resources/sponsor1.png';
import sponsor2 from './resources/sponsor2.png';
import sponsor3 from './resources/sponsor3.png';
import { useState, useEffect } from "react";
import Footer from "../general/Footerm";
import quotes_left from "./resources/quotes_left.png";
import quotes_right from "./resources/quotes_right.png";
import ham_logo from "./resources/Vector 11.png";
import cross_logo from "./resources/Vector 10.png";
import home_logo from "./resources/Frame 72.png";
import unhrc from "./resources/UNHRC.png";
import unoc from "./resources/UNOC.png";

const Mun = () => {
    const [isMobileView, setIsMobileView] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = Array.from({ length: 25 }, (index) => index);
    // Define a function to handle left arrow click
    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 600); // Adjust the width breakpoint as needed
        };

        // Initial check on component mount
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
                        <div className="link_box"><a href="/" className="link_txt">Home</a></div>
                        <div className="link_box"><a href="/" className="link_txt">About Us</a></div>
                        <div className="link_box"><a href="/PreviousEditions" className="link_txt">Previous Editions</a></div>
                        <div className="link_box"><a href="/ContactUs" className="link_txt">Contact Us</a></div>
                    </div>
                </div>
            </div>
            {!isMobileView && <Navbar />}

            <div className="logo_container">

                <div className="color_logo color_logo_1"></div>
                <div className="color_logo color_logo_2"></div>
                <div className="color_logo color_logo_3"></div>
                <div className="color_logo color_logo_4"></div>
                <img src={logo_1} alt="" className="img_logo img_logo_1" />
                <img src={logo_2} alt="" className="img_logo img_logo_2" />
                <img src={logo_4} alt="" className="img_logo img_logo_4" />
                <img src={logo_3} alt="" className="img_logo img_logo_3" />
                <div className="img_logo img_logo_5">
                    <div className="rel_box">
                        <p className="font_logo cabi_font_1 all_font pad">IITGMUN</p>
                        <p className="font_logo cabi_font_2 all_font pad">2024</p>
                        <p className="font_logo mons_font_1 all_font pad">Edition XVI</p>
                        <p className="font_logo mons_font_2 all_font pad">8th - 10th March 2024</p>
                    </div>
                </div>

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
                    <p className="mq350:text-[18px] font-raleway font-black mq520:text-xl text-2xl sm:text-3xl md:text-4xl mr-4 mq520:text-wrap text-nowrap" style={{ color: '#3245A9' }}>Our Commities </p>
                    <hr className="w-full opacity-100 border-t-2 -translate-y-1" style={{ color: '#3245A9' }} />
                </div>
                <div className="comm_comp">
                    <div className="left_box">
                        <p className="comp_title cabi_font all_font cf1">Lok Sabha</p>
                        <img src={lok_sabha} className="lok_sabha" alt="" />
                    </div>
                    <div className="right_box">
                        <div className="center_box">
                            <p className="mons_font comp_lorem all_font display_type">
                            This committee is committed to promoting meaningful discussions and improving accessibility in our democratic process, with the ultimate goal of strengthening the Indian democratic system.
                            </p>
                            <h1 className="cabi_font head_lorem cf1 all_font">Election Evolution</h1>
                            <p className="mons_font comp_lorem lower_para all_font display_type">
                            The focal points of our dialogue will include addressing issues related to the Election Commission, examining the nuances of the anti-defection law, delving into the intricacies of delimitation, scrutinizing the impact of election freebies, and exploring the feasibility of implementing the concept of "one nation, one election." This committee will come together and engage in a dialogue that can bring about positive change and empower the voices of the people.
                            </p>
                            <p className="mobile_line f_size_12 roadmap_txt all_font mons_font">
                                A Roadmap to Strengthening
                                Democracy in India
                            </p>
                            <a onClick={showMore} className="see_more f_size_12 mobile_line see_txt all_font mons_font">
                                See More
                            </a>
                        </div>

                        <img src={img_1} className="img_1" alt="" />
                        <img src={img_2} className="img_2" alt="" />
                    </div>
                </div>
                <div className="comm_comp">
                    <div className="left_box">
                        <p className="comp_title_2 cabi_font all_font cf1 text-[#D87B38]">UNHRC</p>
                        <img src={unhrc} className="league" alt="" />
                    </div>
                    <div className="right_box">
                        <div className="center_box">
                            <p className="mons_font comp_lorem all_font display_type">
                            A Call to Action on the Human Cost of War.
                            This committee is dedicated to highlighting the plight experienced by refugees and internally displaced individuals.
                            </p>
                            <h1 className="cabi_font head_lorem cf1 all_font text-[#D87B38] ">Beyond broken borders</h1>
                            <p className="mons_font comp_lorem lower_para all_font display_type">
                            We meticulously examine four major conflicts that have significantly impacted the world, leading to refugee crises. These encompass the appalling conditions suffered by the Rohingyas, the brutal ethnic cleansing in Nagorno-Karabakh, the adversities confronting Syrian refugees, and the hazardous journey northward embarked upon by Central American migrants in pursuit of a more promising life.
                            </p>
                            <p className="mobile_line f_size_12 roadmap_txt all_font mons_font">
                            World Without borders
                            </p>
                            <a onClick={showMore3} className="see_more f_size_12 mobile_line see_txt all_font mons_font">
                                See More
                            </a>
                        </div>
                        <img src={mountain} className="img_1" alt="" />
                        <img src={women} className="img_2" alt="" />
                    </div>
                </div>
                <div className="comm_comp">
                    <div className="left_box">
                        <p className="comp_title_2 cabi_font all_font cf1">UNOC</p>
                        <img src={unoc} className="league unoc_img" alt="" />
                    </div>
                    <div className="right_box">
                        <div className="center_box">
                            <p className="mons_font comp_lorem all_font display_type">
                            This conference is set to delve into the intricate challenges posed by water pollution on a global scale. The committee will focus on the impact of water pollution on human health, the environment, and the economy, and will work towards formulating a comprehensive plan to address these issues.
                            </p>
                            <h1 className="cabi_font head_lorem cf1 all_font">Battles Below</h1>
                            <p className="mons_font comp_lorem lower_para all_font display_type">
                            Alongside this, the discussions will encompass the far-reaching consequences of armed conflicts on marine ecosystems, unraveling the complex relationship between warfare and aquatic life. Simultaneously, the committee aims to navigate the nuanced terrain of water conflicts, endeavoring to craft pragmatic strategies for sustainable resolutions.
                            </p>
                            <p className="mobile_line f_size_12 roadmap_txt all_font mons_font">
                            Unifying efforts to cleanse our oceans 
                            </p>
                            <a onClick={showMore4} className="see_more f_size_12 mobile_line see_txt all_font mons_font">
                                See More
                            </a>
                        </div>
                        <img src={sealbase} className="img_1" alt="" />
                        <img src={seal} className="img_2" alt="" />
                    </div>
                </div>
                <div className="comm_comp">
                    <div className="left_box">
                        <p className="comp_title_2 cabi_font all_font cf2">League of Nations</p>
                        <img src={league} className="league" alt="" />
                    </div>
                    <div className="right_box">
                        <div className="center_box">
                            <p className="mons_font comp_lorem all_font display_type">
                            This conference is set to delve into the failures and shortcomings of the League of Nations, and the lessons that can be learned from its legacy. The League of Nations was the first worldwide intergovernmental organisation whose principal mission was to maintain world peace
                            </p>
                            <h1 className="cabi_font head_lorem cf2 all_font">Harmony Haven</h1>
                            <p className="mons_font comp_lorem lower_para all_font display_type">
                            This continuous crisis committee will keep the delegates on their toes as they brainstorm ways to ensure the League of Nations comes up with peaceful and beneficial solutions for a wide range of crises.The precursor to the modern United Nations, it created a template for the world to follow in the decades after its end. Understanding the
                            failings of the League and the way the world improved upon the template it created, is key to understanding modern diplomacy.

                            </p>
                            <p className="mobile_line f_size_12 roadmap_txt all_font mons_font">
                            Reflecting on past missteps
                            </p>
                            <a onClick={showMore5} className="see_more f_size_12 mobile_line see_txt all_font mons_font">
                                See More
                            </a>
                        </div>

                        <img src={img_3} className="img_1" alt="" />
                        <img src={img_4} className="img_2" alt="" />
                    </div>
                </div>
            </div>
            <div className="pie_chart_container">
                <div className="align_center pie_circle_1">
                    <p className="cabi_font sep_class_1">1200+</p>
                    <div className="line_box_1 line_box">
                        <h2 className="heading_line mons_font all_font ff_1">Delegates</h2>
                        <p className="para_line mons_font all_font">from all over India</p>
                    </div>
                </div>
                <div className="align_center pie_circle_2">
                    <p className="cabi_font sep_class_2">75+</p>
                    <div className="line_box_2 line_box">
                        <h2 className="heading_line mons_font all_font">Executives</h2>
                        <p className="para_line mons_font all_font ff_2">overall</p>
                    </div>
                </div>
                <div className="align_center pie_circle_3">
                    <p className="cabi_font sep_class_3">100+</p>
                    <div className="line_box_3 line_box">
                        <h2 className="heading_line mons_font all_font ff_3">International Presses</h2>
                        <p className="para_line mons_font all_font">from country and beyond</p>
                    </div>
                </div>
            </div>

            {/* <div className="reviews_container">
                <img src={left_point} className="left_point pointer" alt="" onClick={handleLeftArrowClick}/>
                <div className="reviews_box">
                    <div className="review_card_cat_4 position_l3">
                        <img src={Data[currentIndex].image} className="rectangle_4" alt="" />
                        <img src={Data[currentIndex].profileImage} className="male_profile_4" alt="" />
                        <div className="bio_heading_4">
                            <h2 className="mons_font cf2 review_f_size_4 all_font">Vishwaprasanna Hariharan</h2>
                            <p className="mons_font cf2 review_f_size_4 all_font boldness">Delegate</p>
                        </div>
                        <div className="comment_4">
                            <p className="mons_font cf2 review_f_size_4 all_font boldness">"It's a really amazing platform to learn not only about the affairs of
                                the world but also about how to articulate your thoughts and put them into words."
                            </p>
                        </div>
                    </div>
                    <div className="review_card_cat_3 position_l2">
                        <img src={Data[currentIndex+1].image} className="rectangle_3" alt="" />
                        <img src={Data[currentIndex+1].profileImage} className="male_profile_3" alt="" />
                        <div className="bio_heading_3">
                            <h2 className="mons_font cf2 review_f_size_3 all_font">Vishwaprasanna Hariharan</h2>
                            <p className="mons_font cf2 review_f_size_3 all_font boldness">Delegate</p>
                        </div>
                        <div className="comment_3">
                            <p className="mons_font cf2 review_f_size_3 all_font boldness">"It's a really amazing platform to learn not only about the affairs of
                                the world but also about how to articulate your thoughts and put them into words."
                            </p>
                        </div>
                    </div>
                    <div className="review_card_cat_2 position_l1">
                        <img src={Data[currentIndex+2].image} className="rectangle_2" alt="" />
                        <img src={Data[currentIndex+3].profileImage} className="male_profile_2" alt="" />
                        <div className="bio_heading_2">
                            <h2 className="mons_font cf2 review_f_size_2 all_font">Vishwaprasanna Hariharan</h2>
                            <p className="mons_font cf2 review_f_size_2 all_font boldness">Delegate</p>
                        </div>
                        <div className="comment_2">
                            <p className="mons_font cf2 review_f_size_2 all_font boldness">"It's a really amazing platform to learn not only about the affairs of
                                the world but also about how to articulate your thoughts and put them into words."
                            </p>
                        </div>     
                    </div>
                    <div className="review_card_cat_1">
                        <img src={Data[currentIndex+3].image} className="rectangle" alt="" />
                        <img src={Data[currentIndex+3].profileImage} className="male_profile" alt="" />
                        <div className="bio_heading">
                            <h2 className="mons_font cf2 review_f_size all_font">Vishwaprasanna Hariharan</h2>
                            <p className="mons_font cf2 review_f_size all_font">Delegate</p>
                        </div>
                        <div className="comment">
                            <p className="mons_font cf2 review_f_size all_font">"It's a really amazing platform to learn not only about the affairs of
                                the world but also about how to articulate your thoughts and put them into words."
                            </p>
                        </div>
                        <div className="stars_box"></div>
                    </div>
                    <div className="review_card_cat_2 position_r1">
                        <img src={grey_frame} className="rectangle_2" alt="" />
                        <img src={male_profile} className="male_profile_2" alt="" />      
                        <div className="bio_heading_2">
                            <h2 className="mons_font cf2 review_f_size_2 all_font">Vishwaprasanna Hariharan</h2>
                            <p className="mons_font cf2 review_f_size_2 all_font boldness">Delegate</p>
                        </div>
                        <div className="comment_2">
                            <p className="mons_font cf2 review_f_size_2 all_font boldness">"It's a really amazing platform to learn not only about the affairs of
                                the world but also about how to articulate your thoughts and put them into words."
                            </p>
                        </div>   
                    </div>
                    <div className="review_card_cat_3 position_r2">
                        <img src={orange_frame} className="rectangle_3" alt="" />
                        <img src={male_profile} className="male_profile_3" alt="" /> 
                        <div className="bio_heading_3">
                            <h2 className="mons_font cf2 review_f_size_3 all_font">Vishwaprasanna Hariharan</h2>
                            <p className="mons_font cf2 review_f_size_3 all_font boldness">Delegate</p>
                        </div>
                        <div className="comment_3">
                            <p className="mons_font cf2 review_f_size_3 all_font boldness">"It's a really amazing platform to learn not only about the affairs of
                                the world but also about how to articulate your thoughts and put them into words."
                            </p>
                        </div>
                    </div>
                    <div className="review_card_cat_4 position_r3">
                        <img src={pink_right} className="rectangle_4" alt="" />
                        <img src={male_profile} className="male_profile_4" alt="" />  
                        <div className="bio_heading_4">
                            <h2 className="mons_font cf2 review_f_size_4 all_font">Vishwaprasanna Hariharan</h2>
                            <p className="mons_font cf2 review_f_size_4 all_font boldness">Delegate</p>
                        </div>
                        <div className="comment_4">
                            <p className="mons_font cf2 review_f_size_4 all_font boldness">"It's a really amazing platform to learn not only about the affairs of
                                the world but also about how to articulate your thoughts and put them into words."
                            </p>
                        </div>                      
                    </div>
                </div>
                <img src={right_point} className="right_point pointer" alt="" onClick={handleRightArrowClick}/>
            </div>  */}
            {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 1
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 3
        </div>
      </Carousel>
    </div> */}

            <div className="flex flex-row flex-nowrap px-9 w-full align-center justify-center items-center h-[25vh] bg-[#FFF7E4]">
                <p className="mq350:text-[18px] font-raleway font-black mq520:text-xl text-2xl sm:text-3xl md:text-4xl mr-4 mq520:text-wrap text-nowrap" style={{ color: '#3245A9' }}>Lets Read Some Reviews</p>
                <hr className="w-full opacity-100 border-t-2 -translate-y-1" style={{ color: '#3245A9' }} />
            </div>

            <div className="review_container">

                <Carousel className='carosol_container' >
                    {({ firstVisibleIndex, lastVisibleIndex }) => (
                        <>
                            {/* <Carousel.LeftArrow>
            <ControlsChevronLeftSmall />
          </Carousel.LeftArrow> */}
                            <Carousel.Reel style={{ overflow: 'hidden' }} className="reel_container">
                                {Data.map((data, index) => (
                                    <Carousel.Item key={index} className="w-100 h-70">

                                        {/* <div className="review_card_cat_4 position_r3">
                        <img src={pink_right} className="rectangle_4" alt="" />
                        <img src={male_profile} className="male_profile_4" alt="" />  
                        <div className="bio_heading_4">
                            <h2 className="mons_font cf2 review_f_size_4 all_font">Vishwaprasanna Hariharan</h2>
                            <p className="mons_font cf2 review_f_size_4 all_font boldness">Delegate</p>
                        </div>
                        <div className="comment_4">
                            <p className="mons_font cf2 review_f_size_4 all_font boldness">"It's a really amazing platform to learn not only about the affairs of
                                the world but also about how to articulate your thoughts and put them into words."
                            </p>
                        </div>                      
                    </div> */}
                                        <div className="review_card_cat_1">
                                            <img src={data.image} className="rectangle" alt="" />
                                            <img src={data.profileImage} className="male_profile" alt="" />
                                            <div className="bio_heading">
                                                <h2 className="mons_font cf2 review_f_size all_font">{data.title}</h2>
                                                <p className="mons_font cf2 review_f_size all_font">{data.role}</p>
                                            </div>
                                            <div className="comment">
                                                <p className="mons_font cf2 review_f_size all_font">{data.comment}
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
                <div className="sponsorone"><img src={sponsor1} alt="" className="s_logo1" /></div>
                <div className="sponsortwo"><img src={sponsor2} alt="" className="s_logo2" /></div>
                <div className="sponsorthree"><img src={sponsor3} alt="" className="s_logo3" /></div>
            </div>

            <Footer />
            <div className="bubble-container">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSclG4wC1Erj9bEBwSZdl9XJfLJleJVYGb3FypLEaYCyz3PIbA/viewform?usp=send_form" target="_blank" className="bubble">
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