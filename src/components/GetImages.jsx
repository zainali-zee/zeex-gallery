import { useEffect, useRef, useState } from "react";
import SkeletonGallery from "./SkeltonGallery";
import { ArrowDown, ArrowLeft, X } from "lucide-react"
import ZoomImage from "./ZoomImage"

function GetImages({ category }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [flex, setFlex] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)


  const loaderRef = useRef(null);
  useEffect(() => {
    async function getImages() {
      setLoading(true);

      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${category}&page=${page}&per_page=15&client_id=o-VLOabqg1RXFFDZ8UYQfFZMFqtmviFUFFSqsIpJTkk`
        );

        const data = await response.json();
        // console.log(data);
        if (data.results.length === 0) {
          setHasMore(false);
          return;
        }

        if (page === 1) {
          setImages(data.results);
        } else {
          setImages((prev) => [...prev, ...data.results]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getImages();
  }, [category, page]);
  useEffect(() => {
    setImages([]);
    setPage(1);
    setHasMore(true);
  }, [category]);

  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];

        if (target.isIntersecting && !loading && hasMore) {
          setPage((prev) => prev + 1);
        }
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0,
      }
    );

    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [loading, hasMore]);

  if (loading && images.length === 0) {
    return <SkeletonGallery />;
  }

  // Create 5 Columns
  const columns = [[], [], []];

  images.forEach((image, index) => {
    columns[index % 3].push(image);
  });


  return (
    <>
        <div className={`${flex ? "flex" : "hidden"} w-full h-full overflow-y-auto fixed inset-0 z-80 flex-col flex items-center justify-between backdrop-blur-xl`}>
         
         <div className="absolute top-4">
          {/* Close */}
          <button
            onClick={()=> {setFlex(false)}}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-black/40 text-white transition-all hover:bg-black/[0.1] hover:rotate-90">

            <X size={24} />
          </button>
        </div>
        <ZoomImage image={selectedImage}/>
        {console.log(selectedImage)}
        </div>


      <div className="flex flex-col">
        <div className="flex flex-wrap justify-center gap-5">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-5">
              {column.map((image) => (
                <div key={image.id} className="relative cursor-zoom-in overflow-hidden rounded-lg group"
                  onClick={() => {
                    setFlex(true)
                    setSelectedImage(image)
                  }}
                >

                  <img
                    src={image.urls.small}
                    alt={image.alt_description || "Unsplash image"}
                    className="w-full rounded-lg object-cover"
                  />


                  <div className="absolute inset-0 bg-slate-900/65 opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="absolute top-4 right-4 z-20">
                      <a
                        href={image.urls.full}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-2 rounded flex items-center justify-center"
                      >
                        <ArrowDown size={20} />
                      </a>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full flex items-center gap-3 p-4 z-20">

                      <img
                        src={image.user.profile_image.medium}
                        alt={image.user.name}
                        className="rounded-full w-12 h-12"
                      />

                      <h1 className="font-bold text-white">
                        {image.user.name}
                        <br />

                        <span className="text-white/80 text-xs">
                          Verified
                        </span>
                      </h1>

                    </div>

                  </div>

                </div>
              ))}
            </div>
          ))}
        </div>
        <div
          ref={loaderRef}
          className="h-20 flex items-center justify-center"
        >
          {loading && <p className="text-white">Loading...</p>}
          {!hasMore && (
            <p className="text-gray-400">No more images.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default GetImages;