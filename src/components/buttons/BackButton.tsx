import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Arrow } from '@/assets/svg/icons/icon-arrow.svg';

import '@/components/buttons/BackButton.scss';

const BackButton: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <button className="back-button" onClick={handleClick} type="button">
      <Arrow />
    </button>
  );
};

export default BackButton;
