import { Button } from '../ui/button';
import React from 'react';

interface ButtonCustomProps {
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | 'success'
    | null
    | undefined;
  size?: 'default' | 'sm' | 'lg' | 'icon' | null | undefined;
  onclick?: () => void;
  text: string;
  className?: string;
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({
  variant = 'default',
  size = 'default',
  onclick,
  text = 'Hello Developer',
  className = 'primary',
}) => {
  return (
    <Button
      variant={'default'}
      size={'default'}
      onClick={onclick}
      className={className}
    >
      {text}
    </Button>
  );
};

export default ButtonCustom;
