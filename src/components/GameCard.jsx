// src/components/GameCard.jsx
function GameCard({ game }) {
  return (
    <div
      onClick={() => window.open(game.link, "_blank")}
      className="
        bg-yellow-400        /* Transparent background */  /* Blur behind the card */
        rounded-2xl 
        shadow-lg
        cursor-pointer
        transform
        transition
        duration-300 
        hover:scale-105
        hover:shadow-[0_0_40px_rgba(255,255,0,1)]
        border border-yellow-200
      "
    >
      <img
        src={game.image}
        alt={game.title}
        className="rounded-t-2xl w-full h-30 object-cover"
      />
      <div className="p-4 text-center">
        <h2 className="text-lg font-bold text-white">{game.title}</h2>
      </div>
    </div>
  );
}

export default GameCard;