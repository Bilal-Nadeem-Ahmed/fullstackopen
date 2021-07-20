const Notification = ({errorMessage}) => {
    if(errorMessage ===null){
        return null
    }
    return ( 
        <div>
            <p className='errorP'>
                {errorMessage}
            </p>
        </div>
     );
}
 
export default Notification;