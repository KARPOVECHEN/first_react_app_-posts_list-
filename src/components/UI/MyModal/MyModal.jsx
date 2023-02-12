import React from "react";
import cl from './MyModal.module.css';

const MyModal = ({children, visible, setVisible}) => {
    
    const rootClassed =[cl.myModal]
    if (visible){
        rootClassed.push(cl.active);
    }

    return(
       <div className={rootClassed.join(' ')} onClick={()=>setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e)=> e.stopPropagation()}> 
                {children}
            </div>
       </div>
    )
}

export default MyModal;
