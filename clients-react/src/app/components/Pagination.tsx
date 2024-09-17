interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const getPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      {/* Botão de página anterior */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-md bg-gray-200 ${
          currentPage === 1 ? 'cursor-not-allowed' : 'hover:bg-gray-300'
        }`}
      >
        Anterior
      </button>

      {/* Páginas numeradas */}
      {getPages().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-md ${
            page === currentPage ? 'bg-orange-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {page}
        </button>
      ))}

      {/* Botão de próxima página */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-md bg-gray-200 ${
          currentPage === totalPages ? 'cursor-not-allowed' : 'hover:bg-gray-300'
        }`}
      >
        Próxima
      </button>
    </div>
  );
}
