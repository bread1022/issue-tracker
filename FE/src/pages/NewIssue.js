import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { NewIssueContainer } from '../components/newIssue/NewIssueContainer';
import { NewIssueFooter } from '../components/newIssue/NewIssueFooter';
import { PageHeader } from '../components/PageHeader';

export const NewIssue = () => {
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [assignee, setAssignee] = useState('');
  const [label, setlabel] = useState('');
  const [milestone, setMilestone] = useState('');
  const [newIssue, setNewIssue] = useState({});

  useEffect(() => {
    setNewIssue({ assignee, label, milestone });
  }, []);

  return (
    <MyNewIssuePage>
      <PageHeader leftChild={'새로운 이슈 작성'} />
      <NewIssueContainer
        titleValue={title}
        titleSetValue={setTitle}
        commentValue={comment}
        commentSetValue={setComment}
        assigneeSetValue={setAssignee}
        labelSetValue={setlabel}
        milestoneSetValue={setMilestone}
      />
      <NewIssueFooter titleValue={title} commentValue={comment} />
    </MyNewIssuePage>
  );
};

const MyNewIssuePage = styled.div`
  width: 1280px;
  margin: 0px auto;
`;
