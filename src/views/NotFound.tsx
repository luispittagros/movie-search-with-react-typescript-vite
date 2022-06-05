import '@/views/NotFound.scss';
import Button from '@/components/buttons/Button';
import { ReactComponent as BackIcon } from '@/assets/svg/icons/icon-arrow.svg';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="not-found">
      <h1>Page Not Found</h1>
      <h3>Sorry, we can&apos;t find that page.</h3>

      <Button icon={<BackIcon />} onClick={handleClick}>
        Go Home
      </Button>
    </div>
  );
};

export default NotFound;
