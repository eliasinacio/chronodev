import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: min(90%, 700px);

  padding: 20px 10px 10px;

  border-bottom: 2px solid #00000033;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    font-size: 1.2rem;

    h3, p {
      margin: 5px;
    }
  } 

  img {
    width: 48px;
    height: 48px;
  }

  #github {
    img {
      width: 32px;
      height: 32px;
    }
    @media (max-width: 600px) { p { display: none; } }
  }
`;