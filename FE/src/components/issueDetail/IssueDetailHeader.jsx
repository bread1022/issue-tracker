import { useContext } from 'react';

import styled from 'styled-components';

import { IssueDetailContext } from '../../pages/IssueDetail';
import { colors } from '../../styles/color';
import { getTimeElapsed } from '../../utils/timeElapsed';
import { Button } from '../button/Button';
import { LabelTag } from '../LabelTag';
import { PageHeader } from '../PageHeader';

const editBtn = [
  {
    id: 1,
    size: 's',
    color: 'outlineBlue',
    iconType: 'edit',
    iconWidth: '12',
    buttonText: '제목 편집'
  },
  {
    id: 2,
    size: 's',
    color: 'outlineBlue',
    iconType: 'archive',
    iconWidth: '12',
    buttonText: '이슈 닫기'
  }
];
const labelTagBtn = {
  tagType: 'open',
  hasIcon: true,
  icon: 'archive',
  text: '열린 이슈',
  backgroundColor: colors.blue,
  fontColor: colors.gray50
};

export const IssueDetailHeader = () => {
  const issueDetail = useContext(IssueDetailContext);
  const [issueSubInfo, CommentInfo] = issueDetail;

  const pageHeaderInfo = {
    leftChild: `FE 이슈트래커 디자인 시스템 구현`,
    middleChild: `#${issueSubInfo?.id}`
  };

  return (
    <MyIssueDetailHeader>
      <PageHeader
        leftChild={pageHeaderInfo.leftChild}
        middleChild={pageHeaderInfo.middleChild}
        rigthChild={
          <>
            {editBtn.map((edit) => (
              <Button
                key={edit.id}
                size={edit.size}
                color={edit.color}
                iconType={edit.iconType}
                iconWidth={edit.iconWidth}
                isIcon
                buttonText={edit.buttonText}
                isLeftPosition
              />
            ))}
          </>
        }
      />
      <SubHeader>
        <LabelTag {...labelTagBtn} />
        <p>
          이 이슈가 {getTimeElapsed(issueSubInfo?.createTime)}에{' '}
          {issueSubInfo?.author.name}님에 의해 열렸습니다. * 코멘트{' '}
          {CommentInfo?.length}개
        </p>
      </SubHeader>
    </MyIssueDetailHeader>
  );
};

const MyIssueDetailHeader = styled.div`
  width: 1280px;
  margin: 0 auto;
  border-bottom: 1px solid ${colors.gray400};
  padding-bottom: 25px;
`;
const SubHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 25px;
  & p {
    color: ${colors.gray600};
  }
`;
