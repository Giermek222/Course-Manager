import { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import createCourse from "../../redux/actions/courseActions";

const CoursesPage = (props : any) => {

    const [course, changeCourse] = useState({title: ''});

    const handleChange = (event : any) => {
        changeCourse({...course, title: event.target.value})
    }

    const handleSubmit = (event:any) => {
        event.preventDefault();
        props.createCourse(course)
    }

    return (
    <form onSubmit={(event) => handleSubmit(event)}>
        <h2>Courses Page</h2>
        <h3>Add course</h3>
        <input
        type="text"
        placeholder="add course name"
        value={course.title}
        onChange={(event) => handleChange(event)}
        />
        <input type='submit' value='save'/>
        {props.courses.map((course: { title: string}) => 
            <div key={course.title} >{course.title}</div>)}
    </form>
    )
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    createCourse: PropTypes.func
};
  
function mapStateToProps(state: any) {
    return {
        courses: state.courses
    }
}

function  mapDispatchToProps(dispatch : any) {
    return {
        createCourse: (course: object) => dispatch(createCourse(course)) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage)