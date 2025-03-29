import React from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const ResultsDisplay = () => {
  const { results, loading, error } = useSelector((state) => state.query);

  if (loading)
    return (
      <p className="text-center text-blue-700 font-serif font-bold">
        Loading...Please wait processing your query !
      </p>
    );
  if (error)
    return <p className="text-center text-red-500 font-serif">{error}</p>;
  if (!results)
    return (
      <p className="text-center text-black font-serif font-bold">
        No results yet...
      </p>
    );

  return (
    <div className="p-4">
      <h2 className="text-xl font-serif font-extrabold text-[#9367f3]">
        Query Results
      </h2>
      <div className="mt-7">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={results}>
            <XAxis dataKey="name" tick={{ fill: "#4B0082" }} />
            <YAxis tick={{ fill: "#00008B" }} />
            <Tooltip />
            <CartesianGrid stroke="#228B22" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="value" stroke="#8B0000" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ResultsDisplay;
