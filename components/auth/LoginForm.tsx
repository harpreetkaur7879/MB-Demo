"use client";

import Image from "next/image";

export default function LoginForm() {
  return (
    <div className="w-[496px]">
      
      {/* Title */}
      <h2 className="text-white text-2xl font-semibold mb-10">
        Sign in
      </h2>

      <form className="space-y-7">

        {/* USERNAME */}
        <div>
          <label className="text-[11px] text-[#C7CBED] uppercase tracking-wide">
            USERNAME
          </label>

          <div className="relative mt-2">

            {/* USER ICON */}
            <Image
  src="/assets/login/Vector.svg"
  alt="user"
  width={20}
  height={20}
  className="
    absolute
    left-5
    top-1/2
    -translate-y-1/2
    z-20
    opacity-100
  "
/>


            <input
  type="text"
  placeholder="USERNAME"
  className="
    relative z-10
    w-full h-[56px]
    pl-12 pr-5
    rounded-[14px]
    bg-white/[0.08]
    border border-white/20
    text-white
  "
/>

          </div>
        </div>

        {/* PASSWORD */}
        {/* PASSWORD */}
<div>
  <label className="text-[11px] text-[#C7CBED] uppercase tracking-wide">
    PASSWORD
  </label>

  <div className="relative mt-2">

    {/* LOCK ICON */}
    <Image
      src="/assets/login/lock.svg"   // PNG use karo
      alt="lock"
      width={20}
      height={20}
      className="
        absolute
        left-5
        top-1/2
        -translate-y-1/2
        z-20
        opacity-90
      "
    />

    {/* EYE ICON */}
    <Image
      src="/assets/login/eye.svg"
      alt="eye"
      width={20}
      height={20}
      className="
        absolute
        right-5
        top-1/2
        -translate-y-1/2
        z-20
        opacity-90
        cursor-pointer
      "
    />

    <input
      type="password"
      placeholder="••••••••"
      className="
        relative z-10
        w-full h-[56px]
        pl-12 pr-12
        rounded-[14px]
        bg-white/[0.08]
        border border-white/20
        backdrop-blur-md
        text-white
        outline-none
        focus:border-white/40
      "
    />

  </div>
</div>


        {/* Forgot */}
        <div className="text-right">
          <button
            type="button"
            className="text-xs text-[#AEB3D7] hover:text-white"
          >
            Forgot password?
          </button>
        </div>

        {/* SIGN IN BUTTON */}
        <button
          type="submit"
          className="
            w-full h-[56px]
            bg-[#0B0F3B]
            hover:bg-[#151a5f]
            text-white
            rounded-[14px]
            text-lg font-semibold
          "
        >
          Sign in
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 text-[#AEB3D7] text-xs">
          <div className="flex-1 h-px bg-white/20" />
          OR CONTINUE WITH
          <div className="flex-1 h-px bg-white/20" />
        </div>

        {/* GOOGLE BUTTON */}
        <button
          type="button"
          className="
            w-full h-[56px]
            bg-white/10
            border border-white/20
            backdrop-blur-md
            text-white
            rounded-[14px]
            flex items-center justify-center
          "
        >
          <Image
            src="/assets/login/google.svg"
            alt="google"
            width={22}
            height={22}
          />
        </button>

      </form>
    </div>
  );
}
