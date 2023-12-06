import styled from "styled-components";
import { useState } from "react";
import api from "../services/Api";




const Header = (props) => {

	const [isLogged, setIsLogged] = useState(true);
	const [name, setName] = useState("");
  const [password, setPassword] = useState("");

	async function postLogin (){
		const form = {name, password}
  	console.log(form);

  try {
    // Faça a requisição para a API usando Axios
    const response = await api.post('/login', form);
    console.log(response); 
    if( response.data.status == 200 ){
			setIsLogged(true);
    }
  } catch (error) {
    console.error('Erro ao fazer login', error);
  }
	}

	const handleLogin = (e) => {
    e.preventDefault();
    postLogin();
  };

  const handleLogout = () => {
    // Lógica de logout aqui
    // Atualize o estado isLogged para false
    setIsLogged(false);
  };


    return(
			<Nav>
				<Logo>
					<a href='/home'>
						<img src='/images/logo.png' alt="FIRSTCHOICE"/>
					</a>
					
				</Logo>
				<NavMenu>
					<a href='/home'>
						<img src="/images/home-icon.svg" alt='HOME'/>
						<span>HOME</span>
					</a>
					<a href='/pacotes'>
						<img src="/images/watchlist-icon.svg" alt='PACOTES'/>
						<span>PACOTES</span>
					</a>	
				</NavMenu>
				{isLogged? (
				<Bla>
					<Butons>Perfil</Butons>
					<Butons>Logout</Butons>
				</Bla>) : 
				(
					<Login>
          {/* Se não estiver logado, exibe o formulário de login */}
          <div className="popup">
            <div className="popup-inner">
              <Form onSubmit={handleLogin}>
                  <Input
                    type="text"
                    value={name}
										placeholder="Ususário"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    type="password"
                    value={password}
										placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                  />
									<Logout onClick={handleLogin}>Login</Logout>
									<Logout href="/signup">Registre-se</Logout>	
              </Form>
            </div>
          </div>
        </Login>
      )}
					

			</Nav>
		); 
}

const Nav = styled.nav`
	position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #001d39;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 36px;
	letter-spacing: 16px;
	z-index: 3;
`;

const Logo = styled.a`
	padding: 0;
	width: 130px;
	margin-top: 0px;
	max-height: 130px;
	font-size: 0;
	display: inline-block;

	img{
		display: block;
		width: 100%;
	}
`;

const NavMenu = styled.div`
	align-items: center;
	display: flex;
	flex-flow: row nowrap;
	color: #000000;
	height: 100%;
	justify-content: flex-end;
	margin: 0px;
	padding: 0px;
	position: relative;
	margin-right: auto;
	margin-left: 25px; 

	a{
		display: flex;
		align-items: center;
		padding: 0 12px;

		img{
			height: 20px;
			min-width: 20px;
			width: 20px;
			z-index: auto;
	}

		span{
			color: rgb(249, 249, 249);
			font-size: 15px;
			letter-spacing: 3px;
			padding: 2px 0px;
			white-space: nowtrap;
			position: relative;
			font-weight: bold;


			&::before{
				background-color: rgb(249, 249, 249);
				border-radius: 0px 0px 4px 4px;
				bottom: -6px;
				content: "";
				height: 2px;
				left: 0px;
				opacity: 0;
				position: absolute;
				right: 0px;
				transform-origin: left center;
				transform: scaleX(0);
				transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
				visibility: hidden;
				width: auto;
		  }
		}
		&:hover{
			span:before{
				transform: scaleX(1);
				visibility: visible;
				opacity: 1 !important;
			}
		}
	}


	

	/*@media (max-width: 768px){
		display: none;
	}*/
`;

const Bla = styled.div`
	max-width: 300px;
`;

const Login = styled.a`
	align-items: center;
	display: flex;
	flex-flow: row nowrap;
	color: #f9f9f9f9;
	height: 100%;
	justify-content: flex-end;
	margin: 0px;
	padding: 0px;
	position: relative;
	margin-right: 0;
	margin-left: 25px; 

	bottom{
		margin-left: 5%;
	}

	a{
		display: inline;
	

		&:hover{
		background-color: #f9f9f9;
		color: #000;
		border-color: transparent;
	}
	}
	
`;
const Form = styled.form`
		display: inline;
	a{
		margin-top: -5px;
	}
`;

const Input = styled.input`
    width: calc(50% - 169px);
    padding: 8px 13px;
		margin-right: 10px;
    background: #f9f9fa;
    color: #f03d4e;
    border-radius: 7px;
    outline: 0;
    border: 1px solid rgba(245, 245, 245, 0.7);
    font-size: 24px;
    transition: all 0.3s ease-out;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  
`;

const Butons = styled.a`
		background-color: #001d39;
		margin-right: 5px;
    padding: 10px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 0.2s ease 0s;
    height: 35px;
    width: 88px;
    text-align: center;
    font-weight: bolder;

	&:hover{
		background-color: #f9f9f9;
		color: #000;
		border-color: transparent;
	}
`;

const Lock = styled.div`

	margin-right: -50px;
`;

const Logout = styled.a`
		background-color: #001d39;
		margin-right: 5px;
    padding: 10px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 0.2s ease 0s;
    height: 35px;
    width: 88px;
    text-align: center;
    font-weight: bolder;

	&:hover{
		background-color: #f9f9f9;
		color: #000;
		border-color: transparent;
	}
`;

export default Header