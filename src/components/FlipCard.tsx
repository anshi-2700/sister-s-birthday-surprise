import { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface FlipCardProps {
  number: number;
  reason: string;
  imageUrl: string;
}

const FlipCard = ({ number, reason, imageUrl }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`flip-card w-full aspect-[3/4] cursor-pointer ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flip-card-inner relative w-full h-full">
        {/* Front - Reason */}
        <div className="flip-card-front absolute inset-0 rounded-2xl gradient-card shadow-lg border border-border/50 p-4 flex flex-col items-center justify-center overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-3 right-3">
            <Sparkles className="w-5 h-5 text-gold/60 sparkle" />
          </div>
          <div className="absolute bottom-3 left-3">
            <Heart className="w-4 h-4 text-primary/40" />
          </div>
          
          {/* Number badge */}
          <div className="w-12 h-12 rounded-full gradient-rose flex items-center justify-center mb-4 shadow-md">
            <span className="text-primary-foreground font-bold text-lg">
              {number}
            </span>
          </div>
          
          {/* Reason text */}
          <p className="text-center text-foreground font-medium text-base leading-relaxed px-2">
            {reason}
          </p>
          
          {/* Tap hint */}
          <div className="absolute bottom-4 text-muted-foreground text-xs flex items-center gap-1 opacity-60">
            <span>Tap to see photo</span>
            <Heart className="w-3 h-3" />
          </div>
        </div>

        {/* Back - Image */}
        <div className="flip-card-back absolute inset-0 rounded-2xl overflow-hidden shadow-lg border-2 border-primary/30">
          <img
            src={imageUrl}
            alt={`Memory ${number}`}
            className="w-full h-full object-cover"
          />
          {/* Overlay with number */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full gradient-rose flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">{number}</span>
            </div>
            <span className="text-primary-foreground text-sm font-medium drop-shadow-lg">
              Tap to flip back
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
