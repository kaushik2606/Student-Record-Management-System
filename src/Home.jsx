import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Home = () => {
  const [data, setData] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const navigate = useNavigate();

  const showData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/students");

      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    showData();
  }, []);

  const handleEditClick = async (studentId) => {
    navigate(`/editStudents/${studentId}`);
  };

  const handleViewClick = async (studentId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/students/${studentId}`,
      );

      setSelectedStudent(response.data.data);
    } catch (error) {
      console.error("Error fetching student:", error);
      alert("Unable to fetch student details.");
    }
  };

  const handleDeleteClick = async (studentId) => {
    const isConfirm = window.confirm("Do you want to delete student record ?");
    
    if (isConfirm) {
      try {
        await axios.delete(`http://localhost:5000/api/students/${studentId}`);

        setSelectedStudent(null);
        // alert("Student record deleted successfully!");
        Swal.fire({
          title: "Deleted!",
          text: "Student record deleted successfully.",
          icon: "success",
        });
        showData();
      } catch (error) {
        console.error("Error fetching student:", error);
        alert("Unable to fetch student details.");
      }
    } else {
      showData();
    }
  };

  return (
    <div className="container py-4 py-md-5">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
        <div>
          <p className="text-uppercase text-primary fw-semibold mb-2">
            Overview
          </p>
          <h2 className="fw-bold mb-0">All Students</h2>
        </div>
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={() => navigate("/addStudents")}
        >
          Add Student
        </button>
      </div>

      <div className="student-table-card">
        <div className="table-responsive">
          <table className="table table-bordered align-middle mb-0">
            <thead>
              <tr className="table-success">
                <th>Sr. No.</th>
                <th>Student Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone No.</th>
                <th>Course</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={item._id || item.studentId}>
                  <td>{index + 1}</td>
                  <td>{item.studentId}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.course}</td>

                  <td
                    className={`fw-bold ${
                      item.status === "Active"
                        ? "text-success"
                        : item.status === "Inactive"
                          ? "text-primary"
                          : item.status === "Graduated"
                            ? "text-secondary"
                            : ""
                    }`}
                  >
                    {item.status}
                  </td>

                  <td>
                    <div className="table-actions d-flex flex-wrap gap-2">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={() => handleViewClick(item.studentId)}
                        aria-label={`View details for ${item.firstName} ${item.lastName}`}
                      >
                        View
                      </button>

                      <button
                        type="button"
                        onClick={() => handleEditClick(item.studentId)}
                        className="btn btn-success btn-sm"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDeleteClick(item.studentId)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedStudent && (
        <section
          className="student-details-card mt-4"
          aria-labelledby="student-details-heading"
          aria-live="polite"
        >
          <div className="student-details-header">
            <div>
              <p className="text-uppercase text-primary fw-semibold mb-1">
                Student profile
              </p>
              <h3 className="h4 fw-bold mb-0" id="student-details-heading">
                {selectedStudent.firstName} {selectedStudent.lastName}
              </h3>
            </div>
            <div className="student-details-actions">
              <button
                type="button"
                className="btn btn-success"
                onClick={() => handleEditClick(selectedStudent.studentId)}
              >
                Edit Student
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setSelectedStudent(null)}
              >
                Close
              </button>
            </div>
          </div>

          <div className="row g-3">
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="detail-box">
                <span className="detail-label">Student ID</span>
                <strong>{selectedStudent.studentId || "—"}</strong>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="detail-box">
                <span className="detail-label">Email</span>
                <strong>{selectedStudent.email || "—"}</strong>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="detail-box">
                <span className="detail-label">Phone</span>
                <strong>{selectedStudent.phone || "—"}</strong>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="detail-box">
                <span className="detail-label">Date of birth</span>
                <strong>
                  {selectedStudent.dateOfBirth
                    ? String(selectedStudent.dateOfBirth).slice(0, 10)
                    : "—"}
                </strong>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="detail-box">
                <span className="detail-label">Gender</span>
                <strong>{selectedStudent.gender || "—"}</strong>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="detail-box">
                <span className="detail-label">Status</span>
                <strong>{selectedStudent.status || "—"}</strong>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="detail-box">
                <span className="detail-label">Course</span>
                <strong>{selectedStudent.course || "—"}</strong>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="detail-box">
                <span className="detail-label">Department</span>
                <strong>{selectedStudent.department || "—"}</strong>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="detail-box">
                <span className="detail-label">Semester</span>
                <strong>{selectedStudent.semester || "—"}</strong>
              </div>
            </div>
            <div className="col-12">
              <div className="detail-box">
                <span className="detail-label">Address</span>
                <strong>{selectedStudent.address || "—"}</strong>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
