import React, { Fragment } from "react";
import HeaderOffset from "../components/common/HeaderOffset";

const withHeaderOffset = Component => {
  return props => (
    <Fragment>
      <HeaderOffset />
      <Component {...props} />
    </Fragment>
  );
};

export default withHeaderOffset;
