import styled from 'styled-components';

import { MyHeader } from './Header';
import { colors } from '../styles/color';

// Title, subTitle,
export const PageHeader = ({ leftChild, middleChild, rigthChild }) => {
  return (
    <MyPageHeader>
      {middleChild
        ? (
          <MyLeftPageHeader>
            {leftChild && <div>{leftChild}</div>}
            {middleChild && <div>{middleChild}</div>}
          </MyLeftPageHeader>
        )
        : (
          <>{leftChild && <div>{leftChild}</div>}</>
        )}
      {rigthChild && <MyrightPageHeader>{rigthChild}</MyrightPageHeader>}
    </MyPageHeader>
  );
};

const MyPageHeader = styled(MyHeader)``;
const MyLeftPageHeader = styled.div`
  display: flex;
  gap: 10px;
  >div: last-child {
    color: ${colors.gray600};
  }
`;
const MyrightPageHeader = styled.div`
  display: flex;
  gap: 10px;
`;
