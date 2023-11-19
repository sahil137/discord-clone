"use client";

import { UploadDropzone } from "@/utils/uploadthing";
import React from "react";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
}

const FileUpload = ({ endpoint, value, onChange }: FileUploadProps) => {
  return (
    <UploadDropzone
      className="border border-dotted text-zinc-500 rounded-md"
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
};

export default FileUpload;
