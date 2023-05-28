import styled from 'styled-components';

import { IssueDetailContent } from './IssueDetailContent';
import { SideBar } from '../newIssue/Sidebar';
export const IssueDetailContainer = () => {
  return (
    <MysIssueDetailContainer>
      <IssueDetailContent />
      <SideBar />
    </MysIssueDetailContainer>
  );
};

const MysIssueDetailContainer = styled.div`
  display: flex;
  width: 1280px;
  margin: 0px auto;
  justify-content: space-around;
`;
