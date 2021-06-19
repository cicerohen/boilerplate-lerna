import styled, { css } from "styled-components";

import { mediaQueries } from "../../theme";

const flexBasis = (column, columns) => `${(column / columns) * 100}%`;

const container = css`
  display: flex;
  flex-wrap: wrap;
  width: calc(100%);
`;

const item = css`
  padding: ${(props) => props.theme.grid.gutter}px;
  flex-grow: 0;
  ${(props) =>
    props.sm &&
    mediaQueries.sm`
      flex-basis: ${flexBasis(props.sm, props.theme.grid.columns)};
      max-width: ${flexBasis(props.sm, props.theme.grid.columns)};
    `}
  ${(props) =>
    props.md &&
    mediaQueries.md`
        flex-basis: ${flexBasis(props.md, props.theme.grid.columns)};
        max-width: ${flexBasis(props.md, props.theme.grid.columns)};
      `}
  ${(props) =>
    props.lg &&
    mediaQueries.lg`
        flex-basis: ${flexBasis(props.lg, props.theme.grid.columns)};
        max-width: ${flexBasis(props.lg, props.theme.grid.columns)};
      `}
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  ${(props) => props.container && container};
  ${(props) => props.item && item};
`;

export const Grid = ({ item, container, sm, md, lg, children }) => {
  return (
    <Wrapper container={container} item={item} sm={sm} md={md} lg={lg}>
      {children}
    </Wrapper>
  );
};
