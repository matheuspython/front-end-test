import styled from 'styled-components';

export const SectionLeftStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  .limitador-autura{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    max-height: 180px;
  }

  strong{
    font-weight: 900;
    /* font-size: 50px; */
  }
  h1{
    font-weight: 400;
    font-size: 42px;
    line-height: 50px;
    max-width: 540px;
/* or 119% */

    letter-spacing: -3px;
    color: var(--Secondary)
  }
  .busca{
    display: flex;
    input{
      padding-left: 30px;
      width: 563px;
      height: 56px;
      background: #FFFFFF;
      border: 1px solid #FFFFFF;
      box-sizing: border-box;
      border-radius: 4px;
    }
    button{
      background-color: #5A3D5C;
      width: 64px;
      height: 56px;
      background: #5A3D5C;
      border-radius: 2px;
      border: 0;
      cursor: pointer;
    }
    img{
      border: 0;
      width: 30px;
      height: 30px;
    
    }
  }
`;
