import { useState } from "react";

export default function App() {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const places = [
    {
      name: "La Trattoria",
      description: "Przytulna włoska restauracja z domowym makaronem i winem.",
      video: "https://example.com/la-trattoria.mp4"
    },
    {
      name: "Kino Aurora",
      description: "Kameralne kino z atmosferą retro i repertuarem artystycznym.",
      video: "https://example.com/kino-aurora.mp4"
    },
    {
      name: "Café Himmel",
      description: "Kawiarnia z widokiem na miasto i wyjątkową kawą z lokalnej palarni.",
      video: "https://example.com/cafe-himmel.mp4"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Świat jest tuż za rogiem</h1>

      {!selectedPlace ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {places.map((place, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition cursor-pointer"
              onClick={() => setSelectedPlace(place)}
            >
              <h2 className="text-xl font-semibold mb-2">{place.name}</h2>
              <p className="text-sm text-gray-600">{place.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow p-6 max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">{selectedPlace.name}</h2>
          <p className="mb-4 text-gray-700">{selectedPlace.description}</p>
          <video controls className="rounded-xl w-full">
            <source src={selectedPlace.video} type="video/mp4" />
            Twój przeglądarka nie obsługuje odtwarzacza video.
          </video>
          <button
            onClick={() => setSelectedPlace(null)}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl"
          >
            Wróć do listy
          </button>
        </div>
      )}
    </div>
  );
}
