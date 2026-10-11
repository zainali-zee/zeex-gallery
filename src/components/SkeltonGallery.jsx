function SkeletonGallery() {
  return (
    <>
      {[...Array(5)].map((_, col) => (
        <div key={col} className="grid grid-cols-1 gap-4">
          {[...Array(5)].map((_, row) => (
            <div
              key={row}
              className="h-60 rounded-lg bg-slate-700 animate-pulse"
            />
          ))}
        </div>
      ))}
    </>
  );
}
export default SkeletonGallery