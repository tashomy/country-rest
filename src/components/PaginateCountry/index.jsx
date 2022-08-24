import React, { useState, useEffect } from "react";
import "./index.scss";
import { useSelector } from "react-redux/es/exports";
import ReactPaginate from "react-paginate";
import Card from "../Card";

export const Items = (props) => {
  return (
    <>
      {props.currentItems &&
        props.currentItems.map((item, i) => {
          return (
            <Card
              key={i}
              flag={item.flags.svg}
              name={item.name.common}
              population={item.population}
              capital={item.capital ? item.capital[0] : ""}
              region={item.region}
              id={item.idd.suffixes[0]}
            />
          );
        })}
    </>
  );
};

const Paginate = ({ countries, itemsPerPage }) => {
  const mode = useSelector((state) => state.mode);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);
  const items = countries;

  useEffect(() => {
    if (document.querySelector(".react-paginate")) {
      if (mode.darkMode === true) {
        document.querySelector(".react-paginate").classList.add("dark");
      } else {
        document.querySelector(".react-paginate").classList.remove("dark");
      }
    }
  }, [mode]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };

  if (countries !== null && countries.length !== 0)
    return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="< "
          renderOnZeroPageCount={null}
          className="react-paginate"
          data-dark={`${mode.darkMode}`}
          activeLinkClassName="active-page"
        />
      </>
    );
};

export default Paginate;
