import React from 'react';
import simpleIcons from 'simple-icons';

const SimpleIcons = ({ stack, style }) => {
  const icon = simpleIcons.get(stack);

  return (
    <div
      data-icon={stack}
      style={{
        fill: `#${icon.hex}`,
        display: 'inline-block',
        width: '50px',
        margin: '4px auto',
        ...style,
      }}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
    />
  );
};

export default SimpleIcons;
