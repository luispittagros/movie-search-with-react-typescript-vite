import { FC, memo, ReactNode } from 'react';

import '@/components/labels/LogoLabel.scss';

interface LabelProps {
  logo: ReactNode;
  color: string;
  children: ReactNode;
}

const LogoLabel: FC<LabelProps> = ({ children, logo, color }) => {
  return (
    <div className="logo-label">
      <div
        className="logo-label__logo"
        style={{
          backgroundColor: `var(${color})`,
          borderColor: `var(${color})`,
        }}
      >
        {logo}
      </div>
      <span className="logo-label__info">{children}</span>
    </div>
  );
};

export default memo(LogoLabel);
