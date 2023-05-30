import styled from 'styled-components';

import { IssueDetailContent } from './IssueDetailContent';
import { Button } from '../button/Button';
import { SideBar } from '../newIssue/Sidebar';

export const IssueDetailContainer = () => {
  const btnInfo = {
    size: 'xs',
    color: 'ghostRed',
    iconType: 'trash',
    isIcon: true,
    buttonText: '이슈 삭제',
    isLeftPosition: true
  };
  return (
    <MysIssueDetailContainer>
      <IssueDetailContent />
      <SidebarSection>
        <SideBar />
        <Button {...btnInfo} />
      </SidebarSection>
    </MysIssueDetailContainer>
  );
};

const MysIssueDetailContainer = styled.div`
  display: flex;
  width: 1280px;
  margin: 0px auto;
  padding: 30px 0;
  justify-content: space-evenly;
  gap: 35px;
`;

const SidebarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  > button {
    margin-right: 25px;
  }
`;
