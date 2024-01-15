
const Gelato = ({nome, descrizione, img, prezzo, categoria}) => {
    return (
        <article className="gelato">
            <div className="img-container">
                <img src={img} alt={nome} className="img"/>
            </div>
            <div className="prd-info">
                <header className="prd-header">
                    <div>
                        <h5>{nome}</h5>
                        <h6>{categoria}</h6>
                    </div>
                    <span className="prd-prezzo">
                        <h6>{(prezzo / 100).toFixed(2)} Euro</h6>
                    </span>
                </header>
                <hr />
                <p>{descrizione}</p>
            </div>
        </article>
    )
}

export default Gelato