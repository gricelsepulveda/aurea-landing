export type LandingApp = {
}

export type GeneralTypes = {
  color: 'primary-1' | 'primary-2' | 'primary-3' | 'primary-4' | 'secondary-1' | 'secondary-2' | 'secondary-3',
  theme:  'dark' | 'light',
  dimensions: {
    unit: 'px' | '%' | 'rem' | '-',
    size: number | 'auto'
  },
  img: {
    src: string,
    alt: string
  },
  link: {
    label: string,
    link: string,
    active: boolean,
    img: GeneralTypes['img'],
    action: undefined | (() => void)
  },
}