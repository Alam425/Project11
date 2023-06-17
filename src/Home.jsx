import { useContext, useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from "./AuthConte";
import CategoryCard from "./CategoryCard";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    const { toys } = useContext(AuthContext);
    const male = toys.filter(male => male.sub_category === 'MALE');
    const female = toys.filter(male => male.sub_category === 'FEMALE');

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div>
            <div className="rounded-2xl w-full h-[400px] bg-center" style={{ backgroundImage: `url("https://i.ibb.co/cYxNRz8/banner2.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="md:w-1/3 ps-5 w-full h-[400px] md:py-10 py-3 text-slate-500 text-left text-ellipsis">
                    <p className="mb-5 align-middle text-center md:text-left text-3xl font-bold">We can be heroes in our own lives. Every one of us. If we only have the courage to try.</p>
                </div>
            </div>
            {/* https://i.ibb.co/kBGV6bg/banner.jpg
                https://i.ibb.co/yXFB86k/banner.jpg
            */}
            <div className="text-center my-32">
                <p className="text-4xl font-bold text-slate-600">You are just at the right place</p>
                <p className="text-2xl p-3 font-semibold text-slate-400">The most desired Transformers toys collection for your kid is here...!</p>
                <p className="text-xl font-semibold text-slate-500">Shop by category</p>
                <div className="text-slate-600 p-3">
                    <Tabs>
                        <TabList>
                            <Tab>All Transformers</Tab>
                            <Tab>MALE Transformers</Tab>
                            <Tab>FEMALE Transformers</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 grid ">
                                {toys.map(toy => <CategoryCard toy={toy} key={toy.serial} />)}
                            </div>
                        </TabPanel>

                        <TabPanel>
                            {/* {male.map(male => <MaleCategory male={male} key={male.serial} />)} */}
                            <div className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 grid ">
                                {male.map(toy => <CategoryCard toy={toy} key={toy.serial} />)}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            {/* {female.map(female => <FemaleCategory female={female} key={female.serial} />)} */}
                            <div className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 grid ">
                                {female.map(toy => <CategoryCard toy={toy} key={toy.serial} />)}
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
            <div className="App">
                <header className="App-header">
                    <div className="hero max-h-max bg-base-200" data-aos="fade-left">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src="https://c4.wallpaperflare.com/wallpaper/791/55/776/optimus-prime-4k-transformers-the-last-knight-wallpaper-preview.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-xl font-bold">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</h1>
                            </div>
                        </div>
                    </div>
                    <div className="hero max-h-max bg-base-200 py-10" data-aos="fade-right">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src="https://c4.wallpaperflare.com/wallpaper/677/206/523/transformers-transformers-the-last-knight-bumblebee-transformers-robot-wallpaper-preview.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-xl font-bold">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</h1>
                            </div>
                        </div>
                    </div>
                </header>
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