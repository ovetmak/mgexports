import React from 'react'
import Title from './Title'
import aboutImg from '../images/map-MGE.png'

const About = () => {
  return (
    <section className="section contacts" id="contacts">
      <Title title="" subTitle="контакти" />

      <div className="section-center about-center">
        <div className="contacts-img">
          <img src={aboutImg} className="contacts-photo" alt="awesome beach" />
        </div>
        <article className="contacts-info">
          <h3>Адреса</h3>
          <p>53 Shields Rd W, Newcastle upon Tyne NE6 1EJ, UK</p>
          <h3>Телефон</h3>
          <p>+44 191 228 4900</p>
          <h3>Email</h3>
          <p>sales@mge.com</p>
          <p>
            Якщо у Вас виникнуть будь-які питання стосовно туру, звʼяжіться з
            нами зручним для Вас способом. Або залиштк ваші контактні дані і
            наші менеджери обовʼязково звʼяжуться з Вами!
          </p>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            @instagram
          </a>
        </article>
      </div>
    </section>
  )
}

export default About
