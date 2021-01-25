import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 15vh;
	min-height: 100vh;
	width: 100%;
	color: #211572;

	h2 {
		padding: 15px 5px 15px 5px;
		text-align: center;
		font-size: 2em;
	}

	p {
		font-size: 1.2em;
		padding: 5px;
		margin-left: 10px;
	}
`;

export const Informations = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	width: 100%;
	text-align: left;
	padding-top: 3vh;
	margin-bottom: 5vh;
	background-color: rgba(255, 255, 255, 0.411);

	h3 {
		font-size: 1.5em;
		margin: 5px;
		border-bottom: 1px solid #211572;
	}
`;

export const Preferences = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	width: 100%;
	text-align: left;
	padding-top: 3vh;
	background-color: rgba(255, 255, 255, 0.411);

	h3 {
		font-size: 1.5em;
		margin: 5px;
		border-bottom: 1px solid #211572;
	}
`;
