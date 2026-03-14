import React, { useState, useEffect } from "react";
import Flowers from "../components/Flowers";

function useTyping(words, speed = 90, pause = 1800) {
    const [text, setText] = useState("");
    const [wi, setWi] = useState(0);
    const [ci, setCi] = useState(0);
    const [del, setDel] = useState(false);

    useEffect(() => {
        const word = words[wi];
        let timer;
        if (!del && ci < word.length) {
            timer = setTimeout(() => setCi((c) => c + 1), speed);
        } else if (!del && ci === word.length) {
            timer = setTimeout(() => setDel(true), pause);
        } else if (del && ci > 0) {
            timer = setTimeout(() => setCi((c) => c - 1), speed / 2);
        } else if (del && ci === 0) {
            setDel(false);
            setWi((i) => (i + 1) % words.length);
        }
        setText(word.slice(0, ci));
        return () => clearTimeout(timer);
    }, [ci, del, wi, words, speed, pause]);

    return text;
}

const TYPING_WORDS = ["AuMeen007 SigmagGirl", "Web Developer 🌸", "UI/UX Designer ✨", "Creative Coder 💻"];

const STATS = [
    { num: "5+", label: "ปีที่เรียน" },
    { num: "2+", label: "โปรเจกต์" },
    { num: "6+", label: "ทักษะ" },
    { num: "100%", label: "ความตั้งใจ" },
];

const PREVIEW = [
    {
        img: "https://via.placeholder.com/400x250/F2B5C8/5A4A42?text=Project+1",
        title: "Website E-Commerce",
        desc: "โปรเจกต์ออกแบบและพัฒนาเว็บไซต์ขายสินค้าออนไลน์",
    },
    {
        img: "https://via.placeholder.com/400x250/99C1DD/5A4A42?text=Project+2",
        title: "Database Management",
        desc: "ระบบจัดการฐานข้อมูลสำหรับองค์กร",
    },
];

export default function Home({ navigate }) {
    const typed = useTyping(TYPING_WORDS);

    return (
        <div>
            {/* ── Hero ── */}
            <section className="page-section hero" style={{ minHeight: "auto", paddingBottom: 40 }}>
                <Flowers />
                <img src="/images/profile.png" className="profile" alt="Suhatthya profile" />
                <h2 style={{ fontSize: 52 }}>
                    Hi, I'm <span className="typing-text">{typed}</span>
                    <span className="cursor-blink" />
                </h2>
                <p style={{ fontSize: 24 }}>Electronics Computer Technology Student</p>
                <button className="btn" style={{ fontSize: 20 }} onClick={() => navigate("Projects")}>
                    See My Work
                </button>
            </section>

            {/* ── Stats Bar ── */}
            <div style={{
                display: "flex",
                background: "rgba(242,181,200,0.07)",
                borderTop: "1px solid rgba(242,181,200,0.15)",
                borderBottom: "1px solid rgba(242,181,200,0.15)",
                padding: "28px 0",
            }}>
                {STATS.map((s, i) => (
                    <div key={s.label} style={{
                        flex: 1, textAlign: "center",
                        borderRight: i < STATS.length - 1 ? "1px solid rgba(242,181,200,0.2)" : "none",
                        padding: "0 16px",
                    }}>
                        <div style={{ fontSize: 36, color: "var(--pink)", lineHeight: 1.2 }}>{s.num}</div>
                        <div style={{ fontSize: 18, opacity: 0.7, marginTop: 4 }}>{s.label}</div>
                    </div>
                ))}
            </div>

            {/* ── Selected Works Preview ── */}
            <section className="preview-section" style={{ paddingTop: 40, paddingBottom: 48 }}>
                <h2 style={{ fontSize: 38 }}>Selected Works</h2>
                <div className="gallery" style={{ marginBottom: 32 }}>
                    {PREVIEW.map((p) => (
                        <div key={p.title} className="project-card" onClick={() => navigate("Projects")}>
                            <img src={p.img} alt={p.title} />
                            <div style={{ padding: 24 }}>
                                <h3 style={{ fontSize: 24, marginBottom: 8 }}>{p.title}</h3>
                                <p style={{ fontSize: 20 }}>{p.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="btn btn-blue" style={{ fontSize: 20 }} onClick={() => navigate("Projects")}>
                    View All Projects
                </button>
            </section>
        </div>
    );
}