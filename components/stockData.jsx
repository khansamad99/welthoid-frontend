import React from "react";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";

const StockData = ({ symbol, price, change, open, marketCap }) => {
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="ml-3">
          <p className="text-gray-900 whitespace-no-wrap">
            {symbol.toUpperCase()}
          </p>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {price.toFixed(2)}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">
          {marketCap || 0}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex-shrink-0">
          {change < 0 ? (
            <div className="relative rounded-full h-10 w-10 flex justify-center items-center bg-red-100">
              <FiTrendingDown className="text-2xl text-red-500" />
            </div>
          ) : (
            <div className="relative rounded-full h-10 w-10 flex justify-center items-center bg-green-100">
              <FiTrendingUp className="text-2xl text-green-500" />
            </div>
          )}
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button className={`py-2 px-3 ${open ? "cursor-pointer" : "cursor-not-allowed"} bg-green-500 hover:bg-green-600 focus:ring-green-400 focus:ring-offset-green-100 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg `}>
          Buy Stock
        </button>
      </td>
    </tr>
  );
};

export default StockData;
