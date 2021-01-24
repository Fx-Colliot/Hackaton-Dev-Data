import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 15vh;
	margin-bottom: 9vh;
`;

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	background-color: #211572;
	border-radius: 10px;
	width: 90vw;
	padding-top: 2vh;
	box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);

	& input,
	select {
		border: none;
		height: 40px;
		border-radius: 5px;
		font-size: 1.4rem;
		width: 290px;
		background: #fff;
		color: #211572;
	}
`;

export const MultiSelectStyle = styled.div`
	color: #211572;
	width: 290px;
`;

export const Mandatory = styled.span`
	font-style: italic;
	color: #ffb497;
	font-size: 1.1rem;
`;

export const Label = styled.label`
	color: white;
	font-size: 1.5rem;
	text-align: center;
	margin-top: 3vh;
	margin-bottom: 2vh;
`;

export const Title = styled.h1`
	margin-bottom: 2vh;
	color: #211572;
	font-size: 2.5rem;
`;
export const Title2 = styled.h2`
	color: #ffffff;
	font-size: 1.3rem;
`;

export const Button = styled.button`
	border: none;
	padding: 12px;
	border-radius: 25px;
	color: #fff;
	font-size: 20px;
	background-color: #00ff4c;
	transition: 200ms;
	box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
	margin-top: 20px;
	margin-bottom: 20px;
`;
