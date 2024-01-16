import spinner from './spinner.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="Loading" />
            <h1>Récuperation des données de géolocalisation</h1>
        </div>
    )
}

export default Loader
