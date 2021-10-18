import React from 'react';
import { ButtonTemplate } from "../../Template/ButtonTemplate/ButtonTemplate";
import { IPagination } from "../../interface/interface";

export const Pagination = (
  {
    countPage,
    maxPage,
    handleClickNextPage,
    handleClickPrevPage,
  }:IPagination
) => {

  return (
    <div className="pagination-container">
      {
        countPage <= 1 ? (
          <ButtonTemplate
            handleClick={handleClickNextPage}
            disabled={countPage >= maxPage}
          >
            Next page
          </ButtonTemplate>
        ) : (
          <>
            <ButtonTemplate
              handleClick={handleClickPrevPage}
            >
              Previous page
            </ButtonTemplate>

            <ButtonTemplate
              handleClick={handleClickNextPage}
              disabled={countPage >= maxPage}
            >
              Next page
            </ButtonTemplate>
          </>
        )
      }
    </div>
  );
}
