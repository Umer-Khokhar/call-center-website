import React from 'react'

export const Trucks = ({truck1, truck2, truck3}) => {
  return (
    <div className='trucks__section'>
        <div className="truck">
          <img src={truck1} alt="truck_1 image" />
          <div className="info-1">
            <h3><span>5% </span>per week/truck</h3>
            <p>Basic Services</p>
          <button>get now</button>
          </div>
        </div>
        <div className="truck">
          <img src={truck2} alt="truck_2 image" />
          <div className="info-2">
            <h3><span>6% </span>per week/truck</h3>
            <p>Standard Services</p>
          <button>get now</button>
          </div>
        </div>
        <div className="truck">
          <img src={truck3} alt="truck_3 image" />
          <div className="info-3">
            <h3><span>7% </span>per week/truck</h3>
            <p>Advanced Services</p>
          <button>get now</button>
          </div>
        </div>
    </div>
  )
}
