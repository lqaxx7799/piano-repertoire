import './button.scss';

interface ButtonPropType extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text?: string | JSX.Element;
  variation?: ButtonVariation;
}

type ButtonVariation = 'primary' | 'danger' | 'warning';

export const Button = ({ text, variation = 'primary', ...props }: ButtonPropType) => {
  return (
    <button
      {...props}
      className={`q-button q-${variation} ${props.className}`}
    >
      {text}
    </button>
  );
}
