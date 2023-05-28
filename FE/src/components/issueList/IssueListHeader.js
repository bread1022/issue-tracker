import React, { useContext, useCallback } from 'react';

import styled from 'styled-components';

import { CheckboxStateContext } from './IssueListContainer';
import { IssueListContext, FilterStateContext } from '../../pages/IssueList';
import { colors } from '../../styles/color';
import { fontSize } from '../../styles/font';
import { Button } from '../button/Button';
import { CheckBox } from '../CheckBox';
import { Dropdown } from '../dropdown/Dropdown';
import { DropdownFilterTabs } from '../dropdown/DropdownFilterTabs';

const checkTabTypes = {
  tabId: 'checkTab',
  tabName: '상태 수정',
  tabOptions: [
    {
      id: 'open',
      option: '선택한 이슈 열기'
    },
    {
      id: 'close',
      option: '선택한 이슈 닫기'
    }
  ]
};

const issueButtonTypes = [
  {
    tabId: 'isOpen',
    buttonText: '열린 이슈',
    status: true,
    buttonOption: {
      size: 's',
      color: 'ghostBlack',
      iconType: 'alertCircle',
      isIcon: true,
      iconWidth: 16,
      isLeftPosition: true
    }
  },
  {
    tabId: '!isOpen',
    buttonText: '닫힌 이슈',
    status: false,
    buttonOption: {
      size: 's',
      color: 'ghostGray',
      iconType: 'archive',
      isIcon: true,
      iconWidth: 16,
      isLeftPosition: true
    }
  }
];

export const IssueListHeader = () => {
  const { checkState, checkDispatch } = useContext(CheckboxStateContext);
  const { isAllChecked, checkedIssues } = checkState;
  const { countInfo } = useContext(IssueListContext);
  const { filterState, filterStateDispatch } = useContext(FilterStateContext);

  const handleCheckedIssueTabsClick = () => {
    if (isAllChecked) checkDispatch({ type: 'ALL_UNCHECK' });
    else {
      checkDispatch({ type: 'ALL_CHECK', payload: issues.issueList });
    }
  };

  const handleFilterTabClick = useCallback((option, selectedTab) => {
    filterStateDispatch({
      type: 'FILTER-ISSUES',
      payload: {
        filterState: selectedTab,
        id: option
      }
    });
  });

  const handleIsOpenTabClick = useCallback((tabId) => {
    filterStateDispatch({
      type: 'FILTER-ISSUES',
      payload: {
        filterState: 'filter',
        id: tabId
      }
    });
  });

  return (
    <MyIssueListHeader>
      <MyIssueTabs>
        <CheckBox
          id={'select-all'}
          checked={isAllChecked}
          onChange={handleCheckedIssueTabsClick}
        />
        {isAllChecked
          ? (
            <div>{checkedIssues.length} 개 이슈 선택</div>
          )
          : (
            issueButtonTypes.map(
              ({ tabId, buttonText, status, buttonOption }) => (
                <Button
                  key={tabId}
                  active={status === filterState.isOpen}
                  onClick={() => handleIsOpenTabClick(tabId)}
                  {...buttonOption}
                  buttonText={`${buttonText} (${
                    status
                      ? countInfo?.openCount || 0
                      : countInfo?.closeCount || 0
                  })`}
                />
              )
            )
          )}
      </MyIssueTabs>
      {isAllChecked
        ? (
          <Dropdown {...checkTabTypes} />
        )
        : (
          <DropdownFilterTabs onClick={handleFilterTabClick} />
        )}
    </MyIssueListHeader>
  );
};

const MyIssueListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  height: 64px;
  background-color: ${colors.gray100};
  border-bottom: 1px solid ${colors.gray300};
  border-radius: 16px 16px 0px 0px;

  button {
    justify-content: space-between;
    gap: 8px;
    width: max-content;
    ${fontSize.M}
  }
`;

const MyIssueTabs = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  > svg,
  > button {
    cursor: pointer;
  }
`;
