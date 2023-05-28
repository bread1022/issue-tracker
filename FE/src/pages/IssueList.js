import React, { useCallback, useEffect, useReducer, useState } from 'react';

import styled from 'styled-components';

import { FilterSection } from '../components/filterSection/FiterSection';
import { IssueListContainer } from '../components/issueList/IssueListContainer';
import {
  filterStateReducer,
  initialFilterState
} from '../stores/filterStateReducer';
import { fetchAll } from '../utils/fetch';
import { getFilterQueryString } from '../utils/filterQuery';

export const FilterStateContext = React.createContext();
export const IssueListContext = React.createContext();

export const IssueList = () => {
  const [issuesInfo, setIssuesInfo] = useState([]);
  const [countInfo, setCountInfo] = useState([]);
  const [filterState, filterStateDispatch] = useReducer(
    filterStateReducer,
    initialFilterState
  );

  const initData = async () => {
    try {
      const [issuesInfo, countInfo] = await fetchAll(
        `/issues/${getFilterQueryString(filterState)}`,
        `/issues`
      );
      setIssuesInfo(issuesInfo);
      setCountInfo(countInfo.countInfo);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    initData();
  }, [filterState]);

  const handleIsOpenTabClick = useCallback((tabId) => {
    filterStateDispatch({
      type: 'FILTER-ISSUES',
      payload: {
        filterState: 'filter',
        id: tabId
      }
    });
  });

  const handleFilterTabClick = useCallback((option, selectedTab) => {
    filterStateDispatch({
      type: 'FILTER-ISSUES',
      payload: {
        filterState: selectedTab,
        id: option
      }
    });
  });

  const handleResetFilterClick = useCallback(() =>
    filterStateDispatch({ type: 'RESET-FILTER' })
  );

  return (
    <FilterStateContext.Provider value={{ filterState, filterStateDispatch }}>
      <IssueListContext.Provider value={{ issuesInfo, countInfo }}>
        <MyIssueListPage>
          <FilterSection />
          <IssueListContainer />
        </MyIssueListPage>
      </IssueListContext.Provider>
    </FilterStateContext.Provider>
  );
};

const MyIssueListPage = styled.div`
  width: 1280px;
  margin: 0 auto;
`;
