"use client";

import React, { useState } from "react";
import ReactQuill from "react-quill-new"; // Use the new package
import "react-quill-new/dist/quill.snow.css";

function BlogEditor({
  value: initialValue,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div style={{ height: "200px" }}>
      <ReactQuill
        theme="snow"
        value={initialValue}
        onChange={onChange}
        style={{ height: "100%" }}
      />
    </div>
  );
}

export default BlogEditor;
