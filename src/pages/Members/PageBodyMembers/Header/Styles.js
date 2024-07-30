import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #111;
  color: #fff;
`;

export const Logo = styled.img`
  width: 150px;
`;

export const Support = styled.a`
  color: #00a9ce;
  text-decoration: none;
`;

export const UserInfo = styled.div`
  position: relative;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #222;
  border: 1px solid #333;
  border-radius: 5px;
  overflow: hidden;
`;

export const DropdownItem = styled.div`
  padding: 10px 20px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;
