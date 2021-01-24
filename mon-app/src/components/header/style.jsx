import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: #00d9ff;
	position: fixed;
	top: 0;
	height: 9vh;
	width: 100%;
	z-index: 2;

	.matchIcon {
		height: 7vh;
		margin-left: 3vw;
	}

	.logo {
		height: 4vh;
	}
	.profileIcon {
		height: 7vh;
		margin-right: 3vw;
	}
`;
