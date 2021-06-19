import styled from "styled-components";

const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
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

export const Header = () => {
  return (
    <Wrapper>
      <Leading>Boilerplate Lerna</Leading>
    </Wrapper>
  );
};
