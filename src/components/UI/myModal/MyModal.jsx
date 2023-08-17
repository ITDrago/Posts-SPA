import React from 'react'
import classes from './MyModal.module.css'
const MyModal = ({children, visiblle, setVisible}) => {

const rootClasses = [classes.myModal]
if (visiblle){
    rootClasses.push(classes.active)
}
  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
        <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
            {children}
        </div>  
    </div>
  )
}

export default MyModal