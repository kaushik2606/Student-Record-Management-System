import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditStudents = () => {
  const initialValue = {
    studentId: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    gender: "",
    course: "",
    department: "",
    semester: "",
    status: "",
  };

  const { studentId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialValue);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/students/${studentId}`,
        );

        const student = response.data.data;
        setFormData({
          ...student,
          dateOfBirth: student.dateOfBirth
            ? String(student.dateOfBirth).slice(0, 10)
            : "",
        });
      } catch (error) {
        console.error("Error fetching student:", error);
      }
    };

    fetchStudent();
  }, [studentId]);

  const inputHandle = (e) => {
    const temp = { ...formData };
    temp[e.target.name] = e.target.value;
    setFormData(temp);
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:5000/api/students/${studentId}`,
        formData,
      );
      Swal.fire({
        title: "Updated!",
        text: "Student record updated successfully.",
        icon: "success",
      });
      navigate("/");
    } catch (error) {
      console.error("Error updating record:", error);
    }
  };

  return (
    <div className="container py-4 py-md-5">
      <div className="student-form-card">
        <div className="mb-4">
          <h4 className="fw-bold mb-0">Update Student Record</h4>
        </div>

        <form onSubmit={handleEdit} className="student-form row g-3">
          <div className="col-12 col-md-6">
            <label htmlFor="studentId" className="form-label">
              Student Id
            </label>
            <input
              type="number"
              className="form-control shadow-sm"
              id="studentId"
              name="studentId"
              value={formData.studentId}
              onChange={inputHandle}
              disabled={true}
            />
          </div>

          <div className="col-12 col-md-6">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control shadow-sm"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={inputHandle}
            />
          </div>

          <div className="col-12 col-md-6">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control shadow-sm"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={inputHandle}
            />
          </div>

          <div className="col-12 col-md-6">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control shadow-sm"
              id="email"
              name="email"
              value={formData.email}
              onChange={inputHandle}
            />
          </div>

          <div className="col-12 col-md-6">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="number"
              className="form-control shadow-sm"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={inputHandle}
            />
          </div>

          <div className="col-12 col-md-6">
            <label htmlFor="dateOfBirth" className="form-label">
              Date Of Birth
            </label>
            <input
              type="date"
              className="form-control shadow-sm"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={inputHandle}
            />
          </div>

          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control shadow-sm"
              id="address"
              name="address"
              value={formData.address}
              onChange={inputHandle}
            />
          </div>

          <div className="col-12 col-md-6">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              className="form-select shadow-sm"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={inputHandle}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="col-12 col-md-6">
            <label htmlFor="course" className="form-label">
              Course
            </label>
            <select
              className="form-select shadow-sm"
              id="course"
              name="course"
              value={formData.course}
              onChange={inputHandle}
            >
              <option value="">Select Course</option>
              <option value="BCA">BCA</option>
              <option value="BBA">BBA</option>
              <option value="B.Com">B.Com</option>
              <option value="B.Sc">B.Sc</option>
              <option value="B.A.">B.A.</option>
              <option value="MCA">MCA</option>
              <option value="MBA">MBA</option>
            </select>
          </div>

          <div className="col-12 col-md-6">
            <label htmlFor="department" className="form-label">
              Department
            </label>
            <select
              className="form-select shadow-sm"
              id="department"
              name="department"
              value={formData.department}
              onChange={inputHandle}
            >
              <option value="">Select Department</option>
              <option value="Computer Applications">
                Computer Applications
              </option>
              <option value="Computer Science">Computer Science</option>
              <option value="Information Technology">
                Information Technology
              </option>
              <option value="Commerce">Commerce</option>
              <option value="Management">Management</option>
              <option value="Science">Science</option>
              <option value="Arts">Arts</option>
            </select>
          </div>

          <div className="col-12 col-md-6">
            <label htmlFor="semester" className="form-label">
              Semester
            </label>
            <select
              className="form-select shadow-sm"
              id="semester"
              name="semester"
              value={formData.semester}
              onChange={inputHandle}
            >
              <option value="">Select Semester</option>
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 3</option>
              <option value="4">Semester 4</option>
              <option value="5">Semester 5</option>
              <option value="6">Semester 6</option>
            </select>
          </div>

          <div className="col-12 col-md-6">
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <select
              className="form-select shadow-sm"
              id="status"
              name="status"
              value={formData.status}
              onChange={inputHandle}
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Graduated">Graduated</option>
            </select>
          </div>

          <div className="col-12 d-flex justify-content-end">
            <button type="submit" className="btn btn-success btn-lg px-4">
              Update Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStudents;
