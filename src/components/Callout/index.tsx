import React from "react";
import classnames from "classnames";

export interface CalloutProps extends React.ComponentProps<"div"> {
  type: "positive" | "negative";
  onDismiss: () => unknown;
}

export function Callout({
  type,
  className,
  children,
  onDismiss,
  ...props
}: CalloutProps) {
  const classes = classnames(
    "ui-callout",
    type === "negative" && "is-negative",
    type === "positive" && "is-positive",
    className,
  );

  return (
    <div
      className={classes}
      {...props}
    >
      {children}
      <div
        className="ui-callout-close"
        onClick={onDismiss}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          <path
            d="M0 0h24v24H0z"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}
