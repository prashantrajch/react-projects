import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import { useEffect, useRef } from "react";

function RTE({ name, control, label, defaultValue = "" }) {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      // Update the content when defaultValue changes
      editorRef.current.setContent(defaultValue);
    }
  }, [defaultValue]);

  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}
      <Controller
        name={name || "content"}
        control={control}
        defaultValue={defaultValue} // Pass the defaultValue to Controller
        render={({ field: { onChange, value } }) => (
          <Editor
            apiKey="nyt471mwth7gp6e3yb0edtcud98i5roohvd3kuun9bqzdh8v"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue={defaultValue} // Set the initial value from the prop
            init={{
              branding: false,
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange} // Updates the form on change
          />
        )}
      />
    </div>
  );
}

export default RTE;
