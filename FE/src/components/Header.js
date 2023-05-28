import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Profile } from './Profile';
import { Icon } from '../assets/Icon';
import { fontSize, fontType } from '../styles/font';
import { fetchData } from '../utils/fetch';

export const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const initData = async () => {
    const resData = await fetchData('/issues');
    setUser(resData);
  };

  useEffect(() => {
    initData();
  }, []);

  const logoInfo = {
    iconType: 'logotypeLarge',
    width: 200,
    height: 40,
    onClick: () => navigate('/issues')
  };

  return (
    <MyHeader>
      <Icon {...logoInfo} />
      <Profile isLarge userInfo={user?.userInfo} />
    </MyHeader>
  );
};

export const MyHeader = styled.header`
  width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 25px;
  box-sizing: border-box;
  ${fontSize.XXL}
  ${fontType.LIGHT}
`;
