import Navbar from "@/components/Navbar";
import HeroLeft from "@/components/HeroLeft";
import ItemList from "@/components/ItemList";

export default function Dashboard() {
  return (
    <main  className="text-white w-full min-h-screen flex justify-center"
  style={{
    backgroundColor: "#03040F",
    backgroundImage: `
      radial-gradient(circle at 20% 30%, rgba(64, 88, 255, 0.18), transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(88, 72, 255, 0.14), transparent 45%),
      radial-gradient(circle at 50% 110%, rgba(40, 60, 200, 0.25), transparent 55%),
      linear-gradient(to bottom, rgba(2,3,10,0.4), rgba(2,3,15,0.95))
    `
  }}
    >
      
      <div className="relative w-[1920px] min-h-screen">
        <Navbar />
        <HeroLeft />
        <ItemList />
        <footer
  className="
    absolute
    bottom-6
    left-1/2
    -translate-x-1/2
    text-[14px]
    tracking-[2px]
    text-[#6B6F8E]
    opacity-60
  "
>
  © 2026 MATCHBEST GROUP. ALL RIGHTS RESERVED
</footer>

      </div>

    </main>
  );
}

