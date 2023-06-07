
const Home = () => {
    return (
        <div>
            <div className="carousel w-full rounded-xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/m4fkFwf/darren-bockman-N6kk-I32-Oh7g-unsplash.jpg" className="w-full h-[500px]" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-5 bottom-0">
                        <a href="#slide4" className="btn btn-outline btn-info">❮</a>
                        <a href="#slide2" className="btn btn-outline btn-info">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/LYgFLQx/toni-cuenca-55-My-SYr-Kf5w-unsplash.jpg" className="w-full h-[500px]" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-5 bottom-0">
                        <a href="#slide1" className="btn btn-outline btn-info">❮</a>
                        <a href="#slide3" className="btn btn-outline btn-info">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/cL0YqM0/jaime-spaniol-L0-N74-GWsq8-unsplash.jpg" className="w-full h-[500px]" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-5 bottom-0">
                        <a href="#slide2" className="btn btn-outline btn-info">❮</a>
                        <a href="#slide4" className="btn btn-outline btn-info">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/MVwbYKG/mike-bergmann-1-Tt0imvu-Ixs-unsplash.jpg" className="w-full h-[500px]" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-5 bottom-0">
                        <a href="#slide3" className="btn btn-outline btn-info">❮</a>
                        <a href="#slide1" className="btn btn-outline btn-info">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;