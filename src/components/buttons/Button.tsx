import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import '@/components/buttons/Button.scss';

interface ButtonProps {
  children: ReactNode;
  icon: ReactNode;
  onClick?: () => void;
  active?: boolean;
}

const defaultButtonProps = {
  onClick: () => {},
  active: false,
};

const Button: FC<ButtonProps> = ({ children, icon, onClick, active }) => {
  return (
    <button
      className={clsx('button', active && 'button--active')}
      onClick={onClick}
      type="button"
    >
      <div className="button__icon">{icon}</div>
      <span className="button__text">{children}</span>
    </button>
  );
};

Button.defaultProps = defaultButtonProps;

Button.propTypes = {
  icon: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  active: PropTypes.bool,
};

export default Button;
