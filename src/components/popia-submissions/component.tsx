"use client";

import { useQuery } from "@tanstack/react-query";
import { getPopiaSubmissionsAdmin } from "./actions";

export function PopiaSubmissions() {
  const popiaQueries = useQuery({
    queryKey: ["popia-submissions"],
    queryFn: getPopiaSubmissionsAdmin,
  });

  if (popiaQueries.isPending) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col gap-7">
      <h1 className="font-sans text-xl font-bold">
        Consent in terms of the Protection of Personal Information Act
      </h1>
      {popiaQueries.data?.map((item) => (
        <div className="rounded-md border bg-neutral-500 p-2" key={item.id}>
          <p>
            {item.email} has signed POPIA compliance on {item.date}
          </p>
          <p>their signature on record:</p>
          {item.signature.startsWith("data:image/") ? (
            <img src={item.signature} />
          ) : (
            <p>{item.signature}</p>
          )}
        </div>
      ))}
    </div>
  );
}
