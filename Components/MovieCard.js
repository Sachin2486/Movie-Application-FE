export default function MovieCard({ movie }) {
    return (
      <div className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold">{movie.title}</h3>
          <p className="text-sm text-gray-400">{movie.year}</p>
        </div>
      </div>
    );
  }
  