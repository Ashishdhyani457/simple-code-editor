import React, { useState, useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // import prism css


function CodeEditor() {
  const [code, setCode] = useState(
    `// Write your code here...\nconsole.log('Hello, world!');`
  );
  const codeRef = useRef(null);

  useEffect(() => {
    // Highlight code when component mounts or when code changes
    Prism.highlightAll();
  }, [code]);

  const handleChange = (e) => {
    setCode((e.target.value));
  };

  return (
    <div>
      <textarea
        ref={codeRef}
        value={code}
        onChange={handleChange}
        style={{ marginLeft:"10%",width: '80%', minHeight: '300px' }}
      />
      <pre style={{ marginLeft:"10%",width: '80%', minHeight: '300px' }}>
        <code className="language-javascript">{code}</code>
      </pre>
    </div>
  );
}

export default CodeEditor;
