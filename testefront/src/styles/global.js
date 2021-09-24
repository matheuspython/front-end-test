import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,700&display=swap');
:root {
    --primary: #382039;
    --Secondary: #5A3D5C;
    --Purple: #A51C92;
    --Secondary-1: #FD71EA;
    --dark: #200F21;
    --White: #F0F0F0;
}
  
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html,body{
    font-family: 'Open Sans', sans-serif;
  }
  ul{
    list-style-type: none;
  }
  body{
    background: linear-gradient(359.39deg, #EFEEEE 0.46%, #FFFFFF 99.42%);
  }
`


