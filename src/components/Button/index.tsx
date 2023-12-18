import React from "react";
import classnames from "classnames";

export interface ButtonProps extends React.ComponentProps<"button"> {
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button = ({
  isLoading,
  className,
  children,
  ...props
}: ButtonProps) => {
  const classes = classnames("ui-button", isLoading && "is-loading", className);

  const content = (
    <>
      {isLoading && (
        <div className="ui-spinner">
          <div className="ui-spinner-icon"></div>
        </div>
      )}
      {children}
    </>
  );

  return (
    <button
      {...props}
      className={classes}
    >
      {content}
    </button>
  );
};
