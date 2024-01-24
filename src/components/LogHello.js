import React, { useEffect } from "react";
import PropTypes from "prop-types";

const LogHello = (WrappedComponent, { componentDisplayName } = {}) => {
  const LogHelloComponent = (props) => {
    useEffect(() => {
      if (componentDisplayName) {
        console.log(`Hello from ${componentDisplayName}`);
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  LogHelloComponent.propTypes = {
    componentDisplayName: PropTypes.string,
  };

  return LogHelloComponent;
};

export default LogHello;
