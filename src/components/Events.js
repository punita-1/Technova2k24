import React from 'react'
import { Link } from 'react-router-dom'
import { featured } from '../../src/Data'
const Events = () => {
  return (
    <>
      <section class="work" id="work" style={{ backgroundColor: 'black', height:'1200px', borderRadius: '20px'}}>
        <div>
          <h2 class="heading" s style={{ margin: '5% 0', color: 'white' }}>
            EVENTS <span></span>
          </h2>
        </div>

        <div class="page-content">
          {featured.map((item, index) => {
            return (
              <Link
                to={`/EventDetail/${item.id}`}
                style={{
                  textDecoration: 'none', color: 'inherit', width: '30%', marginBottom: '20px', borderRadius: '22px',
                  // overflow: 'hidden', 
                  transition: 'transform 0.3s ease'
                }}
                key={item.id}
              >
                {/* <div class="card1" style={{ borderRadius: '22px', marginBottom: index !== featured.length - 1 ? '20px' : 0, marginLeft: '20px' }}> */}
                <div
                  class="card1"
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                  style={{ backgroundColor: 'whitesmoke', color: 'black', padding: '1rem', borderRadius: '22px', marginBottom: index !== featured.length - 1 ? '20px' : 0 }}
                >
                  <div class="content">
                    <h2 class="heade" style={{ color: 'white' }}>{item.eventName}</h2>
                    <p class="description" style={{ color: 'white' }}>{item.eventDescription.slice(0, 100)}</p>
                    <Link to={`/EventDetail/${item.id}`}><button class="btnsign" id={item.id}>Register</button></Link>
                  </div>
                </div>
              </Link>

            )
          })}
        </div>

        <div class="viewall" style={{ marginTop: '3%' }}>
          <Link to="/AllEvent" class="btn10" >
            <span>View All</span>
            {/* <i class="fas fa-arrow-right" style={{ padding: '3px' }}></i> */}
          </Link>
        </div>
      </section>
    </>
  )
}

export default Events


