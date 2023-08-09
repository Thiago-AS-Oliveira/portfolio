import styled, { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

    :root {
        --silver: #e6e5e5;
        --blue-green: #18c4c4;
        --jungle-green: #1d4f4f;
        --eerie-black: #141414;
        --translucent: #18c4c407;
        --translucent-hover: #18c4c421;

        --border-radius: 25px;
        --box-shadow: 1px 1px 4px #0009;
        --shadow-hover: 2px 2px 2px 0 #fff1;
        --text-shadow: 2px 2px 3px #000c;
        --blur: blur(3px)
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }


    
    html {
        scroll-behavior: smooth;
        font-size: 62.5%;

        ::-webkit-scrollbar {
            width: 12px;               
        }

        ::-webkit-scrollbar-thumb {
            background-color: #2229;    
            border-radius: 20px;       
            border: 3px solid #fff;  
        }
    }


    body {
        font-family: "Montserrat";
        color: var(--silver);
        background: linear-gradient(to right bottom, var(--eerie-black), var(--blue-green));
        background-attachment: fixed;   
    }
    `

export const AppContainer = styled.div`
  width: 100%;
  background-color: #0005;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`
