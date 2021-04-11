import Part from "./subcomponents/part";
import Total from "./subcomponents/total";

const Content = ({course}) => {
    return ( 
    <>
    {course.parts.map((part)=>
      <Part key={part.id} part={part}/>
    )}
    
      <Total parts={course.parts}/>
    </>
        );
}
 
export default Content;