/* eslint-disable react/button-has-type */
// type prop not recogonized correctly: https://github.com/yannickcr/eslint-plugin-react/issues/1555
import React from 'react';
import classNames from 'classnames';

const Button = ({ children, className, classNameWrapper, onClick, type }) => {
  const btnClasses = classNames('btn', className);
  const wrapperClasses = classNames('btn-wrapper', classNameWrapper);

  return classNameWrapper ? (
    <div className={wrapperClasses}>
      <button className={btnClasses} onClick={onClick} type={type}>
        {children}
      </button>
    </div>
  ) : (
    <button className={btnClasses} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
