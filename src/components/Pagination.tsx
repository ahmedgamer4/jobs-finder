import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { JobType } from '../contexts/JobsContext';

function PaginatedItems({ items, setCurrentItems }
  : { items: JobType[], setCurrentItems: (items: JobType[]) => void }) {
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 5;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);

  setCurrentItems(currentItems);

  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< previous"
    />
  );
}

export default PaginatedItems;
