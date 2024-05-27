import * as z from "zod";

export enum JobStatus {
  FULL_TIME = "FULL TIME",
  PART_TIME = "PART TIME",
  INTERNSHIP = "INTERNSHIP",
  FREELANCE = "FREELANCE",
}

export enum JobCategory {
  DEVELOPMENT = "DEVELOPMENT",
  DESIGN = "DESIGN",
  MARKETING = "MARKETING",
  BUSINESS = "BUSINESS",
  SUPPORT = "SUPPORT",
}

export const CreateFormSchema = z.object({
  title: z.string().min(1).max(100),
  status: z.nativeEnum(JobStatus),
  category: z.nativeEnum(JobCategory),
  location: z.string().min(1).max(50),
  salary: z.coerce.number().min(1),
  description: z.string().min(1).max(300),
  image: z.string().min(1),
  company: z.string().min(1).max(20),
});
