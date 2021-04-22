const Message = ({message}) => {
    
    const style ={
       
            color: 'green',
            background: 'lightgrey',
            fontSize: 20,
            borderStyle: 'solid',
            borderRadius: 5,
            padding: 10,
            marginBottom: 10
          
    }   
    
    
    return ( <p style={style}>{message}</p> );
}
 
export default Message;