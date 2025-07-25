export function Button({ children, ...props }) {
  return (
    <button
      style={{
        padding: "10px 20px",
        background: "#4f46e5",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
      }}
      {...props}
    >
      {children}
    </button>
  );
}