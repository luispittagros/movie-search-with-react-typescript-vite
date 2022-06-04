import { useNavigate } from 'react-router-dom';
import { ReactComponent as Arrow } from '@/assets/svg/icons/icon-arrow.svg';

import '@/components/buttons/BackButton.scss';

const BackButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <button
      className="back-button"
      onClick={handleClick}
      type="button"
      aria-label="back"
    >
      <Arrow />
    </button>
  );
};

export default BackButton;
