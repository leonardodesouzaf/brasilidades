import { TextField } from '@material-ui/core';
import styled from 'styled-components';

export const WhiteBorderTextField = styled(TextField)`
& label.Mui-focused {
  color: white !important;
}
& .MuiOutlinedInput-root {
  &.Mui-focused fieldset {
    border-color: lightgray;
    border-width: 1px;
    color: white !important;
  }
}
`;
