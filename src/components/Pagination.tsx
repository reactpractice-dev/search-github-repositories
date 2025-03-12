type Props = {
  currentPage: number;
  perPage: number;
  totalCount: number;
  onPageChange: (p: number) => void;
};

const Pagination: React.FC<Props> = ({
  currentPage,
  perPage,
  totalCount,
  onPageChange,
}) => {
  const numberOfPages = Math.ceil(totalCount / perPage);
  const allPages = Array.from({ length: numberOfPages }, (_, i) => i + 1);
  const visiblePages = [
    // first page
    allPages[0],
    // pages around the current page
    ...allPages.slice(Math.max(currentPage - 3, 1), currentPage + 2),
    // last page
    allPages[allPages.length - 1] > 100 ? 100 : allPages[allPages.length - 1],
  ];
  return (
    <ul className="flex gap-1 my-4 justify-center">
      {visiblePages.map((page, index) => (
        <li key={page}>
          <button
            onClick={() => onPageChange(page)}
            className={`cursor-pointer rounded-xl py-2 px-3 ${
              currentPage === page
                ? "font-bold bg-blue-600 text-white"
                : "hover:bg-gray-200"
            }`}
          >
            {page}
          </button>
          {visiblePages[index + 1] - page > 1 && <span>...</span>}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
