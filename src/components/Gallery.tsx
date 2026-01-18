import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const facebookEmbeds = [
  {
    id: 1,
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2FSLTCMedia%2Fposts%2Fpfbid0Ean7susNYfQ2nrNodS4ny2Um72c2nKqUvwNpf5QWywdUdk7wgKqeTQfVogFHmcRcl&show_text=true&width=500",
  },
  {
    id: 2,
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2FSLTCMedia%2Fposts%2Fpfbid033MSutkqAtVHP7CpN6NAGX5JJ93niB1m6aATnaVs8drWnjRJFX9owcDZQgNn9ZdnPl&show_text=true&width=500",
  },
  {
    id: 3,
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2FSLTCMedia%2Fposts%2Fpfbid027axCULjbTFo2oRFTcquwAj1QNFVmyRnTYqZ8j5nyNySCcbiiEk2hzi53oTTKYJz6l&show_text=true&width=500",
  },
  {
    id: 4,
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2FSLTCMedia%2Fposts%2Fpfbid0qu87m9gH3oFLC85mdBzgKgtE4A187wjDLspVabd6wmP2dqaj629FeK11uiSZ7VWol&show_text=true&width=500",
  },
  {
    id: 5,
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2FSLTCMedia%2Fposts%2Fpfbid0CzpjZGP8rp4ZUPpoLGdtq4X3iRq9kZFgFchyJ1Lmgt5oxpWFEgozykmERZN3bmyLl&show_text=true&width=500",
  },
  {
    id: 6,
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2FSLTCMedia%2Fposts%2Fpfbid027axCULjbTFo2oRFTcquwAj1QNFVmyRnTYqZ8j5nyNySCcbiiEk2hzi53oTTKYJz6l&show_text=true&width=500",
  }
];

export default function Gallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      // Adjusted scroll amount for 450px width cards (to fit better in square view)
      const scrollAmount = 450 + 40; // Card width + some gap/buffer
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left'
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="gallery" className="py-24 bg-transparent overflow-hidden relative group">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-goldcslight to-goldcs mx-auto rounded-full mb-6"></div>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 bg-gray-900/80 hover:bg-goldcs text-white p-3 rounded-full backdrop-blur-sm border border-white/10 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 hidden md:block"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 bg-gray-900/80 hover:bg-goldcs text-white p-3 rounded-full backdrop-blur-sm border border-white/10 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 hidden md:block"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 items-start"
          >
            {facebookEmbeds.map((embed) => (
              <div
                key={embed.id}
                className="w-[320px] h-[400px] md:w-[450px] md:h-[560px] snap-center bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 flex-shrink-0 border border-white/10 relative"
              >
                <div className="w-full h-full">
                  <iframe
                    src={embed.url}
                    width="100%"
                    height="1000" // Increased height to allow internal scrolling within the card if needed
                    style={{ border: 'none' }}
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title={`Facebook Post ${embed.id}`}
                    className="w-full"
                  ></iframe>
                </div>

                {/* Subtle border overlay */}
                <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
