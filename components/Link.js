import React from 'react';
import Link from "next/link";
import { withRouter } from "next/router";
import { Children } from "react";

const ActiveLink = withRouter(({ router, children, ...props }) => (
  <Link {...props}>
    {React.cloneElement(Children.only(children), {
      className: router.pathname === props.href ? `is-active` : null
    })}
  </Link>
));

export default ActiveLink;
