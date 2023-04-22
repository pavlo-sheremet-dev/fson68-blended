import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

export const StatisticItem = ({ title, total, icon: Icon }) => {
  return (
    <StatisticBox>
      <Icon color="#2196F3" size={20} />
      <StatisticCounter>{total}</StatisticCounter>
      <StatisticText>{title}</StatisticText>
    </StatisticBox>
  );
};
