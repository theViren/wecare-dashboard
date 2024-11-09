"use client";
import { useRouter } from "next/navigation"; // Import useRouter
import { db } from "@/db";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";
import { Trash2 } from 'lucide-react';
import { deleteProject } from "@/actions/deleteProject";




const ProjectDeleteBtn = ({projectId}:{projectId:number}) => {
    const router = useRouter(); // Initialize the useRouter hook

    const projectDeleter = async (id: number) => {
  
      try {
  
        await deleteProject(id); // Call the server action to delete the project
        router.refresh(); // This will reload the page
  
      } catch (error) {
        console.error("Error deleting project:", error);
      }
    };

  return (
    <Trash2 className="cursor-pointer" onClick={() => projectDeleter(projectId)}/>
  )
}

export default ProjectDeleteBtn;
