import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
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
export const H = styled.h1``

export const Ul = styled.ul`
  width: 80%;
  height: 90vh;
  margin: auto;
  margin-top: 50px;
  padding-left: 0px;
`
export const Li = styled.li`
  font-size: 20px;
  list-style-type: none;
`
