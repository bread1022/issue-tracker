import React, { useCallback, useEffect, useReducer, useState } from 'react';

import styled from 'styled-components';

import { FilterSection } from '../components/filterSection/FiterSection';
import { IssueListContainer } from '../components/issueList/IssueListContainer';
import { IssueListHeader } from '../components/issueList/IssueListHeader';
import {
  filterStateReducer,
  initialFilterState
} from '../stores/filterStateReducer';
import { fetchAll, fetchData } from '../utils/fetch';
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
      // const [issuesInfo, countInfo] = await fetchAll(
      //   `/issues/${getFilterQueryString(filterState)}`,
      //   `/issues/countInfo`
      // );
      // setIssuesInfo(issuesInfo);
      // setCountInfo(countInfo.countInfo);
      const [issuesInfo, countInfo] = await fetchAll(
        `http://13.209.232.172:8080/issues`,
        `http://13.209.232.172:8080/issues/countInfo`
      );
      setIssuesInfo(issuesInfo);
      setCountInfo(countInfo);
      console.log(issuesInfo, countInfo);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    initData();
  }, [filterState]);

  const onResetFilter = () => filterStateDispatch({ type: 'RESET-FILTER' });
  const onFilterIssues = (selectedTab, option) =>
    filterStateDispatch({
      type: 'FILTER-ISSUES',
      payload: {
        filterTab: selectedTab,
        id: option
      }
    });
  const onOpenIssues = (tabId) => {
    if (!tabId.endsWith('isOpen')) return;
    filterStateDispatch({
      type: 'FILTER-OPEN',
      payload: {
        filterTab: 'filter',
        id: tabId
      }
    });
  };

  return (
    <FilterStateContext.Provider
      value={{
        filterState,
        onResetFilter,
        onFilterIssues,
        onOpenIssues
      }}
    >
      <IssueListContext.Provider value={{ issuesInfo, countInfo }}>
        <MyIssueListPage>
          <FilterSection />
          <IssueListContainer />
          {/* <IssueListHeader />
          <IssueListContext /> */}
        </MyIssueListPage>
      </IssueListContext.Provider>
    </FilterStateContext.Provider>
  );
};

const MyIssueListPage = styled.div`
  width: 1280px;
  margin: 0 auto;
`;
