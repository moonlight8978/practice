import React, { useEffect, useState, memo } from "react";

function Teachers() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch("/teachers.json")
      .then((response) => response.json())
      .then((data) => setTeachers(data));
  }, []);

  return (
    <section>
      {teachers.map((teacher) => (
        <div key={teacher.id}>
          <span>{teacher.id}</span>
          <span>{teacher.name}</span>
        </div>
      ))}
    </section>
  );
}

export default memo(Teachers);
