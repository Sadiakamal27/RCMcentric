import { useEffect, useRef } from "react";

interface AutoPlayVideoProps {
  src: string;
  title?: string;
  wrapperClassName?: string; // outer container
  videoClassName?: string;   // video element
}

const AutoPlayVideo = ({
  src,
  title,
  wrapperClassName = "flex flex-col items-center w-full", 
  videoClassName = "w-full h-full object-cover rounded-lg shadow-lg",
}: AutoPlayVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch((error) => {
            console.log("Autoplay prevented:", error);
          });
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className={wrapperClassName}>
      {title && (
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          {title}
        </h2>
      )}
      <video
        ref={videoRef}
        className={videoClassName}
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default AutoPlayVideo;
