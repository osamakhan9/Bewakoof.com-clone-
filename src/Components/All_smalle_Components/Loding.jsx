import React from "react";
import styles from "../main.module.css";



const Loading = () => {
  return (
    <>
    <div style={{width: "1200px", height : "800px"}} >

      <div   className={styles.loadingCSS} >
     
        <img
          width="250px"
          src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
          alt="loading..."
          />
       
      </div>
   </div>
    </>
  );
};

export default Loading;
