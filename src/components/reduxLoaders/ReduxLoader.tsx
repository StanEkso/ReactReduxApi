import React, { FC, PropsWithChildren, useEffect } from 'react';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { RootAction, RootState } from '../../redux/store';
import OptionalRenderer from './OptionalRenderer';

interface Props {
  fallback: React.ReactNode;
  selector: (state: RootState) => boolean;
  loaderAction: () => RootAction;
}

const ReduxLoader: FC<Props & PropsWithChildren> = ({
  children,
  fallback,
  selector,
  loaderAction
}) => {
  const isLoaded = useAppSelector(selector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!isLoaded) {
      dispatch(loaderAction());
    }
  }, [dispatch, isLoaded, loaderAction]);
  return (
    <OptionalRenderer condition={isLoaded} fallback={fallback}>
      {children}
    </OptionalRenderer>
  );
};

export default ReduxLoader;
