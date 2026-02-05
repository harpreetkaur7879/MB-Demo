import Image from "next/image";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="h-screen w-screen bg-black flex">

      {/* LEFT */}
      <div className="w-[558px] h-[1080px] bg-[#111222] relative">

        
        <Image
  src="/assets/login/logo.svg"
  alt="MatchBest Group logo"
  width={394}
  height={49}
  className="absolute left-[66px] top-[187px]"
/>


        <div>
          <h1
             className="
             absolute
             left-[66px]
             top-[313px]
             text-white
             text-[80px]
             leading-[100%]
             font-semibold
             "
  style={{ fontFamily: "Syne" }}
>
  Welcome <br /> back!
</h1>


          <p
  className="
    absolute
    left-[66px]
    top-[536px]
    text-[10px]
    leading-[12.66px]
    tracking-[0.39px]
    uppercase
    font-semibold
    text-[#C7CBED]
  "
  style={{ fontFamily: "Segoe UI" }}
>
  Good to see, we missed you!
</p>

        </div>

        <p className="text-xs text-gray-500">
          © 2026 MatchBest Group
        </p>

      </div>

      {/* RIGHT */}
<div className="relative flex-1 h-[1080px]">
  
  <Image
    src="/assets/login/bg.jpg"
    alt="background"
    fill
    className="object-cover"
    priority
  />

  <div className="absolute inset-0 bg-black/40" />

  <div
    className="
      absolute
      top-[187px]
      left-[153px]
      w-[498px]
      h-[619px]
      z-10
    "
  >
    <LoginForm />
  </div>

</div>



    </div>
  );
}
