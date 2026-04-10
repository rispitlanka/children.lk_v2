import Link from "next/link";
import { 
  HeartIcon, 
  ChatBubbleLeftIcon, 
  ShareIcon, 
  UserCircleIcon,
  PhotoIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";

const MEDIA_ITEMS = [
  {
    id: 1,
    title: "Together for wellbeing — joining hands in the national effort...",
    date: "January 2026",
    publisher: "Family Health Bureau",
    likes: 24,
    comments: 4,
    shares: 2,
    views: 56,
    type: "Photos"
  },
  {
    id: 2,
    title: "Together for wellbeing — joining hands in the national effort...",
    date: "January 2026",
    publisher: "Family Health Bureau",
    likes: 24,
    comments: 4,
    shares: 2,
    views: 56,
    type: "Photos"
  },
  {
    id: 3,
    title: "Together for wellbeing — joining hands in the national effort...",
    date: "January 2026",
    publisher: "Family Health Bureau",
    likes: 24,
    comments: 4,
    shares: 2,
    views: 56,
    type: "Photos"
  },
  {
    id: 4,
    title: "Together for wellbeing — joining hands in the national effort...",
    date: "January 2026",
    publisher: "Family Health Bureau",
    likes: 24,
    comments: 4,
    shares: 2,
    views: 56,
    type: "Photos"
  },
  {
    id: 5,
    title: "Together for wellbeing — joining hands in the national effort...",
    date: "January 2026",
    publisher: "Family Health Bureau",
    likes: 24,
    comments: 4,
    shares: 2,
    views: 56,
    type: "Photos"
  },
  {
    id: 6,
    title: "Together for wellbeing — joining hands in the national effort...",
    date: "January 2026",
    publisher: "Family Health Bureau",
    likes: 24,
    comments: 4,
    shares: 2,
    views: 56,
    type: "Photos"
  }
];

const GalleryBadge = () => (
  <div style={{ 
    display: "inline-flex", 
    alignSelf: "flex-start", 
    alignItems: "center", 
    justifyContent: "center", 
    border: "1.5px solid #FB5734", 
    backgroundColor: "#FFEFD5", 
    borderRadius: "9999px", 
    padding: "6px 20px", 
    fontSize: "13px", 
    fontWeight: "600", 
    color: "#FB5734", 
    marginBottom: "5px",
    transform: "rotate(-6deg)",
    transformOrigin: "left center"
  }}>
    Gallery
  </div>
);

export default function MediaHub() {
  return (
    <section style={{ position: "relative", width: "100%", backgroundColor: "#FFFEF5", padding: "120px 0", fontFamily: "var(--font-inter), sans-serif", overflow: "hidden" }}>
      
      <div style={{ margin: "0 auto", width: "100%", maxWidth: "1256px", padding: "0 40px", position: "relative", zIndex: 10 }}>

        {/* Header Row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "56px" }}>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: "672px" }}>
            <GalleryBadge />

            <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "42px", fontWeight: "500", lineHeight: "1.1", letterSpacing: "-0.02em", color: "#393550", margin: "0 0 16px 0" }}>
              <span style={{ color: "#FB5734" }}>MEDIA</span> HUB
            </h2>

            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#525252", maxWidth: "480px", margin: 0 }}>
              Interactive courses designed just for you! Learn at your own pace with fun activities, earn badges, and track your progress safely.
            </p>
          </div>

          <Link href="/media" className="hover:bg-[#2f2a46] hover:shadow-lg transition-all" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", backgroundColor: "#393550", color: "#ffffff", borderRadius: "9999px", padding: "14px 32px", fontSize: "14.5px", fontWeight: "700", textDecoration: "none", height: "fit-content" }}>
            Explore More
            <ArrowRightIcon style={{ width: "16px", height: "16px", marginLeft: "4px", strokeWidth: 2.5 }} />
          </Link>
        </div>

        {/* Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "32px" }}>
          {MEDIA_ITEMS.map((item) => (
            <article 
              key={item.id} 
              className="hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all" 
              style={{ 
                position: "relative", 
                display: "flex", 
                flexDirection: "column", 
                backgroundColor: "#ffffffff", 
                borderRadius: "24px", 
                border: "2px solid #FB5734", 
                boxShadow: "6px 6px 0px #FB5734",
                overflow: "hidden"
              }}
            >
              {/* Image Header */}
              <div style={{ position: "relative", width: "100%", height: "200px", backgroundColor: "#f3f4f6" }}>
                <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#cbd5e1" }}>
                  <img src="/images/hero.png" alt="Media" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                
                {/* Photos Badge */}
                <div style={{ position: "absolute", left: "16px", top: "16px", backgroundColor: "#ffffff", borderRadius: "9999px", padding: "6px 16px", display: "flex", alignItems: "center", gap: "6px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
                  <PhotoIcon style={{ width: "16px", height: "16px", color: "#868686" }} />
                  <span style={{ fontSize: "11px", fontWeight: "600", color: "#868686" }}>{item.type}</span>
                </div>
              </div>

              {/* Content Area */}
              <div style={{ padding: "24px 24px 20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <span style={{ fontSize: "12px", color: "#868686", fontWeight: "500" }}>{item.date}</span>
                  <span style={{ fontSize: "12px", color: "#F6BB3B", fontWeight: "600" }}>Age Under 18</span>
                </div>

                <h3 style={{ fontSize: "17px", fontWeight: "600", lineHeight: "1.4", color: "#393550", marginBottom: "20px", maxHeight: "48px", overflow: "hidden" }}>
                  {item.title}
                </h3>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "28px", height: "28px", borderRadius: "50%", backgroundColor: "#e2e8f0" }}></div>
                    <span style={{ fontSize: "12px", color: "#525252", fontWeight: "500" }}>{item.publisher}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <UserCircleIcon style={{ width: "16px", height: "16px", color: "#FB5734" }} />
                    <span style={{ fontSize: "12px", color: "#FB5734", fontWeight: "600" }}>{item.views}</span>
                  </div>
                </div>

                <div style={{ 
                  height: "2px", 
                  backgroundImage: "url('/images/Line 5.png')", 
                  backgroundRepeat: "repeat-x", 
                  backgroundPosition: "center",
                  margin: "0 -24px", 
                  marginBottom: "16px" 
                }}></div>

                {/* Social Actions */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#949494" }}>
                    <HeartIcon style={{ width: "22px", height: "22px", strokeWidth: 1.5 }} />
                    <span style={{ fontSize: "15px", fontWeight: "500" }}>{item.likes}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#949494" }}>
                    <ChatBubbleLeftIcon style={{ width: "22px", height: "22px", strokeWidth: 1.5 }} />
                    <span style={{ fontSize: "15px", fontWeight: "500" }}>{item.comments}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#949494" }}>
                    <ShareIcon style={{ width: "22px", height: "22px", strokeWidth: 1.5 }} />
                    <span style={{ fontSize: "15px", fontWeight: "500" }}>{item.shares}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
