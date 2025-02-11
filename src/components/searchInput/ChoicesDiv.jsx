function ChoicesDiv(props) {
    let tipe = "Folder"
    if (props.fileOrfolder) {
        tipe = "File"
    }
    return (
        <a href={props.link} className="choices" 
           style={{color: `${props.color}`}} 
           target="_blank" rel="noopener noreferrer">
            <p className="name">{props.name}</p>
            <div>
                <span className="pathL">{props.path}</span>
                <span className="typeL">Tipo: {tipe}</span>
            </div>
        </a>
    )
}

export default ChoicesDiv