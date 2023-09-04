import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/DownloadApp.css'
import playstore from '../../assets/images/playstore.png';
import applestore from '../../assets/images/applestore.png';

const DownloadApp = () => {

  return (
    <div className='downloadapp' >
        <div className='dwncontainer'>
            <div className='downloadForm'>Download Form</div>
            <Link to='https://play.google.com/store/apps/details?id=com.meesho.supply&hl=en_IN&gl=US&pli=1'>
              <div className='playstore'>
                <img src={playstore} width='180px' height='52px'alt="play_store"/>
              </div>
            </Link>
            <Link to='https://apps.apple.com/us/app/meesho-online-shopping/id1457958492'>
              <div className='applestore'>
                <img src={applestore} width='180px' height='52px' alt="apple_store"/>
              </div>
            </Link>     
        </div>
    </div>
  )
}

export default DownloadApp;