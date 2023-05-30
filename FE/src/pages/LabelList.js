import { useState, useEffect } from 'react';

import styled from 'styled-components';

import { Button } from '../components/button/Button';
import { PageTabButton } from '../components/filterSection/PageTabButton';
import { LabelTag } from '../components/LabelTag';
import { colors } from '../styles/color';
import { fontSize, fontType } from '../styles/font';
import { fetchAll } from '../utils/fetch';

export const LabelList = () => {
  const [labels, setLabels] = useState([]);
  const [countInfo, setCountInfo] = useState([]);
  const initData = async () => {
    try {
      const [labelsInfo, countInfo] = await fetchAll('/labels', '/issues');
      setLabels(labelsInfo);
      setCountInfo(countInfo.countInfo);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <MyLabelListPage>
      <PageTabButton countInfo={countInfo} />
      <MyLabelList>
        <MyLabelListHeader>
          {countInfo.labelCount} 개의 레이블
        </MyLabelListHeader>
        {labels &&
          labels.map((label) => (
            <MyLabelItem key={label.id}>
              <MyLabelInfo>
                <LabelTag
                  key={label.id}
                  tagType={'labels'}
                  hasIcon={false}
                  text={label.name}
                  backgroundColor={label.backgroundColor}
                  fontColor={label.fontColor}
                />
                <>{label.description}</>
              </MyLabelInfo>
              <MyLabelEditButtons>
                <Button
                  size={'xs'}
                  color={'ghostGray'}
                  buttonText={'편집'}
                  isIcon
                  iconType={'edit'}
                  isLeftPosition
                />
                <Button
                  size={'xs'}
                  color={'ghostRed'}
                  buttonText={'삭제'}
                  isIcon
                  iconType={'trash'}
                  isLeftPosition
                />
              </MyLabelEditButtons>
            </MyLabelItem>
          ))}
      </MyLabelList>
    </MyLabelListPage>
  );
};

const MyLabelListPage = styled.div`
  width: 1280px;
  margin: 0 auto;

  > div {
    justify-content: space-between;
    padding: 0 0 25px 0;
  }
`;

const MyLabelList = styled.div`
  border: 1px solid #d9dbe9;
  border-radius: 16px;

  > div:not(:last-child) {
    border-bottom: 1px solid ${colors.gray300};
  }
  > div:last-child {
    border-radius: 0px 0px 16px 16px;
  }
`;

const MyLabelListHeader = styled.div`
  padding: 0 25px;
  height: 64px;
  line-height: 64px;
  background-color: ${colors.gray100};
  border-bottom: 1px solid ${colors.gray300};
  border-radius: 16px 16px 0px 0px;
  ${fontType.REGULAR}
  color: ${colors.gray600};
`;

const MyLabelItem = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;
  padding: 0 25px;
  background-color: ${colors.gray50};
  color: ${colors.gray600};
  ${fontSize.S}
  ${fontType.LIGHT}
  &: hover {
    background-color: ${colors.gray100};
  }
`;

const MyLabelInfo = styled.div`
  display: flex;
  align-items: center;
`;

const MyLabelEditButtons = styled.div`
  display: flex;
`;
