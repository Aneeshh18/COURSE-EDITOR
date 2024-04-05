import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { COURSE_API } from "../utils/api";

const EditCoursePage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${COURSE_API}`);
        if (!response.ok) {
          throw new Error("Failed to fetch course data");
        }
        const data = await response.json();
        console.log(data);
        setCourse(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching course:", err);
        setLoading(false);
      }
    };
    fetchData();
  }, [courseId]);

  if (loading) return <div>Loading...</div>;
  if (!course) return <div>Course not found.</div>;

  return (
    <div>
      <h1>Edit Course: {course.courseName}</h1>
    </div>
  );
};

export default EditCoursePage;
