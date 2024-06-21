// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import SearchIcon from '../assets/search.png'; // Assuming you have a component for the search icon


// const Search = ({ setSearchResultsVisible, setPokemonData, currentPage, setLoading }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     const fetchSearchResults = async () => {
//       if (searchTerm.trim() !== '') {   //check for non empty search terms
//         setLoading(true);              //indicates data fetch is in progress
//         const allPokemonUrls = [];     //An empty array to store URLs of Pokémon details.
//         for (let i = 1; i <= 10; i++) { // Adjust the number of iterations based on the total number of pages
//           const result = await axios(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(i - 1) * 20}`);
//           allPokemonUrls.push(...result.data.results.map(pokemon => pokemon.url));
//         }

//         const allPokemonDetails = await Promise.all(
//           allPokemonUrls.map(async url => {    //Maps over each URL to fetch Pokémon details.
//             const response = await axios(url); //Fetches data for each Pokémon.
//             const pokemonData = response.data;  //Stores the fetched Pokémon data.
//             const officialArtworkUrl = pokemonData.sprites.other['official-artwork'].front_default;
//             return {         
//               ...pokemonData,
//               officialArtworkUrl,  
//             };
//           })
//         );

//         const filteredData = allPokemonDetails.filter(pokemon =>
//           pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//         setSearchResults(filteredData);
//         setSearchResultsVisible(true);
//         setLoading(false);
//       } else {
//         setSearchResults([]);
//         setSearchResultsVisible(false);
//       }
//     };

//     fetchSearchResults();
//   }, [searchTerm, setLoading, setSearchResultsVisible]);

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//   };

//   return (
//     <div >
//       <div className="flex justify-center mt-3">
//       <div className="relative">
//       <img src={SearchIcon} alt="Search Icon" className="absolute right-6 top-2 w-[20px] h-[20px] text-gray-400" />
//       <input
//         type="text"
//         placeholder="Search Pokemon..."
//         value={searchTerm}
//         onChange={(e) => handleSearch(e.target.value)}
//         className="px-4 py-2 rounded-lg border-spacing-9 border-b-gray-600 shadow-lg"
//       />
//               </div>

//         </div>

//       {searchResults.length > 0 && (
//         <div className="mt-4">
//           {searchResults.map((pokemon, index) => (
//             <div key={index} className="bg-white rounded-lg p-4 shadow-md mb-4">
//               {pokemon.officialArtworkUrl ? (
//                 <img
//                   src={pokemon.officialArtworkUrl}
//                   alt={pokemon.name}
//                   className="w-full h-32 object-contain mb-2"
//                 />
//               ) : (
//                 <div className="h-32 flex items-center justify-center bg-gray-200 mb-2">
//                   <p>No official artwork available</p>
//                 </div>
//               )}
//               <p className="text-xl font-bold capitalize text-slate-800">{pokemon.name}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
    
//   );
// };

// export default Search;
