import React from 'react'
import { NavType } from '../components/nav/nav'
import { SliderType } from '../components/slider/slider'
import { TagType } from '../components/tag/tag'
import { GeneralTypes } from '../types/types'

export const mainNavData:NavType['data'] = [
  {
    label: 'Nómades Digitales',
    link: '#',
    active: false,
    img: {
      src: '',
      alt: ''
    },
    action: undefined
  },
  {
    label: 'Digital Well-Being',
    link: '#',
    active: false,
    img: {
      src: '',
      alt: ''
    },
    action: undefined
  },
  {
    label: 'logo agencia Aurea',
    link: '#',
    active: false,
    img: {
      src: './src/assets/logo.svg',
      alt: 'logo agencia Aurea'
    },
    action: undefined
  },
  {
    label: 'Hola!!!',
    link: '#',
    active: false,
    img: {
      src: '',
      alt: ''
    },
    action: undefined
  },
  {
    label: 'Comencemos',
    link: '#',
    active: false,
    img: {
      src: '',
      alt: ''
    },
    action: undefined
  },
]

export const sliderHomeData:SliderType['data'] = [
  {
    description: 'lorem ipsum dolor sit ame',
    name: 'lorem-ipsum-1',
    title: 'Lorem ipsum',
    active: false,
    img: '',
  },
  {
    description: 'lorem ipsum dolor sit ame',
    name: 'lorem-ipsum-2',
    title: 'Lorem ipsum',
    active: false,
    img: '',
  },
  {
    description: 'lorem ipsum dolor sit ame',
    name: 'lorem-ipsum-3',
    title: 'Lorem ipsum',
    active: false,
    img: '',
  }
]

export const tagData:TagType['data'] = [
  {
    link: '#',
    title: 'lorem'
  },
  {
    link: '#',
    title: 'ipsum'
  },
  {
    link: '#',
    title: 'sit'
  }
]

export const sliderCardsData:SliderType['data'] = [
  {
    description: 'Almacén fibra',
    name: 'almacen-fibra-1',
    title: 'Almacén fibra',
    active: false,
    img: './src/assets/place-00.png',
  },
  {
    description: 'lorem ipsum dolor sit ame',
    name: 'lorem-ipsum-2',
    title: 'Lorem ipsum',
    active: false,
    img: './src/assets/place-01.png',
  },
]

export const footerData:GeneralTypes['footerData'] = {
  title: 'Filosofía',
  subtitle: 'Aurea Content',
  description: <>
    Somos nómades digitales y estamos seguros que un buen resultado se logra en cualquier momento o lugar; que un proyecto exitoso no es el que tiene más horas, si no al que se le dedica más corazón
    <br/><br/>
    Nos mueve el equilibrio, el respeto y el amor por los detalles.  Somos defensores de las causas nobles. Respetamos límites. Somos curiosos.
    <br/><br/>
    Creemos que una buena idea merece ser bien comunicada. Que esas que hacen bien al mundo no deberían desvanecerse. Nos gusta contar historias y queremos contar la tuya.
  </>,
  socialLinks: [
    {
      name: 'facebook',
      icon: 'fb',
      link: '#'
    },
    {
      name: 'linkedin',
      icon: 'in',
      link: '#'
    },
    {
      name: 'instagram',
      icon: 'ig',
      link: '#'
    },
    {
      name: 'twitter',
      icon: 'tw',
      link: '#'
    }
  ],
  logo: {
    src: './src/assets/logo-2.svg',
    alt: 'logo agencia Aurea'
  }
}

export const footerNavData:NavType['data'] = [
  {
    label: 'Nosotros',
    link: '#',
    active: false,
    img: {
      src: '',
      alt: ''
    },
    action: undefined
  },
  {
    label: 'Preguntas frecuentes',
    link: '#',
    active: false,
    img: {
      src: '',
      alt: ''
    },
    action: undefined
  },
  {
    label: 'Cotizaciones',
    link: '#',
    active: false,
    img: {
      src: '',
      alt: ''
    },
    action: undefined
  },
  {
    label: 'Contacto',
    link: '#',
    active: false,
    img: {
      src: '',
      alt: ''
    },
    action: undefined
  },
  {
    label: 'Trabaja con nosotros',
    link: '#',
    active: false,
    img: {
      src: '',
      alt: ''
    },
    action: undefined
  },
  {
    label: 'Av. Evergreen 742, Springield. USA.',
    link: '#',
    active: false,
    img: {
      src: '',
      alt: ''
    },
    action: undefined
  },
]

export const methodologyData:GeneralTypes['methodologyType'] = {
  title: 'Metodología Áurea',
  description: 'Creamos experiencias de contenido desde el bienestar digital.',
  cards: [
    {
      icon: 'smile',
      title: 'Asesoría'
    },
    {
      icon: 'love',
      title: 'Diseño UX-UI'
    },
    {
      icon: 'moon',
      title: 'Soporte'
    },
    {
      icon: 'clock',
      title: 'Contenido'
    },
    {
      icon: 'alarm',
      title: 'Social Ads'
    },
    {
      icon: 'email',
      title: 'Analítica'
    },
  ]
}

export const newsletterData:GeneralTypes['newsletterType'] = {        
  title: 'Newsletter',
  description: 'Entérate de nuestras novedades',
  placeholder:'@correo',
  buttonText: 'suscribirme',
  email: 'info@aureacontent.cl'
}

export const workGalleryData:GeneralTypes['workGallery'] = {
  title: 'Hola!',
  subtitle: 'Ideas que hacen bien',
  description: 'Creamos experiencias de contenido desde el bienestar digital. ¡Queremos contar con las tuyas!'
}

export const timeData:GeneralTypes['time'] = {
  title: 'Revisa si el tiempo que pasas frente a una pantalla es el adecuado',
  description: 'Cantidad de horas saludable'
}

export const contactData:GeneralTypes['contact'] = {
  title: 'Comencemos',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
  form: [
    {
      type: 'text',
      placeholder: 'nombre',
      value: '',
      name: 'name',
    },
    {
      type: 'text',
      placeholder: '@correo',
      value: '',
      name: 'email',
    },
    {
      type: 'textarea',
      placeholder: 'cuéntanos un poco de tu proyecto',
      value: '',
      name: 'message',
    }
  ],
  button: 'Enviar'
}

export const otherData:GeneralTypes['other'] = {
  title: 'Nómadas digitales',
  description: 'Revisa si el tiempo que pasas frente a una pantalla es el adecuado',
  link: ' @áureacontent',
  phoneSlider: [
    {
      title: 'Respeta tu tiempo de ocio diario 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus.',
      name: 'lorem-1',
      active: false,
      img: './src/assets/place-00.png',
    },
    {
      title: 'Respeta tu tiempo de ocio diario 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus.',
      name: 'lorem-2',
      active: false,
      img: './src/assets/place-01.png',
    },
    {
      title: 'Respeta tu tiempo de ocio diario 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus.',
      name: 'lorem-3',
      active: false,
      img: './src/assets/place-02.png',
    },
  ]
}
