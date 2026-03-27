import games from "./data/game";
import GameCard from "./components/GameCard";

function App() {
  return (
    <div className="relative flex flex-col min-h-screen text-white overflow-hidden">

      {/* 🌌 Background Image + Glow Effects */}
      <div className="absolute inset-0 -z-20">
        {/* Background Image with blur */}
        <div className="absolute inset-0 bg-black -z-20">
          <div
            className="absolute inset-0 bg-cover bg-center brightness-50 blur-sm"
            style={{ backgroundImage: `url('/background.jpg')` }}
          ></div>
        </div>

        {/* Blurry Neon Circles */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-500 opacity-40 blur-3xl rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500 opacity-40 blur-3xl rounded-full animate-pulse-slow"></div>
        <div className="absolute top-[20%] right-[-150px] w-[400px] h-[400px] bg-pink-500 opacity-30 blur-3xl rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[25%] left-[-150px] w-[400px] h-[400px] bg-cyan-400 opacity-30 blur-3xl rounded-full animate-pulse-slow"></div>
      </div>

      {/* 🔥 Navbar */}
      <div className="relative z-10 flex justify-between items-center px-6 py-4 border-b border-gray-800 backdrop-blur-md bg-black/30">
        <h1 className="text-3xl font-extrabold tracking-widest bg-gradient-to-r from-yellow-400 to-blue-400 text-transparent bg-clip-text">
          REM GAMES
        </h1>
        <p className="text-sm hidden md:block font-semibold bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 text-transparent bg-clip-text animate-pulse">
          ✨ Play. Enjoy. Repeat.
        </p>
      </div>

      {/* 🔥 Main Content */}
      <div className="relative z-10 flex-1 px-6">

        {/* Hero Section */}
        <div className="text-center py-16 px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Enter the World of <span className="text-purple-400 bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 text-transparent bg-clip-text animate-pulse">REM Games</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Discover addictive mini games. No installs, no waiting — just click and start playing instantly.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-12">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>

      {/* 🔥 Footer */}
      <footer className="h-16 flex items-center justify-center border-t border-gray-800 text-gray-500 text-sm relative z-10">
        © 2026 REM Games — Built by REM 🚀
      </footer>

      {/* Custom Tailwind animation */}
      <style>
        {`
          @keyframes pulse-slow {
            0%, 100% { transform: scale(1); opacity: 0.3; }
            50% { transform: scale(1.2); opacity: 0.5; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 6s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
}

export default App;