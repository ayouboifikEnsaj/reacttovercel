import '../index.css'
export default function PharmacieList(props) {
    const pharmacies = props.pharmacies;

    return (
        <div>
            <div style={{ marginBottom: '30px', border: 'none',  borderRadius: '5px', boxShadow: '0px 0 30px rgba(1, 41, 112, 0.1)', maxHeight: '400px', overflowY: 'auto' }}>

                <div >
                    <h5 style={{ padding: '20px 0 15px 0', fontSize: '18px', fontWeight: '500', color: '#012970', fontFamily: '"Poppins", sans-serif' }}>List Of Pharmacies</h5>
                    {
                        pharmacies.map(p=>

                            <div style={{backgroundColor: '#2eca6a'}} class="list-group" key={p.id}>
                                <a href="#" class="list-group-item list-group-item-action " aria-current="true"><div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">{p.nom}</h5>
                                    <small></small>
                                </div>
                                    <p class="mb-1">ADRESSE: {p.adresse}</p>
                                    <small>LATITUDE: {p.lat}</small><br/>
                                    <small>LONGITUDE: {p.log}</small>
                                </a>
                            </div>

                        )
                    }
                </div>
            </div>
        </div>


    )
}