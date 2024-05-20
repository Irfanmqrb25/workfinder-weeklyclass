"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { UploadDropzone } from "@/lib/uploadthing";

interface UploadThingInputProps {
  onChange: (url?: string) => void;
  value: string;
}

const UploadThingInput = ({ onChange, value }: UploadThingInputProps) => {
  if (value) {
    return (
      <div className="relative w-20 h-20">
        <Image
          src={value}
          alt="image preview"
          fill
          className="object-cover rounded-full"
        />
        <button
          className="absolute top-0 right-0 p-1 text-white rounded-full shadow-sm bg-rose-500"
          type="button"
          onClick={() => onChange("")}
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      className="border-brand"
      endpoint="imageUpload"
      onClientUploadComplete={(res) => onChange(res?.[0].url)}
      onUploadError={() => console.log("error")}
    />
  );
};

export default UploadThingInput;
