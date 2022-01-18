import * as types from "./actionTypes"

export default function createCourse(course:any) {
    return {type: types.CREATE_COURSE, course};
}

