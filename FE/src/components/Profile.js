import { useContext } from 'react';

import styled from 'styled-components';

import { IssueListContext } from '../pages/IssueList';

export const Profile = ({ isSmall }) => {
  const issueList = useContext(IssueListContext);
  const userInfo = issueList.userInfo;
  const MyProfile = isSmall ? SmallProfile : LargeProfile;

  return <MyProfile src={userInfo?.profileUrl} alt={userInfo?.userName} />;
};

const MyProfile = styled.img`
  border-radius: 50%;
`;

const SmallProfile = styled(MyProfile)`
  width: 20px;
  height: 20px;
`;

const LargeProfile = styled(MyProfile)`
  width: 32px;
  height: 32px;
`;
