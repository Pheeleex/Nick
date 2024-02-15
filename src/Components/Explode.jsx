import React, {useState} from 'react'
import Confetti from 'react-confetti';

const Explode = () => {
  const [showButtons, setShowButtons] = useState(true);
  const [isClicked, setIsClicked] = useState(false)

  return (
    <div>
        <p>You fart me too?</p>
        <div className="buttons">
            <button className='explode' onClick={()=> setIsClicked(prev => !prev)}>yes</button>
            {showButtons &&<button className='move' onClick={() => setShowButtons(false)} 
            >no</button>}
        </div>
        {isClicked && <Confetti />}
    </div>
  )
}

export default Explode