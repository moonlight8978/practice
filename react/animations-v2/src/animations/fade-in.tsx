/**
 * https://github.com/gkaemmer/react-fade-in/blob/master/src/FadeIn.js
 */

import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const items = new Array(10).fill(0).map((_value, index) => index + 1);

const Item = styled.div<{ active: boolean; index: number }>`
  transition: all 400ms ease;
  transition-delay: ${(props) => `${props.index * 50}ms`};

  ${(props) =>
    props.active
      ? css`
          opacity: 1;
          transform: none;
        `
      : css`
          opacity: 0;
          transform: translateY(20px);
        `}
`;

export default function FadeIn() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <div>
      {items.map((item, index) => (
        <Item active={active} index={index} key={`fadeIn-${item}`}>
          Fade item No.{item}
        </Item>
      ))}
    </div>
  );
}
