import InputElement from './style';
import { BorderStyle, InputProps } from '../../utils/Input';

function borderStyle(style: BorderStyle) {
  const stylization = style === BorderStyle.SolidBorder ? '1px solid #000' : '';
  return stylization;
}

const Input = (props: InputProps) => {
  const { placeholder, type, style, value, onChange, name, register } = props;


  return (
    <InputElement
    
        {...register(name)}

        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        style={{ border: borderStyle(style) }}
        value={value}
    />
  );
};

export default Input;

// registerProp