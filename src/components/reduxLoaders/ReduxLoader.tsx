import React, { FC, PropsWithChildren, useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks/useAppDispatch";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { RootState, TypedThunkAction } from "../../redux/store";
import OptionalRenderer from "../optionalRenderer/OptionalRenderer";

interface Props {
  fallback: React.ReactNode;
  selector: (state: RootState) => boolean;
  loaderAction: () => TypedThunkAction;
}

const ReduxLoader: FC<Props & PropsWithChildren> = ({
  children,
  fallback,
  selector,
  loaderAction,
}) => {
  const isLoaded = useAppSelector(selector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!isLoaded) {
      dispatch(loaderAction());
    }
  });
  return (
    <OptionalRenderer condition={isLoaded} fallback={fallback}>
      {children}
    </OptionalRenderer>
  );
};

export default ReduxLoader;
