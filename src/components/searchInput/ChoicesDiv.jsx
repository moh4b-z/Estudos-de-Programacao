function ChoicesDiv(props) {
    let tipe = "Folder"
    if (props.fileOrfolder) {
        tipe = "File"
    }
    return (
        <div href={props.link} className="choices"
        style={{color: `${props.color}`}}>
            <p className="name">{props.name}</p>
            <div>
                <span className="pathL">{props.path}</span>
                <span className="typeL">Tipo: {tipe}</span>
            </div>
        </div>
    )
}

export default ChoicesDiv