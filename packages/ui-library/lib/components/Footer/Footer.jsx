import styled from "styled-components";

const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
`;

const Leading = styled.section`
  padding: ${({ theme }) => theme.spacing()};
`;
const Trailing = styled.section`
  padding: ${({ theme }) => theme.spacing()};
`;

export const Footer = () => {
  return (
    <Wrapper>
      <Leading>Copyright</Leading>
    </Wrapper>
  );
};
