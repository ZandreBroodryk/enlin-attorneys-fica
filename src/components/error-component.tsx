export default function ErrorComponent() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-3xl">
      <div>Oops</div>
      <div className="txt">
        Error<span className="animate-ping">_</span>
      </div>
    </div>
  );
}
