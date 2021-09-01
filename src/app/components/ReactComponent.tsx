import * as React from 'react';
import { FunctionComponent, useEffect, useRef, useState } from 'react';

import './ReactComponent.scss';

export interface IComponentProps {
  counter: number;
  onClick?: () => void;
}

export const ReactComponent: FunctionComponent<IComponentProps> = (props: IComponentProps) => {

  const timerHandle = useRef<number | null>(null);
  const [ stateCounter, setStateCounter ] = useState(42);

  useEffect(() => {
    timerHandle.current = +setInterval(() => {
      setStateCounter(stateCounter + 1);
    }, 2500);

    return () => {
      if (timerHandle.current) {
        clearInterval(timerHandle.current);
        timerHandle.current = null;
      }
    };
  });

  const { counter: propsCounter, onClick } = props;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return <div className={`graph-component`}>
    <div className={'comp-props'}>Props counter: {propsCounter}
      <span onClick={handleClick}
            className={'increase-button'}>click to increase</span>
    </div>
    <div className={'comp-state'}>State counter: {stateCounter}</div>
  </div>;
};
