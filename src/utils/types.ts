export interface Course {
  courseId: string;
  instructorName: string;
  courseName: string;
  tags: string[];
  students: { name: string }[];
}
