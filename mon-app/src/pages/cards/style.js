import styled from "styled-components";
export const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(#f9f9f9, #d7d7d7);
  text-align: center;
  width: 100vw;
  height: auto;
  min-height: 100vh;
  overflow: hidden;
  .swipe {
    position: absolute;
  }
  .cardContainer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 90vw;
    min-height: 100vh;
    max-width: 360px;
    margin-top: 11vh;
    margin-bottom: 1.5vh;
    padding-bottom: 20vh;
    background-color: #fff;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  .card {
    position: relative;
    background-color: #fff;
    width: 83vw;
    height: 300px;
    max-width: 340px;
    margin: 10px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    background-size: cover;
    background-position: center;
  }
  .cardContent {
    width: 100%;
    height: 100%;
  }
  .swipe:last-of-type {
  }
  .card h1 {
    bottom: 0;
    margin: 5px;
    color: #fd1470;
  }
  .description {
    position: relative;
    background-color: #fff;
    width: 83vw;
    min-height: 300px;
    max-width: 340px;
    margin: 10px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    background-size: cover;
    background-position: center;
  }
  .description p {
    text-align: justify;
    margin: 10px;
    overflow: hidden;
  }
  .description h2 {
    color: #a7a7a7;
    font-size: 1.5em;
    margin: 10px;
  }
  .description h3 {
    color: #b7b7b7;
    font-size: 1.2em;
    margin: 10px;
  }
  .bottom {
    position: fixed;
    bottom: 0;
    height: 15vh;
    background-color: rgba(200, 200, 200, 0.75);
  }
  .buttons {
    margin: 10px;
    display: flex;
  }
  .buttons button {
    flex-shrink: 0;
    padding: 10px;
    border-radius: 20px;
    border: none;
    color: #fff;
    font-size: 18px;
    background-color: #fd1470;
    transition: 200ms;
    margin: 0 10px;
    font-weight: bolder;
    width: 160px;
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
  }
  .buttons button:hover {
    transform: scale(1.05);
  }
  .bottom h2 {
    width: 100%;
    justify-content: center;
    display: flex;
    color: #fd1470;
    animation-name: popup;
    animation-duration: 800ms;
  }
  @keyframes popup {
    0% {
      transform: scale(1, 1);
    }
    10% {
      transform: scale(1.1, 1.1);
    }
    30% {
      transform: scale(0.9, 0.9);
    }
    50% {
      transform: scale(1, 1);
    }
    57% {
      transform: scale(1, 1);
    }
    64% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  }
`;
