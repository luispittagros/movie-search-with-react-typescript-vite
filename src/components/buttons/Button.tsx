import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';

import '@/components/buttons/Button.scss';
import clsx from 'clsx';

interface ButtonProps {
  children: ReactNode;
  icon: ReactNode;
  onClick?: () => void;
  active?: boolean;
}

const buttonDefaultProps = {
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
      <span>{children}</span>
    </button>
  );
};

Button.defaultProps = buttonDefaultProps;

Button.propTypes = {
  icon: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  active: PropTypes.bool,
};

export default Button;
