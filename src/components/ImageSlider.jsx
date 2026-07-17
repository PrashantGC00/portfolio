import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export function ImageSlider({ images, alt }) {
  const [index, setIndex] = useState(0)

  if (!images || images.length === 0) return null

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  return (
    <div className="relative w-full overflow-hidden rounded-lg bg-ink-surface">
      <div className="aspect-video w-full">
        <img
          src={images[index]}
          alt={`${alt} screenshot ${index + 1}`}
          className="h-full w-full object-cover"
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-ink/30 p-2 text-paper hover:bg-ink/70 transition-colors"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-ink/30 p-2 text-paper hover:bg-ink/70 transition-colors"
          >
            <ChevronRight />
          </button>

          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  i === index ? 'bg-brass' : 'bg-paper-faint/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
