import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "AI Code Assistant",
    description: "A VS Code extension that uses LLMs to provide real-time code suggestions and refactoring tips.",
    tags: ["TypeScript", "OpenAI API", "React", "Node.js"],
    links: { demo: "#", github: "#" }
  },
  {
    title: "E-Commerce Microservices",
    description: "Scalable e-commerce backend built with microservices architecture, handling payments and inventory.",
    tags: ["Go", "gRPC", "Docker", "Kubernetes", "PostgreSQL"],
    links: { demo: "#", github: "#" }
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and team chat functionality.",
    tags: ["Next.js", "Socket.io", "MongoDB", "Tailwind"],
    links: { demo: "#", github: "#" }
  },
  {
    title: "Algorithm Visualizer",
    description: "Interactive web application to visualize sorting and graph algorithms for educational purposes.",
    tags: ["React", "D3.js", "Algorithms", "Education"],
    links: { demo: "#", github: "#" }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col group hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="p-2 bg-primary/10 rounded-lg w-fit mb-4">
                      <Folder className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-5 h-5" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="font-mono text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
