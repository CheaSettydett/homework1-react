export default function Main(){
   return(
    <main>
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://cdn.pixabay.com/photo/2023/04/05/12/37/town-7901424_960_720.jpg" className="d-block w-100  h-30" alt=""/>
            </div>
            <div className="carousel-item">
                <img src="https://cdn.pixabay.com/photo/2023/04/05/21/09/bird-7902319_960_720.jpg" className="d-block w-100 h-30" alt="" />
            </div>
            <div className="carousel-item">
                <img src="https://cdn.pixabay.com/photo/2023/04/15/00/58/rose-7926706_960_720.jpg" className="d-block w-100 h-30" alt=""/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
</main>
   ) 
}