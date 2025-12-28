'use client'
import React, { useRef, useState } from 'react';

interface VideoInTextProps {
  /** Le texte à afficher */
  text: string;
  /** URL de la vidéo */
  videoUrl: string;
  /** Taille du texte (classes Tailwind) */
  textSize?: string;
  /** Couleur du texte quand pas de vidéo */
  textColor?: string;
  /** Largeur du conteneur */
  width?: string;
  /** Hauteur du conteneur */
  height?: string;
  /** Boucler la vidéo */
  loop?: boolean;
  /** Lecture automatique */
  autoplay?: boolean;
  /** Son muet */
  muted?: boolean;
}

const VideoInText: React.FC<VideoInTextProps> = ({
  text,
  videoUrl,
  textSize = 'text-8xl',
  textColor = 'text-gray-800',
  width = 'w-full',
  height = 'h-64',
  loop = true,
  autoplay = true,
  muted = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleVideoLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`relative ${width} ${height} overflow-hidden flex items-center justify-center`}>
      
      {/* Conteneur du texte */}
      <div className={`relative z-20 ${textSize} font-black text-center`}>
        
        {/* Texte normal (visible quand vidéo pas chargée) */}
        <div className={`${textColor} ${!isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {text}
        </div>
        
        {/* Texte avec effet vidéo */}
        <div 
          className={`absolute top-0 left-0 w-full h-full ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            backgroundImage: `url('${videoUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {text}
        </div>
        
      </div>

      {/* Vidéo cachée qui charge la source */}
      <video
        ref={videoRef}
        className="hidden"
        preload="metadata"
        onLoadedData={handleVideoLoad}
        src={videoUrl}
      />
      
      {/* Message de chargement */}
      {!isLoaded && (
        <div className="absolute bottom-4 text-sm text-gray-500">
          Chargement de l'effet vidéo...
        </div>
      )}
    </div>
  );
};

export default VideoInText;