export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-16 py-4 text-sm text-gray-300">
      
      {/* LEFT */}
      <div
  className="
    text-[15px]
    uppercase
    font-normal
    tracking-[1px]
    text-[#C7CBED]
  "
  style={{ lineHeight: "20.5px" }}
>
  MATCHBEST GROUP
</div>


      <div className="flex items-center gap-3">
  
  {/* CONNECT TEXT */}
  <span
    className="
      text-[15px]
      uppercase
      tracking-[1px]
      text-[#C7CBED]
    "
    style={{ lineHeight: "20.5px" }}
  >
    CONNECT WITH US
  </span>

  {/* DIVIDER LINE */}
  <div className="w-12 h-[1px] bg-[#C7CBED] opacity-60"></div>

  {/* NUMBERS */}
  <span
    className="
      text-[15px]
      tracking-[1px]
      text-[#C7CBED]
    "
    style={{ lineHeight: "20.5px" }}
  >
    98765-43210 | 12345-67890
  </span>

</div>

    </nav>
  );
}
