import React, {useState, useEffect} from 'react'
//COMPONENTS
//REACT ROUTER
import { Route, Switch, useHistory} from 'react-router-dom'
//TYPES
import { LandingApp } from '../types/types'

const Home:React.FunctionComponent = () => {
  const [characters, setCharacters] = useState<any>(undefined)
  const history = useHistory()

  useEffect(() => {
  }, [])

  return (
    <>
      {/* NAV COMPONENT */}
      <nav className='au-nav main-nav'>
        <ul className='au-ul nav-list'>
          <li className='au-li nav-list-element'>
            <a className='au-a nav-list-link'>
              Nómades Digitales
            </a>
          </li>
          <li className='au-li nav-list-element'>
            <a className='au-a nav-list-link'>
              Digital Well-Being
            </a>
          </li>
          <li className='au-li nav-list-element'>
            <a className='au-a nav-list-link'>
              <img src='./src/assets/logo.svg' alt='logo agencia Aurea'/>
            </a>
          </li>
          <li className='au-li nav-list-element'>
            <a className='au-a nav-list-link'>
              Experiencias de Contenido
            </a>
          </li>
          <li className='au-li nav-list-element'>
            <a className='au-a nav-list-link'>
              Comencemos
            </a>
          </li>
        </ul>
      </nav>
      {/* WELCOME SECTION */}
      <section className='au-section welcome'>
        <ul className='au-ul slider phrases'>
          <li className='au-li slider-element'>
            <article className='au-article slider-article active'>
              <p className='au-p slider-article-description'>
                Ideas que hacen bien
              </p>
            </article>
            <article className='au-article slider-article'>
              <p className='au-p slider-article-description'>
                Ideas que hacen bien
              </p>
            </article>
          </li>
        </ul>
        <h1 className='au-h1 au-tag-list'>
          <a href='#' className='au-a tag-element'>
            lorem ipsum
          </a>
          <a href='#' className='au-a tag-element'>
            dolor sit
          </a>
          <a href='#' className='au-a tag-element'>
            conseqtur
          </a> 
        </h1>
      </section>
      {/* WORK GALLERY SECTION */}
      <section className='au-section work-gallery'>
        <ul className='au-ul slider cards'>
          <li className='au-li slider-element'>
            <article className='au-article slider-article active'>
              <p className='au-p slider-article-description'>
                Almacén fibra
              </p>
            </article>
          </li>
          <li className='au-li slider-element'>
            <article className='au-article slider-article'>
              <p className='au-p slider-article-description'>
                Segunda Slide
              </p>
            </article>
          </li>
          <nav className='au-nav slider-controllers'>
            <ul className='au-ul nav-list'>
              <li className='au-li nav-list-element back'>
                <i className='aurea-font caret'/>
              </li>
              <li className='au-li nav-list-element next'>
                <i className='aurea-font caret'/>
              </li>
            </ul>
          </nav>
        </ul>
        <article className='au-article work-gallery-article'>
          <h2 className='au-h2'>
            Experiencias de contenido
          </h2>
          <h3 className='au-h3'>
            Ideas que hacen bien
          </h3>
          <p className='au-p'>
            Creamos experiencias de contenido desde el bienestar digital. ¡Queremos contar con las tuyas!
          </p>
        </article>
      </section>
      {/* TIME SECTION */}
      <section className='au-section time'>
        <h3 className='au-h3'>
          Revisa si el tiempo que pasas frente a una pantalla es el adecuado
        </h3>
        <div className='au-bar'>
          <button type='button' className='au-button bar-button'/>
        </div>
        <p className='au-p'>
          Cantidad de horas saludable
        </p>
      </section>
      {/*OTHER SECTION */}
      <section className='au-section other'>
        <ul className='au-ul slider cards phone'>
          <li className='au-li slider-element'>
            <article className='au-article slider-article active'>
              <h4 className='au-h4 slider-article-title'>
                Respeta tu tiempo de ocio diario 1
              </h4>
              <img src='#' alt='avatar'/>
              <i className='aurea-font like'/>
              <i className='aurea-font link'/>
              <p className='au-p slider-article-description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus.
              </p>
            </article>
          </li>
          <li className='au-li slider-element'>
          <article className='au-article slider-article'>
              <h4 className='au-h4 slider-article-title'>
                Respeta tu tiempo de ocio diario 2
              </h4>
              <img src='#' alt='avatar'/>
              <i className='aurea-font like'/>
              <i className='aurea-font link'/>
              <p className='au-p slider-article-description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus.
              </p>
            </article>
          </li>
          <nav className='au-nav slider-controllers'>
            <ul className='au-ul nav-list'>
              <li className='au-li nav-list-element back'>
                <i className='aurea-font caret'/>
              </li>
              <li className='au-li nav-list-element next'>
                <i className='aurea-font caret'/>
              </li>
            </ul>
          </nav>
        </ul>
        <article className='au-article other-article'>
          <h2 className='au-h2'>
            Nómadas digitales
          </h2>
          <p className='au-p other-article-description'>
            Revisa si el tiempo que pasas frente a una pantalla es el adecuado
          </p>
          <i className='aurea-font arrow'/>
          <a className='au-a'>
            @áureacontent
          </a>
        </article>
      </section>
      {/*NEWSLETTER SECTION */}
      <section className='au-section newsletter'>
        <h2 className='au-h2 newsletter'>
          Newsletter
        </h2>
        <p className='au-p newsletter-description'>
          Entérte de nuestras novedades
        </p>
        <div className='au-input-component'>
          <input type='text' className='au-input' placeholder='@correo'/>
          <p className='au-p input-validtation-message'>
            <i className='aurea-font like'/>
            Validaciones
          </p>
        </div>
        <button type='button' className='au-button'>suscribirme</button>
      </section>
      {/* METHODOLOGY SECTION */}
      <section className='au-section methodology'>
        <article className='au-article work-gallery-article'>
          <h2 className='au-h2'>
            Metodología Áurea
          </h2>
          <p className='au-p'>
            Creamos experiencias de contenido desde el bienestar digital.
          </p>
        </article>
        <ul className='au-ul cards'>
          <li className='au-li card-element'>
            <article className='au-article card-article'>
              <i className='aurea-font smile'/>
              <p className='au-p card-article-description'>
                Asesoría
              </p>
            </article>
          </li>
          <li className='au-li card-element'>
            <article className='au-article card-article'>
              <i className='aurea-font love'/>
              <p className='au-p card-article-description'>
                Diseño UX-UI
              </p>
            </article>
          </li>
          <li className='au-li card-element'>
            <article className='au-article card-article'>
              <i className='aurea-font moon'/>
              <p className='au-p card-article-description'>
                Soporte
              </p>
            </article>
          </li>
          <li className='au-li card-element'>
            <article className='au-article card-article'>
              <i className='aurea-font clock'/>
              <p className='au-p card-article-description'>
                Contenido
              </p>
            </article>
          </li>
          <li className='au-li card-element'>
            <article className='au-article card-article'>
              <i className='aurea-font alarm'/>
              <p className='au-p card-article-description'>
                Social Ads
              </p>
            </article>
          </li>
          <li className='au-li card-element'>
            <article className='au-article card-article'>
              <i className='aurea-font email'/>
              <p className='au-p card-article-description'>
                Analítica
              </p>
            </article>
          </li>
        </ul>
      </section>
      {/* CONTACT SECTION */}
      <section className='au-section contact'>
        <h2 className='au-h2'>
          Comencemos
        </h2>
        <p className='au-p'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
        </p>
        <form>
          <div className='au-input-component'>
            <input type='text' className='au-input' placeholder='nombre'/>
            <p className='au-p input-validtation-message'>
              <i className='aurea-font like'/>
              Validaciones
            </p>
          </div>
          <div className='au-input-component'>
            <input type='text' className='au-input' placeholder='@correo'/>
            <p className='au-p input-validtation-message'>
              <i className='aurea-font like'/>
              Validaciones
            </p>
          </div>
          <div className='au-textarea-component'>
            <textarea className='au-textarea' placeholder='cuéntanos un poco de tu proyecto'/>
            <p className='au-p textarea-validtation-message'>
              <i className='aurea-font like'/>
              Validaciones
            </p>
          </div>
          <button type='button' className='au-button disabled' disabled>Enviar</button>
        </form>
      </section>
      {/* CONTACT SECTION */}
      <footer className='au-section contact'>
        <div className='au-fragment'>
          <h3 className='au-h3'>
            Filosofía
          </h3>
          <p className='au-p'>
            Somos nómades digitales y estamos seguros que un buen resultado se logra en cualquier momento o lugar; que un proyecto exitoso no es el que tiene más horas, si no al que se le dedica más corazón.
            <br/>
            Nos mueve el equilibrio, el respeto y el amor por los detalles.  Somos defensores de las causas nobles. Respetamos límites. Somos curiosos.
            <br/>
            Creemos que una buena idea merece ser bien comunicada. Que esas que hacen bien al mundo no deberían desvanecerse. Nos gusta contar historias y queremos contar la tuya.
          </p>
        </div>
        <div className='au-fragment'>
          <nav className='au-nav footer-nav'>
            <ul className='au-ul nav-list'>
              <li className='au-li nav-list-element'>
                <a className='au-a nav-list-link'>
                  Nosotros
                </a>
              </li>
              <li className='au-li nav-list-element'>
                <a className='au-a nav-list-link'>
                  Preguntas frecuentes
                </a>
              </li>
              <li className='au-li nav-list-element'>
                <a className='au-a nav-list-link'>
                  Cotizaciones
                </a>
              </li>
              <li className='au-li nav-list-element'>
                <a className='au-a nav-list-link'>
                  Contacto
                </a>
              </li>
              <li className='au-li nav-list-element'>
                <a className='au-a nav-list-link'>
                  Trabaja con nosotros
                </a>
              </li>
              <li className='au-li nav-list-element'>
                <a className='au-a nav-list-link'>
                  Av. Evergreen 742, Springield. USA.
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='au-fragment'>
          <a className='au-a'>
            <img src='#' alt='logo agencia Aurea'/>
          </a>
          <ul className='au-ul social-links'>
            <li className='au-li social-links-element'>
              <a className='au-a social-link'>
                <i className='aurea-font fb'/>
              </a>
            </li>
            <li className='au-li social-links-element'>
              <a className='au-a social-link'>
                <i className='aurea-font in'/>
              </a>
            </li>
            <li className='au-li social-links-element'>
              <a className='au-a social-link'>
                <i className='aurea-font ig'/>
              </a>
            </li>
            <li className='au-li social-links-element'>
              <a className='au-a social-link'>
                <i className='aurea-font tw'/>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}
export default Home