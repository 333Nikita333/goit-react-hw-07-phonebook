import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-basis: calc((100% - 20px - 60px) / 3);
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 0.25rem;
  padding: 5px 10px;

  color: #fff;
  background: #3a0ca3;
`;
export const ContactInfo = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
export const Button = styled.button`
  padding: 5px;
`;
export const Name = styled.span`
  text-shadow: 3px 5px 2px #474747;
`;
export const Number = styled.span`
  color: #1BFF40;
`;
