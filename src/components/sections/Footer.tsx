import Link from "next/link";
import { site } from "@/data/site";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Calendar,
  BookOpen,
  Linkedin,
  Github,
  Instagram,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="pt-4 pb-12 md:pt-6 md:pb-16">
      <div className="container mx-auto max-w-3xl px-4">
        <Card>
          <CardContent className="p-6 md:p-8">
            <div className="grid items-start gap-10 sm:grid-cols-2">
              {/* Social Links */}
              <div>
                <h3 className="mb-4 text-sm font-medium text-foreground">
                  Social Links
                </h3>
                <div className="flex gap-3">
                  <Link
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener"
                    className="rounded-md p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href={site.github}
                    target="_blank"
                    rel="noopener"
                    className="rounded-md p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link
                    href={site.instagram}
                    target="_blank"
                    rel="noopener"
                    className="rounded-md p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                </div>
              </div>

              {/* Get in touch */}
              <div>
                <h3 className="mb-3 text-xs font-medium text-foreground">
                  Get in touch
                </h3>
                <ul className="space-y-1.5 text-xs">
                  <li>
                    <Link
                      href={`mailto:${site.email}`}
                      className="flex items-start justify-between gap-2 rounded-md border border-border/40 bg-muted/40 px-2.5 py-1.5 transition hover:bg-muted/60"
                    >
                      <div className="min-w-0">
                        <p className="inline-flex items-center gap-1.5 text-xs text-foreground">
                          <Mail className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                          Email
                        </p>
                        <p className="pl-5 text-[11px] text-foreground">
                          {site.email}
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={site.calendlyUrl}
                      target="_blank"
                      rel="noopener"
                      className="flex items-start justify-between gap-2 rounded-md border border-border/40 bg-muted/40 px-2.5 py-1.5 transition hover:bg-muted/60"
                    >
                      <div className="min-w-0">
                        <p className="inline-flex items-center gap-1.5 text-xs text-foreground">
                          <Calendar className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                          Let&apos;s Talk
                        </p>
                        <p className="pl-5 text-[11px] text-foreground">
                          Schedule a Call
                        </p>
                      </div>
                      <ChevronRight className="mt-1.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={site.blogUrl}
                      target="_blank"
                      rel="noopener"
                      className="flex items-start justify-between gap-2 rounded-md border border-border/40 bg-muted/40 px-2.5 py-1.5 transition hover:bg-muted/60"
                    >
                      <div className="min-w-0">
                        <p className="inline-flex items-center gap-1.5 text-xs text-foreground">
                          <BookOpen className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                          Blog
                        </p>
                        <p className="pl-5 text-[11px] text-foreground">
                          Read my blog
                        </p>
                      </div>
                      <ChevronRight className="mt-1.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </footer>
  );
}
