import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
`;

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	background-color: #211572;
	border-radius: 10px;
	width: 90vw;
	box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);

	& input {
		border: none;
		height: 40px;
		border-radius: 5px;
		font-size: 1.4rem;
	}
`;

export const Label = styled.label`
	color: white;
	font-size: 1.5rem;
	text-align: center;
	margin-top: 3vh;
	margin-bottom: 2vh;
`;

export const Mandatory = styled.span`
	font-style: italic;
	color: #ffb497;
	font-size: 1.1rem;
`;

export const Title = styled.h1`
	margin-bottom: 2vh;
	color: #211572;
	font-size: 2.5rem;
`;

export const Button = styled.button`
	border: none;
	padding: 12px;
	width: 30vw;
	margin: 3vh;
	border-radius: 25px;
	color: #fff;
	font-size: 20px;
	background-color: #00ff4c;
	transition: 200ms;
	box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
`;
