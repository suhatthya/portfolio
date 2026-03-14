import React, { useState } from "react";
import Flowers from "../components/Flowers";

const PROJECTS = [
    {
        img: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=250&fit=crop",
        title: "Portfolio Website",
        desc: "เว็บไซต์รวบรวมผลงานส่วนตัว (ก็คือเว็บนี้นี่แหละ! 🌸)",
        tags: ["React", "CSS"],
    },
    {
        img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=250&fit=crop",
        title: "Automotive App",
        desc: "แอปพลิเคชันมือถือสำหรับค้นหาและสั่งซื้ออุปกรณ์รถยนต์ พัฒนาด้วย Flutter และ Firebase",
        tags: ["Flutter", "Firebase", "Firestore"],
    },
];

const INTERNSHIPS = [
    {
        level: "ระดับ ปวช.",
        company: "Advice สาขา U085",
        location: "จ.ราชบุรี",
        period: "17 พ.ค. 2564 — 17 ก.ย. 2564",
        tasks: ["ซ่อมคอมพิวเตอร์", "ขายสินค้าคอมพิวเตอร์", "จัดสต็อกสินค้า", "เช็คสินค้า"],
        color: "var(--blue)",
        border: "rgba(153,193,221,0.3)",
        bg: "rgba(153,193,221,0.07)",
        icon: "🖥️",
    },
    {
        level: "ระดับ ปวส.",
        company: "ร้าน 9com",
        location: "จ.ราชบุรี",
        period: "27 ก.พ. 2566 — 6 พ.ค. 2566",
        tasks: ["ติดตั้งกล้องวงจรปิด", "ซ่อมกล้องวงจรปิด", "ซ่อมเครื่องปริ้นเตอร์", "ซ่อมคอมพิวเตอร์", "ออกไปดูงานภาคสนาม"],
        color: "var(--green)",
        border: "rgba(146,204,148,0.3)",
        bg: "rgba(146,204,148,0.07)",
        icon: "📷",
    },
];

const AWARDS = [
    {
        icon: "🏆",
        title: "รางวัลชนะเลิศ",
        detail: "การแข่งขันทักษะ การประกวดผลงานสะเต็มศึกษา (STEM Education)",
        year: "ปีการศึกษา 2565",
        color: "var(--amber)",
        border: "rgba(248,215,166,0.35)",
        bg: "rgba(248,215,166,0.07)",
        cert: "/certs/stem-award.pdf",
    },
    {
        icon: "🏆",
        title: "รางวัลชนะเลิศ ระดับชาติ",
        detail: "การแข่งขันทักษะ การประกวดผลงานสะเต็มศึกษา (STEM Education)",
        year: "ปีการศึกษา 2565",
        color: "var(--amber)",
        border: "rgba(248,215,166,0.35)",
        bg: "rgba(248,215,166,0.07)",
        cert: "/certs/stem-national.pdf",
    },
    {
        icon: "📜",
        title: "วุฒิบัตรการใช้โปรแกรม Mitsubishi PLC and GxWork3",
        detail: "กรมพัฒนาฝีมือแรงงาน กระทรวงแรงงาน หลักสูตร 30 ชั่วโมง",
        year: "25 พ.ย. 2566 — 9 ธ.ค. 2566",
        color: "var(--blue)",
        border: "rgba(153,193,221,0.3)",
        bg: "rgba(153,193,221,0.07)",
        cert: "/certs/plc-cert.pdf",
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

            {/* ── Internship ── */}
            <h2 className="section-title" style={{ fontSize: 48, marginTop: 60 }}>
                My <span>Internship</span>
            </h2>

            <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16, textAlign: "left" }}>
                {INTERNSHIPS.map((job) => (
                    <div key={job.company} style={{ padding: "20px 22px", border: `1px solid ${job.border}`, borderRadius: 14, background: job.bg }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
                            <div>
                                <span style={{ fontSize: 22, marginRight: 8 }}>{job.icon}</span>
                                <strong style={{ fontSize: 22, color: job.color }}>{job.company}</strong>
                                <span style={{ fontSize: 19, opacity: 0.65, marginLeft: 8 }}>{job.location}</span>
                            </div>
                            <span style={{ fontSize: 17, padding: "3px 12px", border: `1px solid ${job.border}`, borderRadius: 20, color: job.color, background: "rgba(255,255,255,0.03)" }}>{job.level}</span>
                        </div>
                        <div style={{ fontSize: 18, opacity: 0.6, marginBottom: 12 }}>{job.period}</div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                            {job.tasks.map((t) => (
                                <span key={t} style={{ fontSize: 18, padding: "5px 14px", border: `1px solid ${job.border}`, borderRadius: 20, background: "rgba(255,255,255,0.03)", opacity: 0.9 }}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Awards ── */}
            <h2 className="section-title" style={{ fontSize: 48, marginTop: 60 }}>
                My <span>Awards & Certifications</span>
            </h2>

            <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12, textAlign: "left" }}>
                {AWARDS.map((a) => (
                    <div key={a.title} style={{ display: "flex", gap: 16, alignItems: "center", padding: "16px 20px", border: `1px solid ${a.border}`, borderRadius: 14, background: a.bg }}>
                        <span style={{ fontSize: 32, flexShrink: 0 }}>{a.icon}</span>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontSize: 22, color: a.color, fontWeight: "bold" }}>{a.title}</div>
                            <div style={{ fontSize: 20, lineHeight: 1.7, opacity: 0.85 }}>{a.detail}</div>
                            <div style={{ fontSize: 18, opacity: 0.6, marginTop: 2 }}>{a.year}</div>
                        </div>
                        {a.cert && (
                            <a href={a.cert} download onClick={(e) => e.stopPropagation()} style={{ flexShrink: 0, padding: "8px 16px", border: `1px solid ${a.border}`, borderRadius: 20, color: a.color, fontSize: 16, background: "rgba(255,255,255,0.03)", textDecoration: "none", whiteSpace: "nowrap" }}>
                                Download
                            </a>
                        )}
                    </div>
                ))}
            </div>

            {
                popup && (
                    <div className="popup-overlay" onClick={() => setPopup(null)}>
                        <div className="popup-box" onClick={(e) => e.stopPropagation()}>
                            <button className="popup-close" onClick={() => setPopup(null)}>&times;</button>
                            <h3 style={{ fontSize: 32 }}>{popup.title}</h3>
                            <p style={{ fontSize: 22, marginTop: 12 }}>{popup.desc}</p>
                            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginTop: 20 }}>
                                {popup.tags.map((t) => (
                                    <span key={t} style={{ fontSize: 18, padding: "6px 16px", border: "1px solid rgba(242,181,200,0.4)", borderRadius: 20, color: "var(--pink)" }}>{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            }
        </section >
    );
}