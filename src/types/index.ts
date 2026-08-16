import type { ReactNode } from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface StepProps {
  number: number;
  title: string;
  description: string;
}
