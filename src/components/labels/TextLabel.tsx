import { FC, memo, ReactNode } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import '@/components/labels/TextLabel.scss';

interface LabelProps {
  children: ReactNode;
  filled?: boolean;
}

const defaultProps: Partial<LabelProps> = {
  filled: false,
};

const TextLabel: FC<LabelProps> = ({ children, filled }) => {
  return (
    <span className={clsx('text-label', filled && 'text-label--filled')}>
      {children}
    </span>
  );
};

TextLabel.defaultProps = defaultProps;

TextLabel.propTypes = {
  children: PropTypes.node.isRequired,
  filled: PropTypes.bool,
};

export default memo(TextLabel);
