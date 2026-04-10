import Link from "next/link";
import { techStack } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function TechStack() {
  return (
    <section id="tech-stack" className="border-b py-4 md:py-5">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="mb-4 text-base font-semibold tracking-tight md:text-lg">
            Tech Stack
          </h2>
          <Button variant="ghost" size="sm" className="h-7 text-xs" asChild>
            <Link href="/tech-stack" className="gap-1">
              View All <ChevronRight className="h-3 w-3" />
            </Link>
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h3 className="mb-1 text-xs font-medium text-muted-foreground">
              Frontend
            </h3>
            <div className="flex flex-row flex-wrap gap-1.5">
              {techStack.frontend.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs px-1.5 py-0"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-1 text-xs font-medium text-muted-foreground">
              Backend
            </h3>
            <div className="flex flex-row flex-wrap gap-1.5">
              {techStack.backend.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs px-1.5 py-0"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-1 text-xs font-medium text-muted-foreground">
              DevOps & Cloud
            </h3>
            <div className="flex flex-row flex-wrap gap-1.5">
              {techStack.devops.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs px-1.5 py-0"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
