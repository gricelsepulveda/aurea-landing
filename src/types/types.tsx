import { ReactNode } from "react"

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
  control: {
    type: 'text' | 'textarea',
    placeholder: string,
    value: string,
    name: string,
  },
  sliderData: {
    description: string,
    name: string,
    title: string,
    active: boolean,
    img: string,
  },
  tagData:{
    link: string,
    title: string,
  },
  time: {
    title: string,
    description: string,
  }
  workGallery: {
    title: string,
    subtitle: string,
    description: string,
  },
  newsletterType: {
    title: string,
    description: string,
    email: string,
    placeholder: string,
    buttonText: string,
  }, 
  methodologyCard: {
    icon: string,
    title: string,
  }
  methodologyType: {
    title: string,
    description: string,
    cards: GeneralTypes['methodologyCard'][],
  },
  other: {
    title: string,
    description: string,
    link: string,
    phoneSlider: GeneralTypes['sliderData'][],
    avatar: string,
  },
  footerData:{
    title: string,
    subtitle: string,
    description: ReactNode,
    logo: GeneralTypes['img'],
    socialLinks:{
      name: string,
      icon: string,
      link: string
    }[]
  },
  contact: {
    title: string,
    description: string,
    form: GeneralTypes['control'][],
    button: string,
  },
  section: {
    id: string,
    name?: string,
  },
  sections: GeneralTypes['section'][]
}