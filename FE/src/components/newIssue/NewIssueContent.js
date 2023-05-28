import { useState } from 'react';

import styled from 'styled-components';

import { TextArea } from '../textForm/TextArea';
import { TextInput } from '../textForm/TextInput';

export const NewIssueContent = ({
  titleValue,
  titleSetValue,
  commentValue,
  commentSetValue
}) => {
  return (
    <MyNewIssueContent>
      <TextInput
        label={'제목'}
        height={'70px'}
        value={titleValue}
        setValue={titleSetValue}
      />
      <TextArea
        label={'코멘트를 입력하세요'}
        size={'l'}
        value={commentValue}
        setValue={commentSetValue}
      />
    </MyNewIssueContent>
  );
};

const MyNewIssueContent = styled.form`
  gap: 10px;
  display: flex;
  flex-direction: column;

  > div {
    width: 100%;
  }
`;
