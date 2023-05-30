import { useContext } from 'react';

import styled from 'styled-components';

import { FilterBar } from './FilterBar';
import { PageTabButton } from './PageTabButton';
import { IssueListContext } from '../../pages/IssueList';

export const FilterSection = () => {
  const { countInfo } = useContext(IssueListContext);

  return (
    <MyFilterSection>
      <FilterBar />
      <PageTabButton countInfo={countInfo} />
    </MyFilterSection>
  );
};

const MyFilterSection = styled.div`
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  button {
    cursor: pointer;
  }
`;
