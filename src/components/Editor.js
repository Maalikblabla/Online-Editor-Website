import React, {useState} from 'react'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompress, faExpandAlt } from '@fortawesome/free-solid-svg-icons';

export default function Editor(props) {
    const {
        language,
        displayName,
        value,
        onChange
    } = props

    const [open, setOpen] = useState(true)

    function handleChange(editor , data, value){
        onChange(value)
    }

    return (
        <div className={`container ${open ? '' : 'collapsed'}`}>
            <div className="title">
                {displayName}
                <button
                    type="button"
                    className="expand-collapse-button"
                    onClick={()=> setOpen(prevOpen => !prevOpen)}
                >
                    <FontAwesomeIcon icon = {open ? faCompress : faExpandAlt} />
                </button>
            </div>
            <ControlledEditor 
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-rapper"
                options={
                    {
                        lineWrapping: true,
                        lint: true,
                        mode: language,
                        theme: 'material',
                        lineNumbers: true
                    }
                }
            />
        </div>
    )
}
