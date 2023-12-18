import React from "react";
import Link from "next/link";
import type { NextRouter } from "next/router";
import { withRouter } from "next/router";

interface Props extends React.ComponentProps<typeof Link> {
  router: NextRouter;
}

export const ActiveLink = withRouter<Props>(
  ({ router, children, ...props }) => (
    <Link
      className={router.pathname === props.href ? `is-active` : undefined}
      {...props}
    >
      {children}
    </Link>
  ),
);
