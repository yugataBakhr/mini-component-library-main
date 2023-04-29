/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

// bar value => height: 16px
// bar's padding => 4px
const ProgressBar = ({ value, size }) => {
  const SIZES = {
    small: {
      "--box-shadow": "none",
      "--height": "8px",
      "--padding": "0",
      "--right-radius": `${value === 100 ? "4px" : "none"}`,
    },

    medium: {
      "--box-shadow": "none",
      "--height": "12px",
      "--padding": "0",
      "--right-radius": `${value === 100 ? "4px" : "none"}`,
    },

    large: {
      "--box-shadow": `inset 0px 2px 4px ${COLORS.transparentGray35}`,
      "--height": "24px",
      "--padding": "4px",
      "--right-radius": `${value === 100 ? "4px" : "none"}`,
    },
  };
  return (
    <>
      <label htmlFor={`bar-${size}`}>label: </label>
      <ProgressElement
        id={`bar-${size}`}
        value={value}
        max="100"
        style={SIZES[size]}
      >
        {value}%
      </ProgressElement>
    </>
  );
};

const ProgressElement = styled.progress`
  box-shadow: var(--box-shadow);
  width: 370px;
  height: var(--height);
  padding: var(--padding);
  border-radius: 4px;
  border-color: transparent;
  appearance: none; // to reset default style first.

  &::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    border-radius: 4px;
  }

  &::-moz-progress-bar {
    background-color: ${COLORS.transparentGray15};
    border-radius: 4px;
  }

  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top-right-radius: var(--right-radius);
    border-bottom-right-radius: var(--right-radius);
  }

  &::-moz-progress-bar {
    background-color: ${COLORS.primary};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top-right-radius: var(--right-radius);
    border-bottom-right-radius: var(--right-radius);
  }
`;

export default ProgressBar;
