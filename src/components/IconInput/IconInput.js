import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  Sizes[size]["--width"] = width + "px";
  return (
    <>
      <Wrapper onSubmit={(event) => event.preventDefault()}>
        <BaseInputBox
          style={Sizes[size]}
          placeholder={placeholder}
          id={label}
        />
        <label htmlFor={label}>
          <CustomIcon
            id={icon}
            style={Sizes[size]}
            size={Sizes[size]["--size"]}
          />
          <VisuallyHidden>{label}</VisuallyHidden>
        </label>
      </Wrapper>
    </>
  );
};

// placeholders is gray500

const Sizes = {
  small: {
    "--font-size": "14px",
    "--padding": "2px",
    "--padding-left": "24px",
    "--stroke-width": "1",
    "--size": "17",
    "--top": "19px",
    "--left": "19px",
    "--color": "lime",
    "--width": "250px",
  },

  large: {
    "--font-size": "18px",
    "--padding": "4px",
    "--padding-left": "36px",
    "--padding-top": "5px",
    "--stroke-width": "3",
    "--size": "25",
    "--top": "20px",
    "--left": "20px",
    "--color": "slateblue",
    "--width": "250px",
  },
};

const Wrapper = styled.form`
  display: block;
  width: fit-content;
  color: ${COLORS.gray700};
  padding: 2px;

  &:hover {
    color: ${COLORS.black};
  }
`;

const BaseInputBox = styled.input`
  border: 2px solid transparent;
  border-radius: 2px;
  border-bottom: 2px solid ${COLORS.black};
  padding: 2px;

  width: var(--width);
  font-size: var(--font-size);
  font-weight: 700;
  padding: var(--padding);
  padding-left: var(--padding-left);
  padding-top: var(--padding-top);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline: none;
    outline-offset: 2px;
    outline: 2px solid ${COLORS.primary};
  }
`;

const CustomIcon = styled(Icon)`
  color: inherit;
  position: absolute;
  top: var(--top);
  left: var(--left);
`;

export default IconInput;
