import styled from "styled-components";
import { Device } from "../../assets/device/Device";

export const Page = styled.div`
	@media ${Device.mobile} {
		display: flex;
		flex-direction: column;
		margin-top: 10vh;
	}
`;

export const BlockProfil = styled.div`
	@media ${Device.mobile} {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fd0f6d;
		height: 7vh;
		width: 100vw;
	}
`;

export const Title = styled.h2`
	@media ${Device.mobile} {
		padding-top: 4vh;
		font-size: 2rem;
		text-align: center;
	}
`;

export const BlockP = styled.div`
	@media ${Device.mobile} {
		display: flex;
		padding-top: 2vh;
		color: #fd0f6d;
	}
`;

export const Sentence = styled.p`
	@media ${Device.mobile} {
		color: #fd0f6d;
		font-size: 1rem;
		width: 90vw;
		text-align: start;
		padding-top: 4rem;
	}
`;

export const BlockDetails = styled.div`
	@media ${Device.mobile} {
		display: flex;
		flex-direction: column;
		height: 60vh;
		width: 100vw;
		padding-top: 2vh;
	}
`;
export const ContainerDetails = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #220bab;
	border-bottom: 1vh solid #fd0f6d;
	margin-bottom: 2vh;
	padding-left: 5vw;
	padding-right: 5vw;
	height: 8vh;
`;

export const DetailsH3 = styled.h3`
	@media ${Device.mobile} {
		color: white;
		font-size: 1.5rem;
	}
`;

export const DetailsForm = styled.p`
	color: white;
	width: 60vw;
	text-align: right;
	font-size: 1rem;
`;
