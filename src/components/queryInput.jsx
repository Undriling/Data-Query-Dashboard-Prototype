import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useQueryProcessing from "../hooks/useQueryProcessing";
import { AI_SUGGESTIONS } from "../constants";
import { submitQuery } from "../store/querySlice";

const QueryInput = () => {
  const dispatch = useDispatch();
  const processQuery = useQueryProcessing();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 1) {
      setSuggestions(
        AI_SUGGESTIONS.filter((s) =>
          s.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setSuggestions([]);
    }
  };

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    dispatch(submitQuery(query));
    processQuery(query);
    setQuery("");
    setSuggestions([]);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleQuerySubmit} className="flex flex-col space-y-2">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Ask a business question..."
          className="p-2 border rounded-md font-serif text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        {suggestions.length > 0 && (
          <ul className="border rounded-md bg-white shadow-md">
            {suggestions.map((a, index) => (
              <li
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-300 text-black font-serif"
                onClick={() => {
                  setQuery(a);
                  setSuggestions([]);
                }}>
                {a}
              </li>
            ))}
          </ul>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-800">
          Submit Query
        </button>
      </form>
    </div>
  );
};

export default QueryInput;
