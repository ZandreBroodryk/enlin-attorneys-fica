export default function Empty() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-3xl">
      <h1>Empty</h1>
      <p className="txt">
        No Results from the server<span className="animate-ping">...</span>
      </p>
      <p className="pt-5 text-sm">
        If this is not a good thing, please contact admin, otherweise, Horray!
      </p>
    </div>
  );
}
