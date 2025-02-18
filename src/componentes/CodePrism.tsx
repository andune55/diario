import { useEffect } from 'react';
import Prism from 'prismjs'

import 'prismjs/themes/prism-tomorrow.css'; // Importing a Prism theme
import 'prismjs/components/prism-javascript' // Importing js language
import 'prismjs/components/prism-typescript' // Importing ts language

type CodePrismProps = {
    code: string,
    language: string
}

export default function CodePrism({code, language} : CodePrismProps) {

    useEffect(() => {
        Prism.highlightAll();
        }, [code, language]);
       

    return (
        <pre>
            <code className={`language-${language}`}>
            {code}
            </code>
        </pre>
    )
}
