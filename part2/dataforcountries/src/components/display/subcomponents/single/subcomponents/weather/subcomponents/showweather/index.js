const ShowWeather = ({data}) => {
    return (   <>
        <h2>Weather</h2>
        <p><b>Temperature: {data.current.temperature}</b></p>
        <img alt ={data.current.weather_descriptions} src={data.current.weather_icons}/>
        <p><b>wind: {data.current.wind_speed} mph direction {data.current.wind_dir}</b></p>
        </>  );
}
 
export default ShowWeather;