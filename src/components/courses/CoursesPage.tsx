import React, { useState } from "react";
const CoursesPage = () => {

    const [course, changeCourse] = useState({title: ''})

    const handleChange = (event : any) => {
        changeCourse({...course, title: event.target.value})
    }

    return (<div>
        <h2>Courses Page</h2>
        <h3>Add course</h3>
        <input
        type="text"
        placeholder="add course name"
        value={course.title}
        onChange={(event) => handleChange(event)}
        />
        <input type='submit' value='save'/>
        </div>
    )
}

export default CoursesPage