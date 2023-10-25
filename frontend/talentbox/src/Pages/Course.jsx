import React, { useEffect, useState } from "react";
import "../Pages/Course.css";
import axios from "axios";

function Course() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const apiUrl = "https://talentbox-backend.onrender.com/course/courses";

    axios
      .get(apiUrl)
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);
  return (
    <div id="course">
      <div className="heading">
        <h1> Welcome to freeCodeCamp.org</h1>
      </div>
      <div className="description">
        I have not failed ,i have just found 10,000 ways that wont work
      </div>
      <div className="content">
          {courses.map((item) => (
        <div className="listing">
        <div className="logo">
            <i class="fa-brands fa-square-js"></i>
          </div>
          <div className="content">
              <p>
                {item.course}
                {item.duration}
              </p>
          </div>
        </div>
          ))}
      </div>
    </div>
  );
}

export default Course;
