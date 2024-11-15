import React from "react";
import { eq, InferSelectModel } from "drizzle-orm";
type Project = InferSelectModel<typeof projects>;
import { useRouter } from "next/navigation"; // Import useRouter

type Props = {
  projects: Project[];
};
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import Link from "next/link";
import { projects } from "@/db/schema";
import { Button } from "@/components/ui/button";
import ProjectDeleteBtn from "@/components/project-delete-button";

const ProjectList = (props: Props) => {

  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-3 m-5 p-4 gap-4">
        {props.projects.map((project: Project) => (
          <li key={project.id}>
            <Card className="max-w-[350px] flex flex-col h-full">
              <CardHeader className="flex-1">
                <div className="flex justify-between">
                  <CardTitle className="mr-2">{project.name}</CardTitle>
                  <ProjectDeleteBtn projectId={project.id}/>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={`/projects/${project.id}`}>
                  <Button>View Project</Button>
                </Link>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
