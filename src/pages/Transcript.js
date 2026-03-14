import React, { useState } from "react";
import Flowers from "../components/Flowers";

const GRADE_COLOR = {
    "A": { bg: "rgba(146,204,148,0.15)", color: "var(--green)", border: "rgba(146,204,148,0.4)" },
    "B+": { bg: "rgba(153,193,221,0.15)", color: "var(--blue)", border: "rgba(153,193,221,0.4)" },
    "B": { bg: "rgba(153,193,221,0.15)", color: "var(--blue)", border: "rgba(153,193,221,0.4)" },
    "C+": { bg: "rgba(255,245,236,0.1)", color: "var(--cream)", border: "rgba(255,245,236,0.3)" },
    "C": { bg: "rgba(255,245,236,0.1)", color: "var(--cream)", border: "rgba(255,245,236,0.3)" },
    "D+": { bg: "rgba(248,215,166,0.12)", color: "var(--amber)", border: "rgba(248,215,166,0.4)" },
    "D": { bg: "rgba(248,215,166,0.12)", color: "var(--amber)", border: "rgba(248,215,166,0.4)" },
    "F": { bg: "rgba(242,181,200,0.12)", color: "var(--pink)", border: "rgba(242,181,200,0.4)" },
};

const SEMESTERS = [
    {
        label: "ภาคการศึกษา 1/2567",
        gpa: "2.64",
        gpax: "2.64",
        courses: [
            { code: "030523105", name: "COMPUTER PROGRAMMING", credits: 2, grade: "F" },
            { code: "030523106", name: "ELECTRONICS TECHNOLOGY", credits: 2, grade: "A" },
            { code: "030523205", name: "COMPUTER PROGRAMMING LAB", credits: 1, grade: "F" },
            { code: "030523206", name: "ELECTRONICS TECHNOLOGY LAB", credits: 1, grade: "A" },
            { code: "030523500", name: "DATABASE & DATA TECHNOLOGY", credits: 2, grade: "A" },
            { code: "030523501", name: "COMP NETW SYS & DATA COMMU", credits: 2, grade: "B" },
            { code: "030523600", name: "DATABASE & DATA TECH LAB", credits: 1, grade: "A" },
            { code: "030523601", name: "COMP NETW SYS & DATA LAB", credits: 1, grade: "B" },
            { code: "030933152", name: "COMMU ENG & REPORT WRITING", credits: 3, grade: "C" },
            { code: "030943111", name: "DIFFERENTIAL EQUATIONS", credits: 3, grade: "D+" },
            { code: "030953103", name: "ENTREPRENEURSHIP", credits: 3, grade: "A" },
        ],
    },
    {
        label: "ภาคการศึกษา 2/2567",
        gpa: "1.91",
        gpax: "2.30",
        courses: [
            { code: "030523118", name: "OBJECT ORIENTED PROGRAMMING", credits: 2, grade: "F" },
            { code: "030523124", name: "WEB APPLICATION DEVELOPMENT", credits: 2, grade: "F" },
            { code: "030523126", name: "LINUX OPERATING SYS & ADMIN", credits: 2, grade: "C+" },
            { code: "030523218", name: "OBJECT ORIENTED PROGRAM LAB", credits: 1, grade: "F" },
            { code: "030523224", name: "WEB APPL DEVELOPMENT LAB", credits: 1, grade: "F" },
            { code: "030523226", name: "LINUX OPG SYS & ADMIN LAB", credits: 1, grade: "C+" },
            { code: "030923101", name: "ENERGY RESOURCES", credits: 3, grade: "B+" },
            { code: "030943112", name: "MATRICES & VECTOR ANALYSIS", credits: 3, grade: "D+" },
            { code: "080303701", name: "DESIGN THINKING", credits: 3, grade: "A" },
        ],
    },
    {
        label: "ภาคการศึกษา 1/2568",
        gpa: "2.14",
        gpax: "2.25",
        courses: [
            { code: "030523105", name: "COMPUTER PROGRAMMING", credits: 2, grade: "D+" },
            { code: "030523205", name: "COMPUTER PROGRAMMING LAB", credits: 1, grade: "D+" },
            { code: "030523503", name: "MOBILE APPL DEVELOPMENT", credits: 2, grade: "B" },
            { code: "030523504", name: "ARTIFICIAL INTELLIGENCE", credits: 2, grade: "C+" },
            { code: "030523505", name: "CYBERSECURITY", credits: 2, grade: "F" },
            { code: "030523603", name: "MOBILE APPL DEVELOPMENT LAB", credits: 1, grade: "B" },
            { code: "030523604", name: "ARTIFICIAL INTELLIGENCE LAB", credits: 1, grade: "C+" },
            { code: "030523605", name: "CYBERSECURITY LABORATORY", credits: 1, grade: "F" },
            { code: "030523701", name: "CLOUD COMPUTING", credits: 2, grade: "D+" },
            { code: "030523801", name: "CLOUD COMPUTING LABORATORY", credits: 1, grade: "D+" },
            { code: "030923102", name: "SCIENCES IN DAILY LIFE", credits: 3, grade: "A" },
            { code: "030933155", name: "ENGL CONVERS FOR DAILY LIFE", credits: 3, grade: "C+" },
        ],
    },
];

export default function Transcript() {
    const [open, setOpen] = useState(0);

    return (
        <section className="page-section" style={{ paddingBottom: 60 }}>
            <Flowers />

            <h2 className="section-title" style={{ fontSize: 48 }}>
                My <span>Transcript</span>
            </h2>

            {/* ── GPAX badge ── */}
            <div style={{ textAlign: "center", marginBottom: 36 }}>
                <span style={{
                    display: "inline-block",
                    padding: "10px 32px",
                    border: "1px solid rgba(242,181,200,0.4)",
                    borderRadius: 30,
                    fontSize: 22,
                    background: "rgba(242,181,200,0.08)",
                }}>
                    🎓 GPAX สะสม : <strong style={{ color: "var(--pink)", fontSize: 26 }}>2.25</strong>
                </span>
            </div>

            {/* ── Semester tabs ── */}
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
                <div style={{ display: "flex", gap: 10, marginBottom: 24, flexWrap: "wrap", justifyContent: "center" }}>
                    {SEMESTERS.map((s, i) => (
                        <button key={i} onClick={() => setOpen(i)} style={{
                            padding: "10px 24px", fontSize: 19,
                            border: open === i ? "2px solid var(--pink)" : "1px solid rgba(255,245,236,0.2)",
                            borderRadius: 24,
                            background: open === i ? "rgba(242,181,200,0.15)" : "transparent",
                            color: open === i ? "var(--pink)" : "rgba(255,245,236,0.6)",
                            cursor: "pointer",
                            fontFamily: "inherit",
                            transition: "all 0.2s",
                        }}>
                            {s.label}
                        </button>
                    ))}
                </div>

                {/* ── Course list ── */}
                {SEMESTERS[open] && (
                    <div>
                        {/* GPA row */}
                        <div style={{
                            display: "flex", justifyContent: "space-between", alignItems: "center",
                            padding: "12px 20px", marginBottom: 16,
                            background: "rgba(242,181,200,0.07)",
                            border: "1px solid rgba(242,181,200,0.2)",
                            borderRadius: 12, fontSize: 20,
                        }}>
                            <span style={{ opacity: 0.75 }}>{SEMESTERS[open].label}</span>
                            <span>
                                GPA : <strong style={{ color: "var(--pink)", fontSize: 24 }}>{SEMESTERS[open].gpa}</strong>
                                <span style={{ margin: "0 12px", opacity: 0.3 }}>|</span>
                                GPAX : <strong style={{ color: "var(--blue)", fontSize: 24 }}>{SEMESTERS[open].gpax}</strong>
                            </span>
                        </div>

                        {/* Courses */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            {SEMESTERS[open].courses.map((c) => {
                                const g = GRADE_COLOR[c.grade] || GRADE_COLOR["C"];
                                return (
                                    <div key={c.code} style={{
                                        display: "flex", alignItems: "center", justifyContent: "space-between",
                                        padding: "14px 20px",
                                        background: "rgba(255,245,236,0.03)",
                                        border: "1px solid rgba(255,245,236,0.08)",
                                        borderRadius: 12,
                                        gap: 16,
                                    }}>
                                        <div style={{ display: "flex", gap: 16, alignItems: "center", flex: 1 }}>
                                            <span style={{ fontSize: 16, opacity: 0.4, flexShrink: 0 }}>
                                                {c.code}
                                            </span>
                                            <span style={{ fontSize: 20 }}>{c.name}</span>
                                        </div>
                                        <div style={{ display: "flex", gap: 16, alignItems: "center", flexShrink: 0 }}>
                                            <span style={{ fontSize: 17, opacity: 0.5 }}>{c.credits} หน่วยกิต</span>
                                            <span style={{
                                                minWidth: 52, textAlign: "center",
                                                padding: "6px 14px",
                                                borderRadius: 10, fontSize: 20, fontWeight: "bold",
                                                background: g.bg, color: g.color, border: `1px solid ${g.border}`,
                                            }}>
                                                {c.grade}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}