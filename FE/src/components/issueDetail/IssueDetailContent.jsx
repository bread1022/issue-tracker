import { useContext, useState } from 'react';

import styled from 'styled-components';

import { CommentElements } from './CommentElements';
import { IssueDetailContext } from '../../pages/IssueDetail';
import { fontSize } from '../../styles/font';
import { Button } from '../button/Button';
import { TextArea } from '../textForm/TextArea';

export const IssueDetailContent = () => {
  const issueDetail = useContext(IssueDetailContext);
  const [issueSubInfo, CommentInfo] = issueDetail;
  const [comment, SetComment] = useState('');
  const commentInput = {
    label: '코멘트를 입력하세요.',
    size: 's',
    value: comment,
    setValue: SetComment
  };

  const addComment = {
    size: 's',
    color: 'containerBlue',
    isIcon: true,
    iconWidth: 11,
    buttonText: '코멘트 작성',
    iconType: 'plus',
    disabled: comment.length < 1,
    isLeftPosition: true
  };

  return (
    <MyIssueDetailContent>
      {CommentInfo &&
        CommentInfo.map((comment) => (
          <CommentElements
            key={comment.userId}
            authorInfo={{
              id: issueSubInfo.author.id,
              name: issueSubInfo.author.name
            }}
            userInfo={{
              id: comment.userId,
              name: comment.userName,
              profileUrl: comment.userUrl
            }}
            createTime={comment.createTime}
            reply={comment.replyContents}
          />
        ))}
      <TextArea {...commentInput} />
      <Button {...addComment} />
    </MyIssueDetailContent>
  );
};

const MyIssueDetailContent = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > button {
    justify-content: center;
    ${fontSize.S};
  }
  & div {
    :last-child {
      align-items: flex-start;
    }
  }
`;
