import React from "react";
import Flowers from "../components/Flowers";

const FUN_FACTS = [
    { icon: "🎧", text: "ฟังเพลง" },
    { icon: "🎮", text: "เล่นเกม" },
    { icon: "🌚", text: "ชอบสีดำ" },
    { icon: "📺", text: "ดูซีรีส์" },
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
    },
];

const GOALS = [
    { icon: "💻", text: "Frontend / Full Stack Developer" },
    { icon: "🤖", text: "นักพัฒนาด้าน AI & Machine Learning" },
    { icon: "🎨", text: "UI/UX Designer ที่เข้าใจทั้ง Design และ Code" },
];

export default function About() {
    return (
        <section className="page-section" style={{ paddingTop: 90, paddingBottom: 48 }}>
            <Flowers />
            <div style={{
                maxWidth: 960,
                margin: "0 auto",
                display: "flex",
                gap: 40,
                alignItems: "flex-start",
                flexWrap: "wrap",
            }}>
                {/* ── Left: รูป + chips ── */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, flexShrink: 0 }}>
                    <img src="/images/profile.PNG" className="about-img" alt="My Photo"
                        style={{ width: 240, height: 240 }} />
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", maxWidth: 260 }}>
                        {FUN_FACTS.map((f) => (
                            <div key={f.text} style={{
                                padding: "7px 16px",
                                border: "1px solid rgba(242,181,200,0.35)",
                                borderRadius: 20, fontSize: 19,
                                display: "flex", alignItems: "center", gap: 7,
                                background: "rgba(242,181,200,0.08)",
                            }}>
                                {f.icon} {f.text}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Right: ข้อความ ── */}
                <div style={{ flex: 1, minWidth: 280 }}>
                    <h2 style={{ fontSize: 42, marginBottom: 16 }}>About Me</h2>

                    <p style={{ fontSize: 22, lineHeight: 1.9, marginBottom: 12 }}>
                        สวัสดีค่ะ! ชื่อนางสาวสุหัธยา คงเจริญ (ออมีน)
                        ปัจจุบันกำลังศึกษาอยู่ในสาขาเทคโนโลยีอิเล็กทรอนิกส์ แขนงคอมพิวเตอร์
                        มีความหลงใหลในการเขียนโปรแกรม การพัฒนาเว็บไซต์ และสนใจเทคโนโลยี AI ค่ะ
                    </p>
                    <p style={{ fontSize: 22, lineHeight: 1.9, marginBottom: 28 }}>
                        เป้าหมายของฉันคือการนำความรู้ทางด้านเทคโนโลยีมาสร้างสรรค์ผลงานที่แก้ปัญหาได้จริง
                        และพัฒนาตัวเองให้เป็นนักพัฒนาที่เก่งขึ้นในทุก ๆ วัน
                    </p>

                    {/* ── Education ── */}
                    <h3 style={{ color: "var(--pink)", fontSize: 26, marginBottom: 12 }}>🎓 Education</h3>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
                        <li style={{ fontSize: 22, lineHeight: 1.8 }}>
                            <strong>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ</strong>
                            <br />
                            <span style={{ opacity: 0.75 }}>สาขาเทคโนโลยีอิเล็กทรอนิกส์ แขนงคอมพิวเตอร์ (กำลังศึกษา)</span>
                        </li>
                        <li style={{ fontSize: 22, lineHeight: 1.8 }}>
                            <strong>วิทยาลัยเทคนิคราชบุรี</strong>
                            <br />
                            <span style={{ opacity: 0.75 }}>แผนกวิชาอิเล็กทรอนิกส์ — จบวุฒิ ปวส. ปีการศึกษา 2567</span>
                        </li>
                        <li style={{ fontSize: 22, lineHeight: 1.8 }}>
                            <strong>วิทยาลัยเทคนิคราชบุรี</strong>
                            <br />
                            <span style={{ opacity: 0.75 }}>แผนกวิชาคอมพิวเตอร์ธุรกิจ — จบวุฒิ ปวช. ปีการศึกษา 2565</span>
                        </li>
                    </ul>

                    {/* ── Awards ── */}
                    <h3 style={{ color: "var(--amber)", fontSize: 26, marginBottom: 12 }}>🏅 ผลงาน & รางวัล</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
                        {AWARDS.map((a) => (
                            <div key={a.title} style={{
                                display: "flex", gap: 16, alignItems: "flex-start",
                                padding: "16px 20px",
                                border: `1px solid ${a.border}`,
                                borderRadius: 14,
                                background: a.bg,
                            }}>
                                <span style={{ fontSize: 32, flexShrink: 0 }}>{a.icon}</span>
                                <div>
                                    <div style={{ fontSize: 22, color: a.color, fontWeight: "bold" }}>{a.title}</div>
                                    <div style={{ fontSize: 20, lineHeight: 1.7, opacity: 0.85 }}>{a.detail}</div>
                                    <div style={{ fontSize: 18, opacity: 0.6, marginTop: 2 }}>{a.year}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ── Career Goals ── */}
                    <h3 style={{ color: "var(--blue)", fontSize: 26, marginBottom: 12 }}>🎯 เป้าหมายอาชีพ</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {GOALS.map((g) => (
                            <div key={g.text} style={{
                                display: "flex", alignItems: "center", gap: 14,
                                padding: "12px 20px",
                                border: "1px solid rgba(153,193,221,0.25)",
                                borderRadius: 12,
                                background: "rgba(153,193,221,0.06)",
                                fontSize: 21,
                            }}>
                                <span style={{ fontSize: 26 }}>{g.icon}</span>
                                {g.text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}