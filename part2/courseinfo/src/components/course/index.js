import Content from "./subcomponnents/Content"
import Header from "./subcomponnents/header"

const Course = ({course}) => {
   
    return ( <>
    
       <Header key={course.name} course={course}/> 
      <Content key={course.id} course={course}/>
      
  

    </>);
}
 
export default Course;