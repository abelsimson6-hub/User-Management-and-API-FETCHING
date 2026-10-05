// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function UserDetails() {
//   const { id } = useParams();

//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const getUser = async () => {
//     try {
//       const res = await fetch(
//         `https://api.slingacademy.com/v1/sample-data/users/${id}`
//       );

//       const data = await res.json();

//       setUser(data.user);
//     } catch (err) {
//       setError("Failed to load user");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getUser();
//   }, [id]);

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   if (error) {
//     return <h2>{error}</h2>;
//   }

//   return (
//     <div>
//       <h1>User Details</h1>

//       <img
//         src={user.profile_picture}
//         width="150"
//         alt="profile"
//       />

//       <h2>
//         {user.first_name} {user.last_name}
//       </h2>

//       <p>Email: {user.email}</p>

//       <p>Phone: {user.phone}</p>

//       <p>City: {user.city}</p>

//       <p>Country: {user.country}</p>

//       <p>Job: {user.job}</p>
//     </div>
//   );
// }

// export default UserDetails;


import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const res = await fetch(
        `https://api.slingacademy.com/v1/sample-data/users/${id}`
      );

      const data = await res.json();

      setUser(data.user);
    } catch (err) {
      setError("Failed to load user");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, [id]);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
          background: "#f5f7fb",
        }}
      >
        <div className="text-center">
          <div
            className="spinner-border text-primary mb-3"
            role="status"
          ></div>

          <h4>Loading user...</h4>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
          background: "#f5f7fb",
        }}
      >
        <div className="alert alert-danger">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        padding: "30px",
      }}
    >

      <div
        className="card border-0 shadow-lg"
        style={{
          width: "500px",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >

        {/* Header */}

        <div
          className="text-center text-white p-4"
          style={{
            background: "#667eea",
          }}
        >
          <h2 className="fw-bold mb-0">
            👤 User Details
          </h2>
        </div>


        {/* Profile */}

        <div className="card-body text-center p-4">

          <img
            src={user.profile_picture}
            width="150"
            height="150"
            alt="profile"
            className="rounded-circle shadow mb-3"
            style={{
              objectFit: "cover",
              border: "5px solid white",
            }}
          />

          <h2 className="fw-bold">
            {user.first_name} {user.last_name}
          </h2>

          <p className="text-muted mb-4">
            User ID: {user.id}
          </p>


          {/* Information */}

          <div className="text-start">

            <div className="p-3 mb-2 bg-light rounded">
              <strong>📧 Email</strong>
              <br />
              <span className="text-muted">
                {user.email}
              </span>
            </div>

            <div className="p-3 mb-2 bg-light rounded">
              <strong>📱 Phone</strong>
              <br />
              <span className="text-muted">
                {user.phone}
              </span>
            </div>

            <div className="p-3 mb-2 bg-light rounded">
              <strong>🏙️ City</strong>
              <br />
              <span className="text-muted">
                {user.city}
              </span>
            </div>

            <div className="p-3 mb-2 bg-light rounded">
              <strong>🌎 Country</strong>
              <br />
              <span className="text-muted">
                {user.country}
              </span>
            </div>

            <div className="p-3 mb-3 bg-light rounded">
              <strong>💼 Job</strong>
              <br />
              <span className="text-muted">
                {user.job}
              </span>
            </div>

          </div>


          {/* Back Button */}

          <button
            className="btn btn-primary w-100 mt-2"
            style={{
              borderRadius: "10px",
            }}
            onClick={() => navigate("/dashboard")}
          >
            ← Back to Dashboard
          </button>

        </div>

      </div>

    </div>
  );
}

export default UserDetails;
