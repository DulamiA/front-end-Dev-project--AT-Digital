import styled from 'styled-components';

export const Box = styled.div`
  background: #6B3CC9;
  position: absolute;
  width: 100%;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1300px;
    margin: 0 auto;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 20px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 10px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 10px;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
`;
   
export const Heading = styled.p`
  font-size: 21px;
  color: #fff;
  margin-bottom: 20px;
  margin-top: 40px;
  font-weight: bold;
`;