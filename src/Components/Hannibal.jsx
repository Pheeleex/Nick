import React from 'react'
import { motion } from 'framer-motion';

const Hannibal = () => {
  return (
    <motion.div
        initial={{y:0}}
        whileInView={{y:[90, 0]}}
        transition={{duration: 3}}
        className='hannibal'>
        <p>"No one can be fully aware of another human being unless we love them. 
            By the love we see potential in our beloved. Through that love, we allow our beloved see
            our potential. Expressing that love, our beloved's potential comes true." <br />
                <span> - Hannibal Lecter </span>
            </p>
    </motion.div>
  )
}

export default Hannibal