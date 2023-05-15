import styled from 'styled-components';

import { Profile } from './Profile';
import { Icon } from '../assets/Icon';

export const Header = () => {
  const largeLogoIcon = {
    iconType: 'logotypeLarge',
    width: 200,
    height: 40
  };
  const isSmall = false;

  return (
    <MyHeader>
      <Icon {...largeLogoIcon} />
      <Profile type={isSmall} />
    </MyHeader>
  );
};

const MyHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 25px 25px;
`;
