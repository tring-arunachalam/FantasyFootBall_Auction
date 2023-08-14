import React, { useEffect, useState } from 'react'
import "../Teams/Teamdetails.css"
import axios from 'axios'
import profile from "../../../../Image/no-profile-img.gif"
import { useNavigate } from 'react-router-dom'
const Teams = () => {
const [teamlistdetails,setteamlistdetails]=useState([])
const email = localStorage.getItem("useremail")
const auction_id = localStorage.getItem("AuctionId")
const navigate=useNavigate();
   useEffect(()=> {
        axios.get(`http://localhost:5000/api/teamlist/view/${auction_id}/${email}`)
          .then((response) => {
            setteamlistdetails(response.data)
          })
          .catch((err) => {
            console.error(err);
          })
      },[])
      const handleclickgoteam=()=>{
navigate('/user/dashboard/teamlist')
      }
  return (
    <div className='teamdetails-container-list'>
        <div className='teamdetails-whole'>
            <div className='teamdetails-title'>
                <div>TeamList Details</div>
                <div><button onClick={()=>{handleclickgoteam()}}>Create team</button></div>
            </div>
            <div className='teamdetails-view'>
            {
            teamlistdetails.map((val, index) => {
              return (
              
                <div key={index} className='team-listview-details'>
                  <div className='team-auction-image'>
                    {val.team_image ? (
                      <img src={`http://localhost:5000/uploads/${val.team_image}`} alt={`Team ${val.team_id}`} />
                    ) : (
                      <img src={profile} alt='Default' />
                    )}
                   
                  </div>
                  <div className='team-name-details'>{val.team_name}</div>
                  <div className='team-owner-details'>{val.team_owner_name}</div>
                  <div>{val.balance_amount}</div>
                  <button className='team-edit'>edit</button> 
                </div>
              )
            })
          }
            </div>
        </div>
    
    </div>
  )
}

export default Teams