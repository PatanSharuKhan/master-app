import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Form = styled.form`
  width: 350px;
  box-shadow: 0px 4px 16px 0px grey;
  padding: 20px;
  display: flex;
  flex-direction: column;
`
export const H = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`
export const P = styled.p`
  color: red;
  text-align: center;
`

export const Label = styled.label`
  margin-bottom: 5px;
`
export const Input = styled.input`
  height: 40px;
  padding: 5px;
  font-size: 18px;
  border: 0px;
  width: 100%;
  border-radius: 5px;
  background-color: antiquewhite;
  margin-bottom: 20px;
`
export const Button = styled.button`
  height: 36px;
  border: 0px;
  border-radius: 5px;
  background-color: blue;
  color: white;
`
export const Radio = styled.input`
  width: 18px;
  cursor: pointer;
`

export const RadioContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
`
