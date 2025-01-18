function ChoicesDiv(props) {
    let tipe = "Folder"
    if (props.fileOrfolder) {
        tipe = "File"
    }
    return (
        <div href={props.link} className="choices">
            <p className="name">{props.name}</p>
            <div>
                <span>{props.path}</span>
                <span>Tipo: {tipe}</span>
            </div>
        </div>
    )
}

export default ChoicesDiv