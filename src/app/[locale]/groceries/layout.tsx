import { type PropsWithChildren } from 'react';

const GroceriesLayout = ({ children }: PropsWithChildren) => (
  <section className="mx-auto mt-20 max-w-xl">{children}</section>
);

export default GroceriesLayout;
