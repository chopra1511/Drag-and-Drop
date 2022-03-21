import React from "react";


import "./Tickets.css";

function Tickets({ id, oID }) {
  return (
        <div className="ticks">
          <div className="header">
            <p>#{id}</p>
            <span>Response Due</span>
          </div>
          <div className="order">
            <p>Order No: #{oID}</p>
          </div>
          <div className="detail">
            <p>
              Paratha Side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa (1 Nos),
              Butter Roti (5 Nos)
            </p> 
          </div>
          <div className="footer">
            <div className="date">
              <p>DUE: MAY 31, 2019 3:39 PM</p>
            </div>
            <div className="to">
              <p>ASSIGNED TO</p>
            </div>
          </div>
        </div>
  );
}

export default Tickets;
