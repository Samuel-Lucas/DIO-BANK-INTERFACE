import { Button, ButtonProps } from "@chakra-ui/react"

interface ButtonCustomProps extends ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export const ButtonCustom: React.FC<ButtonCustomProps> = ({ onClick, children, ...props }) => (
  <Button {...props} onClick={onClick}>
    {children}
  </Button>
)
