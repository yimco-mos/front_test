// ProductoComponent.jsx
import React from "react";
import "../../../styles/componentget/componentget.css";
import "../../../styles/header/miniheader.css";
import { PRODUCTO_URL } from "../../../customs/variables";
import { useFetchGet } from "../../../customs/useFetch";
import { Loading } from "../Loading";
import { usePagination } from "../../../customs/usePaginacion";
import { ProductList } from "./ProductList";
export const ProductoComponent = () => {
  const { data, loading, error } = useFetchGet(PRODUCTO_URL);
  const { start, nextPage, previousPage } = usePagination();

  const itemsPerLoad = 3;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const limitedData = data.slice(start, start + itemsPerLoad);
  const isFirstPage = start === 0;
  const isLastPage = start + itemsPerLoad >= data.length;

  return (
    <div className="content_data">
      <ProductList data={limitedData} error={error} responseData={null} />
      <div className="pagination">
        {!isFirstPage && <button onClick={previousPage}>Anterior</button>}
        {!isLastPage && <button onClick={nextPage}>Siguiente</button>}
      </div>
    </div>
  );
};