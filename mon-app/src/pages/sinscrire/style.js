import styled from "styled-components";

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 5vh;
	width: 90vw;
`;

export const Mandatory = styled.span`
	font-size: 0.8rem;
	color: #fd0f6d;
`;
export const Title = styled.h1`
	margin-top: 10vh;
	color: #fd0f6d;
	font-size: 3rem;
	text-align: center;
`;
export const Title2 = styled.h2`
	color: #fd0f6d;
	font-size: 1.3rem;
`;
export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 11vw;
	border-radius: 10px;
`;
export const Label = styled.label`
	color: #220bab;
	font-size: 1.2rem;
	padding-top: 1.3vh;
`;
export const Button = styled.input`
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
	margin-left: 12vw;
	margin-top: 2vh;
	width: 160px;
	box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
`;
