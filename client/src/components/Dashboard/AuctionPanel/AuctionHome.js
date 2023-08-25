import React, { useState } from 'react'
import './AuctionHome.css'
import { BiBitcoin } from "react-icons/bi";
import { GiThreeFriends } from "react-icons/gi";
import { LiaUserPlusSolid } from "react-icons/lia";
import Biting from './Biting/Biting'
import Players from './Players/Players'
import Teams from './Teams/Teams'
import Searchplayer from './Players/Searchplayer';

function AuctionHome({ playersTeamsEdit,bidingPanelView,setteamsedit,setdefaultteamname,setdefaultteamownername,setdefaultteamowneremail,setplayerName,setplayerage,setplayerskills}) {
  const [searchInput, setSearchInput] = useState('');
  const auctionSwitchComponent = [
    {
      index: 0,
      title: "Biting",
      icons: <BiBitcoin />
    },
    {
      index: 1,
      title: "Teams",
      icons: <GiThreeFriends />
    },
    {
      index: 2,
      title: "Players",
      icons: <LiaUserPlusSolid />
    }
  ]
  const switchingpanel = [<Biting searchinput={searchInput} bidingPanelView={bidingPanelView} />, <Teams playersTeamsEdit={playersTeamsEdit} setteamsedit={setteamsedit} setdefaultteamname={setdefaultteamname}   setdefaultteamownername={setdefaultteamownername} setdefaultteamowneremail={setdefaultteamowneremail}
  />, <Players playersTeamsEdit={playersTeamsEdit} setplayerName={setplayerName} setplayerage={setplayerage} setplayerskills={setplayerskills} />]
  const [colorMenu, setColorMenu] = useState(0);
  const [switchpanelcount, setSwitchpanlecount] = useState(0);
  return (
    <div className='AuctionHome'>
      <div className='AuctionHeader'>
        <div className='AuctionHeaderHeading'><h6>Auction Name</h6></div>
        <div className='AuctionHeaderSearch'><input onChange={(e) => setSearchInput(e.target.value)} placeholder=' Search Players ...' type='text'></input></div>
      </div>
      <Searchplayer searchInput={searchInput}/>
      <div className='Auctionmenu'>
        {auctionSwitchComponent.map((val, index) => {
          return (<div className={colorMenu === val.index ? 'menuItemTrue' : 'menuItemFalse'} onClick={(e) => { setSwitchpanlecount(val.index); setColorMenu(val.index) }} key={index}>{val.icons}{val.title}</div>)
        })}
      </div>
      <div className='AuctionContainer'>
        {switchingpanel[switchpanelcount]}
      </div>
    </div>
  )
}

export default AuctionHome