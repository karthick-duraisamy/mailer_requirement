import React, { useState } from "react";

interface EmailChipsInputProps {
  label: string;
  emails: string[];
  setEmails: (emails: string[]) => void;
}

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

const EmailChipsInput: React.FC<EmailChipsInputProps> = ({ label, emails, setEmails }) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingValue, setEditingValue] = useState("");

  const handleCommit = (index: number) => {
    const parts = editingValue.split(",").map(e => e.trim()).filter(Boolean);
    if (!parts.length) {
      setEditingIndex(null);
      setEditingValue("");
      return;
    }
    const updated = [...emails];
    const first = parts.shift()!;
    if (isValidEmail(first)) updated[index] = first;
    parts.forEach(p => isValidEmail(p) && updated.push(p));
    setEmails(updated);
    setEditingIndex(null);
    setEditingValue("");
  };

  const handleRemove = (index: number) => {
    setEmails(emails.filter((_, i) => i !== index));
  };

  const handleAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const val = (e.target as HTMLInputElement).value.trim().replace(/,$/, "");
      if (isValidEmail(val)) {
        setEmails([...emails, val]);
        (e.target as HTMLInputElement).value = "";
      }
    }
  };

  return (
    <div className="flex items-baseline gap-1 mt-1">
      <span className="font-medium mt-1">{label}:</span>
      <div className="flex flex-wrap gap-2 flex-1">
        {emails.map((email, idx) => (
          <div
            key={idx}
            className="inline-flex items-center bg-gray-100 px-2 py-1 rounded-full cursor-pointer"
            onDoubleClick={() => {
              setEditingIndex(idx);
              setEditingValue(email);
            }}
          >
            {editingIndex === idx ? (
              <input
                value={editingValue}
                onChange={(e) => setEditingValue(e.target.value)}
                onBlur={() => handleCommit(idx)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleCommit(idx);
                  if (e.key === "Escape") setEditingIndex(null);
                }}
                autoFocus
                className="bg-transparent outline-none border-none w-32"
              />
            ) : (
              <>
                <span>{email}</span>
                {emails.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemove(idx);
                    }}
                    className="ml-1 text-red-500"
                  >
                    ✕
                  </button>
                )}
              </>
            )}
          </div>
        ))}
        <input
          type="text"
          placeholder="Add"
          onKeyDown={handleAdd}
          className="min-w-[80px] bg-transparent outline-none"
        />
      </div>
    </div>
  );
};

export default EmailChipsInput;