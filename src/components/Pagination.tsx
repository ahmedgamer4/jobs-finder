import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { JobsType, JobType } from '../contexts/JobsContext';

function PaginatedItems({ items, setCurrentItems }
  : { items: JobsType, setCurrentItems: (items: JobType[]) => void }) {
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 5;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.jobs.slice(itemOffset, endOffset);

  useEffect(() => {
    setCurrentItems(currentItems);
  }, [itemOffset]);

  const pageCount = Math.ceil(items.jobs.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.jobs.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
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
      className="flex gap-6 rounded-md shadow-sm p-3"
      breakClassName="pagination-btn"
    />
  );
}

export default PaginatedItems;
