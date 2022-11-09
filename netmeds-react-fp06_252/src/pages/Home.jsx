import React from 'react'
import { Box, Text } from "@chakra-ui/react";
import "../index.css"
import { Link } from "react-router-dom"
import { ChevronRightIcon } from "@chakra-ui/icons";
import Carousel from '../components/ImageSliders/Carousel'
import Navbar from '../components/Navbar'
import Navbar2 from '../components/Navbar2'
import TopBrand from "../components/ImageSliders/TopBrand";
import LightningDeals from '../components/ImageSliders/LightningDeals';

// box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

const Home = () => {
    return (
        <>
            <Navbar />
            <Navbar2 />
            <Carousel />


            {/* #######    3-Boxes after carosel start........ */}

            <Box bg={"#f3f7fb"} width={"100%"} height={"130px"} display={"flex"} justifyContent={"space-around"}>
                <Link to="/">
                    <Box display={"flex"} alignItems={"center"} bg={"#fff"} p={5} borderRadius={"10px"} boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px"} >
                        <Box><img src="https://www.netmeds.com/assets/gloryweb/images/icons/ordermedicinnew.svg" alt="wellness_logo" width={"60px"} height={"60px"} /></Box>
                        <Box width={"250px"} ml={3}>
                            <h3 style={{ fontWeight: "400", fontSize: "20px" }}>Wellness</h3>
                            <h5 style={{ color: "#6db37e" }}>Save Upto 80% off</h5>
                        </Box>
                    </Box>
                </Link>
                <Link to="/">
                    <Box display={"flex"} alignItems={"center"} bg={"#fff"} p={5} borderRadius={"10px"} boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px"}>
                        <Box><img src="https://www.netmeds.com/assets/gloryweb/images/icons/Beautynew.svg" alt="beauty_logo" width={"57px"} height={"57px"} /></Box>
                        <Box width={"250px"} ml={3}>
                            <h3 style={{ fontWeight: "400", fontSize: "20px" }}>Beauty</h3>
                            <h5 style={{ color: "#6db37e" }}>Save Upto 40% off</h5>
                        </Box>
                    </Box>
                </Link>
                <Link to="/">
                    <Box display={"flex"} alignItems={"center"} bg={"#fff"} p={5} borderRadius={"10px"} boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px"}>
                        <Box><img src="https://www.netmeds.com/assets/gloryweb/images/icons/Wellnessnew.svg" alt="meidcine_logo" width={"68px"} height={"68px"} /></Box>
                        <Box width={"250px"} ml={3}>
                            <h3 style={{ fontWeight: "400", fontSize: "20px" }}>Order Medicine</h3>
                            <h5 style={{ color: "#6db37e" }}>Save Upto 25% off</h5>
                        </Box>
                    </Box>
                </Link>
            </Box>

            {/* #######    3-Boxes after carosel end........ */}













            {/* #######    Payment-Offers start........ */}

            <Box
                bg={"#F3F7FB"}
                display={"flex"}
                pl={8}
                pr={8}
                justifyContent={"space-between"}
            >
                <Text fontSize={28} fontWeight={500}>
                    Payment Partners Offers
                </Text>
                <Text as={"button"} cursor={"pointer"}>
                    View All <ChevronRightIcon />
                </Text>
            </Box>

            <Box bg={"#F3F7FB"} display={"flex"} gap={10} p={8}>
                <Box
                    boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                    display={"flex"}
                    rounded={10}
                    p={5}
                    pt={2}
                    pb={2}
                    width={460}
                    height={"70%"}
                    bg={"white"}
                >
                    <Box
                        // boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                        height={12}
                        mt={5}
                        pr={5}
                        borderRight="2px solid lightgrey"
                    >
                        <img
                            width={70}
                            height={38}
                            src="https://www.netmeds.com/images/cms/offers/1654235738_Icon_256x256.png"
                            alt=""
                        ></img>
                    </Box>
                    <Text pl={3} fontSize={12}>
                        <Text fontWeight={600}>
                            Use Pay with Rewards, Get up to Rs. 800 Cashback!..
                        </Text>
                        <br></br>
                        <p>
                            Get assured cashback between Rs. 30 and Rs. 800, when you pay
                            using the “Pay with Rewards” payme..
                        </p>
                    </Text>
                </Box>

                <Box
                    boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                    display={"flex"}
                    rounded={10}
                    p={5}
                    pt={2}
                    pb={2}
                    width={460}
                    height={"70%"}
                    bg={"white"}
                >
                    <Box
                        // boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                        height={12}
                        mt={3}
                        pr={5}
                        borderRight="2px solid lightgrey"
                    >
                        <img
                            width={70}
                            height={38}
                            src="https://www.netmeds.com/images/cms/offers/1643631754_1629112796_Simpl_Icon.png"
                            alt=""
                        ></img>
                    </Box>
                    <Text pl={4} fontSize={12}>
                        <Text fontWeight={600}>
                            Get up to Rs. 500 Simpl Cashback* (5%)! ..
                        </Text>
                        <br></br>
                        <p>
                            From 1st to 30th June 2022, get up to Rs. 500 Simpl Cashback* (5%)
                            on your payment via Simpl towards..
                        </p>
                    </Text>
                </Box>

                <Box
                    boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                    display={"flex"}
                    rounded={10}
                    p={5}
                    pt={2}
                    pb={2}
                    width={460}
                    height={"70%"}
                    bg={"white"}
                >
                    <Box
                        // boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                        height={12}
                        mt={3}
                        pr={5}
                        borderRight="2px solid lightgrey"
                    >
                        <img
                            width={70}
                            height={38}
                            src="https://www.netmeds.com/images/cms/offers/1629112796_Simpl_Icon.png"
                            alt=""
                        ></img>
                    </Box>
                    <Text pl={4} fontSize={12}>
                        <Text fontWeight={600}>
                            Get up to Rs. 500 Simpl Cashback* (8%)!..
                        </Text>
                        <br></br>
                        <Text>
                            Get up to Rs. 500 Simpl Cashback (8%) on your FIRST-EVER payment
                            via Simpl for ANY purchases* of ANY..
                        </Text>
                    </Text>
                </Box>
            </Box>

            {/* #######    Payment-Offers end........ */}












            {/* #######    Shop By Categories start ...... */}


            <Box
                bg={"#F3F7FB"}
                display={"flex"}
                pl={8}
                pr={8}
                justifyContent={"space-between"}
            >
                <Text fontSize={28} fontWeight={500}>
                    Shop By Category
                </Text>
                <Text as={"button"} cursor={"pointer"}>
                    View All <ChevronRightIcon />
                </Text>
            </Box>

            <Box bg={"#F3F7FB"} display={"flex"} gap={10} p={8}>
                <Box
                    boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                    rounded={10}
                    p={4}
                    width={230}
                    height={280}
                    bg={"white"}
                >
                    <img
                        src="https://www.netmeds.com/images/category/v1/562/thumb/oral_care.jpg"
                        alt=""
                    ></img>
                    <Text fontSize={18} fontWeight={500} pl={74}>
                        Oral Care
                    </Text>
                </Box>

                <Box
                    boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                    rounded={10}
                    p={4}
                    width={230}
                    height={280}
                    bg={"white"}
                >
                    <img
                        src="https://www.netmeds.com/images/category/v1/547/thumb/hair_care_2.jpg"
                        alt=""
                    ></img>
                    <Text fontSize={18} fontWeight={500} pl={61}>
                        Hair Care
                    </Text>
                </Box>

                <Box
                    boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                    rounded={10}
                    p={4}
                    width={230}
                    height={280}
                    bg={"white"}
                >
                    <img
                        src="https://www.netmeds.com/images/category/3141/thumb/respiratory_supplies_1.jpg"
                        alt=""
                    ></img>
                    <Text fontSize={18} fontWeight={500} pl={61}>
                        Respiratory Supplies
                    </Text>
                </Box>

                <Box
                    boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                    rounded={10}
                    p={3}
                    width={230}
                    height={280}
                    bg={"white"}
                >
                    <img
                        src="https://www.netmeds.com/images/category/v1/525/thumb/body_care_1.jpg"
                        alt=""
                    ></img>
                    <Text fontSize={18} fontWeight={500} pl={61}>
                        Body Care
                    </Text>
                </Box>

                <Box
                    boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                    rounded={10}
                    p={4}
                    pl={8}
                    width={230}
                    height={280}
                    bg={"white"}
                >
                    <img
                        src="https://www.netmeds.com/images/category/v1/3772/thumb/home_health.jpg"
                        alt=""
                    ></img>
                    <Text fontSize={18} fontWeight={500} pt={9} pl={21}>
                        Home and Health
                    </Text>
                </Box>
            </Box>


            {/* #######    Shop By Categories end ....... */}













            {/* ######  Top Brands start ......... */}


            <Box
                bg={"#F3F7FB"}
                display={"flex"}
                pl={8}
                pr={8}

                justifyContent={"space-between"}
            >
                <Text fontSize={28} fontWeight={500}>
                    Top Brands
                </Text>
                <Text as={"button"} cursor={"pointer"}>
                    View All <ChevronRightIcon />
                </Text>
            </Box>
            <TopBrand />


            {/* ######  Top Brands end ......... */}











            {/* ######## Lightning Deals Start ..........  */}

            <Box bg={"#F3F7FB"} height={600} mb={10}>
                <Box rounded={15} pt={5} ml={4} mr={4} height={500} background="white">
                    <Box background="white" pl={10} >
                        <Text fontSize="sm" color={"#6F7284"}>
                            
                            TODAY'S EXCLUSIVE
                        </Text>
                        <Text fontSize="xl" fontWeight={500}>
                            
                            Lightning Deals
                        </Text>
                        <Text fontSize="xs" color={"#6F7284"}>
                            Grab Before The Deal Ends
                        </Text>
                    </Box>
                    <LightningDeals />
                </Box>
            </Box>

            {/* ######## Lightning Deals end ..........  */}











            {/* ###########   Health Concerns Start ............ */}


            <Box
                bg={"#F3F7FB"}
                display={"flex"}
                pl={8}
                pr={8}
                pt={8}
                mt={-10}
                justifyContent={"space-between"}
            >
                <Text fontSize={28} fontWeight={500}>
                    
                    Health Concerns
                </Text>
                <Text as={"button"} cursor={"pointer"}>
                    View All <ChevronRightIcon />
                </Text>
            </Box>

            <Box bg={"#F3F7FB"} display={"flex"} gap={10} p={8}>
                <Box
                    boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                    rounded={10}
                    pt={10}
                    pl={19}
                    width={230}
                    height={280}
                    bg={"white"}
                >
                    <img
                        style={{ marginLeft: "40px" }}
                        src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/weight-care.jpg"
                        alt=""
                    ></img>
                    <Text fontSize={18} fontWeight={500} pt={14} pl={38}>
                        Weight Care
                    </Text>
                </Box>

                <Box
                    boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                    rounded={10}
                    pt={10}
                    pl={22}
                    width={230}
                    height={280}
                    bg={"white"}
                >
                    <img
                        style={{ marginLeft: "40px" }}
                        src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/women-s-care.jpg"
                        alt=""
                    ></img>
                    <Text fontSize={18} fontWeight={500} pt={14} pl={29}>
                        Women's Care
                    </Text>
                </Box>

                <Box
                    boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                    rounded={10}
                    pt={10}
                    pl={13}
                    width={230}
                    height={280}
                    bg={"white"}
                >
                    <img
                        style={{ marginLeft: "50px" }}
                        src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/bone-and-joint-pain.jpg"
                        alt=""
                    ></img>
                    <Text fontSize={18} fontWeight={500} pt={14} pl={27}>
                        Bone And Joint Pain
                    </Text>
                </Box>

                <Box
                    boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                    rounded={10}
                    pt={10}
                    pl={21}
                    width={230}
                    height={280}
                    bg={"white"}
                >
                    <img
                        style={{ marginLeft: "40px" }}
                        src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/cold-and-fever.jpg"
                        alt=""
                    ></img>
                    <Text fontSize={18} fontWeight={500} pt={14} pl={27}>
                        Cold And Fever
                    </Text>
                </Box>

                <Box
                    boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                    rounded={10}
                    pt={10}
                    pl={45}
                    width={230}
                    height={280}
                    bg={"white"}
                >
                    <img
                        style={{ marginLeft: "20px" }}
                        src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/lung-care.jpg"
                        alt=""
                    ></img>
                    <Text fontSize={18} fontWeight={500} pt={14} pl={27}>
                        Lung Care
                    </Text>
                </Box>
            </Box>


            {/* ###########   Health Concerns  End............ */}


        </>
    )
}

export default Home