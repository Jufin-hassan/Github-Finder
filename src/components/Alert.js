import React,{useContext} from 'react'
import alertContext from '../context/alert/alertContext'

const Alert = () => {
    const {alert} = useContext(alertContext)

    if(alert !== null){
        return (
            <div className={"alert"}>   
                <h3> <i class="fas fa-exclamation-circle"></i>{alert.msg}</h3>
            </div>
        )
    }else{
        return null;
    }
}

export default Alert;
