import React, { useEffect } from "react";

export default function withDisplayName<P extends {}>(
  WrappedComponent: React.ComponentType<P>
) {
  const EnhancedComponent = (props: P) => {
    const displayName = WrappedComponent.displayName;

    useEffect(() => {
      console.log(`Hello from: ${displayName}`);
    }, [displayName]);

    return <WrappedComponent {...props} />;
  };

  return EnhancedComponent;
}
