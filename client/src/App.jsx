import { useEffect, useState } from "react"

function App() {
  const [message, setMessage] = useState("Connecting...")

  const tagStyle = {
    background: "#0f172a",
    color: "white",
    padding: "6px 14px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "bold",
  }

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch(() => setMessage("Connection Failed"))
  }, [])

  return (
    <div
      style={{
        margin: 0,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #020617, #0f172a, #1e293b, #312e81)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "430px",
          padding: "35px",
          borderRadius: "18px",
          background: "#ffffff",
          textAlign: "center",
          boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
          transition: "0.3s ease",
          cursor: "pointer",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "34px",
            color: "#0f172a",
          }}
        >
          🚀 Full Stack App
        </h1>

        <p
          style={{
            marginTop: "10px",
            color: "#64748b",
            fontSize: "15px",
          }}
        >
          React Frontend • Express Backend
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "15px",
          }}
        >
          <span style={tagStyle}>React</span>
          <span style={tagStyle}>Node.js</span>
          <span style={tagStyle}>Express</span>
        </div>

        <div
          style={{
            marginTop: "28px",
            padding: "18px",
            borderRadius: "12px",
            background: "#0f172a",
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          {message}
        </div>

        <p
          style={{
            color: "#22c55e",
            marginTop: "14px",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          ● Backend Connected Successfully
        </p>

        <p
          style={{
            marginTop: "22px",
            fontSize: "14px",
            color: "#475569",
          }}
        >
          Developed by <strong>Shirisha Pitta</strong>
        </p>

        <p
          style={{
            marginTop: "8px",
            color: "#64748b",
            fontSize: "13px",
          }}
        >
          Full Stack Internship Project • 2026
        </p>
      </div>
    </div>
  )
}

export default App