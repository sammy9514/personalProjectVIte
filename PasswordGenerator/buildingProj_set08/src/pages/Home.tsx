import { useState } from "react";
import styled from "styled-components";

export const Home = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const passLength = (e: any) => {
    setLength(e.target.value);
  };
  const characters =
    "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,0,1,2,3,4,5,6,7,8,9,.,=,-,_";
  const arr = characters.split(",");
  // const passGene = () => {
  //   let password = "";
  //   for (let i = 0; i < length; i++) {
  //     let char = Math.floor(Math.random() * characters.length);
  //     password += characters.charAt(char);
  //   }
  //   setPassword(password);
  // };

  const getrandomCharacters = () => {
    let random = Math.floor(Math.random() * arr.length);
    return arr[random];
  };

  const getRandomPassword = () => {
    let genePass = "";
    for (let i = 0; i < length; i++) {
      genePass += getrandomCharacters();
    }
    setPassword(genePass);
  };
  return (
    <div>
      <Container>
        <Wrapper>
          <Input>{password}</Input>
          {/* <Button onClick={getRandomPassword}>Generate</Button> */}
          <Button onClick={getRandomPassword}>Generate</Button>
          <input type="text" value={length} onChange={passLength} />
        </Wrapper>
      </Container>
    </div>
  );
};

// const Container = styled.div``
const Button = styled.div`
  padding: 15px 30px;
  background-color: white;
  border-radius: 10px;
  text-align: center;
`;
const Input = styled.div`
  width: 50%;
  height: 60px;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 700px;
  height: 600px;
  background-color: green;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: cadetblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;
