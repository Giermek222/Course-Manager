import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";


export  function createCourse(course:any) {
    return {type: types.CREATE_COURSE, course};
}
export function loadCourseSuccess(courses : any) {
    return { type: types.LOAD_COURSES_SUCCESS, courses}
}
export function loadCourses() {
    console.log("I am here")
    return function(dispatch : any) {
        return courseApi
            .getCourses()
            .then(courses => {
                dispatch(loadCourseSuccess(courses));
            })
            .catch(error => {throw error;});

    };
}