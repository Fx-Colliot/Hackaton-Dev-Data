import styled from "styled-components";

export const AppStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-family: "Montserrat", sans-serif;
	width: 100%;
	max-width: 1024px;
	background: linear-gradient(#fff, #a3e5f1);
`;

export const HeaderStyle = styled.div`
	width: 100%;
	height: 100%;
	max-width: 1024px;
`;

export const MainStyle = styled.div`
	width: 100vw;
	height: 91vh;
	max-width: 1024px;

	& img {
		margin-top: 12vh;
		height: 150px;
		width: auto;
	}

	& button {
		border: none;
		padding: 12px;
		border-radius: 25px;
		color: #fff;
		font-size: 20px;
		background-color: #00ff4c;
		transition: 200ms;
		box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
		margin-top: 12vh;
	}
`;
