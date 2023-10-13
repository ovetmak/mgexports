import React from 'react'
import { toursData } from '../data'
import Title from './Title'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="техніка" subTitle="в наявності" />

      <div className="section-center featured-center">
        {toursData.map((tour) => {
          const { id, img, date, h4, text, length, price } = tour
          return (
            <article key={id} className="tour-card">
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{h4}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                  {/* <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {place}
                  </p> */}
                  {/* <p>{length}</p>
                  <p>{price}</p> */}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Tours
