"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { certifications } from "@/data/site";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X } from "lucide-react";

export default function CertificationsPage() {
  const [selectedCert, setSelectedCert] = useState<
    (typeof certifications)[0] | null
  >(null);

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <Button variant="ghost" size="sm" asChild>
        <Link href="/" className="mb-8 gap-2">
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
      </Button>
      <h1 className="text-3xl font-bold tracking-tight">Certifications</h1>
      <p className="mt-2 text-muted-foreground">Professional certifications.</p>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {certifications.map((cert) => (
          <Card
            key={cert.name}
            className="cursor-pointer transition hover:shadow-md"
            onClick={() => setSelectedCert(cert)}
          >
            <CardContent className="p-0">
              <button
                type="button"
                className="block w-full p-6 text-left transition hover:bg-muted/50"
              >
                <h2 className="font-semibold">{cert.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {cert.year ? `${cert.issuer} · ${cert.year}` : cert.issuer}
                </p>
              </button>
            </CardContent>
          </Card>
        ))}
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
    </div>
  );
}
