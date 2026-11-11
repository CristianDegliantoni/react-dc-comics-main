function AppFumetti(props) {
    const dati = props.item;

    return (
        <div className="comic-card">
            <img src={dati.thumb} alt={dati.title} className="comic-img" />
            <h4 className="comic-title">{dati.title}</h4>
        </div>
    );
}

export default AppFumetti;
