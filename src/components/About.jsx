import React from 'react'
import Title from './Title'
import aboutImg from '../images/about.jpeg'

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="про" subTitle="нас" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>Hello! We are from 🇬🇧</h3>
          <p>
            Ми команда спеціалістів з підбору вживаної сільськогосподарської,
            будівельної, вантажної, дорожньо-будівельної техніки у
            Великобританії.
          </p>
          <p>
            На сьогоднішній день Ми вже реалізували більше 30 проектів з підбору
            різноманітної техніки для щасливих клієнтів з багатьох регіонів
            України.
          </p>
          <p>
            Головними перевагами в придбанні техніки саме з Великобританії є:
          </p>
          <ul>
            <li>
              - вся техніка має розгорнуту історію власності та експлуатації
            </li>
            <li>- вартість техніки значно нижча у порівнянні з Україною</li>
            <li>- вся техніка проходить регулярне технічне обслуговування</li>
            <li>
              - ремонт та обслуговування виконується виключно оригінальними
              запчастинами та рідинами
            </li>
          </ul>
          <p></p>
          <p>
            Якщо Ви саме шукаєте техніку для вашого підприємства, звʼяжіться з
            нами і Ми обовʼязково запропонуємо Вам гідні варіанти
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
