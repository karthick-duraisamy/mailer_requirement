import React, { useState } from "react";

interface EmailInputChipsProps {
  value: string[];
  onChange: (emails: string[]) => void;
  placeholder?: string;
}

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const EmailInputChips: React.FC<EmailInputChipsProps> = ({
  value,
  onChange,
  placeholder = "Enter email"
}) => {
  const [input, setInput] = useState("");
  const [highlightLast, setHighlightLast] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");
  const [error, setError] = useState("");

  const tryAddEmail = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    if (isValidEmail(trimmed)) {
      onChange([...value, trimmed]);
      setInput("");
      setHighlightLast(false);
      setError("");
    } else {
      setError("Invalid email address");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      tryAddEmail();
    } else if (e.key === "Backspace" && input === "") {
      if (highlightLast) {
        onChange(value.slice(0, -1));
        setHighlightLast(false);
      } else {
        setHighlightLast(true);
      }
    } else {
      setHighlightLast(false);
    }
  };

  const handleEditKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const trimmed = editValue.trim();
      if (isValidEmail(trimmed)) {
        const updated = [...value];
        updated[index] = trimmed;
        onChange(updated);
        setEditIndex(null);
        setEditValue("");
      } else {
        setError("Invalid email address");
      }
    } else if (e.key === "Escape") {
      setEditIndex(null);
      setEditValue("");
      setError("");
    }
  };

  const removeChip = (index: number) => {
    onChange(value.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col gap-1 relative">
      <div className="flex flex-wrap gap-2 p-2 border border-gray-300 rounded-lg">
        {value.map((email, idx) => (
          <span
            key={idx}
            className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm ${
              highlightLast && idx === value.length - 1
                ? "bg-red-200"
                : "bg-blue-100"
            }`}
            onDoubleClick={() => {
              setEditIndex(idx);
              setEditValue(email);
            }}
          >
            {editIndex === idx ? (
              <input
                className="text-sm px-1 py-0.5 rounded bg-white border border-gray-300"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onKeyDown={(e) => handleEditKeyDown(e, idx)}
                autoFocus
                onBlur={() => {
                  setEditIndex(null);
                  setEditValue("");
                  setError("");
                }}
              />
            ) : (
              <>
                {email}
                <button
                  onClick={() => removeChip(idx)}
                  className="text-xs text-gray-600 hover:text-red-500"
                >
                  &times;
                </button>
              </>
            )}
          </span>
        ))}
        <input
          className="flex-1 min-w-[120px] p-1 outline-none"
          type="text"
          value={input}
          placeholder={placeholder}
          onChange={(e) => {
            setInput(e.target.value);
            setError(""); // clear on typing
          }}
          onKeyDown={handleKeyDown}
          onBlur={tryAddEmail} // validate on blur
        />
      </div>
      {error && (
        <p className="text-sm text-red-500 ml-2 absolute bottom-[-25px]">{error}</p>
      )}
    </div>
  );
};

export default EmailInputChips;