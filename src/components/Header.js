import styled from "styled-components";

const Header = (props) => {
    return(
			<Nav>
				<Logo>
					<img src='/images/imagelogo.svg' alt="travelgo"/>
				</Logo>
			</Nav>
		); 
}

const Nav = styled.nav`
	position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #e1f2ff;
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

export default Header