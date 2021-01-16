import styled from "styled-components";

export const Title = styled.h1`
	margin-bottom: 2vh;
	color: #fd0f6d;
	font-size: 3rem;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 2vh;
	color: white;
`;

export const Submit = styled.input`
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
	margin: 3vh 1vh;
	width: 160px;
	box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
`;

export const FormContainer = styled.form`
	display: flex;
	align-items: center;
	background-color: #220bab;
	border-radius: 15px;
	width: 82vw;
	height: 40vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 40%;
	margin-bottom: 60%;
`;

export const Label = styled.label`
	color: white;
	font-size: 1.5rem;
	text-align: center;
	margin: 3vw;
`;
