import React, { useEffect, useState } from "react";
import "../Pages/Course.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaReact , FaJsSquare,FaDatabase } from "react-icons/fa";

const iconobj = {
  "1" : <FaReact/>,
  "2" : <FaJsSquare/>,
  "3" : <FaReact/>,
  "4" : <FaReact/>,
  "5" : <FaDatabase/>,
  "6" : <FaReact/>,
  "7" : <FaReact/>,
}

function Course() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
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
        <h2> Welcome to freeCodeCamp.org</h2>
      </div>
      <div className="description">
        " I have not failed ,i have just found 10,000 ways that wont work "
        <br />
        -Thomas A. Edition
      </div>
      <div className="content">
        {courses.map((item , i) => (
          <div className="listing">
              {iconobj[item.icon_id]}
              <p className="course-content">
                {item.course}
                {item.duration}
              </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;
