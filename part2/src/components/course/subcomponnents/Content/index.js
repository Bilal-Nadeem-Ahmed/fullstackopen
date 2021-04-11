import Part from "./subcomponents/part";
import Total from "./subcomponents/total";

const Content = ({course}) => {
    return ( 
    <>
    <Part part={course.parts[0]} />
      <Part part={course.parts[1]} />
      <Part part={course.parts[2]} />
      <Total parts={course.parts}/>
    </>
        );
}
 
export default Content;