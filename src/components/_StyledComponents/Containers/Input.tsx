import { Input, InputProps } from "@material-ui/core";
import styled from "styled-components";
import { color, fontSize, margins } from "../../../common";

const StyledInput = (props: InputProps) => {
  const handleChange = () => {};

  return <StyledInputIntermediate onChange={handleChange} {...props} />;
};

const StyledInputIntermediate = styled(Input)`
  & {
    position: relative;
  }

  input {
    min-width: max-content;
    color: ${color.white};
    background-color: ${color.blackLighter};
    backdrop-filter: opacity(20%) blur(2px);
    font-size: ${fontSize.large};
    padding: ${margins.small} ${margins.giant};
    text-align: center;
  }
`;

export { StyledInput };
