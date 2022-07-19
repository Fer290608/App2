import styled from "styled-components";

export const Main = styled.div`
display: flex;
justify-content: space-around;
background-color: #F5EDDC;
padding: 30px;
flex-wrap: wrap;

`;

export const Title = styled.h3`
  color: #576F72;
  text-align: center;
`;

export const Form = styled.form`
background-color: #CFD2CF;
width: 40%;
padding: 5px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
border-radius: 5px;
`;

export const Input = styled.input`
  border: 2px solid #A2B5BB;
  border-radius: 4px;
  max-width: 20rem;
  text-align: center;
  margin: 10px;
  height: 20px;
`;
 export const Button = styled.button`
  background-color: #576F72;
  color: #CFD2CF;
  width: 100px;
  border-radius: 5px;
  margin: 10px;
  border-color: transparent;

  &:hover{
    background-color: #EB1D36;
    color: white;
  }
 `;

 export const AlumnosTable = styled.div`
  width: 100%;
  margin: 30px 0 0 0;
 `
 export const TableHead = styled.div`
 width: 100%;
 display: grid;
 grid-template-columns: 5% 20% 20% 15% 15% 12.5% 12.5%;
 border-bottom: 1px solid #576F72;
 `;
export const HeadCeld = styled.div`
color: #576F72;
height: 40px;
align-items: center;
display: flex;
justify-content: center;
`;

export const TableBody = styled.div`
width: 100%;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 5% 20% 20% 15% 15% 12.5% 12.5%;
`;
export const BodyCeld = styled.div`
height: 50px;
align-items: center;
display: flex;
justify-content: center;
color: ${(props) => props.color};
`;



