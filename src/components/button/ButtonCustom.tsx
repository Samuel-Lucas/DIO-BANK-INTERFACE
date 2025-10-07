import { Button, ButtonProps } from "@chakra-ui/react"

// Tipando as props, incluindo `onClick` e `children`
interface ButtonCustomProps extends ButtonProps {
  onClick?: () => void;  // Tipando a função de click
  children: React.ReactNode;  // Tipando o children como ReactNode
}

export const ButtonCustom: React.FC<ButtonCustomProps> = ({ onClick, children, ...props }) => (
  <Button {...props} onClick={onClick}>
    {children}
  </Button>
)
