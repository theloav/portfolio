import React from 'react';
import { Play, Heart, MoreHorizontal } from 'lucide-react';

const MainContent = () => {
  const playlists = [
    {
      title: "Today's Top Hits",
      description: "Jung Kook is on top of the Hottest 50!",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop"
    },
    {
      title: "RapCaviar",
      description: "New music from Drake, Travis Scott and more",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
    },
    {
      title: "All Out 2010s",
      description: "The biggest songs of the 2010s",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop"
    },
    {
      title: "Rock Classics",
      description: "Rock legends & epic songs",
      image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&h=300&fit=crop"
    }
  ];

  return (
    <div className="flex-1 bg-gradient-to-b from-indigo-900 to-black overflow-auto">
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Good afternoon</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {playlists.slice(0, 6).map((playlist, index) => (
            <div
              key={index}
              className="flex items-center bg-white bg-opacity-10 rounded-md hover:bg-opacity-20 transition-all group"
            >
              <img
                src={playlist.image}
                alt={playlist.title}
                className="w-20 h-20 rounded-l-md"
              />
              <div className="flex-1 p-4">
                <h3 className="text-white font-semibold">{playlist.title}</h3>
              </div>
              <button className="opacity-0 group-hover:opacity-100 mr-4 bg-green-500 rounded-full p-3 shadow-lg transition-all">
                <Play fill="white" size={20} className="text-white" />
              </button>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Made for you</h2>
        <div className="grid grid-cols-4 gap-6">
          {playlists.map((playlist, index) => (
            <div
              key={index}
              className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-all group"
            >
              <div className="relative">
                <img
                  src={playlist.image}
                  alt={playlist.title}
                  className="w-full aspect-square object-cover rounded-md mb-4"
                />
                <button className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 bg-green-500 rounded-full p-3 shadow-lg transition-all">
                  <Play fill="white" size={20} className="text-white" />
                </button>
              </div>
              <h3 className="text-white font-semibold mb-2">{playlist.title}</h3>
              <p className="text-gray-400 text-sm">{playlist.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;