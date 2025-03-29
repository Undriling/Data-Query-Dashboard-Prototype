import React from "react";
import { useSelector } from "react-redux";

const QueryHistory = () => {
  const history = useSelector((state) => state.query.history);

  return (
    <div className="p-4">
      <h2 className="text-xl font-serif font-extrabold text-[#9367f3] mb-2">
        Query History
      </h2>
      <ul>
        {history?.map((q, index) => (
          <li key={index} className="py-[1px] px-3 font-serif text-black">
            {q}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QueryHistory;
