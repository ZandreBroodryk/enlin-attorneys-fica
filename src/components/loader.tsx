import Loading from "../icons/loading";

export default function Loader() {
  return (
    <div className="flex">
      <div className="mx-auto flex gap-3">
        <Loading className="size-6 animate-spin" />
        <p className="">Loading ...</p>
      </div>
    </div>
  );
}
