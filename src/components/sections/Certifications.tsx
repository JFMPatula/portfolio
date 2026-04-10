"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { certifications } from "@/data/site";
import { ChevronRight, X } from "lucide-react";

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<
    (typeof certifications)[0] | null
  >(null);

  return (
    <section
      id="certifications"
      className="border-b py-4 md:py-5 lg:border-b-0 lg:py-0"
    >
      <div className="w-full">
        <div className="mb-3 flex items-center justify-between gap-4">
          <h2 className="text-sm font-semibold tracking-tight md:text-base">
            Recent Certifications
          </h2>
          <Link
            href="/certifications"
            className="shrink-0 text-xs font-normal text-muted-foreground hover:text-foreground"
          >
            View All <ChevronRight className="inline-block h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          {certifications.slice(0, 2).map((cert) => (
            <button
              key={cert.name}
              onClick={() => setSelectedCert(cert)}
              className="block rounded-md bg-muted/60 px-3 py-2 text-left transition hover:bg-muted"
            >
              <p className="text-sm font-semibold text-foreground">
                {cert.name}
              </p>
              <p className="mt-0.5 text-xs font-normal text-muted-foreground">
                {cert.year ? `${cert.issuer} · ${cert.year}` : cert.issuer}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedCert.imageUrl}
              alt={selectedCert.name}
              width={800}
              height={600}
              className="h-auto max-h-[80vh] w-auto object-contain"
              priority
            />
            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              aria-label="Close certificate"
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
