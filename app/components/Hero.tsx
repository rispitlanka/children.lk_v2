'use client'
import { Poppins } from "next/font/google";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import heroImage from "@/public/images/hero.png";
import whitePattern from "@/public/images/white.png";
import backDots from "@/public/images/back-dots.png";
import Image from "next/image";
import { Icon } from "@iconify/react";
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function Hero() {
    return (
        // Hero container
        <div className={poppins.className} style={{
            display: "flex",
            width: "100%",
            height: "calc(100vh - 80px)",
            alignItems: "center",
            justifyContent: "center",
        }}>
            {/* Left half */}
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "50%",
                height: "100%",
                padding: "48px",
            }}>
                <p style={{ color: "#000000", fontSize: "28px", fontWeight: "500", lineHeight: "1.2" }}>Empowering Youth Since 2025</p>
                <h1 style={{ fontSize: "54px", fontWeight: "700", lineHeight: "1.2", marginTop: "16px", color: "var(--color-primary)" }}>
                    Empowering the <br />
                    Next Generation of <br />
                    Changemakers
                </h1>
                <p style={{ marginTop: "16px", fontSize: "21px", fontWeight: "300", color: "var(--color-accent)" }}>
                    Join a generation that refuses to stay silent. Learn advocate, and create the change you want to see.
                </p>
                <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
                    <div style={{ color: "var(--color-primary)", padding: "16px 32px", borderRadius: "15px", fontSize: "16px", fontWeight: "500", lineHeight: "1.2", border: "1px solid var(--color-primary)" }}>Explore Resources</div>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "var(--color-accent)", color: "var(--color-white)", padding: "16px 32px", borderRadius: "15px", fontSize: "16px", fontWeight: "500", lineHeight: "1.2" }}>
                        <span style={{ fontSize: "16px" }}>Start Learning</span>
                        <ArrowRightIcon style={{ width: "20px", height: "20px" }} />
                    </div>
                </div>

                {/* Social proof */}
                <div style={{ display: "flex", alignItems: "center", gap: "21px", marginTop: "32px" }}>
                    {/* Overlapping avatars */}
                    <div style={{ display: "flex" }}>
                        {[1, 2, 3].map((i) => (
                            <div key={i} style={{
                                width: "43px",
                                height: "43px",
                                borderRadius: "50%",
                                backgroundColor: "#e5e7eb",
                                border: "1.5px solid var(--color-primary)",
                                boxShadow: "0 1px 5.1px rgba(0,0,0,0.25)",
                                marginLeft: i === 1 ? "0" : "-20px",
                                overflow: "hidden",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "12px",
                                color: "#9ca3af",
                            }}>
                            </div>
                        ))}
                    </div>

                    {/* Text */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontSize: "16px", fontWeight: "600", color: "var(--color-accent)", lineHeight: "1.2" }}>+1000</span>
                        <span style={{ fontSize: "14px", fontWeight: "400", color: "#858585", lineHeight: "1.4" }}>Student Connected</span>
                    </div>
                </div>
            </div>

            {/* Right half */}
            <div style={{
                display: "flex",
                width: "50%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px",
            }}>
                {/* Outer container for all floating elements */}
                <div style={{ position: "relative", width: "520px", height: "520px" }}>

                    {/* Glow ellipse — top-left (#8FBAFF) */}
                    <div style={{ position: "absolute", top: "-100px", left: "-100px", width: "340px", height: "340px", zIndex: 0 }}>
                        <div style={{
                            position: "absolute", inset: 0,
                            borderRadius: "50%",
                            backgroundColor: "#8FBAFF",
                            opacity: 0.35,
                            filter: "blur(48px)",
                        }} />
                        <Image src={backDots} alt="" fill style={{ objectFit: "cover", opacity: 0.18 }} />
                    </div>

                    {/* Glow ellipse — bottom-right (primary #3B82F6) */}
                    <div style={{ position: "absolute", bottom: "-100px", right: "-100px", width: "340px", height: "340px", zIndex: 0 }}>
                        <div style={{
                            position: "absolute", inset: 0,
                            borderRadius: "50%",
                            backgroundColor: "#3B82F6",
                            opacity: 0.3,
                            filter: "blur(48px)",
                        }} />
                        <Image src={backDots} alt="" fill style={{ objectFit: "cover", opacity: 0.18 }} />
                    </div>

                    {/* Outer dashed ring */}
                    {/* <div style={{
                        position: "absolute",
                        inset: "-30px",
                        borderRadius: "50%",
                        border: "2px dashed #93C5FD",
                        zIndex: 0,
                    }} /> */}

                    {/* Gradient circle (background) */}
                    <div style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "50%",
                        background: "linear-gradient(to bottom, #3B82F6 0%, #e0eeff 100%)",
                        zIndex: 1,
                    }} />

                    {/* White pattern overlay inside circle */}
                    <div style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "50%",
                        overflow: "hidden",
                        zIndex: 2,
                    }}>
                        <Image
                            src={whitePattern}
                            alt=""
                            fill
                            style={{ objectFit: "cover", objectPosition: "center", opacity: 0.6 }}
                        />
                    </div>

                    {/* Curved arcs overlay — top-right solid, bottom-left dashed */}
                    <svg
                        width="560"
                        height="560"
                        viewBox="0 0 560 560"
                        style={{ position: "absolute", inset: "-20px", zIndex: 4, pointerEvents: "none" }}
                    >
                        {/* Top-right solid arc — radius 295, center 280,280, gap ~15px from circle */}
                        <path
                            d="M 379 14 A 295 295 0 0 1 546 379"
                            fill="none"
                            stroke="#3B82F6"
                            strokeWidth="3"
                            strokeLinecap="round"
                        />
                        {/* Bottom-left dashed arc */}
                        <path
                            d="M 181 546 A 295 295 0 0 1 14 181"
                            fill="none"
                            stroke="#3B82F6"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeDasharray="8 6"
                        />
                    </svg>

                    {/* Hero image clipped to circle */}
                    {/* <div style={{
                        position: "absolute",
                        inset: "-40px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        zIndex: 4,
                    }}>
                        <Image
                            src={heroImage}
                            alt="Hero"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center 10%" }}
                        />
                    </div> */}

                    {/* Top-left card: Speak Out */}
                    <div style={{ position: "absolute", top: "-70px", left: "-130px", zIndex: 10 }}>
                        {/* White card */}
                        <div style={{
                            width: "259px",
                            height: "115px",
                            backgroundColor: "#ffffff",
                            borderRadius: "16px",
                            boxShadow: "0 4px 10.8px rgba(0,0,0,0.24)",
                            position: "relative",
                        }}>
                            <div style={{ padding: "21px 0 0 23px" }}>
                                <p style={{ fontSize: "15px", fontWeight: "600", color: "#525252", marginBottom: "6px" }}>Speak Out</p>
                                <p style={{ fontSize: "12px", color: "#858585", lineHeight: "1.5", width: "213px" }}>Understand your rights and how to protect them</p>
                            </div>
                        </div>
                        {/* Icon button group — centered, overlaps bottom of card */}
                        <div style={{ position: "absolute", bottom: "-40px", left: "calc(50% - 40.5px)" }}>
                            {/* Outer ghost ring */}
                            <div style={{
                                width: "81px", height: "81px", borderRadius: "50%",
                                backgroundColor: "rgba(59,130,246,0.05)",
                                border: "0.5px solid rgba(59,130,246,0.05)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                            }}>
                                {/* Inner solid circle with ring stroke */}
                                <div style={{
                                    width: "63px", height: "63px", borderRadius: "50%",
                                    backgroundColor: "#3B82F6",
                                    border: "9px solid rgba(59,130,246,0.88)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                }}>
                                    <Icon icon="mdi:account-voice" width={28} color="white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom-right card: Legal Rights */}
                    <div style={{ position: "absolute", bottom: "-60px", left: "50%", zIndex: 10 }}>
                        {/* White card */}
                        <div style={{
                            width: "259px",
                            height: "115px",
                            backgroundColor: "#ffffff",
                            borderRadius: "16px",
                            boxShadow: "0 4px 10.8px rgba(0,0,0,0.24)",
                            position: "relative",
                        }}>
                            <div style={{ padding: "21px 0 0 23px" }}>
                                <p style={{ fontSize: "15px", fontWeight: "600", color: "var(--color-accent)", marginBottom: "6px" }}>Legal Rights</p>
                                <p style={{ fontSize: "12px", color: "#858585", lineHeight: "1.5", width: "213px" }}>Understand your rights and how to protect them</p>
                            </div>
                        </div>
                        {/* Icon button group — centered, overlaps bottom of card */}
                        <div style={{ position: "absolute", bottom: "-40px", left: "calc(50% - 40.5px)" }}>
                            {/* Outer ghost ring */}
                            <div style={{
                                width: "81px", height: "81px", borderRadius: "50%",
                                backgroundColor: "rgba(59,130,246,0.05)",
                                border: "0.5px solid rgba(59,130,246,0.05)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                            }}>
                                {/* Inner solid circle with ring stroke */}
                                <div style={{
                                    width: "63px", height: "63px", borderRadius: "50%",
                                    backgroundColor: "#3B82F6",
                                    border: "9px solid rgba(59,130,246,0.88)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                }}>
                                    <Icon icon="mdi:legal" width={28} color="white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Left floating icon */}
                    <div style={{
                        position: "absolute",
                        left: "-60px",
                        bottom: "80px",
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        backgroundColor: "#f1f5f9",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 10,
                    }}>
                        <Icon icon="fluent:learning-app-24-regular" width={22} color="#3B82F6" />
                    </div>

                    {/* Right floating icon */}
                    <div style={{
                        position: "absolute",
                        right: "-60px",
                        top: "180px",
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        backgroundColor: "#f1f5f9",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 10,
                    }}>
                        <Icon icon="hugeicons:resources-add" width={22} color="#3B82F6" />
                    </div>

                </div>
            </div>
        </div>
    )
}