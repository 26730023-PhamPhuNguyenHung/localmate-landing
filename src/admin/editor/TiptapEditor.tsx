import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import { Table } from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import {
  Heading2, Heading3, Bold, Italic, Underline as UnderlineIcon,
  List, ListOrdered, Quote, Code, Minus, Link2, Image as ImageIcon,
  Table as TableIcon, Undo, Redo
} from 'lucide-react';

interface TiptapEditorProps {
  initialContentJson?: any;
  onChange: (data: { json: any; html: string }) => void;
  onSelectImageRequest?: () => void;
}

export const TiptapEditor: React.FC<TiptapEditorProps> = ({
  initialContentJson,
  onChange,
  onSelectImageRequest
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3]
        }
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'article-link'
        }
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'article-inline-image'
        }
      }),
      Table.configure({
        resizable: true
      }),
      TableRow,
      TableHeader,
      TableCell
    ],
    content: initialContentJson || { type: 'doc', content: [{ type: 'paragraph' }] },
    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
      const html = editor.getHTML();
      onChange({ json, html });
    }
  });

  if (!editor) {
    return <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>Đang khởi tạo trình soạn thảo...</div>;
  }

  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('Nhập đường dẫn URL (ví dụ /kien-thuc/bai-viet hoặc https://...):', previousUrl);
    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  const addImage = () => {
    if (onSelectImageRequest) {
      onSelectImageRequest();
      return;
    }
    const url = window.prompt('Nhập link hình ảnh:');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const insertTable = () => {
    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
  };

  const btnStyle = (isActive: boolean) => ({
    padding: '0.4rem 0.55rem',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: isActive ? '#0d7647' : 'transparent',
    color: isActive ? '#ffffff' : '#334155',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.12s ease'
  });

  return (
    <div style={{ border: '1px solid #cbd5e1', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#ffffff' }}>
      {/* Sticky Top Toolbar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.25rem',
          padding: '0.5rem 0.75rem',
          borderBottom: '1px solid #e2e8f0',
          backgroundColor: '#f8fafc',
          position: 'sticky',
          top: 60,
          zIndex: 20
        }}
      >
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          style={btnStyle(editor.isActive('heading', { level: 2 }))}
          title="Tiêu đề H2"
        >
          <Heading2 size={16} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          style={btnStyle(editor.isActive('heading', { level: 3 }))}
          title="Tiêu đề H3"
        >
          <Heading3 size={16} />
        </button>

        <div style={{ width: '1px', height: '20px', backgroundColor: '#cbd5e1', margin: 'auto 0.25rem' }} />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          style={btnStyle(editor.isActive('bold'))}
          title="In đậm (Ctrl+B)"
        >
          <Bold size={16} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          style={btnStyle(editor.isActive('italic'))}
          title="In nghiêng (Ctrl+I)"
        >
          <Italic size={16} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          style={btnStyle(editor.isActive('underline'))}
          title="Gạch chân (Ctrl+U)"
        >
          <UnderlineIcon size={16} />
        </button>

        <div style={{ width: '1px', height: '20px', backgroundColor: '#cbd5e1', margin: 'auto 0.25rem' }} />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          style={btnStyle(editor.isActive('bulletList'))}
          title="Danh sách dấu chấm"
        >
          <List size={16} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          style={btnStyle(editor.isActive('orderedList'))}
          title="Danh sách số thứ tự"
        >
          <ListOrdered size={16} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          style={btnStyle(editor.isActive('blockquote'))}
          title="Khối trích dẫn (Quote)"
        >
          <Quote size={16} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          style={btnStyle(editor.isActive('codeBlock'))}
          title="Khối mã code"
        >
          <Code size={16} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          style={btnStyle(false)}
          title="Đường phân cách ngang (Divider)"
        >
          <Minus size={16} />
        </button>

        <div style={{ width: '1px', height: '20px', backgroundColor: '#cbd5e1', margin: 'auto 0.25rem' }} />

        <button
          type="button"
          onClick={setLink}
          style={btnStyle(editor.isActive('link'))}
          title="Chèn liên kết"
        >
          <Link2 size={16} />
        </button>

        <button
          type="button"
          onClick={addImage}
          style={btnStyle(false)}
          title="Chèn hình ảnh từ Media"
        >
          <ImageIcon size={16} />
        </button>

        <button
          type="button"
          onClick={insertTable}
          style={btnStyle(editor.isActive('table'))}
          title="Tạo bảng dữ liệu"
        >
          <TableIcon size={16} />
        </button>

        <div style={{ width: '1px', height: '20px', backgroundColor: '#cbd5e1', margin: 'auto 0.25rem' }} />

        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          style={{ ...btnStyle(false), opacity: editor.can().undo() ? 1 : 0.4 }}
          title="Hoàn tác (Undo)"
        >
          <Undo size={16} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          style={{ ...btnStyle(false), opacity: editor.can().redo() ? 1 : 0.4 }}
          title="Làm lại (Redo)"
        >
          <Redo size={16} />
        </button>
      </div>

      {/* Editor Content Area */}
      <div style={{ padding: '1.5rem 2rem', minHeight: '480px', fontSize: '1.05rem', lineHeight: 1.75, color: '#1e293b' }}>
        <EditorContent editor={editor} className="tiptap-content-wrapper" />
      </div>

      <style>{`
        .tiptap-content-wrapper .ProseMirror {
          outline: none;
          min-height: 440px;
        }
        .tiptap-content-wrapper .ProseMirror h1 {
          font-size: 2rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 1rem;
        }
        .tiptap-content-wrapper .ProseMirror h2 {
          font-size: 1.45rem;
          font-weight: 800;
          color: #0f172a;
          margin-top: 1.75rem;
          margin-bottom: 0.75rem;
        }
        .tiptap-content-wrapper .ProseMirror h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0f172a;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
        }
        .tiptap-content-wrapper .ProseMirror p {
          margin: 0 0 1rem 0;
        }
        .tiptap-content-wrapper .ProseMirror blockquote {
          border-left: 4px solid #0d7647;
          background-color: #f8fbfa;
          padding: 0.85rem 1.25rem;
          margin: 1.25rem 0;
          border-radius: 0 8px 8px 0;
          font-style: italic;
          color: #334155;
        }
        .tiptap-content-wrapper .ProseMirror ul,
        .tiptap-content-wrapper .ProseMirror ol {
          padding-left: 1.5rem;
          margin-bottom: 1rem;
        }
        .tiptap-content-wrapper .ProseMirror hr {
          border: none;
          border-top: 1px solid #e2e8f0;
          margin: 2rem 0;
        }
        .tiptap-content-wrapper .ProseMirror a {
          color: #0d7647;
          text-decoration: underline;
          font-weight: 600;
        }
        .tiptap-content-wrapper .ProseMirror img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 1.5rem 0;
        }
        .tiptap-content-wrapper .ProseMirror table {
          border-collapse: collapse;
          width: 100%;
          margin: 1.5rem 0;
        }
        .tiptap-content-wrapper .ProseMirror th,
        .tiptap-content-wrapper .ProseMirror td {
          border: 1px solid #cbd5e1;
          padding: 0.65rem 0.85rem;
        }
        .tiptap-content-wrapper .ProseMirror th {
          background-color: #f8fafc;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
};
