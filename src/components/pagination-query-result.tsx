import { UseQueryResult } from "@tanstack/react-query";
import { ReactNode } from "react";
import ErrorComponent from "./error-component";
import Empty from "./empty";
import Loader from "./loader";
import { paginationResult, paginationType } from "@/lib/shared";
import Pagination from "./pagination";

type PaginationQueryResultProps<T> = {
  children: (data: T[]) => ReactNode;
  query: UseQueryResult<paginationResult<T>>;
  loadWhenFetching?: boolean;
  pagination: paginationType;
  setPagination: (pagination: paginationType) => void;
};
export default function PaginationQueryResult<T>({
  query,
  children,
  loadWhenFetching = false,
  pagination,
  setPagination,
}: PaginationQueryResultProps<T>) {
  return (
    <>
      {query.isFetching && (
        <div className="absolute top-12 right-6">
          <Loader />
        </div>
      )}
      {query.isPending || (loadWhenFetching && query.isFetching) ? (
        <Loader />
      ) : query.isError ? (
        <ErrorComponent />
      ) : Array.isArray(query.data?.items) && query.data.items.length === 0 ? (
        <Empty />
      ) : (
        query.data.items && children(query.data.items)
      )}
      <div className="h-20" />
      <Pagination
        pagination={pagination}
        setPagination={setPagination}
        query={query}
      />
    </>
  );
}
