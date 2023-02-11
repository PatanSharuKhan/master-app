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
  padding: 20px;
  box-shadow: 0px 4px 16px 0px grey;
  display: flex;
  flex-direction: column;
`
export const H = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`
export const P = styled.p`
  color: red;
`

export const Label = styled.label`
  margin-bottom: 5px;
`

export const Input = styled.input`
  height: 40px;
  font-size: 18px;
  padding: 5px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 0px;
  background-color: antiquewhite;
`

export const Button = styled.button`
  height: 40px;
  border: 0px;
  border-radius: 5px;
  background-color: blue;
  color: white;
  cursor: pointer;
`
