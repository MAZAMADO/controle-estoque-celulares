export function Card({ children }) {
  return (
    <div style={{
      background: "white",
      borderRadius: "12px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      marginBottom: "16px"
    }}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div style={{ padding: "16px" }}>{children}</div>;
}