import { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import { DropdownPanel } from './DropdownPanel';
import { fontSize } from '../../styles/font';
import { fetchData } from '../../utils/fetch';
import { Button } from '../button/Button';

const defaultButtonOption = {
  color: 'ghostGray',
  iconType: 'chevronDown',
  isIcon: true,
  isLeftPosition: false
};

export const Dropdown = ({
  type,
  tabId,
  tabName,
  tabOptions,
  filterOptions,
  buttonOption,
  isLeft,
  setValue,
  optionalArea,
  selectedSideBarMenu,
  onFilterIssues,
  onOpenIssues,
  isSelected
}) => {
  const [isDropDown, setIsDropDown] = useState(false);

  const [selectedOption, setSelectedOption] = useState('isOpen');
  const [selectedTab, setSelectedTab] = useState(null);
  const [tabOptionsInfo, setTabOptionsInfo] = useState(null);

  const selectedSideBarItemInfo = tabOptionsInfo?.find(
    ({ id }) => id === Number(selectedOption)
  );
  // 사이드바 아이템을 클릭을 때 사이드바 컴포넌트를 생성하는 함수
  const SelectedSideBarItem = selectedSideBarMenu?.(
    selectedTab,
    selectedSideBarItemInfo
  );

  const panelRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setIsDropDown(false);
      }
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [panelRef]);

  // 드롭다운을 클릭했을때 panel을 띄우는 함수
  const handleDropdownTabMouseDown = (e) => {
    setIsDropDown(!isDropDown);
    setSelectedTab(tabId);
    if (tabId === 'filter') return;
    if (!isDropDown) fetchSelectedTab(tabId, filterOptions);
  };

  // 선택된 탭에서 옵션을 클릭했을 때 패널옵션을 패치하는 함수
  const fetchSelectedTab = async (selectedTab, filterOptions) => {
    const selectedTabApi =
      selectedTab === 'assignees' || selectedTab === 'author'
        ? 'user'
        : selectedTab;
    const response = await fetchData(`/${selectedTabApi}`);
    const tabData = await getFilteredOptions(filterOptions, response);
    setTabOptionsInfo(tabData);
  };

  // 패널옵션배열을 받아서 로직에 맞게 id, option으로 변환하는 함수
  const getFilteredOptions = (filterOptions, tabOptionsInfo) => {
    return tabOptionsInfo?.map((option) => filterOptions(option));
  };

  // 선택된 옵션 아이템을 저장하는 함수
  const handleSelectedOption = (selectedTab, option) => {
    if (option === selectedOption) {
      setSelectedOption('isOpen');
      setSelectedTab(null);
      if (setValue) setValue(null);
    } else {
      setSelectedOption(option);
      setSelectedTab(selectedTab);
      if (setValue) setValue(option);
    }
    if (selectedTab === 'filter' && option.endsWith('isOpen')) {
      onOpenIssues(option);
    } else {
      onFilterIssues?.(selectedTab, option);
    }
  };

  return (
    <MyDropdown ref={panelRef} onClick={handleDropdownTabMouseDown}>
      <Button {...defaultButtonOption} buttonText={tabName} {...buttonOption} />
      {!!SelectedSideBarItem && (
        <MySideBarMenuItem>{SelectedSideBarItem}</MySideBarMenuItem>
      )}
      {isDropDown && (
        <DropdownPanel
          tabId={tabId}
          tabName={tabName}
          type={type}
          options={tabOptions || tabOptionsInfo}
          isLeft={isLeft}
          optionalArea={optionalArea}
          selectedOption={selectedOption}
          handleSelectedOption={handleSelectedOption}
          isSelected={isSelected}
        />
      )}
    </MyDropdown>
  );
};

const MyDropdown = styled.div`
  position: relative;
`;

const MySideBarMenuItem = styled.div`
  ${fontSize.M}
  height: 40px;
  line-height: 40px;
  padding: 0 20px 10px 20px;
  display: flex;
  gap: 10px;
`;
