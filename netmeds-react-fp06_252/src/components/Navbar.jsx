import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Box, Input, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/Logo.png"

const Nav = styled.div`
  height: 100px;
  width: 100%;
  background: #24aeb1;
  display: flex;
  align-items:center;
  justify-content:space-around;
  position:fixed;
  top:0;
  z-index:10;
`;


export const SearchDiv = styled.div`
  height: 52px;
  width: 695px;
  display: flex;
  background: white;
  padding-left: 20px;
  border-radius: 7px;
`;


const logoStyle = {
    width:"180px",
    height:"80px"          
}


const Navbar = () =>{
    
    return(
        <>
        <Nav>
            <Box>
                <Link to="/">
                    <img style={logoStyle} src={Logo} alt="main_logo"/>
                </Link>
            </Box>
            <Box>
                <SearchDiv>
                    <span style={{ paddingTop: "10px", color: "grey" }}> Deliver to <span style={{ color: "#24AEB1" }}> <span style={{cursor:"pointer"}}> &darr </span> </span> |</span>
                    <Input
                        variant="styled"
                        width="330px"
                        placeholder="Search for medicine & wellness products…"
                    />
                </SearchDiv>
            </Box>
            <Box>
                <Link to="/">
                    <Box display={"flex"} color={"white"} pt={0}>
                        <img src="https://www.netmeds.com/assets/gloryweb/images/icons/upload_rx.svg" alt="upload_logo" />
                        <Text>Upload</Text>
                    </Box>
                </Link>
            </Box>
            <Box>
                <Link to="/cart">
                    <Box display={"flex"} color={"white"} pr={0} pt={1}>
                        <FontAwesomeIcon
                        icon={faCartShopping}
                        style={{ width: "25px", height: "17px" }}
                        />
                        <Text style={{ marginLeft: "2px", marginTop:"-4px" }}>Cart</Text>
                        <Box
                        bg={"#F757A4"}
                        ml={0}
                        mt={-2}
                        width={5}
                        height={4}
                        textAlign={"center"}
                        fontSize={"x-small"}
                        rounded={"md"}
                        >{}</Box>
                    </Box>
                </Link>
            </Box>
            <Box display={"flex"} width={180} color={"white"} pr={0} pt={0}>
                <FontAwesomeIcon
                    icon={faCircleUser}
                    style={{ width: "25px", height: "20px", marginTop: "2px" }}
                />
                {/* {auth ? (
                    <Link to="/signIn">
                    <span style={{ marginLeft: "6px" }}>{auth ? firstName : ""}</span>
                    </Link>
                ) : (
                    <Link style={{ width: "160px" }} to="/signUp">
                    <span style={{ marginLeft: "4px" }}>Sign In/Sign Up</span>
                    </Link>
                )} */}
                Sign Up / Sign In
            </Box>
        
        </Nav>
        </>
    )
}

export default Navbar






































// import { Box, Input, Text } from "@chakra-ui/react";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCircleUser,
//   faCartShopping,
//   // faCaretDown,
//   // faCaretUp,
// } from "@fortawesome/free-solid-svg-icons";
// import { cartData } from "../Redux/actions";
// import Logo from "../assets/Logo.png"

// export const Nav = styled.div`
//   height: 100px;
//   width: 100%;
//   background: #24aeb1;
//   display: flex;
//   gap: 30px;
//   padding: 10px;
//   padding-top: 22px;
// `;
// export const SearchDiv = styled.div`
//   height: 52px;
//   width: 695px;
//   display: flex;
//   background: white;
//   padding-left: 20px;
//   padding-top: 3px;
//   border-radius: 7px;
// `;

// const Navbar = () => {
//   const counter = useSelector((state) => state.isAuth.cart);
//   console.log(counter.length);

//   let count = counter.length;

//   const dispatch = useDispatch();

//   const auth = useSelector((state) => state.isAuth.isAuth);
//   // console.log(auth)

//   if (auth) {
//     var userData = JSON.parse(localStorage.getItem("USERDATA"));
//     var firstName = userData.firstName;
//   }

//   useEffect(() => {
//     dispatch(cartData());

//     if (auth) {
//       JSON.parse(localStorage.getItem("USERDATA"));
//     }
//   }, [auth]);

//   return (
//     <>
//       <Nav>
//         <Link to="/">
//           <img
//             width="170px"
//             style={{marginTop:"-10px"}}
//             height="150px"
//             src={Logo}
//             alt="Netmeds_logo"
//           />
//         </Link>
//         <SearchDiv>
//           <span style={{ paddingTop: "10px", color: "grey" }}>
//             Deliver to <span style={{ color: "#24AEB1" }}> <span style={{cursor:"pointer"}}> &darr </span> </span> |
//           </span>
//           <Input
//             variant="styled"
//             width="330px"
//             placeholder="Search for medicine & wellness products…"
//           />
//         </SearchDiv>

        // <Link to="/">
        //   <Box display={"flex"} color={"white"} pt={3}>
        //     <img
        //       src="https://www.netmeds.com/assets/gloryweb/images/icons/upload_rx.svg"
        //       alt=""
        //     />
        //     <span>Upload</span>
        //   </Box>
        // </Link>

        // <Link to="/cart">
        //   <Box display={"flex"} color={"white"} pr={2} pt={4}>
        //     <Box
        //       bg={"#F757A4"}
        //       ml={6}
        //       mt={-3}
        //       mr={-9}
        //       width={5}
        //       textAlign={"center"}
        //       height={4}
        //       fontSize={"x-small"}
        //       rounded={"md"}
        //     >
        //       {count}
        //       <FontAwesomeIcon
        //       icon={faCartShopping}
        //       style={{ width: "25px", height: "17px" }}
        //     />
        //     </Box>
            
        //     <span style={{ marginLeft: "43px", marginTop:"-3px" }}>Cart</span>
        //   </Box>
        // </Link>

        // <Box display={"flex"} width={180} color={"white"} pr={35} pt={3}>
        //   <FontAwesomeIcon
        //     icon={faCircleUser}
        //     style={{ width: "25px", height: "20px", marginTop: "4px" }}
        //   />
        //   {auth ? (
        //     <Link to="/signIn">
        //       <span style={{ marginLeft: "6px" }}>{auth ? firstName : ""}</span>
        //     </Link>
        //   ) : (
        //     <Link style={{ width: "160px" }} to="/signUp">
        //       <span style={{ marginLeft: "4px" }}>Sign In/Sign Up</span>
        //     </Link>
        //   )}
        // </Box>
//       </Nav>
//     </>
//   );
// };

// export default Navbar;
