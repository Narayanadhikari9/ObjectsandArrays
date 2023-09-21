import React from "react";
import studentsData from "../data/students.json";
import styles from "./studentList.module.css";
function StudentList() {
  return (
    <div className={styles.studentList}>
      <h2 className={styles.header}>List of Students</h2>
      <ul>
        {studentsData.map((student) => (
          <li key={student.id} className={styles.item}>
            <span className={styles.studentName}>Student Name</span>:{" "}
            {student.name}
            <br />
            <span className={styles.studentAge}>Student Age</span>:{" "}
            {student.age}
            <br />
            <span className={styles.course}>Courses</span>:{" "}
            <span className="student-courses">{student.courses.join(" ")}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
