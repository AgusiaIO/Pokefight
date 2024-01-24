export const Tooltip = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] gap-5 rounded-xl border-2 border-dark_cardBorder bg-dark_card p-5">
      <div className="col-span-2 row-[1] ">
        {/* Klasy przenies do paragrafu */}
        <p className="text-2xl">Pikachu (25)</p>
      </div>
      <img
        className="col-[1] row-[2] h-52 w-full border-b-2 border-r-2 border-dark_cardBorder object-cover pb-5"
        alt=""
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
        }
      />
      <ul role="list" className="col-[2] row-[2] grid gap-5">
        <li>
          <span role="presentation">📌 </span>Type:
          <span> electric</span>
        </li>
        <li>
          <span role="presentation">⚖️ </span>Weight:
          <span> 6kg</span>
        </li>
        <li>
          <span role="presentation">📏 </span> Height:
          <span> 0.4m</span>
        </li>
        <li>
          <span role="presentation">⭐</span> Experience:
          <span> 112</span>
        </li>
      </ul>
      <ul
        role="list"
        className="col-span-2 row-[3] grid grid-cols-3 gap-5 text-left"
      >
        <li>
          <span role="presentation">❤️</span> HP:
          <span className="font-bold"> 35/0</span>
        </li>
        <li>
          <span role="presentation">🗡️</span> Attack:
          <span className="font-bold"> 55/0</span>
        </li>
        <li>
          <span role="presentation">🛡️</span> Defense:
          <span className="font-bold"> 40/0</span>
        </li>
        <li>
          <span role="presentation">☄️</span> Special attack:
          <span className="font-bold"> 50/0</span>
        </li>
        <li>
          <span role="presentation">💫</span> Special defense:
          <span className="font-bold"> 50/0</span>
        </li>
        <li>
          <span role="presentation">💨</span> Speed:
          <span className="font-bold"> 90/2</span>
        </li>
        <li>
          <span role="presentation">🌀</span> Total EV:
          <span className="font-bold"> 2</span>
        </li>
      </ul>
    </div>
  );
};
