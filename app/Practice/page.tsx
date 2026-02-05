export default function RightCards() {
  return (
    <div className="
      h-screen
      overflow-y-auto
      w-[420px]
      space-y-6
      py-6
      px-4
      bg-black

      [scrollbar-width:none]
      [-ms-overflow-style:none]
    ">

      <style>
        {`div::-webkit-scrollbar { display:none; }`}
      </style>

      {[1,2,3,4,5].map((n) => (
        <div
          key={n}
          className="
            h-[350px]
            bg-gray-800
            rounded-xl
            flex
            items-center
            justify-between
            p-6
          "
        >

          {/* LEFT TEXT */}
          <div className="text-white">
            <h2 className="text-2xl font-bold">
              I am Card {n}
            </h2>
            <p className="text-gray-400 mt-2">
              Scroll practice
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <img
            src="https://picsum.photos/200"
            className="w-[150px] h-[150px] rounded-lg object-cover"
          />

        </div>
      ))}

    </div>
  );
}
