import React, { useState } from "react";
import styled from "styled-components";
import api from "../services/Api";



export async function Register(name, email, password) {
  
  const form = {name, email, password}
  console.log(form);

  try {
    // Faça a requisição para a API usando Axios
    const response = await api.post('/register', form);
    console.log(response);
    if(response.data.status == 200){
      console.log(response.data.status);
      window.location='/login'
    }
    

  } catch (error) {
    console.error('Erro ao registrar:', error);
  }
}

const Registra = (props) => {
  
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = e => {
    e.preventDefault();
    Register(name, email, password);
    
  };

  return(
    <Container>
      <Content>
          <Title>Cadastro</Title>
          <Wrapper>
            <Form >
              <Input
                placeholder="Nome"
                type="name"
                name="name"
                value={name}
                onChange={(e) => [setname(e.target.value)]}
              />
              <Input
                placeholder="E-mail"
                type="email"
                name="email"
                value={email}
                onChange={(e) => [setemail(e.target.value)]}
              />
              <Input 
                placeholder="Senha"
                type="password"
                name="password"
                value={password}
                onChange={(e) => [setPassword(e.target.value)]}
              />
              <Button onClick={handleChange}>Registrar</Button>
            </Form> 
          </Wrapper>
        <BgImage />
      </Content>
    </Container>
  );
};


const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #f03d4e;
  margin-bottom: 0.9rem;
  border-radius: 9px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 24px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

const Button = styled.button`
  max-width: 100%;
  padding: 19px 72px;
  color: rgb(253, 249, 243);
  font-weight: 700;
  text-transform: uppercase;
  background: #0063e5;
  border: none;
  border-radius: 11px;
  outline: 0;
  cursor: pointer;
  margin-top: 3.5999999999999996rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
`;

const Title = styled.h2`
  margin-top: 20%;
  margin-bottom: -9%;
  font-weight: normal;
  color: #2a2a29;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  background-color: #f9f9f9;
  margin: auto;
  flex-direction: column;
  height: 600px;
  width: 500px;
  border: 1px solid transparent;
  border-radius: 10px;
  display: flex;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 321px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-top: 10%;

`;

const SignUp = styled.a`
  font-weight: bold;
  columns: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 20%;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 21.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  

  &hover{
    background-color: #0483ee;
  }
`;

export default Registra;