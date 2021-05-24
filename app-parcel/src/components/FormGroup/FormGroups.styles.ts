import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  flex: 1;
  background-color: #00FFB2;
  padding: 0 20%;
  padding-top: 40px;

  h1 {
    color: #0C0F25;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    display: block;
    font-size: 16px;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    min-width: 400px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #ccc;
    outline: none;
    padding: 0 10px;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  border: 0;
  background-color: #FF9900;
  color: #fff;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    filter: brightness(1.05);
  }
`