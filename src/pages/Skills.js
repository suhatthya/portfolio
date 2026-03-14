import React from "react";
import Flowers from "../components/Flowers";

const CATEGORIES = [
    {
        color: "var(--pink)",
        icon: "🌐",
        title: "Web Development",
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "React"],
    },
    {
        color: "var(--blue)",
        icon: "💻",
        title: "Programming & Core",
        tags: ["Java", "Python", "Data Structures", "C++"],
        borderColor: "var(--blue)",
    },
    {
        color: "var(--amber)",
        icon: "🗄️",
        title: "Database",
        tags: ["MySQL"],
        borderColor: "var(--amber)",
    },
    {
        color: "var(--green)",
        icon: "🛠️",
        title: "Tools & Version Control",
        tags: ["Git", "GitHub", "VS Code", "Figma"],
        borderColor: "var(--green)",
    },
    {
        color: "var(--purple)",
        icon: "📊",
        title: "Office & Productivity",
        tags: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"],
        borderColor: "var(--purple)",
    },
];

const LEARNING = ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"];

export default function Skills() {
    return (
        <section className="page-section" style={{ textAlign: "center", paddingBottom: 60 }}>
            <Flowers />

            <h2 className="section-title" style={{ fontSize: 48 }}>
                My <span>Skills</span>
            </h2>

            {/* ── 2-column grid ── */}
            <div style={{
                maxWidth: 900,
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 20,
            }}>
                {CATEGORIES.map((cat) => (
                    <div
                        key={cat.title}
                        className="skill-category"
                        style={{
                            borderColor: cat.borderColor || "rgba(242,181,200,0.2)",
                            textAlign: "left",
                            margin: 0,
                        }}
                    >
                        <h3 style={{ color: cat.color, fontSize: 24, marginBottom: 14 }}>
                            {cat.icon} {cat.title}
                        </h3>
                        <div className="skill-tags-container">
                            {cat.tags.map((tag) => (
                                <span key={tag} className="skill-tag" style={{ fontSize: 19 }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}

                {/* ── กำลังเรียนรู้เพิ่มเติม ── span 2 cols */}
                <div style={{
                    gridColumn: "1 / -1",
                    background: "rgba(255,245,236,0.03)",
                    border: "1px dashed rgba(248,215,166,0.4)",
                    borderRadius: 16,
                    padding: "24px 28px",
                    textAlign: "left",
                }}>
                    <h3 style={{ color: "var(--amber)", fontSize: 24, marginBottom: 14 }}>
                        📚 กำลังเรียนรู้เพิ่มเติม
                    </h3>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                        {LEARNING.map((tag) => (
                            <span key={tag} style={{
                                padding: "8px 20px",
                                border: "1px dashed rgba(248,215,166,0.5)",
                                borderRadius: 20, fontSize: 19,
                                color: "var(--amber)",
                                background: "rgba(248,215,166,0.06)",
                            }}>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}