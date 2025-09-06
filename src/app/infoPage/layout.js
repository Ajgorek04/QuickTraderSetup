"use client";
import { useEffect, useState } from "react";
import "./style.css";

export default function InfoPage({ children }) {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const elements = document.querySelectorAll(".navbar");
    const newHeadings = Array.from(elements).map((el) => {
      if (!el.id) {
        el.id = el.textContent.replace(/\s+/g, "-").toLowerCase();
      }
      return {
        id: el.id,
        text: el.textContent,
      };
    });

    setHeadings(newHeadings);
  }, []);

  return (
    <div className="layout">
      <nav className="sidebar">
        <div className="insidebar">
          <h2>Spis treści</h2>
          <ul>
            {headings.map((h) => (
              <li key={h.id}>
                <a href={`#${h.id}`}>{h.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <main className="content">{children}</main>
    </div>
  );
}
