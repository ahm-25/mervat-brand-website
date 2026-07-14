export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'luxury-gold'
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

export type AnimationType = 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale' | 'parallax'

export type BadgeVariant = 'gold' | 'dark' | 'cream' | 'glass' | 'outlet'

export interface DesignColorToken {
  name: string
  hex: string
  description: string
  textColor?: string
}

export interface ProductCardProps {
  id: string | number
  name: string
  category: string
  price: number | string
  originalPrice?: number | string
  image: string
  hoverImage?: string
  badge?: string
  badgeVariant?: BadgeVariant
  isNew?: boolean
  isOutlet?: boolean
}

export interface DesignTokenGroup {
  category: string
  description: string
  tokens: Record<string, string | number | DesignColorToken>
}
