import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`
export const H = styled.h1`
  text-align: center;
`
export const Header = styled.div`
  background-color: antiquewhite;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 80%;
    margin: auto;
  }
`
export const Button = styled.button`
  height: 40px;
  width: 80px;
  border: 0px;
  font-size: 18px;
  background-color: blue;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`
export const InputContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`
export const Input = styled.input`
  height: 40px;
  padding: 5px;
  font-size: 18px;
  width: 300px;
  margin-right: 20px;
  border-radius: 5px;
  border: 1px solid grey;
`
export const P = styled.p`
  color: red;
  text-align: center;
`
export const Ol = styled.ol`
  width: 500px;
  margin: auto;
  margin-top: 100px;
`
