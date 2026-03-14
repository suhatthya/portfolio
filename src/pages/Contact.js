import React from "react";
import Flowers from "../components/Flowers";

const CONTACTS = [
    {
        href: "mailto:s6703052411376@email.kmutnb.ac.th",
        icon: "📧",
        label: "Email",
        labelColor: "var(--pink)",
        text: "s6703052411376@email.kmutnb.ac.th",
        borderColor: "var(--pink)",
    },
    {
        href: "https://github.com/suhatthya",
        icon: "💻",
        label: "GitHub",
        labelColor: "var(--blue)",
        text: "suhatthya",
        borderColor: "var(--blue)",
        target: "_blank",
    },
    {
        href: "tel:0981738756",
        icon: "📞",
        label: "Phone",
        labelColor: "var(--amber)",
        text: "098-173-8756",
        borderColor: "var(--amber)",
    },
    {
        href: "https://line.me/ti/p/VWtMaouffm",
        icon: "💬",
        label: "LINE",
        labelColor: "var(--green)",
        text: "@mshty.30",
        borderColor: "var(--green)",
        target: "_blank",
    },
    {
        href: "https://www.instagram.com/suhatthya",
        icon: "📸",
        label: "Instagram",
        labelColor: "var(--purple)",
        text: "@suhatthya",
        borderColor: "var(--purple)",
        target: "_blank",
    },
];

export default function Contact() {
    return (
        <div>
            <section className="page-section" style={{ textAlign: "center", paddingBottom: 48 }}>
                <Flowers />

                <h2 className="section-title" style={{ fontSize: 48 }}>
                    Get in Touch <span>💌</span>
                </h2>

                {/* ── Available badge ── */}
                <div style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "8px 20px",
                    border: "1px solid rgba(146,204,148,0.5)",
                    borderRadius: 20,
                    background: "rgba(146,204,148,0.1)",
                    marginBottom: 20,
                    fontSize: 20,
                }}>
                    <span style={{
                        width: 10, height: 10, borderRadius: "50%",
                        background: "var(--green)", display: "inline-block",
                        boxShadow: "0 0 6px var(--green)",
                    }} />
                    <span style={{ color: "var(--green)" }}>พร้อมรับงาน / ฝึกงาน</span>
                </div>

                <p className="contact-intro" style={{ fontSize: 22 }}>
                    สนใจร่วมงาน พูดคุยแลกเปลี่ยนความรู้ หรือมีคำถามอะไร
                    <br />
                    สามารถติดต่อมาได้ตามช่องทางด้านล่างนี้เลยนะคะ ยินดีที่ได้รู้จักค่ะ!
                </p>

                {/* ── 5 cards in 1 row grid ── */}
                <div style={{
                    maxWidth: 960,
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    gap: 14,
                }}>
                    {CONTACTS.map((c) => (
                        <a
                            key={c.label}
                            href={c.href}
                            target={c.target || "_self"}
                            rel={c.target === "_blank" ? "noreferrer" : undefined}
                            className="contact-card"
                            style={{ borderColor: c.borderColor, width: "100%" }}
                        >
                            <div style={{ fontSize: 36 }}>{c.icon}</div>
                            <h3 style={{ color: c.labelColor, fontSize: 20 }}>{c.label}</h3>
                            <p style={{ fontSize: 16 }}>{c.text}</p>
                        </a>
                    ))}
                </div>

                <p style={{ marginTop: 40, opacity: 0.65, fontSize: 22, lineHeight: 1.9 }}>
                    📍 Nonthaburi, Thailand
                    <br />
                    <span style={{ fontSize: 20 }}>เลขที่ 23/1 ซอยพิบูลสงคราม 22 แยก 24 ถนนพิบูลสงคราม ตำบลบางเขน อำเภอเมืองนนทบุรี จังหวัดนนทบุรี 11000</span>
                </p>
            </section>

            <footer style={{ fontSize: 20 }}>
                Designed &amp; Coded with 🌸 by Suhatthya © 2026
            </footer>
        </div>
    );
}