import  styled from 'styled-components'

export const Nav = styled.nav`
width: 10%;
display: flex;
width: 100%;
justify-content: space-around;
align-items: center;
padding: 1.0rem;
height: 5.8rem;
`
export const Button = styled.button`
color: white;
background-color: orange;
font-size: 20px;
  margin: 10px;
  border: 2px solid white;
  border-radius: 10px;
  display: block;
  position: relative;
  left: 40%;
  `
  export const Li = styled.li`
  margin-left: 10px;
  `
  export const DivCardLoca = styled.div`
  width: 400px;
  margin-left: 20px;
  marginTop: 0;
  border: thin solid grey;
  border-radius: 10px;
  `
  export const DivCardChar = styled.div`
  width: 400px;
  margin-left: 20px;
  marginTop: 0;
  border: thin solid grey;
  borderRadius: 0 0 10px 10px;
  borderTop: 0;
  `
  export const H2Card = styled.h2`
  margin-left: 10px;
  `
  export const H310 = styled.h3`
  margin-left: 10px;
  `
  export const H3Card = styled.h3`
  margin-left: 40px;
  `
  export const H320 = styled.h3`
  margin-left: 20px;
  `
  export const Div60 = styled.div`
  margin-left: 60px;
  `
  export const Img = styled.img`
  width: 400px;
  margin-left: 20px;
  margin-bottom: 0;
  border-radius: 10px 10px 0 0;
  `
  export const DivView = styled.div`
  margin: 1.25rem;
  `
  export const GridView = styled.div `
display: flex;
flex-wrap: wrap;
justif-Content: space-evenly;
`;


export const Ahref = styled.a`

  justifyContent: center;
`;

  export const Nam = styled.div`
  font-family: 'Indie Flower', cursive;
  border-left: 5px solid brown;
  border-right: 5px solid brown;
  border-top: 5px solid brown;
 min-width: 200px;  
  justifyContent: center;
    margin-left: 40%;
    margin-right: 40%;
    `;

    export const FormTag = styled.form`
    background-image: url(${props => props.img});
`;
    export const Bir = styled.div`
    position: absolute;
    top: 30%;
    font-family: 'Indie Flower';
    font-size: 32px;
    width: 50%;
    color: #ffce00;
    text-shadow: 1px 1px grey;
        min-width: 200px;  
    justifyContent: center;
    margin-left: 20%;
    margin-right: 40%;
      `;
    export const Input = styled.input`
      width: 40%;
      min-width: 200px; 
    `
    export const Span1 = styled.span`
    position: absolute;
    top: 70%;
    left: 25%;
    `

    export const Span2 = styled.span`
    position: absolute;
    top: 70%;
    left: 40%;
    `

    export const Span3 = styled.span`
    position: absolute;
    top: 70%;
    left: 55%;
    `
export const Pro = styled.div`
      font-family: 'Indie Flower', cursive;
      border-left: 5px solid brown;
      border-right: 5px solid brown;
      border-bottom: 2.5px solid brown;
      min-width: 200px;  
      justifyContent: center;
      margin-left: 40%;
      margin-right: 40%;
        `;
      
        export const Style = styled.div`

        display: flex;
        marginTop: 10px;
        
        `;
        export const Column = styled.div`

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        `;
                
export const H1Style = styled.h1`
font-family: 'Roboto', sans-serif;
border-top: 2.5px solid black;
border-bottom: 2.5px solid black;
border-left: 5px solid black;
border-right: 5px solid black;
min-width: 200px;  
justifyContent: center;
margin: 20px;
margin-left: 40%;
margin-right: 40%;

`;

export const H2Style = styled.h2`
font-family: 'Bangers', cursive;
min-width: 200px;  
justifyContent: center;
margin: 20px;
margin-left: 40%;
margin-right: 40%;

`;