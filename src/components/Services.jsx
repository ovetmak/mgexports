import React from 'react'
import Title from './Title'
import { servicesData } from '../data'

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="чому варто" subTitle="обрати нас" />
      <h3 className="service-subtitle">
        Англійці дуже відповідально ставляться до технічного стану своєї техніки
        та сервісу обслуговування
      </h3>
      <div className="section-center services-center">
        {servicesData.map((service) => {
          const { id, h4, p, icon } = service
          return (
            <article key={id} className="service">
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{h4}</h4>
                <p className="service-text">{p}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
