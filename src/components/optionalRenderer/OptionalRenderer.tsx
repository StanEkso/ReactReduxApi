import React, { FC, PropsWithChildren } from "react";

interface Props {
  fallback: React.ReactNode;
  condition: boolean;
}

const OptionalRenderer: FC<Props & PropsWithChildren> = ({
  fallback,
  children,
  condition,
}) => {
  return (
    <>
      {condition && children}
      {!condition && fallback}
    </>
  );
};

export default OptionalRenderer;
