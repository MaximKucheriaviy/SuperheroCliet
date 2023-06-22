import { Blocks } from "react-loader-spinner";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: #80808032;
  backdrop-filter: blur(1px);
`;

export const Loader = () => {
  const rootDiv = document.querySelector("#rootPortal");
  return createPortal(
    <Backdrop>
      <Blocks />
    </Backdrop>,
    rootDiv
  );
};
