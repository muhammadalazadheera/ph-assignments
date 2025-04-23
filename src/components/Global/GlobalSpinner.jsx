import React from "react";

function GlobalSpinner() {
  return (
    <div className="fixed inset-0 bg-white/60 flex justify-center items-center z-50">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default GlobalSpinner;
