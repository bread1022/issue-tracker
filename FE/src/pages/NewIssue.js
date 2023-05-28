import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { NewIssueFooter } from '../components/newIssue/NewIssueFooter';
import { SideBar } from '../components/newIssue/Sidebar';
import { PageHeader } from '../components/PageHeader';
import { Profile } from '../components/Profile';
import { TextArea } from '../components/textForm/TextArea';
import { TextInput } from '../components/textForm/TextInput';

// TODO: 유저정보 가져오기
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
      <MyNewIssueContainer>
        <Profile isLarge userInfo={null} />
        <MyNewIssueContent>
          <TextInput
            label={'제목'}
            height={'70px'}
            value={title}
            setValue={setTitle}
          />
          <TextArea
            label={'코멘트를 입력하세요'}
            size={'l'}
            value={comment}
            setValue={setComment}
          />
        </MyNewIssueContent>
        <SideBar
          assigneeSetValue={setAssignee}
          labelSetValue={setlabel}
          milestoneSetValue={setMilestone}
        />
      </MyNewIssueContainer>
      <NewIssueFooter titleValue={title} commentValue={comment} />
    </MyNewIssuePage>
  );
};

const MyNewIssuePage = styled.div`
  width: 1280px;
  margin: 0px auto;
`;

const MyNewIssueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 25px;
`;

const MyNewIssueContent = styled.form`
  gap: 10px;
  display: flex;
  flex-direction: column;
`;
