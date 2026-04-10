"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery } from "@/data/site";

export function Gallery() {
  const [startIndex, setStartIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const visibleCount = 5;
  const maxStart = Math.max(0, gallery.length - visibleCount);

  function prev() {
    setStartIndex((i) => (i <= 0 ? maxStart : i - 1));
  }

  function next() {
    setStartIndex((i) => (i >= maxStart ? 0 : i + 1));
  }

  function handleImageError(index: number) {
    setImageErrors((prev) => new Set(prev).add(index));
  }

  const activeImage = activeIndex !== null ? gallery[activeIndex] : null;

  return (
    <section id="gallery" className="border-b pt-2 pb-12 md:pt-3 md:pb-16">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="mb-4 text-base font-semibold tracking-tight md:text-lg">
          Gallery
        </h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous gallery items"
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border transition hover:bg-muted"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="grid flex-1 grid-cols-5 gap-2">
            {Array.from({ length: visibleCount }, (_, offset) => {
              const i = startIndex + offset;
              const image = gallery[i];
              const hasError = imageErrors.has(i);
              return (
                <Card
                  key={i}
                  className={cn(
                    "aspect-square cursor-pointer overflow-hidden transition hover:ring-2 hover:ring-primary",
                    activeIndex === i && "ring-2 ring-primary",
                  )}
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                >
                  {hasError ? (
                    <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
                      <span className="text-xs font-medium">{i + 1}</span>
                    </div>
                  ) : (
                    <div className="relative h-full w-full">
                      <Image
                        src={image.url}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 60px, 80px"
                        onError={() => handleImageError(i)}
                      />
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next gallery items"
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border transition hover:bg-muted"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && !imageErrors.has(activeIndex!) && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImage.url}
              alt={activeImage.alt}
              width={600}
              height={600}
              className="h-auto max-h-[80vh] w-auto object-contain"
              priority
            />
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close image"
              className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-black/50 transition hover:bg-black/70"
            >
              <X className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
