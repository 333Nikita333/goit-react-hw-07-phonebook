import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';

export const Item = styled.li`
  display: flex;
  flex-basis: calc((100% - 20px - 60px) / 3);
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 0.25rem;
  padding: 10px;
  border-radius: 50px;

  color: #fff;
  background: rgb(223, 225, 235);
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;
export const UserIcon = styled(FaUserCircle)`
  width: 50px;
`;
UserIcon.defaultProps = {
  size: 50,
};

export const ContactInfo = styled.div`
  display: flex;
  gap: 10px;
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
    width: 20px;
    height: 20px;
  }
`;
export const Name = styled.span`
  font-size: 17px;
  color: #000;
`;
export const Number = styled.span`
  color: #560bad;
`;
