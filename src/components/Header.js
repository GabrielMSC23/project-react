import styled from "styled-components";
import { useState } from "react";
import { redirect } from 'react-router-dom';


const Header = (props) => {
	const handleProfileClick = () =>{
		window.location='/profile'
	}

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
				{}
					<Login onClick={handleProfileClick}>Perfil</Login>

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

const Login = styled.a`
	background-color: #001d39;
	padding: 8px;
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
`



export default Header