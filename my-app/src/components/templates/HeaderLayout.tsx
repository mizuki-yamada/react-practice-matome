import { FC, ReactNode, memo } from "react";
import { Header } from "../organisms/layout/Header";
import { Button } from "@chakra-ui/react";

type HeaderLayoutProps = {
  children: ReactNode;
};

export const HeaderLayout: FC<HeaderLayoutProps> = memo((props) => {
  const { children } = props;
  return (
    <Header>
      {children}
    </Header>
  );
});
