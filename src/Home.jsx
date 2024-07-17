import { useState } from "react";
import logo from "./assets/FoodieLogo.png";
import mobile from "./assets/iphone13-Layout.png"
import './index.css'

const Home=()=>{

    const [thanku, setThanku]=useState(false)
    const [join, setJoin]=useState(true)

    const Change=(e)=>{
        e.preventDefault()
        setThanku(true)
        setJoin(false)
    }

    return(
        <div className=" container-fulid">
            <div className=" back">
            <header className="d-flex flex-wrap   py-2  ">
            <a href="/" className="d-flex  mb-3 mb-md-0 me-auto link-body-emphasis text-decoration-none" >
                <img className="me-2" src={logo} alt="Logo" width="65" height="35" />
            </a>

            <ul className="nav justify-content-end">
                <li className="button justify-content-end me-2"><button href="#" className="btn btn-danger rounded-pill ps-3 pe-3 " aria-current="page">Join the Waitlist</button></li>
            </ul>
            </header>
            
            <div className="backimg mt-2 col-xxl-12 px-4 py-5">
                <div className="row grid-lg-row align-items-center g-5  pt-5">
                    <div className="col-6 col-xl-6 col-sm-6 col-lg-6 ">
                        <div className="mobile-container" style={{position: 'relative', width: '260px', height: '500px' ,left:'32%'}}>
                            <img src={mobile} className="img d-block mx-lg-auto img-fluid" alt="Mobile" width="260" height="500" loading="lazy"/>
                            <video className="video-inside-mobile" style={{position: 'absolute', top: '2%', left: '5%', width: '89.5%', height: '100.5%'}} controls>
                                <source src="./src/assets/foodie1.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className=" col-lg-6">
                        <img className="me-2" src={logo} alt="Logo" width="75" height="45"/>
                        <h1 className="display-5 fw-bold text-white lh-1 mb-3">Welcome to Foodie</h1>
                        <p>At Foodie, we redefine convenience with our seamless food delivery service. Whether you are craving the flavors of home or exploring new culinary delights, Foodie brings it all to your doorstep. From hearty breakfasts to gourmet dinners and everything in between, our curated menu caters to every palate and preference.</p>
                        <div className="d-grid gap-2 d-md-flex main-button-container justify-content-md-start">
                            <a href="#join" className="rounded-pill main-button pe-3 ps-3" aria-current="page">
                                <p className="m-0">Join the Waitlist</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            </div>
            <div className="orange ">
            <div>
            <h2 className="text-center color  p-5" id="join">Join the Waitlist</h2>
            </div>
            {!thanku && (
            <><form onSubmit={(e)=>Change(e)}>
                        <div className="grid-container mt-3">
                            <div className="p-0">
                                <input type="text" className=" input" placeholder="name" required />
                            </div>
                            <div className="p-0 ">
                                <input type="tel" className="input" placeholder="Phone Number" required />
                            </div>
                            <div className="p-0">
                                <input type="text" className=" input" placeholder="City" required />
                            </div>
                        </div>
                        <div className="center  p-5 ">
                            <button href="#" className="main-button2 rounded-pill  pe-3  ps-3" aria-current="page"><p className="m-0">Join the Waitlist</p></button>
                        </div>
                    </form></>
            )}
            {!join && (
            <><div className="center  p-5 ">
                <h2 className="text-center color p-5 pt-0" aria-current="page"><p className="m-0">Thank You!</p></h2>
                        </div></>
            )}
            </div>
            <footer className=" w-full h-1 m-0 p-0 bg-dark">
                <p className="text-center m-0 p-0 text-white">&#169; Foodie,2024</p>
            </footer>

        </div>
        
    )
}
export default Home;