import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';


const TestimonialCard = ({ testimonial }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <div className="relative h-64 overflow-hidden bg-muted">
        {!isPlaying ? (
          <>
            <Image
              src={testimonial?.thumbnail}
              alt={testimonial?.thumbnailAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button
                onClick={handlePlayVideo}
                className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center transition-transform hover:scale-110"
                aria-label="Play video testimonial"
              >
                <Icon name="Play" size={24} />
              </button>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <Icon name="Video" size={48} className="text-muted-foreground" />
            <span className="ml-3 text-muted-foreground">Video Player</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
            <Image
              src={testimonial?.clientImage}
              alt={testimonial?.clientImageAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold text-foreground">{testimonial?.clientName}</h4>
            <p className="text-sm text-muted-foreground">{testimonial?.clientRole}</p>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {testimonial?.quote}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="text-xs text-muted-foreground">{testimonial?.company}</span>
          <div className="flex gap-1">
            {[...Array(5)]?.map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={14}
                className={i < testimonial?.rating ? 'text-secondary fill-secondary' : 'text-muted'}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;