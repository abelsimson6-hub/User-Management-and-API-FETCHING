// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// function Dashboard() {
//   const [users, setUsers] = useState([]);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const getUsers = async () => {
//     try {
//       const res = await fetch(
//         "https://api.slingacademy.com/v1/sample-data/users"
//       );

//       const data = await res.json();

//       setUsers(data.users);
//     } catch (err) {
//       setError("Failed to load users");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("login");
//     navigate("/");
//   };

//   const filteredUsers = users.filter((user) =>
//     `${user.first_name} ${user.last_name}`
//       .toLowerCase()
//       .includes(search.toLowerCase())
//   );

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   if (error) {
//     return <h2>{error}</h2>;
//   }

//   return (
//     <div>
//       <h1>User Dashboard</h1>

//       <button onClick={logout}>Logout</button>

//       <br />
//       <br />

//       <input
//         type="text"
//         placeholder="Search user"
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {filteredUsers.map((user) => (
//         <div key={user.id}>
//           <h3>
//             {user.first_name} {user.last_name}
//           </h3>

//           <p>{user.email}</p>

//           <Link to={`/user/${user.id}`}>
//             <button>View Details</button>
//           </Link>

//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Dashboard;



import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const getUsers = async () => {
    try {
      const res = await fetch(
        "https://api.slingacademy.com/v1/sample-data/users"
      );

      const data = await res.json();

      setUsers(data.users);
    } catch (err) {
      setError("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const logout = () => {
    localStorage.removeItem("login");
    navigate("/");
  };

  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="text-center">
          <div
            className="spinner-border text-primary mb-3"
            role="status"
          ></div>

          <h4>Loading users...</h4>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="alert alert-danger">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
      }}
    >

      {/* Navbar */}

      <nav className="navbar navbar-dark bg-primary shadow-sm">
        <div className="container">

          <span className="navbar-brand fw-bold fs-4">
            👥 User Dashboard
          </span>

          <button
            className="btn btn-light fw-semibold"
            onClick={logout}
          >
            🚪 Logout
          </button>

        </div>
      </nav>


      {/* Main Content */}

      <div className="container py-5">

        {/* Header */}

        <div className="d-flex justify-content-between align-items-center mb-4">

          <div>
            <h2 className="fw-bold mb-1">
              All Users
            </h2>

            <p className="text-muted">
              Browse and view user information
            </p>
          </div>

          <span className="badge bg-primary fs-6">
            {filteredUsers.length} Users
          </span>

        </div>


        {/* Search */}

        <div className="card border-0 shadow-sm p-3 mb-4">

          <div className="input-group">

            <span className="input-group-text">
              🔍
            </span>

            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search user by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

        </div>


        {/* User Cards */}

        <div className="row g-4">

          {filteredUsers.map((user) => (

            <div
              className="col-sm-6 col-lg-4"
              key={user.id}
            >

              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "15px",
                  transition: "0.3s",
                }}

                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-7px)";

                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0,0,0,0.15)";
                }}

                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0)";

                  e.currentTarget.style.boxShadow =
                    "0 2px 8px rgba(0,0,0,0.08)";
                }}
              >

                <div className="card-body">

                  {/* User Avatar */}

                  <div
                    className="d-flex justify-content-center align-items-center mx-auto mb-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                      background: "#667eea",
                      color: "white",
                      fontSize: "28px",
                    }}
                  >
                    👤
                  </div>


                  {/* User Name */}

                  <h4 className="text-center fw-bold">
                    {user.first_name} {user.last_name}
                  </h4>


                  {/* Email */}

                  <p className="text-center text-muted">
                    ✉️ {user.email}
                  </p>


                  {/* View Details */}

                  <Link
                    to={`/user/${user.id}`}
                    className="text-decoration-none"
                  >
                    <button
                      className="btn btn-primary w-100"
                      style={{
                        borderRadius: "10px",
                      }}
                    >
                      View Details →
                    </button>
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;
