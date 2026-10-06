// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const login = () => {
//     const savedUser = JSON.parse(localStorage.getItem("user"));

//     if (!savedUser) {
//       alert("Please register first");
//       return;
//     }

//     if (email === savedUser.email && password === savedUser.password) {
//       localStorage.setItem("login", "true");
//       navigate("/dashboard");
//     } else {
//       alert("Invalid email or password");
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>

//       <input
//         type="email"
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button onClick={login}>Login</button>

//       <p>
//         Don't have an account? <Link to="/register">Register</Link>
//       </p>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const login = () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("Please register first");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      localStorage.setItem("login", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
      }}
    >
      <div
        className="card shadow-lg p-4 border-0"
        style={{
          width: "400px",
          borderRadius: "20px",
        }}
      >

        {/* Heading */}

        <div className="text-center mb-4">

          <div
            className="mx-auto mb-3 d-flex justify-content-center align-items-center"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              background: "#667eea",
              color: "white",
              fontSize: "30px",
            }}
          >
            🔐
          </div>

          <h2 className="fw-bold">Welcome Back!</h2>

          <p className="text-muted">
            Login to continue
          </p>

        </div>


        {/* Email */}

        <div className="mb-3">

          <label className="form-label fw-semibold">
            Email
          </label>

          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              borderRadius: "12px",
            }}
          />

        </div>


        {/* Password */}

        <div className="mb-4">

          <label className="form-label fw-semibold">
            Password
          </label>

          <div className="input-group">

            <input
              type={showPassword ? "text" : "password"}
              className="form-control form-control-lg"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                borderRadius: "12px 0 0 12px",
              }}
            />

            {/* <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                borderRadius: "0 12px 12px 0",
              }}
            >
              {showPassword ? "🙈" : "👁️"}
            </button> */}

          </div>

        </div>


        {/* Login Button */}

        <button
          onClick={login}
          className="btn btn-primary btn-lg w-100 fw-semibold"
          style={{
            borderRadius: "12px",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-3px)";
            e.target.style.boxShadow =
              "0 8px 20px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "none";
          }}
        >
          Login
        </button>


        {/* Register */}

        <p className="text-center mt-4 mb-0">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="fw-bold text-decoration-none"
          >
            Register
          </Link>

        </p>

      </div>
    </div>
  );
}

export default Login;

