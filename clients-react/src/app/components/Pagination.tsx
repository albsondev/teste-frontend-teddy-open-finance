interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }
  
  export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    return (
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => onPageChange(i + 1)}
            className={`px-4 py-2 ${i + 1 === currentPage ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    );
  }
  