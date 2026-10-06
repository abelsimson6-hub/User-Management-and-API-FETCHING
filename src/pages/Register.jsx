// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const register = () => {
//     if (name === "" || email === "" || password === "") {
//       alert("Please fill all fields");
//       return;
//     }

//     const user = {
//       name: name,
//       email: email,
//       password: password
//     };

//     localStorage.setItem("user", JSON.stringify(user));

//     alert("Registration successful");

//     navigate("/");
//   };

//   return (
//     <div>
//       <h2>Register</h2>

//       <input
//         type="text"
//         placeholder="Name"
//         onChange={(e) => setName(e.target.value)}
//       />

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

//       <button onClick={register}>Register</button>
//     </div>
//   );
// }

// export default Register;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const register = () => {
    if (name === "" || email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    const user = {
      name: name,
      email: email,
      password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration successful");

    navigate("/");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)"
      }}
    >

      <div
        className="card shadow-lg p-4 border-0"
        style={{
          width: "400px",
          borderRadius: "20px"
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
              fontSize: "30px"
            }}
          >
            👤
          </div>

          <h2 className="fw-bold">
            Create Account
          </h2>

          <p className="text-muted">
            Register to get started
          </p>

        </div>


        {/* Name */}

        <div className="mb-3">

          <label className="form-label fw-semibold">
            Name
          </label>

          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              borderRadius: "12px"
            }}
          />

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
              borderRadius: "12px"
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
                borderRadius: "12px 0 0 12px"
              }}
            />

            {/* <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              style={{
                borderRadius: "0 12px 12px 0"
              }}
            >
              {showPassword ? "🙈" : "👁️"}
            </button> */}

          </div>

        </div>


        {/* Register Button */}

        <button
          onClick={register}
          className="btn btn-primary btn-lg w-100 fw-semibold"
          style={{
            borderRadius: "12px",
            transition: "0.3s"
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
          Register
        </button>


        {/* Login link */}

        <p className="text-center mt-4 mb-0">

          Already have an account?{" "}

          <span
            className="text-primary fw-bold"
            style={{
              cursor: "pointer"
            }}
            onClick={() => navigate("/")}
          >
            Login
          </span>

        </p>

      </div>

    </div>
  );
}

export default Register;

