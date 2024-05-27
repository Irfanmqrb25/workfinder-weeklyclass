"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { useForm } from "react-hook-form";
import { CreateFormSchema, JobCategory, JobStatus } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Separator } from "./ui/separator";
import UploadThingInput from "./uploadthing-input";
import { Button } from "./ui/button";
import * as z from "zod";
import { toast } from "react-hot-toast";
import axios from "axios";

const PostJobForm = () => {
  const router = useRouter();
  const { userId } = useAuth();

  const form = useForm({
    resolver: zodResolver(CreateFormSchema),
    defaultValues: {
      title: "",
      status: JobStatus.FULL_TIME,
      category: JobCategory.DEVELOPMENT,
      location: "",
      salary: 1,
      description: "",
      image: "",
      company: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (data: z.infer<typeof CreateFormSchema>) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/job`, {
        ...data,
        userId,
      });
      router.refresh();
      router.push("/jobs/shared");
      toast.success("Job created successfully");
    } catch (error: any) {
      console.log(error.message);
      toast.error("Something went wrong");
    }
  };

  return (
    <Form {...form}>
      <form
        className="bg-white px-5 py-8 md:p-8 flex flex-col space-y-7 w-full shadow-sm rounded-3xl"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="space-y-4">
          <h1 className="text-brand font-bold text-2xl md:text-3xl">
            1. Job Information
          </h1>
          <div className="grid grid-cols-1 gap-1.5">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Senior Software Engineer"
                      className="focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-brand focus:border-2"
                      autoComplete="off"
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex items-center gap-2 w-full">
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Job Status</FormLabel>
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="focus:ring-0 outline-none focus:ring-offset-0 focus:border-brand focus:border-2">
                          <SelectValue placeholder=" Select Status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.values(JobStatus).map((status) => (
                          <SelectItem
                            key={status}
                            value={status}
                            className="capitalize"
                          >
                            {status}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Job Category</FormLabel>
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="focus:ring-0 outline-none focus:ring-offset-0 focus:border-brand focus:border-2">
                          <SelectValue placeholder=" Select Status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.values(JobCategory).map((category) => (
                          <SelectItem
                            key={category}
                            value={category}
                            className="capitalize"
                          >
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex items-center gap-2 w-full">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Job Location</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Jakarta"
                        className="focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-brand focus:border-2"
                        autoComplete="off"
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="salary"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Job Salary</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Salary in a month"
                        className="focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-brand focus:border-2"
                        autoComplete="off"
                        type="number"
                        min={1}
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-brand focus:border-2"
                      placeholder="Enter your job description, please be as detailed as possible, and iclude requirements."
                      disabled={isLoading}
                      {...field}
                      rows={7}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h1 className="text-brand font-bold text-2xl md:text-3xl">
            2. Company Information
          </h1>
          <div className="grid grid-cols-1 gap-1.5">
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Logo</FormLabel>
                  <FormControl>
                    <UploadThingInput
                      onChange={field.onChange}
                      value={field.value}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Tokopedia"
                      className="focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-brand focus:border-2"
                      autoComplete="off"
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type="submit" variant="brand" disabled={isLoading}>
          Post Job
        </Button>
      </form>
    </Form>
  );
};

export default PostJobForm;
