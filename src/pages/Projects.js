import React, { useState } from "react";
import Flowers from "../components/Flowers";

const PROJECTS = [
    {
        img: "https://picsum.photos/seed/snack/400/250",
        title: "Snack AI",
        desc: "โปรเจกต์ AI สำหรับตรวจจับและแยกแยะสีของขนม",
        tags: ["Python", "AI", "OpenCV"],
    },
    {
        img: "https://picsum.photos/seed/post/400/250",
        title: "Post Website",
        desc: "เว็บไซต์โซเชียลมีเดียสำหรับการโพสต์ข้อความ พัฒนาด้วย React",
        tags: ["React", "Node.js", "MongoDB"],
    },
    {
        img: "https://picsum.photos/seed/port/400/250",
        title: "Portfolio Website",
        desc: "เว็บไซต์รวบรวมผลงานส่วนตัว (ก็คือเว็บนี้นี่แหละ! 🌸)",
        tags: ["React", "CSS"],
    },
];

export default function Projects() {
    const [popup, setPopup] = useState(null);

    return (
        <section className="page-section" style={{ textAlign: "center", paddingBottom: 60 }}>
            <Flowers />

            <h2 className="section-title" style={{ fontSize: 48 }}>
                My <span>Projects</span>
            </h2>

            <div className="gallery">
                {PROJECTS.map((p) => (
                    <div key={p.title} className="project-card" onClick={() => setPopup(p)}>
                        <img src={p.img} alt={p.title} />
                        <div style={{ padding: 24 }}>
                            <h3 style={{ fontSize: 24, marginBottom: 8 }}>{p.title}</h3>
                            <p style={{ fontSize: 18, opacity: 0.75, marginBottom: 14 }}>{p.desc}</p>
                            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
                                {p.tags.map((t) => (
                                    <span key={t} style={{
                                        fontSize: 16, padding: "4px 14px",
                                        border: "1px solid rgba(242,181,200,0.4)",
                                        borderRadius: 20, color: "var(--pink)",
                                        background: "rgba(242,181,200,0.08)",
                                    }}>{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Popup Modal ── */}
            {popup && (
                <div className="popup-overlay" onClick={() => setPopup(null)}>
                    <div className="popup-box" onClick={(e) => e.stopPropagation()}>
                        <button className="popup-close" onClick={() => setPopup(null)}>&times;</button>
                        <h3 style={{ fontSize: 32 }}>{popup.title}</h3>
                        <p style={{ fontSize: 22, marginTop: 12 }}>{popup.desc}</p>
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginTop: 20 }}>
                            {popup.tags.map((t) => (
                                <span key={t} style={{
                                    fontSize: 18, padding: "6px 16px",
                                    border: "1px solid rgba(242,181,200,0.4)",
                                    borderRadius: 20, color: "var(--pink)",
                                }}>{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}