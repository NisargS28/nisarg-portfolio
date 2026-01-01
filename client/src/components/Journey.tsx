import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const journeyItems = [
  {
    year: "2024 - Present",
    title: "Software Engineer Intern",
    company: "Tech Solutions Inc.",
    description: "Developing frontend features using React and optimizing backend APIs. improved loading times by 40%.",
    type: "work"
  },
  {
    year: "2022 - 2026",
    title: "Bachelor of Computer Science",
    company: "University of Technology",
    description: "Major in Software Engineering. GPA: 3.8/4.0. President of Coding Club.",
    type: "education"
  },
  {
    year: "2023",
    title: "Freelance Web Developer",
    company: "Self-Employed",
    description: "Built custom websites for local businesses using Next.js and Tailwind CSS.",
    type: "work"
  },
  {
    year: "2022",
    title: "Hackathon Winner",
    company: "Global Tech Hackathon",
    description: "Won 1st place for building an innovative accessibility tool for visually impaired users.",
    type: "achievement"
  }
];

export default function Journey() {
  return (
    <section id="journey" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Journey</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2 ml-4 md:ml-0" />

          <div className="space-y-12">
            {journeyItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center z-10 transform md:-translate-x-1/2 ml-0 md:ml-0">
                  {item.type === "education" ? (
                    <GraduationCap className="w-4 h-4 text-primary" />
                  ) : (
                    <Briefcase className="w-4 h-4 text-primary" />
                  )}
                </div>

                {/* Content */}
                <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <span className="text-primary font-mono text-sm mb-2 block">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <h4 className="text-muted-foreground font-medium mb-3">{item.company}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                {/* Empty Space for Grid Layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
