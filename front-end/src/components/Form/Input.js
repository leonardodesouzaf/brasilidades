import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import InputMask from 'react-input-mask';

export default function Input({
  mask = '',
  maskChar = '',
  formatChars,
  variant = 'outlined',
  value = '',
  onChange = () => 0,
  onFocus = '',
  ...props
}) {
  return mask || maskChar ? (
    <InputMask
      mask={mask}
      maskChar={maskChar}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      {...(formatChars && { formatChars })}
    >
      {() => <StyledTextField {...props} variant={variant} />}
    </InputMask>
  ) : (
    <StyledTextField {...props} value={value} onChange={onChange} variant={variant} size="small" InputLabelProps={{
      style: { color: 'white', fontFamily: 'Lexend Deca' } }} InputProps={{ style: { color: 'white', fontFamily: 'Lexend Deca' } }} focused/>
  );
}

const StyledTextField = styled(TextField)`
  margin-top: 8px !important;
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
