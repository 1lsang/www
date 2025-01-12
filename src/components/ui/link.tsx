import { Button, type ButtonVariantProps } from './button';

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & ButtonVariantProps;

const Link = ({ variant, size, ...props }: LinkProps) => {
  return (
    <Button asChild variant={variant} size={size}>
      <a {...props} />
    </Button>
  );
};

export { Link };
