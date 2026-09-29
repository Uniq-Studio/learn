import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeCard(
    {code}
) {
    return (
        <article className="contentImgBox">
            <SyntaxHighlighter
                language="javascript"
                style={vscDarkPlus}
                showLineNumbers={true}
                className="contentImg"
                lineNumberStyle={{ color: '#6e7681' }}
            >
                {code}
            </SyntaxHighlighter>
        </article>
    )
}