import Content from "./subcomponnents/Content"
import Header from "./subcomponnents/header"

const Course = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      }
    return ( <>
    <Header course={course}/>
    <Content course={course}/>
    </>);
}
 
export default Course;