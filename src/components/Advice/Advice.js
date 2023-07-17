import React from 'react';
import './Advice.css';

//hook 
import useAdviceAPI from '../../hooks/useAdviceAPI';

//images
import pattern_divider_desktop from '../../images/pattern-divider-desktop.svg';
import pattern_divider_mobile from '../../images/pattern-divider-mobile.svg';
import icon_dice from '../../images/icon-dice.svg';

const Advice = () => {

    const { advice, adviceId, isLoading, error } = useAdviceAPI();

  return (
    <div className='main'>
        <div className='advice-container'>
            {isLoading ? (
              <p>Loading...</p>  
            ) : (
              <>
                <p id='adviceId'>Advice #{adviceId}</p>
                <div className='advice'>
                  <p id='advice'>"{advice}"</p>
                </div>
                <div className='img'>
                  <img id='desktop-divider' src={pattern_divider_desktop} alt='Divider'/>
                  <img id='mobile-divider' src={pattern_divider_mobile} alt='Divider'/>
                  <img id='icon-dice' src={icon_dice} alt='icon dice'/>
                </div>
              </>
            )
            }
              {error && <p id='loading'>Error: {error}</p>}
        </div>
    </div>
  )
}

export default Advice