import { useContext } from 'react';

import styled from 'styled-components';

import { IssueDetailContext } from '../../pages/IssueDetail';
import { colors } from '../../styles/color';
import { Button } from '../button/Button';
import { Profile } from '../Profile';

export const CommentElements = ({ userInfo, reply }) => {
  const emojiOptions = {
    size: 's',
    color: 'ghostGray',
    iconType: 'smile',
    iconWidth: '13',
    isIcon: true,
    buttonText: '반응',
    isLeftPosition: true
  };
  return (
    <MyCommentElements>
      <MyCommentHeader>
        <MyProfileInfo>
          <Profile userInfo={userInfo} />
          <span>{userInfo.userName}</span>
          <span>1분 전</span>
        </MyProfileInfo>
        <EditHeader>
          <Button {...emojiOptions} />
        </EditHeader>
      </MyCommentHeader>
      <div>{reply}</div>
    </MyCommentElements>
  );
};

const MyCommentElements = styled.div`
  width: 100%;
  background: ${colors.gray100};
  > div {
    :first-child {
      background: ${colors.gray100};
      border-radius: 16px 16px 0px 0px;
      border: 1px solid ${colors.gray300};
    }
    :last-child {
      background: ${colors.gray50};
      border-radius: 0px 0px 16px 16px;
      border: 1px solid ${colors.gray300};
      border-top: none;
      height: 60px;
      padding-left: 20px;
      display: flex;
      align-items: center;
    }
  }
`;

const MyProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px;
`;

const EditHeader = styled.div`
  display: flex;
  align-items: center;
  & button {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
  }
`;
const MyCommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 64px;
`;
