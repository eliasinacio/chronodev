import styled from 'styled-components';

export const Container = styled.main`
  margin-top: 40px;
  padding: 20px;
  
  width: 100%;
  max-width: 700px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 500px;
    padding: 20px;

    background-color: #FFF2;
    border-radius: 5px;
  }
  
  .buttons {
    display: flex;
    justify-content: center;

    .btn {
      border: 0;
      outline: none;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;

      padding: 10px;
      border-radius: 5px;
      background-color: transparent;
      
      color: #FFF;
      font-size: 1rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .selected {
      font-weight: 600;
      background-color: #0004;
    }
  }

  .timer {
    margin: 10px;

    h3 {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 5rem;
      font-weight: 500;

      margin: 20px auto 40px;
    }

    button {
      width: 100px;
      height: 40px;

      cursor: pointer;

      font-size: 1.6rem;
      font-weight: 400;
      color: #483D8B;

      outline: none;
      border: 0;
      border-radius: 2px;
      border-bottom: 5px solid #3d043866;
      border-right: 2px solid #3d043866;

      &:active { 
        margin-top: 2px;
        margin-left: 1px;
        height: 38px;
        border: 0;
      }
    }
  }
`;