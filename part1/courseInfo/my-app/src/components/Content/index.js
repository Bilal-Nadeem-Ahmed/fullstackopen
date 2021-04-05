import Part from "./components/Part";

const Content = (props) => {
    console.log(props)
    return ( 
        <>
        <Part
        part={props.part1.name}
        exercise={props.part1.exercises}
        />
        <Part
        part={props.part2.name}
        exercise={props.part2.exercises}
        />
         <Part
        part={props.part3.name}
        exercise={props.part3.exercises}
        />
        </>
     );
}
 
export default Content;