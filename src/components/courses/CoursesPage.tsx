import { connect } from "react-redux";
import PropTypes from "prop-types";
import {createCourse, loadCourses } from "../../redux/actions/courseActions";
import { useEffect } from "react";

const CoursesPage = (props : any) => {

    useEffect (() => {
        props.loadCourses().catch((error : any) => {alert("Loading courses failed" + error);});
    }, [])
        
    

    return (
<>
        
        <h2>Courses Page</h2>
        
        {props.courses.map((course: { title: string}) => 
            <div key={course.title} >{course.title}</div>)}
   </>
    )
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    createCourse: PropTypes.func,
    loadCourses: PropTypes.func
};
  
function mapStateToProps(state: any) {
    return {
        courses: state.courses
    }
}

function  mapDispatchToProps(dispatch : any) {
    console.log("I am also here")
    return {
        createCourse: (course: object) => dispatch(createCourse(course)),
        loadCourses: () => dispatch(loadCourses()) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage)


