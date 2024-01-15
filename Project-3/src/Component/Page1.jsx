import React from "react";
import { GoArrowDownRight } from "react-icons/go";
import { RiGlobalLine } from "react-icons/ri";
import svg from "../assets/logo.svg";
function Page1() {
  return (
    <div>
      <div className="middle-page">
        <div className="left-items">
          <div className="location">
            <p>
              <span>Located</span>
              <span>in the</span>
              <span>India</span>
            </p>
            <img src={svg} alt="img"></img>

            <div className="digital-ball">
              <div className="overlay">
                <RiGlobalLine className="global" />
              </div>
            </div>
          </div>
        </div>
        <div className="right-items">
          <div className="row">
            <div className="flex-col">
              <div className="arrow-above-text">
                <div className="arrow">
                  <GoArrowDownRight className="big-arrow" />
                </div>
              </div>
            </div>
            <h4>
              <span>freelencer</span>
              designer & developer
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;

// <>

// <div className="location">
// <div  className="location-name">
// <p>
//    <span>Located</span>
//    <span>in the</span>
//    <span>India</span>
//  </p>
// </div>
//  <img src={svg} alt="img"></img>

//  <div className="digital-ball">
//    <div className="overlay">
//        <RiGlobalLine className="global"/>
//    </div>
//  </div>
// </div>

// <div className="row">
//           <div className="flex-col">
//             <div className="arrow-above-text">
//               <div className="arrow">
//                 <GoArrowDownRight className="big-arrow" />
//               </div>
//             </div>
//     </div>
//     <h4>
//       <span>freelencer</span>
//       designer & developer
//     </h4>
//   </div>
// </>
