// Markdown Renderer Component
// Renders markdown content with proper styling

import React from 'react';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  // Parse and render markdown content
  const renderContent = (text: string): React.ReactNode[] => {
    const elements: React.ReactNode[] = [];
    let currentIndex = 0;
    let key = 0;

    // Process the text character by character
    while (currentIndex < text.length) {
      // Check for bold (**text**)
      if (text.slice(currentIndex, currentIndex + 2) === '**') {
        const endIndex = text.indexOf('**', currentIndex + 2);
        if (endIndex !== -1) {
          const boldText = text.slice(currentIndex + 2, endIndex);
          elements.push(<strong key={key++} className="font-semibold">{boldText}</strong>);
          currentIndex = endIndex + 2;
          continue;
        }
      }

      // Check for italic (*text* or _text_)
      if (text[currentIndex] === '*' && text[currentIndex + 1] !== '*') {
        const endIndex = text.indexOf('*', currentIndex + 1);
        if (endIndex !== -1 && text[endIndex - 1] !== '*') {
          const italicText = text.slice(currentIndex + 1, endIndex);
          elements.push(<em key={key++} className="italic">{italicText}</em>);
          currentIndex = endIndex + 1;
          continue;
        }
      }

      // Check for inline code (`code`)
      if (text[currentIndex] === '`') {
        const endIndex = text.indexOf('`', currentIndex + 1);
        if (endIndex !== -1) {
          const codeText = text.slice(currentIndex + 1, endIndex);
          elements.push(
            <code key={key++} className="px-1.5 py-0.5 bg-gray-100 rounded text-sm font-mono text-purple-600">
              {codeText}
            </code>
          );
          currentIndex = endIndex + 1;
          continue;
        }
      }

      // Check for links [text](url)
      if (text[currentIndex] === '[') {
        const closeBracket = text.indexOf(']', currentIndex);
        if (closeBracket !== -1 && text[closeBracket + 1] === '(') {
          const closeParen = text.indexOf(')', closeBracket);
          if (closeParen !== -1) {
            const linkText = text.slice(currentIndex + 1, closeBracket);
            const linkUrl = text.slice(closeBracket + 2, closeParen);
            elements.push(
              <a key={key++} href={linkUrl} className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">
                {linkText}
              </a>
            );
            currentIndex = closeParen + 1;
            continue;
          }
        }
      }

      // Regular character - collect until next special character
      let endOfPlain = currentIndex + 1;
      while (
        endOfPlain < text.length &&
        text[endOfPlain] !== '*' &&
        text[endOfPlain] !== '`' &&
        text[endOfPlain] !== '[' &&
        text[endOfPlain] !== '_'
      ) {
        endOfPlain++;
      }
      elements.push(<span key={key++}>{text.slice(currentIndex, endOfPlain)}</span>);
      currentIndex = endOfPlain;
    }

    return elements;
  };

  // Check if content is a list item
  const isListItem = content.trim().startsWith('•') || 
                     content.trim().startsWith('-') || 
                     content.trim().match(/^\d+\./);

  if (isListItem) {
    // Handle list items
    const trimmed = content.trim();
    let bulletChar = '';
    let textContent = trimmed;

    if (trimmed.startsWith('•')) {
      bulletChar = '•';
      textContent = trimmed.slice(1).trim();
    } else if (trimmed.startsWith('-')) {
      bulletChar = '•';
      textContent = trimmed.slice(1).trim();
    } else if (trimmed.match(/^\d+\./)) {
      const match = trimmed.match(/^(\d+\.)/);
      bulletChar = match ? match[1] : '';
      textContent = trimmed.slice(bulletChar.length).trim();
    }

    return (
      <div className={`flex gap-2 ${className}`}>
        <span className="text-gray-500 flex-shrink-0">{bulletChar}</span>
        <span>{renderContent(textContent)}</span>
      </div>
    );
  }

  // Check if content has line breaks
  if (content.includes('\n')) {
    const lines = content.split('\n');
    return (
      <div className={`space-y-2 ${className}`}>
        {lines.map((line, index) => {
          if (line.trim() === '') {
            return <div key={index} className="h-2" />;
          }
          // Check for list items
          if (line.trim().startsWith('•') || line.trim().startsWith('-') || line.trim().match(/^\d+\./)) {
            const trimmed = line.trim();
            let bulletChar = '';
            let textContent = trimmed;

            if (trimmed.startsWith('•')) {
              bulletChar = '•';
              textContent = trimmed.slice(1).trim();
            } else if (trimmed.startsWith('-')) {
              bulletChar = '•';
              textContent = trimmed.slice(1).trim();
            } else if (trimmed.match(/^\d+\./)) {
              const match = trimmed.match(/^(\d+\.)/);
              bulletChar = match ? match[1] : '';
              textContent = trimmed.slice(bulletChar.length).trim();
            }

            return (
              <div key={index} className="flex gap-2">
                <span className="text-gray-500 flex-shrink-0">{bulletChar}</span>
                <span>{renderContent(textContent)}</span>
              </div>
            );
          }
          return <div key={index}>{renderContent(line)}</div>;
        })}
      </div>
    );
  }

  // Regular paragraph
  return <span className={className}>{renderContent(content)}</span>;
}

// Block-level Markdown renderer for full paragraphs
export function MarkdownBlock({ content, className = '' }: MarkdownRendererProps) {
  // Split by double newlines for paragraphs
  const paragraphs = content.split('\n\n');

  return (
    <div className={`space-y-4 ${className}`}>
      {paragraphs.map((paragraph, index) => {
        // Check for code blocks
        if (paragraph.startsWith('```')) {
          const lines = paragraph.split('\n');
          const language = lines[0].slice(3);
          const code = lines.slice(1, -1).join('\n');
          return (
            <pre key={index} className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm font-mono">{code}</code>
            </pre>
          );
        }

        // Check for headers
        if (paragraph.startsWith('# ')) {
          return <h1 key={index} className="text-2xl font-bold text-gray-900">{paragraph.slice(2)}</h1>;
        }
        if (paragraph.startsWith('## ')) {
          return <h2 key={index} className="text-xl font-bold text-gray-900">{paragraph.slice(3)}</h2>;
        }
        if (paragraph.startsWith('### ')) {
          return <h3 key={index} className="text-lg font-bold text-gray-900">{paragraph.slice(4)}</h3>;
        }

        // Check for blockquotes
        if (paragraph.startsWith('> ')) {
          return (
            <blockquote key={index} className="border-l-4 border-purple-500 pl-4 italic text-gray-600">
              <MarkdownRenderer content={paragraph.slice(2)} />
            </blockquote>
          );
        }

        // Regular paragraph
        return (
          <p key={index} className="text-gray-700 leading-relaxed">
            <MarkdownRenderer content={paragraph} />
          </p>
        );
      })}
    </div>
  );
}
