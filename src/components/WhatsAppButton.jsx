// src/components/WhatsAppButton.jsx
import React from "react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2349075115148?text=Hi%20Marv%20Media!%20I%27m%20interested%20in%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "#fff",
        padding: "12px 18px",
        borderRadius: "50px",
        fontWeight: "bold",
        fontSize: "14px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "8px",
        textDecoration: "none",
        animation: "whatsappPulse 2s infinite",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="#fff"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.87 11.87 0 0012 0a11.87 11.87 0 00-8.52 3.48A11.87 11.87 0 000 12c0 2.1.56 4.11 1.62 5.89L0 24l6.29-1.63A11.85 11.85 0 0012 24a11.87 11.87 0 008.52-3.48A11.87 11.87 0 0024 12a11.87 11.87 0 00-3.48-8.52zM12 21.53a9.51 9.51 0 01-4.83-1.32l-.35-.21-3.73.97 1-3.64-.23-.37a9.51 9.51 0 1117.43-5.93 9.41 9.41 0 01-9.29 10.5zm5.31-7.3c-.29-.15-1.71-.84-1.97-.94s-.46-.15-.66.15-.75.94-.92 1.13-.34.22-.63.07a7.75 7.75 0 01-2.3-1.42 8.63 8.63 0 01-1.6-2c-.17-.3 0-.46.13-.61.13-.13.3-.34.45-.51s.2-.3.3-.5a.55.55 0 000-.51c-.08-.15-.66-1.6-.9-2.2s-.48-.5-.66-.51-.36-.01-.56-.01a1.08 1.08 0 00-.78.36 3.24 3.24 0 00-1 2.44 5.64 5.64 0 001.2 2.82 13.26 13.26 0 004.92 4.67c1.8.77 2.5.84 3.4.71a2.79 2.79 0 001.83-1.29 2.26 2.26 0 00.15-1.3c-.06-.13-.27-.2-.56-.35z" />
      </svg>
      {/* Chat with us */}
    </a>
  );
}
