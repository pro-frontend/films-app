import { Input, InputProps } from "@material-ui/core";
import styled from "styled-components";

const StyledInput = (props: InputProps) => {
  const handleChange = () => {};

  return <StyledInputIntermediate onChange={handleChange} {...props} />;
};

const StyledInputIntermediate = styled(Input)`
  input {
    min-width: max-content;
    color: var(--color-white);
    background-color: var(--color-black-lighter);
    backdrop-filter: opacity(20%) blur(2px);
    font-size: var(--font-size-large);
    padding: var(--margins-small) var(--margins-medium);
    text-align: center;
  }
`;

export { StyledInput };