import styled from "styled-components";

import { Header } from "../Header";
import { Footer } from "../Footer";

const Body = styled.main`
  min-height: 900px;
`;

const Title = styled.h2``;

export const View = ({ title, children }) => {
  return (
    <div>
      <Header />
      <Body>
        {title && <Title>{title}</Title>}
        <Body>{children}</Body>
      </Body>
      <Footer />
    </div>
  );
};
