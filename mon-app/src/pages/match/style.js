import styled from "styled-components";
import { Device } from "../../assets/device/Device";

export const BlockJobs = styled.div`
  @media ${Device.mobile} {
    display: flex;
    text-align: center;

    border: 1px solid green;
    margin-left: 5vw;
    margin-right: 5vw;
    margin-top: 10vh;
  }
`;

export const ContainerJobs = styled.div`
  @media ${Device.mobile} {
    border: 1px solid red;
  }
`;

export const TitleJobs = styled.h1`
  @media ${Device.mobile} {
    text-align: center;
    font-size: 1.5rem;
    margin-top: 200px;
    color: black;
  }
`;
