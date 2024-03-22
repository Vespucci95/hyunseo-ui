import React, { PropsWithChildren } from 'react';

export type FlexProps = {
  fill?: boolean;
};

export const Flex = ({ children }: PropsWithChildren<FlexProps>) => {
  return <div>{children}</div>;
};

export default Flex;
