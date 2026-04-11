import { useEffect, useState,  useRef } from "react";
import Prism from "prismjs";

// lenguajes que uses
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-css";

// plugins opcionales
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

type CodeBlockProps = {
  code: string;
  lang: string;
  showLineNumbers?: boolean;
};

export default function CodeBlock({
  code,
  lang,
  showLineNumbers = false,
}: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code]);

const handleCopy = async () => {
  await navigator.clipboard.writeText(code);
  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000); // desaparece en 2s
};

  return (
    <div className="relative my-2">
    <button
        onClick={handleCopy}
        className="absolute right-2 top-2 text-xs bg-gray-700 text-white px-2 py-1 rounded"
    >
        {copied ? "Copiado ✅" : "Copy"}
    </button>

      <pre
        className={`${showLineNumbers ? "line-numbers" : ""} rounded-md`}
      >
        <code ref={codeRef} className={`language-${lang}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}