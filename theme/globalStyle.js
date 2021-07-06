import styledNormalize from "styled-normalize";
import { injectGlobal } from "styled-components";
import theme from "../theme";


const GlobalStyle = injectGlobal`
  // font-family: 'Montserrat', sans-serif;
  // font-family: 'Open Sans', sans-serif;
  // font-family: 'Poppins', sans-serif;
  // font-family: 'Nunito', sans-serif;
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700,800&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700,800&display=swap');
  
  *, ::after, ::before {
    box-sizing: border-box;
  }
  a{
    cursor: pointer;
    
  }
  .nophone{
    cursor: text !important;
    &:focus{
      outline:0;
      text-decoration: none;
    }
  }
  img{
    user-select: none;
  }
  h1, h2{
    margin: 0;
  }

  button:focus {outline:0;}
  div:focus {outline:0;}

  ${styledNormalize}
  html{
    height: 100%;
  }
 
  body {
    display: block;
    color: ${theme.colors.textBold};
    font-family: ${theme.fontFamily.os};
    overflow-x: hidden;
    height: 100%;
  }
  button:focus {outline:0;}
  a {
    text-decoration: none;
    &:active{
      color: inherit;
    }
  }
  input {
   &:hover, &:focus {
      outline: none;
      // display: block;
    }
  }
  li{
    :focus{
      outline: 0
    }
  }
  br{
    display: block !important;
    @media only screen and (max-width: 48rem) {
    display: none !important;
  }

  .input-group{
    height: 43px;
  } 



.WordSection1{
  h1 {
    font-size: 1.5rem !important;
  }
}

}`;

export default GlobalStyle;
