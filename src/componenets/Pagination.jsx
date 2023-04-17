import React from "react";

function Pagination({ currentPage, totalPosts, postPerPgae, setCurrentPage }) {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPgae); i++) {
    pages.push(i);
  }

  return (
    <div className="flex  gap-5 justify-center items-center mt-5">
      {pages?.map((page) => (
        <button
          className={`${
            page === currentPage ? "active" : ""
          } bg-slate-950 text-white px-3 py-1 rounded-md hover:bg-neutral-700 `}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            setCurrentPage(page);
          }}
          key={page}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
