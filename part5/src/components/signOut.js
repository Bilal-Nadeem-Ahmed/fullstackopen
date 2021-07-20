const SignOut = ({setUser}) => {
    const handleClick = ()=>{
        window.localStorage.clear()
        setUser(null)
    }
    return ( 
        <button onClick={handleClick}>Sign Out</button>
     );
}
 
export default SignOut;