import styled from 'styled-components';

export const Section = styled.main`
  display: flex;
  flex-direction: column;
  background: #fff;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: #4a4a4a;
  margin-bottom: 20px;
  background-color: red;
  padding: 15px;
  color: white;
`;

export const HeadTitle =  styled.h1`
  color: ${props => props.theme.color};
`;

export const ButtonSuccess =  styled.button<{primary: string}>`
	max-width: 100px;
	border-radius: 6px;
  background-color: ${props => (props.primary  ? "blue" : "#008CBA")};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;
