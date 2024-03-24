import React, { PropsWithChildren } from 'react';

export type FlexProps = {
  gap?: string;
};

export const Flex = ({ children }: PropsWithChildren<FlexProps>) => {
  return <div>{children}</div>;
};

export default Flex;
