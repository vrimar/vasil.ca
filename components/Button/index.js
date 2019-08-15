import * as React from 'react';
import classnames from 'classnames';

export function Button({ isLoading, href, className, children, ...htmlProps }) {
  const classes = classnames(
    'ui-button',
    isLoading && 'is-loading',
    className
  );

  const content = <>
    {isLoading && <div className="ui-spinner"><div className="ui-spinner-icon"></div></div>}
    {children}
  </>;

  const props = {
    className: classes,
    href: href || undefined,
    ...htmlProps
  };

  return href ? <a {...props}>{content}</a> : <button {...props}>{content}</button>;
}
