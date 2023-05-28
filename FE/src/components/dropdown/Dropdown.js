import { useEffect, useRef, useState, useContext } from 'react';

import styled from 'styled-components';

import { DropdownPanel } from './DropdownPanel';
import { FilterStateContext } from '../../pages/IssueList';
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
  selectedSideBarMenu
}) => {
  const { filterState, filterStateDispatch } = useContext(FilterStateContext);

  const [isDropDown, setIsDropDown] = useState(false);

  const [selectedOption, setSelectedOption] = useState('isOpen');
  const [selectedTab, setSelectedTab] = useState(null);
  const [tabOptionsInfo, setTabOptionsInfo] = useState(null);

  const selectedSideBarItemInfo = tabOptionsInfo?.find(
    ({ id }) => id === Number(selectedOption)
  );
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

  const handleDropdownTabMouseDown = () => {
    setIsDropDown(!isDropDown);
    setSelectedTab(tabId);
    if (tabId === 'filter') return;
    if (!isDropDown) fetchSelectedTab(tabId, filterOptions);
  };

  const fetchSelectedTab = async (selectedTab, filterOptions) => {
    const selectedTabAPI =
      selectedTab === 'assignees' || selectedTab === 'author'
        ? 'user'
        : selectedTab;
    const response = await fetchData(`/${selectedTabAPI}`);
    const tabData = await getFilteredOptions(filterOptions, response);
    setTabOptionsInfo(tabData);
  };

  const getFilteredOptions = (filterOptions, tabOptionsInfo) => {
    return tabOptionsInfo?.map((option) => filterOptions(option));
  };

  const handleSelectedOption = (option, selectedTab) => {
    if (option === selectedOption) {
      setSelectedOption('isOpen');
      setSelectedTab(null);
      if (setValue) setValue(null);
    } else {
      setSelectedOption(option);
      setSelectedTab(selectedTab);
      if (setValue) setValue(option);
      filterStateDispatch({
        type: 'FILTER-ISSUES',
        payload: {
          filterState: selectedTab,
          id: option
        }
      });
    }
  };

  const isSelected = (tabId, id, selectedOption) => {
    if (tabId === 'filter' && id.endsWith('isOpen')) {
      return (id === 'isOpen') === filterState.isOpen;
    } else {
      return String(id) === selectedOption;
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
          selectedOption={selectedOption}
          handleSelectedOption={handleSelectedOption}
          optionalArea={optionalArea}
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
