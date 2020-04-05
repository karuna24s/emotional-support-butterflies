import styled from "styled-components";

import { Blue } from "./KeyFrames";

export const Box = styled.img`
  width: 4em;
  height: 4em;
  animation: ${keyFrameExampleOne} 2s ease-in-out 0s infinite;
`;

export default Box;
