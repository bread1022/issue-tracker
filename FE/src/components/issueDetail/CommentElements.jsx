import styled from 'styled-components';

import { colors } from '../../styles/color';
import { getTimeElapsed } from '../../utils/timeElapsed';
import { Button } from '../button/Button';
import { LabelTag } from '../LabelTag';
import { Profile } from '../Profile';

export const CommentElements = ({
  authorInfo,
  userInfo,
  reply,
  createTime
}) => {
  const emojiOptions = {
    size: 'xs',
    color: 'ghostGray',
    iconType: 'smile',
    iconWidth: '13',
    isIcon: true,
    buttonText: '반응',
    isLeftPosition: true
  };

  const editOption = {
    size: 'xs',
    color: 'ghostGray',
    iconType: 'edit',
    iconWidth: '13',
    isIcon: true,
    buttonText: '편집',
    isLeftPosition: true
  };

  const labelTagInfo = {
    tagType: 'labels',
    hasIcon: false,
    text: '작성자',
    backgroundColor: colors.gray100,
    fontColor: colors.gray600,
    borderColor: colors.gray300
  };

  return (
    <MyCommentElements>
      <MyCommentHeader>
        <MyProfileInfo>
          <Profile userInfo={userInfo} />
          <span>{userInfo.name}</span>
          <span>{getTimeElapsed(createTime)}</span>
        </MyProfileInfo>
        <EditHeader>
          {authorInfo.id === userInfo.id && (
            <>
              <LabelTag {...labelTagInfo} />
              <Button {...editOption} />
            </>
          )}
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
  align-items: center;
  > div {
    :first-child {
      background: ${colors.gray100};
      border-radius: 16px 16px 0px 0px;
      border: 1px solid ${colors.gray300};
      align-items: center;
      padding-right: 10px;
    }
    :last-child {
      background: ${colors.gray50};
      border-radius: 0px 0px 16px 16px;
      border: 1px solid ${colors.gray300};
      border-top: none;
      height: 60px;
      padding: 2px 20px;
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
    justify-content: center;
  }
`;
const MyCommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 64px;
`;
