import styled from "styled-components";

export const Connect = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 40%;
	margin-bottom: 60%;
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	background-color: #220bab;
	border-radius: 15px;
	width: 82vw;
	height: 40vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Title = styled.h2`
	margin-bottom: 2vh;
	color: #fd0f6d;
	font-size: 3rem;
`;

export const Button = styled.button`
	display: flex;
	justify-content: center;
	border: 0.2rem solid white;
	flex-shrink: 0;
	padding: 10px;
	border-radius: 20px;
	color: #fff;
	font-size: 18px;
	background-color: #fd0f6d;
	transition: 200ms;
	margin: 0 10px;
	width: 160px;
	box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
`;

export const Text = styled.p`
	color: white;
	font-size: 3rem;
	text-align: center;
	margin: 9vw;
`;
