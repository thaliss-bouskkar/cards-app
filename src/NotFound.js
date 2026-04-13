import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>

      <Link to="/" style={styles.link}>
        Go back to Home      
      </Link>
    </div>
  );
}

const styles = {
  container: {
    height: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  code: {
    fontSize: "80px",
    margin: "0",
    color: "#ff4d4f",
  },
  link: {
    marginTop: "20px",
    textDecoration: "none",
    padding: "10px 20px",
    background: "#4f46e5",
    color: "#fff",
    borderRadius: "8px",
  },
};
