import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { JobsType, JobType } from '../contexts/JobsContext';

function PaginatedItems({
  items, setCurrentItems,
}: {
  items: JobsType, setCurrentItems: (items: JobType[]) => void
}) {
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 5;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.jobs.slice(itemOffset, endOffset);

  useEffect(() => {
    setCurrentItems(currentItems);
  }, [itemOffset, items]);

  const pageCount = Math.ceil(items.jobs.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.jobs.length;
    setItemOffset(newOffset);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      renderOnZeroPageCount={undefined}
      previousLabel="< previous"
      className="flex flex-col sm:flex-row gap-1 sm:gap-5 rounded-md p-3"
      breakClassName="pagination-btn"
    />
  );
}

export default PaginatedItems;
