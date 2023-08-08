import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import "../../css/Dashboardcss/History.css"
function History(props) {
  const { email_id } = props
  const email=localStorage.getItem("useremail")
  console.log(email)
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/historyauction/${email}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const userData = await response.json();
        console.log(userData)
        setUser(userData);
      }
      catch (error) {
        console.error(error.message);
      }
    };

    fetchUser();
  }, [email_id]);
  return (
    <div className='history-container'>
      <h1>Auction Details</h1>
      <div className='details'>
        <div className='heading-details'>
          <h4>Auction_name Auction_date Points_per_team Players_per_team</h4>
        </div>
        {user.map((val, index) => {
          const date = new Date(val.auction_date); // Convert to Date object
          const formattedDate = date.toISOString().split('T')[0];
          console.log("hii",formattedDate)
          return <div key={val.auction_id} className='history-details'>
            {val.auction_name} {formattedDate} {val.points_per_team} {val.players_per_team}
          </div>
        })}
      </div>
      <div className='team-details'>
        <h2>Teams</h2>
      </div>
    </div>

  )
}

export default History