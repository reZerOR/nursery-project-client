import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
type TPagination = {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
};

const PlanPagination = ({
  currentPage,
  totalPages,
  handlePageChange,
}: TPagination) => {
  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => handlePageChange(currentPage - 1)}
            className={`cursor-pointer hover:bg-primary1/20 transition-colors ${
              currentPage === 1 ? "pointer-events-none opacity-50" : ""
            }`}
          />
        </PaginationItem>
        {[...Array(totalPages)].map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              onClick={() => handlePageChange(index + 1)}
              className={`cursor-pointer ${
                currentPage === index + 1
                  ? "bg-primary1 text-white"
                  : "hover:bg-primary1/10"
              } transition-colors`}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            onClick={() => handlePageChange(currentPage + 1)}
            className={`cursor-pointer hover:bg-primary1/20 transition-colors ${
              currentPage === totalPages ? "pointer-events-none opacity-50" : ""
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PlanPagination;
