'use client'
import { Montserrat, Inter } from "next/font/google";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import bluePattern from "@/public/images/blue.png";
import DocumentImg from "@/public/images/Document.png";
import EditPencilImg from "@/public/images/EditPencil.png";
import FilmmakerProImg from "@/public/images/FilmmakerPro.png";
import TinderImg from "@/public/images/Tinder.png";
import TodayImg from "@/public/images/Today.png";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

const HUBS = [
  {
    name: "Resource Hub",
    description: "Find helpful resources, tools, and support materials for learning and growth.",
    accentColor: "#3B82F6",
    image: DocumentImg,
    href: "/resources",
    row: 1,
  },
  {
    name: "Learning Hub",
    description: "Find helpful resources, tools, and support materials for learning and growth.",
    accentColor: "#2EC556",
    image: EditPencilImg,
    href: "/learning",
    row: 1,
  },
  {
    name: "Media Hub",
    description: "Find helpful resources, tools, and support materials for learning and growth.",
    accentColor: "#DB4F4F",
    image: FilmmakerProImg,
    href: "/media",
    row: 1,
  },
  {
    name: "Events Hub",
    description: "Find helpful resources, tools, and support materials for learning and growth.",
    accentColor: "#7D66FF",
    image: TodayImg,
    href: "/events",
    row: 2,
  },
  {
    name: "Super Hero Hub",
    description: "Find helpful resources, tools, and support materials for learning and growth.",
    accentColor: "#F6BB3B",
    image: TinderImg,
    href: "/superhero",
    row: 2,
  },
];

function HubCard({ hub }: { hub: typeof HUBS[number] }) {
  return (
    <div style={{
      width: "319px",
      height: "244px",
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      boxShadow: "0 2px 6.8px rgba(0,0,0,0.25)",
      position: "relative",
      flexShrink: 0,
    }}>
      {/* Icon image — top right corner */}
      <div style={{
        position: "absolute",
        top: "28px",
        right: "21px",
        width: "64px",
        height: "64px",
      }}>
        <Image src={hub.image} alt={hub.name} fill style={{ objectFit: "contain" }} />
      </div>

      {/* Text content */}
      <div style={{ position: "absolute", top: "48px", left: "21px", width: "278px" }}>
        <p className={inter.className} style={{ fontSize: "20px", fontWeight: "600", color: "#636363" }}>{hub.name}</p>
        {/* Accent line */}
        <div style={{ width: "47px", height: "4px", backgroundColor: hub.accentColor, borderRadius: "2px", margin: "12px 0" }} />
        <p className={inter.className} style={{ fontSize: "14px", fontWeight: "400", color: "#525252", lineHeight: "1.6" }}>{hub.description}</p>
      </div>

      {/* Button */}
      <Link href={hub.href} style={{ textDecoration: "none", position: "absolute", bottom: "21px", left: "21px", width: "278px" }}>
        <div style={{
          height: "40px",
          backgroundColor: hub.accentColor,
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          cursor: "pointer",
          boxShadow: "0 2px 4px rgba(33,38,43,0.16)",
        }}>
          <span className={inter.className} style={{ fontSize: "16px", fontWeight: "500", color: "#ffffff" }}>Explore Hub</span>
          <Icon icon="fluent:arrow-up-right-12-filled" width={16} color="#ffffff" />
        </div>
      </Link>
    </div>
  );
}

export default function QuickAccessHubs() {
  const row1 = HUBS.filter(h => h.row === 1);
  const row2 = HUBS.filter(h => h.row === 2);

  return (
    <section style={{
      width: "100%",
      backgroundColor: "#3B82F6",
      position: "relative",
      overflow: "hidden",
      marginTop: "60px",
      paddingTop: "62px",
      paddingBottom: "80px",
      backgroundImage: `url(${bluePattern.src}), url(${bluePattern.src})`,
      backgroundRepeat: "no-repeat, no-repeat",
      backgroundPosition: "top left, bottom right",
      backgroundSize: "365px 252px, 426px 225px",
    }}>

      {/* Background glow ellipse */}
      <div style={{
        position: "absolute",
        left: "513px",
        top: "351px",
        width: "198px",
        height: "198px",
        borderRadius: "50%",
        backgroundColor: "#3B82F6",
        filter: "blur(73px)",
        opacity: 1,
        pointerEvents: "none",
      }} />

      {/* Bottom white glow ellipse */}
      <div style={{
        position: "absolute",
        bottom: "-356px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "1428px",
        height: "712px",
        borderRadius: "50%",
        backgroundColor: "rgba(255,255,255,0.20)",
        filter: "blur(100px)",
        pointerEvents: "none",
      }} />

      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "32px", position: "relative", zIndex: 1 }}>
        <h2 className={montserrat.className} style={{ fontSize: "40px", fontWeight: "700", color: "#ffffff", lineHeight: "1.2" }}>
          Quick Access Hubs
        </h2>
        <p className={inter.className} style={{ fontSize: "16px", fontWeight: "500", color: "#ffffff", marginTop: "12px", opacity: 0.9 }}>
          Explore our different hubs designed to help kids learn, grow, and connect with their community.
        </p>
      </div>

      {/* Row 1 — 3 cards */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "32px",
        marginBottom: "32px",
        position: "relative",
        zIndex: 1,
      }}>
        {row1.map(hub => <HubCard key={hub.name} hub={hub} />)}
      </div>

      {/* Row 2 — 2 cards centered */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "32px",
        position: "relative",
        zIndex: 1,
      }}>
        {row2.map(hub => <HubCard key={hub.name} hub={hub} />)}
      </div>
    </section>
  );
}
