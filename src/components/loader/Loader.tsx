import '@/components/loader/Loader.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { FC } from 'react';

interface LoaderProps {
  small?: boolean;
}

const defaultProps = {
  small: false,
};

const Loader: FC<LoaderProps> = ({ small }) => {
  return <div className={clsx('loader', small && 'loader--small')} />;
};

Loader.defaultProps = defaultProps;

Loader.propTypes = {
  small: PropTypes.bool,
};

export default Loader;
