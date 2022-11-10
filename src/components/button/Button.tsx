interface ButtonPropType extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text?: string | JSX.Element;
}

export const Button = ({ text, ...props }: ButtonPropType) => {
  return (
    <button
      {...props}
    >
      {text}
    </button>
  );
}
