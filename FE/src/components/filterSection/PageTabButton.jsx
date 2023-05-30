import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '../../styles/color';
import { Button } from '../button/Button';

const filterTabOptions = {
  labels: {
    size: 's',
    color: 'ghostGray',
    iconType: 'label',
    iconWidth: 16,
    isIcon: true,
    isLeftPosition: true
  },
  milestone: {
    size: 's',
    color: 'ghostGray',
    iconType: 'milestone',
    iconWidth: 16,
    isIcon: true,
    isLeftPosition: true
  },
  newIssue: {
    size: 's',
    color: 'containerBlue',
    iconType: 'plus',
    isIcon: true,
    buttonText: '이슈작성',
    isLeftPosition: true
  }
};

export const PageTabButton = ({ countInfo }) => {
  const navigate = useNavigate();

  return (
    <MypageTabButton>
      <MyMovePageButtons>
        <Button
          {...filterTabOptions.labels}
          buttonText={`레이블 (${countInfo?.labelCount || 0})`}
          onClick={() => navigate('/labels')}
        />
        <Button
          {...filterTabOptions.milestone}
          buttonText={`마일스톤 (${countInfo?.milestoneCount || 0})`}
          onClick={() => navigate('/milestone')}
        />
      </MyMovePageButtons>
      <Button
        {...filterTabOptions.newIssue}
        onClick={() => navigate('/newIssue')}
      />
    </MypageTabButton>
  );
};

const MypageTabButton = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  button {
    font-size: 14px;
  }
`;

const MyMovePageButtons = styled.div`
  display: flex;
  height: 40px;
  width: 300px;
  border-radius: 11px;
  border: 1px solid ${colors.gray300};
  > button {
    width: 100%;
    &:first-child {
      border-radius: 11px 0px 0px 11px;
      border-right: 1px solid ${colors.gray300};
    }
    &:last-child {
      border-radius: 0px 11px 11px 0px;
    }
    &: hover {
      background: ${colors.gray200};
    }
  }
`;
