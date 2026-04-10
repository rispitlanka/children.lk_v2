import Link from "next/link";
import { ArrowRightIcon, DocumentTextIcon, EyeIcon } from "@heroicons/react/24/solid";

const RESOURCES = [
  {
    id: 1,
    title: "Child, Adolescent and Youth (CAY) Participation and Campaign Toolkit",
    month: "January 2026",
    description:
      "This is a comprehensive, practical toolkit designed as a living resource to empower children, adolescents, and youth (CAY) in Sri Lanka and across the region to effectively engage in participation.",
    publisher: "Family Health Bureau",
    views: 456,
    href: "/resources",
  },
  {
    id: 2,
    title: "Child, Adolescent and Youth (CAY) Participation and Campaign Toolkit",
    month: "January 2026",
    description:
      "This is a comprehensive, practical toolkit designed as a living resource to empower children, adolescents, and youth (CAY) in Sri Lanka and across the region to effectively engage in participation.",
    publisher: "Family Health Bureau",
    views: 456,
    href: "/resources",
  },
  {
    id: 3,
    title: "Child, Adolescent and Youth (CAY) Participation and Campaign Toolkit",
    month: "January 2026",
    description:
      "This is a comprehensive, practical toolkit designed as a living resource to empower children, adolescents, and youth (CAY) in Sri Lanka and across the region to effectively engage in participation.",
    publisher: "Family Health Bureau",
    views: 456,
    href: "/resources",
  },
];

const AgeBadge = () => (
  <div className="absolute -top-6 -right-6 z-10 rotate-[12deg]">
    <div className="w-[120px] h-[35px] flex items-center justify-center bg-[#ffe1a3] rounded-2xl overflow-hidden border-2 border-solid border-[#e59600]">
      <div className="flex items-center justify-center mt-[-19.9px] h-[19px] ml-[-4.0px] w-[100px] font-semibold text-[#e59600] text-xs text-center tracking-[0] leading-5 whitespace-nowrap" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        Age Under 18
      </div>
    </div>
  </div>
);

export default function ResourcesHub() {
  return (
    <section style={{ position: "relative", width: "100%", backgroundColor: "#ffffff", padding: "96px 0 120px 0", fontFamily: "var(--font-inter), sans-serif", overflow: "hidden", borderTop: "4px solid #81AEFF" }}>
      {/* Decorative Dots Image */}
      <div style={{ position: "absolute", right: "0", top: "0", width: "450px", height: "150px", pointerEvents: "none", backgroundImage: "url('/images/blue 2.png')", backgroundRepeat: "no-repeat", backgroundPosition: "right top", backgroundSize: "contain", opacity: 0.8 }} />
      <div style={{ position: "absolute", left: "96px", bottom: "64px", width: "192px", height: "160px", opacity: 0.3, pointerEvents: "none", backgroundImage: "radial-gradient(#bed4fc 2.5px, transparent 2px)", backgroundSize: "24px 24px" }} />

      <div style={{ margin: "0 auto", width: "100%", maxWidth: "1256px", padding: "0 40px", position: "relative", zIndex: 10 }}>

        {/* Header Row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "56px" }}>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: "672px" }}>
            <div style={{ 
              display: "inline-flex", 
              alignSelf: "flex-start", 
              alignItems: "center", 
              justifyContent: "center", 
              border: "1.5px solid #81AEFF", 
              backgroundColor: "#EBF2FF", 
              borderRadius: "9999px", 
              padding: "6px 20px", 
              fontSize: "13px", 
              fontWeight: "600", 
              color: "#3B82F6", 
              marginBottom: "16px",
              transform: "rotate(-4deg)",
              transformOrigin: "left center"
            }}>
              Discover & Grow
            </div>

            <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "42px", fontWeight: "500", lineHeight: "1.1", letterSpacing: "-0.02em", color: "#393550", margin: "0 0 16px 0" }}>
              <span style={{ color: "#3B82F6" }}>RESOURCES</span> HUB
            </h2>

            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#787878", maxWidth: "480px", margin: 0 }}>
              Explore our different hubs designed to help kids learn, grow, and connect with their community.
            </p>
          </div>

          <Link href="/resources" className="hover:bg-[#2f2a46] hover:shadow-lg transition-all" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", backgroundColor: "#393550", color: "#ffffff", borderRadius: "9999px", padding: "14px 32px", fontSize: "14.5px", fontWeight: "700", textDecoration: "none", height: "fit-content" }}>
            Explore More
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" style={{ width: "16px", height: "16px", marginLeft: "4px" }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
          {RESOURCES.map((resource) => (
            <article 
              key={resource.id} 
              className="hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all" 
              style={{ 
                position: "relative", 
                display: "flex", 
                flexDirection: "column", 
                backgroundColor: "#ffffff", 
                borderRadius: "24px", 
                border: "2px solid #81AEFF", 
                boxShadow: "6px 6px 0px #81AEFF",
                padding: "36px 28px 28px" 
              }}
            >

              <AgeBadge />

              <div style={{ display: "inline-flex", alignItems: "center", width: "fit-content", gap: "10px", borderRadius: "10px", border: "1px solid #EEEEEE", padding: "8px 14px", marginBottom: "24px", boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }}>
                <DocumentTextIcon style={{ width: "16px", height: "16px", color: "#D84D63" }} />
                <span style={{ fontSize: "12px", fontWeight: "500", color: "#A3A3A3" }}>{resource.month}</span>
              </div>

              <h3 style={{ fontSize: "18px", fontWeight: "500", lineHeight: "1.4", color: "#393550", margin: "0 0 16px 0" }}>{resource.title}</h3>

              <p style={{ fontSize: "14px", lineHeight: "1.65", color: "#8C8C8C", margin: "0" }}>{resource.description}</p>

              <div style={{ marginTop: "auto", paddingTop: "28px" }}>
                <div style={{ borderTop: "1.5px dashed #EAEAEA", marginBottom: "24px" }} />

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "28px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#E5E5E5", flexShrink: 0 }} />
                    <span style={{ fontSize: "13px", fontWeight: "500", color: "#8B8B8B" }}>{resource.publisher}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#3B82F6", fontWeight: "500", fontSize: "13px" }}>
                    <EyeIcon style={{ width: "16px", height: "16px" }} />
                    <span>{resource.views}</span>
                  </div>
                </div>

                <Link 
                  href={resource.href} 
                  className="hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all" 
                  style={{ 
                    display: "flex", 
                    width: "100%", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    gap: "8px", 
                    backgroundColor: "#6AA2FF", 
                    borderRadius: "14px", 
                    border: "2px solid #1D4ED8",
                    boxShadow: "0px 4px 0px 0px #1D4ED8",
                    padding: "14px 0", 
                    fontSize: "14.5px", 
                    fontWeight: "700", 
                    color: "#ffffff", 
                    textDecoration: "none" 
                  }}
                >
                  View Resource
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: "18px", height: "18px", marginLeft: "4px" }}>
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
