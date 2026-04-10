import Link from "next/link";
import { techStack } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function TechStackPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <Button variant="ghost" size="sm" asChild>
        <Link href="/" className="mb-8 gap-2">
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
      </Button>
      <h1 className="text-3xl font-bold tracking-tight">Tech Stack</h1>
      <p className="mt-2 text-muted-foreground">Technologies I work with.</p>
      <div className="mt-12 grid gap-12 sm:grid-cols-2">
        <div>
          <h2 className="mb-4 text-lg font-semibold">Frontend</h2>
          <div className="flex flex-wrap gap-2">
            {techStack.frontend.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold">Backend</h2>
          <div className="flex flex-wrap gap-2">
            {techStack.backend.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold">DevOps & Cloud</h2>
          <div className="flex flex-wrap gap-2">
            {techStack.devops.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
