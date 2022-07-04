import './index.css'

const SingleAds = () => {

    if( display == false ){
        return '';
    }
    return (
        
        <div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
            <section className="singleads">
                <div className="container-fluid d-flex se_item align-items-center justify-content-center">Vivo21 48MP OIS Slefie</div>
                <div className="container-fluid d-flex se_dir align-items-center justify-content-center">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item se_nav"><a href="#">Home</a></li>
                            <li className="breadcrumb-item se_nav"><a href="#">Ads List</a></li>
                            <li className="breadcrumb-item se_nav"><a href="#">Mobile</a></li>
                            <li className="breadcrumb-item se_nav"><a href="#">Vivo</a></li>
                            <li className="breadcrumb-item se_nav"><a href="#">Other Models</a></li>
                            <li className="breadcrumb-item se_nav"><a href="#">Other Models in New York</a></li>
                            <li className="breadcrumb-item se_nav_act active text-white" aria-current="page">Vivo21 48MP OIS Slefie</li>
                        </ol>
                    </nav>
                </div>
            </section>
        </div>
        
    )

}

export default SingleAds