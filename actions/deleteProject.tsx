// app/api/deleteProject/route.ts
"use server";

import { db } from "@/db"; // Adjust the import as necessary
import { projects, feedbacks } from "@/db/schema"; // Import your schema
import { eq } from "drizzle-orm";

// export const deleteProject = async (projectId: number) => {
//         // Then delete the project
//         await db.delete(projects).where(eq(projects.id, projectId))

// };

export const deleteProject = async (projectId: number) => {
        await db.transaction(async (tx) => {
          // Delete the feedbacks associated with the project
          await tx.delete(feedbacks).where(eq(feedbacks.projectId, projectId));
      
          // Delete the project itself
          await tx.delete(projects).where(eq(projects.id, projectId));
        });
      };
      
