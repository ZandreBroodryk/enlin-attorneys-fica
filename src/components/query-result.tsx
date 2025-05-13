import { UseQueryResult } from "@tanstack/react-query";
import { ReactNode } from "react";
import ErrorComponent from "./error-component";
import Empty from "./empty";
import Loader from "./loader";

type QueryResultProps<T> = {
  children: (data: T) => ReactNode;
  query: UseQueryResult<T>;
  allowEmpty?: boolean;
  loadWhenFetching?: boolean;
};
export default function QueryResult<T>({
  query,
  children,
  loadWhenFetching = false,
}: QueryResultProps<T>) {
  if (query.isPending || (loadWhenFetching && query.isFetching)) {
    return <Loader />;
  }

  if (query.isError) {
    <ErrorComponent />;
  }
  if (Array.isArray(query.data) && query.data.length === 0) {
    return <Empty />;
  }

  return (
    <>
      {query.isFetching && (
        <div className="absolute top-12 right-6">
          <Loader />
        </div>
      )}
      {query.data != undefined && children(query.data)}
    </>
  );
}
