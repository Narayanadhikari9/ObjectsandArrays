import React, { useState } from "react";
import coursesData from "../data/courses.json";
import styles from "./courseList.module.css";
function CourseList() {
  const [filter, setFilter] = useState("");
  const filteredCourses = coursesData.filter((course) =>
    course.Instructor.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className={styles.courseList}>
      <h2 className={styles.header}>Course List</h2>
      <section className={styles.filter}>
        <label htmlFor="filter" className="filter-label">
          Instructor:
        </label>
        <input
          type="text"
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-input"
        />
      </section>
      <ul>
        {filteredCourses.map((course) => (
          <li key={course.id}>
            <span className={styles.class}>Class</span>: {course.Class}
            <br />
            <span className={styles.teacher}>Instructor</span>:{" "}
            {course.Instructor}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
