import * as React from 'react';
import {
  ArrowLeft,
  ArrowUp,
  ArrowRight,
  ArrowDown,
  ChevronDown,
  X,
  Check,
  ShoppingBasket,
  Mail,
  Download,
  Image,
  Headphones,
  Music,
  Play,
  Star,
  TriangleAlert,
  Lock,
  Percent,
  Edit,
  Trash2,
  Search,
  Plus,
  Settings,
  User,
  Home,
  Eye,
  EyeOff,
  Copy,
  LucideProps,
} from 'lucide-react';
import './Icon.css';

const iconMap = {
  'arrow-left': ArrowLeft,
  'arrow-up': ArrowUp,
  'arrow-right': ArrowRight,
  'arrow-down': ArrowDown,
  'chevron-down': ChevronDown,
  x: X,
  check: Check,
  'shopping-basket': ShoppingBasket,
  mail: Mail,
  download: Download,
  image: Image,
  headphones: Headphones,
  music: Music,
  play: Play,
  star: Star,
  'triangle-alert': TriangleAlert,
  lock: Lock,
  percent: Percent,
  edit: Edit,
  delete: Trash2,
  search: Search,
  add: Plus,
  settings: Settings,
  user: User,
  home: Home,
  eye: Eye,
  'eye-off': EyeOff,
  copy: Copy,
} as const;

export type IconName = keyof typeof iconMap;

export type IconSize = 'small' | 'medium';

export interface IconProps
  extends Omit<LucideProps, 'size' | 'strokeWidth' | 'color'> {
  name: IconName;
  size?: IconSize;
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 'medium', className = '', ...props }, ref) => {
    const LucideIcon = iconMap[name];

    if (!LucideIcon) {
      console.warn(`Icon "${name}" not found in iconMap`);
      return null;
    }

    const iconClasses = `icon icon--${size} ${className}`.trim();

    return <LucideIcon ref={ref} className={iconClasses} {...props} />;
  }
);

Icon.displayName = 'Icon';

export { Icon };
