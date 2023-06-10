
const Home = () => {
    return (
        <div>
            <div className="rounded-2xl w-full h-[400px] my-auto overflow-auto bg-scroll bg-center" style={{ backgroundImage: `url("https://i.ibb.co/kBGV6bg/banner.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                {/* <div className="md:w-1/3 ms-5 w-full h-[400px] ">
                    <div className="py-10 text-slate-400 md:text-slate-600 text-left">
                        <p className="mb-5 align-middle text-5xl font-bold">We can be heroes in our own lives. Every one of us. If we only have the courage to try.</p>
                    </div>
                </div> */}
            </div>
            <div className="text-center my-32">
                <p className="text-4xl font-bold text-slate-600">You are just at the right place</p>
                <p className="text-md font-semibold text-slate-400">The most desired Transformers toys collection for your kid is here...!</p>
                <input type="search" className="p-3 w-80 mt-3 bg-base-content text-white rounded-3xl text-center" name="search" id="" placeholder="Search your desired transformer toy" />
            </div>
            <div className="hero max-h-max bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://c4.wallpaperflare.com/wallpaper/791/55/776/optimus-prime-4k-transformers-the-last-knight-wallpaper-preview.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-xl font-bold">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</h1>
                    </div>
                </div>
            </div>
            <div className="hero max-h-max bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://c4.wallpaperflare.com/wallpaper/677/206/523/transformers-transformers-the-last-knight-bumblebee-transformers-robot-wallpaper-preview.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-xl font-bold">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</h1>
                    </div>
                </div>
            </div>
            <div className="carousel w-full rounded-xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/WFvHBd7/cover1.jpg" alt="cover2" className="w-full h-[400px]" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-5 bottom-0">
                        <a href="#slide3" className="btn btn-outline btn-info">❮</a>
                        <a href="#slide2" className="btn btn-outline btn-info">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Zhy2zdF/cover2.jpg" alt="cover3" className="w-full h-[400px]" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-5 bottom-0">
                        <a href="#slide1" className="btn btn-outline btn-info">❮</a>
                        <a href="#slide3" className="btn btn-outline btn-info">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/wYQ7q9B/cover3.webp" alt="cover1" className="w-full h-[400px]" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-5 bottom-0">
                        <a href="#slide2" className="btn btn-outline btn-info">❮</a>
                        <a href="#slide1" className="btn btn-outline btn-info">❯</a>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default Home;