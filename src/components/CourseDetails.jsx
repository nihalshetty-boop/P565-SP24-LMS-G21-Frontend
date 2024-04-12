import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/helper/firebaseClient';

function CourseDetails() {
  const { courseId } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);
  const [studentNames, setStudentNames] = useState([]);
  const [teacherInfo, setTeacherInfo] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const docRef = doc(db, 'subjects', courseId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log('Fetched course details:', data);
          setCourseDetails(data);
          if (data.StudentsList) {
            console.log('StudentsList:', data.StudentsList);
            fetchStudentNames(data.StudentsList);
          } else {
            console.log('StudentsList is empty or not present');
          }
          if (data.Teacher) {
            console.log('Teacher UserID:', data.Teacher);
            fetchTeacherInfo(data.Teacher);
          } else {
            console.log('Teacher UserID is empty or not present');
          }
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };

    const fetchStudentNames = async (studentIds) => {
      try {
        const studentNamePromises = studentIds.map(async (studentId) => {
          const studentDocRef = doc(db, 'students', studentId);
          const studentDocSnap = await getDoc(studentDocRef);
          if (studentDocSnap.exists()) {
            const studentData = studentDocSnap.data();
            return studentData.Name;
          } else {
            console.log(`Student document with ID ${studentId} does not exist`);
            return null;
          }
        });
        const studentNames = await Promise.all(studentNamePromises);
        setStudentNames(studentNames.filter(name => name !== null));
      } catch (error) {
        console.error('Error fetching student names:', error);
      }
    };

    const fetchTeacherInfo = async (teacherId) => {
      try {
        const teacherDocRef = doc(db, 'faculty', teacherId);
        const teacherDocSnap = await getDoc(teacherDocRef);
        if (teacherDocSnap.exists()) {
          const teacherData = teacherDocSnap.data();
          console.log('Teacher data:', teacherData);
          setTeacherInfo(teacherData);
        } else {
          console.log(`Faculty document with ID ${teacherId} does not exist`);
        }
      } catch (error) {
        console.error('Error fetching teacher info:', error);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  if (!courseDetails || !teacherInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 flex">
      {/* Course Details */}
      <div className="flex-1">
        <h2 className="font-bold text-4xl mb-4">{courseDetails.Name}</h2>
        <p className="mb-2">{courseDetails.Description}</p>
        <p className="font-bold mb-1">Teacher: <span className="text-lg">{teacherInfo.Name}</span></p>
        <p className="mb-1">Email: {teacherInfo.email}</p>
        <p className="mb-4">Qualification: {teacherInfo.qualification}</p>
        <button
          onClick={() => enrollInCourse(courseId)}
          className="mt-4 bg-[#0fa3b1] text-white py-2 px-4 rounded">
          Enroll
        </button>
      </div>
      
      {/* People Column */}
      <div className="flex-1 border-l pl-4">
        <h3 className="font-bold text-xl mb-4">People</h3>
        <ul className="list-disc pl-4">
          {studentNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CourseDetails;
