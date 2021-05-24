import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height:100vh;
  background-color: #002222;
  flex-direction: column;

  h1 {
    color: #fff;
  }

  header{
    width: 100%;
    height: 80px;
    background-color: #0CD15B;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  footer {
    width: 100%;
    height: 120px;
    background-color: #0C0F25;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Sidebar = styled.div`
  width: calc(100vw /  6);
  background-color: #FF9900;
  height: 100%;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
`;
