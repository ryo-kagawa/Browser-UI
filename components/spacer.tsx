import React from 'react';
import './spacer.css';

type Props = {
  x: number;
  y?: number;
} | {
  x?: number;
  y: number;
};

export function Spacer({
  x = 0,
  y = 0,
}: Props) {
  x = Math.max(x, 0)
  y = Math.max(y, 0)
  return (
    <div
      className='ryo-kagawa-ui-spacer'
      style={{
        marginLeft: `calc(var(--ryo-kagawa-ui-spacer-x) * ${x})`,
        marginTop: `calc(var(--ryo-kagawa-ui-spacer-y) * ${y})`,
      }}
    />
  );
};
