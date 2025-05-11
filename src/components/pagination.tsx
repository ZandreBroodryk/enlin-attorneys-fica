"use client";

import {
  paginationResult,
  paginationSchema,
  paginationType,
} from "@/lib/shared";
import { UseQueryResult } from "@tanstack/react-query";

type PaginationProps = {
  setPagination: (pagination: paginationType) => void;
  pagination: paginationType;
  query: UseQueryResult<paginationResult<unknown>>;
};

export default function Pagination(props: PaginationProps) {
  const setPagination = (pagination: paginationType) => {
    const validation = paginationSchema.safeParse(pagination);
    if (validation.success) {
      props.setPagination(validation.data);
    } else {
      alert(validation.error.message);
    }
  };
  return (
    <div className="flex flex-row gap-3">
      <button
        className="cursor-pointer rounded border border-neutral-500/20 bg-neutral-500/20 p-2 hover:border-neutral-700"
        disabled={props.pagination.pageNumber <= 1 || props.query.isFetching}
        onClick={() =>
          setPagination({
            pageSize: props.pagination.pageSize,
            pageNumber: 1,
          })
        }
      >{`First`}</button>
      <button
        className="cursor-pointer rounded border border-neutral-500/20 bg-neutral-500/20 p-2 hover:border-neutral-700"
        disabled={props.pagination.pageNumber <= 1 || props.query.isFetching}
        onClick={() =>
          setPagination({
            pageSize: props.pagination.pageSize,
            pageNumber: props.pagination.pageNumber - 1,
          })
        }
      >{`< Previous`}</button>
      <div className="rounded bg-neutral-500/20 p-2 px-4">
        {props.pagination.pageNumber}
        {props.query.data?.numberOfPages
          ? ` of ${props.query.data.numberOfPages} pages`
          : ""}
      </div>
      <button
        className="cursor-pointer rounded border border-neutral-500/20 bg-neutral-500/20 p-2 hover:border-neutral-700"
        disabled={
          !props.query.data?.numberOfPages ||
          props.query.data?.numberOfPages === props.pagination.pageNumber ||
          props.query.isFetching
        }
        onClick={() =>
          setPagination({
            ...props.pagination,
            pageNumber: props.pagination.pageNumber + 1,
          })
        }
      >{`Next >`}</button>
      <button
        className="cursor-pointer rounded border border-neutral-500/20 bg-neutral-500/20 p-2 hover:border-neutral-700"
        disabled={
          !props.query.data?.numberOfPages ||
          props.query.data?.numberOfPages === props.pagination.pageNumber ||
          props.query.isFetching
        }
        onClick={() =>
          setPagination({
            ...props.pagination,
            pageNumber: props.query.data?.numberOfPages ?? 1,
          })
        }
      >{`Last`}</button>
      <div className="relative">
        <label className="absolute -top-2.5 left-1 text-sm">Page Size</label>
        <input
          className="rounded border border-neutral-700 bg-neutral-500/20 p-2"
          value={props.pagination.pageSize}
          type="number"
          onChange={(event) =>
            setPagination({
              ...props.pagination,
              pageSize: event.target.valueAsNumber,
            })
          }
        />
      </div>
    </div>
  );
}
