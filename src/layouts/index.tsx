import { PropsWithChildren } from "react";
import { Footer } from "@/layouts/Footer";
import { Navbar } from "@/layouts/Navbar";

interface Props extends PropsWithChildren { }

export const IndexLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
