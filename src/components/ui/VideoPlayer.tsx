import { motion } from "framer-motion";
import { Play, Pause, Volume2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface VideoPlayerProps {
  videoSrc: string;
  className?: string;
}

export const VideoPlayer = ({ videoSrc, className = "" }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('play', () => setIsPlaying(true));
      video.addEventListener('pause', () => setIsPlaying(false));
      video.addEventListener('ended', () => setIsPlaying(false));
    }
    return () => {
      if (video) {
        video.removeEventListener('play', () => setIsPlaying(true));
        video.removeEventListener('pause', () => setIsPlaying(false));
        video.removeEventListener('ended', () => setIsPlaying(false));
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className={`relative rounded-2xl overflow-hidden shadow-2xl ${className}`}
    >
      {/* Video Container */}
      <div className="relative aspect-video bg-black rounded-2xl">
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-full object-cover rounded-2xl"
          muted={isMuted}
          playsInline
          loop
          onClick={togglePlay}
        />
        
        {/* Overlay Controls */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <button
              onClick={togglePlay}
              className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 ml-1" />
              )}
            </button>
            
            <button
              onClick={toggleMute}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Play Button Overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              onClick={togglePlay}
              className="w-16 h-16 rounded-full bg-emerald-500/90 backdrop-blur-sm flex items-center justify-center text-white hover:bg-emerald-500 transition-colors shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Play className="w-6 h-6 ml-1" />
            </motion.button>
          </div>
        )}
      </div>

      {/* Video Info */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          AI Muhofiz mobil ilovasi ishga tushirish demo
        </p>
      </div>
    </motion.div>
  );
};