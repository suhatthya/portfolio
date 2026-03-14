import React from "react";
import Flowers from "../components/Flowers";

const FUN_FACTS = [
    { icon: "🎧", text: "ฟังเพลง" },
    { icon: "🎮", text: "เล่นเกม" },
    { icon: "🌚", text: "ชอบสีดำ" },
    { icon: "📺", text: "ดูซีรีส์" },
];

const GOALS = [
    { icon: "💻", text: "Frontend / Full Stack Developer" },
    { icon: "🤖", text: "นักพัฒนาด้าน AI & Machine Learning" },
    { icon: "🎨", text: "UI/UX Designer ที่เข้าใจทั้ง Design และ Code" },
];

export default function About() {
    return (
        <section className="page-section" style={{ paddingTop: 100, paddingBottom: 60 }}>
            <Flowers />

            <h2 className="section-title" style={{ fontSize: 48, marginBottom: 48 }}>
                About <span>Me</span>
            </h2>

            <div style={{
                maxWidth: 960,
                margin: "0 auto",
                display: "flex",
                gap: 48,
                alignItems: "flex-start",
                flexWrap: "wrap",
                justifyContent: "center",
            }}>
                {/* ── Left: รูป + chips ── */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 20,
                    flexShrink: 0,
                    width: 260,
                }}>
                    <img
                        src="/images/profile.PNG"
                        className="about-img"
                        alt="Suhatthya"
                        style={{ width: 220, height: 220 }}
                    />
                    <div style={{
                        display: "flex",
                        gap: 10,
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}>
                        {FUN_FACTS.map((f) => (
                            <div key={f.text} style={{
                                padding: "8px 18px",
                                border: "1px solid rgba(242,181,200,0.35)",
                                borderRadius: 20,
                                fontSize: 18,
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                background: "rgba(242,181,200,0.08)",
                                color: "var(--cream)",
                            }}>
                                {f.icon} {f.text}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Right: ข้อความ ── */}
                <div style={{ flex: 1, minWidth: 300, maxWidth: 620 }}>

                    <p style={{ fontSize: 20, lineHeight: 2, marginBottom: 12, opacity: 0.9 }}>
                        สวัสดีค่ะ! ชื่อนางสาวสุหัธยา คงเจริญ (ออมีน)
                        ปัจจุบันกำลังศึกษาอยู่ในสาขาเทคโนโลยีอิเล็กทรอนิกส์ แขนงคอมพิวเตอร์
                        มีความหลงใหลในการเขียนโปรแกรม การพัฒนาเว็บไซต์ และสนใจเทคโนโลยี AI ค่ะ
                    </p>
                    <p style={{ fontSize: 20, lineHeight: 2, marginBottom: 32, opacity: 0.9 }}>
                        เป้าหมายของฉันคือการนำความรู้ทางด้านเทคโนโลยีมาสร้างสรรค์ผลงานที่แก้ปัญหาได้จริง
                        และพัฒนาตัวเองให้เป็นนักพัฒนาที่เก่งขึ้นในทุก ๆ วัน
                    </p>

                    {/* ── Education ── */}
                    <h3 style={{ color: "var(--pink)", fontSize: 24, marginBottom: 16 }}>🎓 Education</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
                        {[
                            {
                                school: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ",
                                detail: "สาขาเทคโนโลยีอิเล็กทรอนิกส์ แขนงคอมพิวเตอร์ (กำลังศึกษา)",
                            },
                            {
                                school: "วิทยาลัยเทคนิคราชบุรี",
                                detail: "แผนกวิชาอิเล็กทรอนิกส์ — จบวุฒิ ปวส. ปีการศึกษา 2567",
                            },
                            {
                                school: "วิทยาลัยเทคนิคราชบุรี",
                                detail: "แผนกวิชาคอมพิวเตอร์ธุรกิจ — จบวุฒิ ปวช. ปีการศึกษา 2565",
                            },
                        ].map((e) => (
                            <div key={e.detail} style={{
                                padding: "14px 20px",
                                border: "1px solid rgba(242,181,200,0.2)",
                                borderRadius: 12,
                                background: "rgba(242,181,200,0.05)",
                            }}>
                                <div style={{ fontSize: 20, fontWeight: "bold", marginBottom: 4 }}>{e.school}</div>
                                <div style={{ fontSize: 18, opacity: 0.7 }}>{e.detail}</div>
                            </div>
                        ))}
                    </div>

                    {/* ── Career Goals ── */}
                    <h3 style={{ color: "var(--blue)", fontSize: 24, marginBottom: 16 }}>🎯 เป้าหมายอาชีพ</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {GOALS.map((g) => (
                            <div key={g.text} style={{
                                display: "flex", alignItems: "center", gap: 14,
                                padding: "12px 20px",
                                border: "1px solid rgba(153,193,221,0.25)",
                                borderRadius: 12,
                                background: "rgba(153,193,221,0.06)",
                                fontSize: 19,
                            }}>
                                <span style={{ fontSize: 24 }}>{g.icon}</span>
                                {g.text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}