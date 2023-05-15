import { Icon } from '../assets/Icon';
import { colors } from '../styles/color';

export const CheckBox = ({ type, onClick }) => {
  const checkType = {
    initial: {
      iconType: 'checkBoxInitial',
      fill: `${colors.gray300}`
    },
    active: {
      iconType: 'checkBoxActive',
      fill: `${colors.blue}`
    },
    disable: {
      iconType: 'checkBoxDisable',
      fill: `${colors.blue}`
    }
  };

  return <Icon {...checkType[type]} onClick={onClick} />;
};
