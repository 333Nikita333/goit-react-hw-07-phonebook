import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';

export const UserIcon = styled(FaUserCircle)`
  width: 50px;
`;
UserIcon.defaultProps = {
  size: 50,
};

export const ContactInfo = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
`;
export const Button = styled.button`
  padding: 5px;
  border-color: #000000;
  border-radius: 45px;

  &:hover {
    border-color: red;
  }
  &:hover svg {
    fill: red;
  }

  & svg {
    fill: #000000;
  }
`;
export const Name = styled.span`
  color: #000000;
`;
export const Number = styled.span`
  color: #560bad;
`;
