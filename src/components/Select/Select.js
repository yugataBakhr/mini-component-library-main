import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const [checked, setChecked] = React.useState(value);
  const [currentState, setCurrentState] = React.useState("off");

  const reverse = (currentState) => {
    return currentState === "on" ? "off" : "on";
  };

  return (
    <>
      <Wrapper key="select-div">
        <DisplayField
          tabIndex="0"
          onClick={(event) => {
            currentState === "off"
              ? setCurrentState("on")
              : setCurrentState("off");
          }}
        >
          <span>{getDisplayedValue(checked, children)}</span>
          <CustomChevron
            id="chevron-down"
            size="20"
            style={{ "--stroke-width": "3" }}
          ></CustomChevron>
        </DisplayField>
        <SelectWrapper
          style={
            currentState === "on"
              ? { "--display": "block" }
              : { "--display": "none" }
          }
        >
          {children.map((child, index) => (
            <CustomElement
              type="submit"
              tabIndex={0}
              htmlFor={index}
              value={getDisplayedValue(child.props.value, children)}
              onChange={(event) => {
                const checked = child.props.value;
                setChecked(checked);
                setCurrentState(reverse(currentState));
              }}
            >
              <CustomCheck
                id="check"
                size="15"
                style={{
                  "--stroke-width": "2",
                  "--check":
                    checked === child.props.value
                      ? "inline-block"
                      : "none",
                }}
              ></CustomCheck>
              <CustomInput
                name="select"
                id={index}
                type="checkbox"
                checked={
                  checked === child.props.value ? "checked" : ""
                }
              />
              <span style={{ "margin-left": "4px" }}>
                {getDisplayedValue(child.props.value, children)}
              </span>
            </CustomElement>
          ))}
        </SelectWrapper>
      </Wrapper>
    </>
  );
};

const DisplayField = styled.div`
  padding: 12px 16px;
  padding-right: 48px;

  &:hover {
    color: black;
  }

  &:focus {
    /*
    border: 2px solid ${COLORS.primary};
    border-radius: 8px;
    */
    outline: auto;
    outline-color: ${COLORS.primary};
  }
`;

const CustomElement = styled.label`
  position: relative;
  display: block;
  width: 200px;
  height: 26px; // not workin
  padding: 4px;
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;

  &:hover {
    color: ${COLORS.black};
  }
`;

const CustomChevron = styled(Icon)`
  display: inline-block;
  padding: 2px;
  position: absolute;
  right: 8px;
  top: 8px;
`;

const CustomInput = styled.input`
  opacity: 0;
`;

const CustomCheck = styled(Icon)`
  display: var(--check);
  position: absolute;
  left: 4px;
  top: 4px;
`;

const Wrapper = styled.form`
  position: relative;
  width: fit-content;
  height: fit-content;
  border-radius: 8px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
`;

const SelectWrapper = styled.form`
  display: var(--display);
  width: fit-content;
  padding: 4px;
  background-color: ${COLORS.gray50};
  color: ${COLORS.black};
  border: 1px solid ${COLORS.gray300};
  border-radius: 8px;

  z-index: 2;
  position: absolute;
  top: 8px;
  left: -8px;

  &:hover ${DisplayField} {
    border: 2px solid ${COLORS.primary};
    border-radius: 8px;
  }
`;

export default Select;
