import React from "react";
import {
  Heart,
  Download,
  Share2,
  MapPin,
  CalendarDays,
  Image as ImageIcon,
  Ruler,
  UserRound,
  ExternalLink,
  FileImage,
  RefreshCw,
} from "lucide-react";

const ZoomImage = ({ image }) => {
  if (!image) return null;

  // ==========================================
  // Helpers
  // ==========================================

  const getWords = (text = "") => {
    return text
      .trim()
      .replace(/\s+/g, " ")
      .split(" ")
      .filter(Boolean);
  };

  // Create a short title from Unsplash's
  // alt_description because description
  // can be null.
  const createTitle = (text = "") => {
    const words = getWords(text);

    if (!words.length) {
      return "Beautiful Unsplash Photo";
    }

    return words
      .slice(0, 7)
      .map(
        (word) =>
          word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(" ");
  };

  // Keep description normal length.
  const createDescription = (text = "") => {
    const words = getWords(text);

    if (!words.length) {
      return "A beautiful photograph shared by an Unsplash photographer.";
    }

    if (words.length <= 25) {
      return words.join(" ");
    }

    return words.slice(0, 25).join(" ") + "...";
  };

  const formatDate = (date) => {
    if (!date) return "Not available";

    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatNumber = (number) => {
    if (number === undefined || number === null) {
      return "0";
    }

    return new Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(number);
  };

  const formatResolution = () => {
    if (!image.width || !image.height) {
      return "Not available";
    }

    return `${image.width} × ${image.height}`;
  };

  // ==========================================
  // Unsplash Data
  // ==========================================

  const mainImage =
    image.urls?.full ||
    image.urls?.regular ||
    image.urls?.raw ||
    image.urls?.small;

  const sourceText =
    image.description ||
    image.short_description ||
    image.alt_description ||
    "";

  const title = createTitle(sourceText);

  const description = createDescription(
    image.description ||
      image.short_description ||
      image.alt_description
  );

  const photographerName =
    image.user?.name || "Unknown Photographer";

  const username = image.user?.username
    ? `@${image.user.username}`
    : "";

  const profileImage =
    image.user?.profile_image?.medium ||
    image.user?.profile_image?.small;

  const photographerLink =
    image.user?.links?.html || null;

  /*
    Unsplash can return location as null or an object.
    We safely handle both situations.
  */
  const location =
    image.location?.name ||
    image.location?.city ||
    image.location?.country ||
    null;

  // ==========================================
  // Download
  // ==========================================

  const handleDownload = () => {
    /*
      Use Unsplash's download link if available.
      This is better than directly downloading
      urls.full.
    */
    const downloadUrl =
      image.links?.download ||
      image.urls?.full ||
      image.urls?.regular;

    if (!downloadUrl) return;

    window.open(
      downloadUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // ==========================================
  // Share
  // ==========================================

  const handleShare = async () => {
    const shareUrl =
      image.links?.html || window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: title,
          text: description,
          url: shareUrl,
        });
      } else {
        await navigator.clipboard.writeText(shareUrl);

        alert("Photo link copied!");
      }
    } catch (error) {
      console.log("Share cancelled");
    }
  };

  // ==========================================
  // Render
  // ==========================================

  return (
    <div className="min-h-screen w-full bg-slate-950 p-3 text-white sm:p-5 lg:p-6">

      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1450px]
          grid-cols-1
          gap-4
          lg:h-[calc(100vh-3rem)]
          lg:grid-cols-[minmax(0,1fr)_350px]
          xl:grid-cols-[minmax(0,1fr)_370px]
        "
      >

        {/* =====================================
            MAIN IMAGE
        ===================================== */}

        <section
          className="
            flex
            min-h-0
            w-full
            items-center
            justify-center
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-black/20
            p-1
            sm:p-2
            lg:h-full
          "
        >
          <img
            src={mainImage}
            alt={
              image.alt_description ||
              "Unsplash photograph"
            }
            className="
              block
              h-auto
              max-h-[70vh]
              w-full
              rounded-xl
              object-contain
              sm:max-h-[75vh]
              lg:max-h-full
              lg:h-full
            "
          />
        </section>


        {/* =====================================
            SIDEBAR
        ===================================== */}

        <aside
          className="
            min-h-0
            w-full
            overflow-y-auto
            rounded-2xl
            border
            border-white/10
            bg-slate-950/90
            p-4
            sm:p-5
            lg:h-full
            lg:p-5
          "
          style={{
            scrollbarWidth: "thin",
            scrollbarColor:
              "rgba(148,163,184,.4) transparent",
          }}
        >

          {/* =================================
              ACTION BUTTONS
          ================================= */}

          <div className="grid grid-cols-3 gap-2">

            {/* Like */}
            <button
              type="button"
              className="
                flex
                min-h-[70px]
                flex-col
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/[0.02]
                transition
                duration-200
                hover:border-red-400/40
                hover:bg-red-400/5
              "
            >
              <Heart
                size={21}
                className="
                  transition
                  duration-200
                  hover:fill-red-400
                  hover:text-red-400
                "
              />

              <span className="mt-1 text-xs text-slate-400">
                {formatNumber(image.likes)}
              </span>
            </button>


            {/* Download */}
            <button
              type="button"
              onClick={handleDownload}
              className="
                flex
                min-h-[70px]
                flex-col
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/[0.02]
                transition
                duration-200
                hover:border-cyan-400/40
                hover:bg-cyan-400/5
              "
            >
              <Download
                size={21}
                className="text-slate-200"
              />

              <span className="mt-1 text-xs text-slate-400">
                Download
              </span>
            </button>


            {/* Share */}
            <button
              type="button"
              onClick={handleShare}
              className="
                flex
                min-h-[70px]
                flex-col
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/[0.02]
                transition
                duration-200
                hover:border-cyan-400/40
                hover:bg-cyan-400/5
              "
            >
              <Share2
                size={21}
                className="text-slate-200"
              />

              <span className="mt-1 text-xs text-slate-400">
                Share
              </span>
            </button>

          </div>


          {/* =================================
              TITLE
          ================================= */}

          <h1
            className="
              mt-5
              text-xl
              font-bold
              leading-tight
              tracking-tight
              sm:text-2xl
            "
          >
            {title}
          </h1>


          {/* =================================
              DESCRIPTION
          ================================= */}

          <p
            className="
              mt-3
              text-sm
              leading-6
              text-slate-400
            "
          >
            {description}
          </p>


          {/* =================================
              PHOTOGRAPHER
          ================================= */}

          <div
            className="
              mt-6
              flex
              items-center
              justify-between
              gap-3
              border-b
              border-white/10
              pb-5
            "
          >

            <div className="flex min-w-0 items-center gap-3">

              {profileImage ? (
                <img
                  src={profileImage}
                  alt={photographerName}
                  className="
                    h-10
                    w-10
                    shrink-0
                    rounded-full
                    object-cover
                  "
                />
              ) : (
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                  "
                >
                  <UserRound size={19} />
                </div>
              )}

              <div className="min-w-0">

                <h2
                  className="
                    truncate
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  {photographerName}
                </h2>

                {username && (
                  <p
                    className="
                      mt-0.5
                      truncate
                      text-xs
                      text-slate-500
                    "
                  >
                    {username}
                  </p>
                )}

              </div>

            </div>


            {photographerLink && (
              <a
                href={photographerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  shrink-0
                  items-center
                  gap-1
                  rounded-full
                  border
                  border-cyan-400/50
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-cyan-400
                  transition
                  hover:bg-cyan-400
                  hover:text-slate-950
                "
              >
                Profile
                <ExternalLink size={12} />
              </a>
            )}

          </div>


          {/* =================================
              PHOTO INFORMATION
          ================================= */}

          <div className="mt-2 divide-y divide-white/10">

            {/* Location */}
            {location && (
              <DetailRow
                icon={<MapPin size={17} />}
                label="Location"
                value={location}
              />
            )}


            {/* Published */}
            <DetailRow
              icon={<CalendarDays size={17} />}
              label="Published"
              value={formatDate(image.created_at)}
            />


            {/* Updated */}
            {image.updated_at && (
              <DetailRow
                icon={<RefreshCw size={17} />}
                label="Updated"
                value={formatDate(image.updated_at)}
              />
            )}


            {/* Asset Type */}
            {image.asset_type && (
              <DetailRow
                icon={<FileImage size={17} />}
                label="Type"
                value={image.asset_type}
              />
            )}


            {/* Resolution */}
            <DetailRow
              icon={<Ruler size={17} />}
              label="Dimensions"
              value={formatResolution()}
            />


            {/* Likes */}
            <DetailRow
              icon={<Heart size={17} />}
              label="Likes"
              value={image.likes?.toLocaleString() || "0"}
            />


            {/* ID */}
            <DetailRow
              icon={<ImageIcon size={17} />}
              label="Photo ID"
              value={image.id || "Unknown"}
            />

          </div>


          {/* =================================
              UNSPLASH PHOTO LINK
          ================================= */}

          {image.links?.html && (
            <a
              href={image.links.html}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-5
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]
                px-4
                py-3
                text-sm
                text-slate-300
                transition
                hover:border-cyan-400/30
                hover:text-cyan-400
              "
            >
              View on Unsplash
              <ExternalLink size={15} />
            </a>
          )}

        </aside>

      </div>
    </div>
  );
};


// ==========================================
// Detail Row
// ==========================================

const DetailRow = ({ icon, label, value }) => {
  return (
    <div
      className="
        grid
        grid-cols-[22px_minmax(80px,1fr)_minmax(100px,1.5fr)]
        items-center
        gap-2
        py-3
        sm:grid-cols-[22px_minmax(95px,1fr)_minmax(120px,1.5fr)]
      "
    >

      {/* Icon */}
      <span className="text-slate-500">
        {icon}
      </span>


      {/* Label */}
      <span
        className="
          text-xs
          text-slate-300
          sm:text-sm
        "
      >
        {label}
      </span>


      {/* Value */}
      <span
        className="
          break-words
          text-right
          text-xs
          text-slate-400
          sm:text-sm
        "
      >
        {value}
      </span>

    </div>
  );
};

export default ZoomImage;