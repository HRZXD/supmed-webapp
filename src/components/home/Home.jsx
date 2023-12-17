import React , {useEffect} from 'react';
import './home.css';
import { nextSlide } from './HomeScript';

function Home() {
    useEffect(() => {
        let slideDefault = 0;
        function showSlides() {
          let i;
          let slides = document.querySelectorAll(".slidepic");
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
          slideDefault++;
          if (slideDefault > slides.length) {
            slideDefault = 1;
          }
          slides[slideDefault - 1].style.display = "block";
          setTimeout(showSlides, 80000);
        }
        showSlides();
        return () => clearTimeout(showSlides);
      }, []);
  return (
    <div className="container">
      <div className="d-flex justify-content-center position-relative">
        <div className="slidepic fade-effect">
          <img src="./public/images/banner1.jpg" alt="banner1" width={"1903px"} height={"800px"} />
        </div>
        <div className="slidepic fade-effect">
          <img src="./public/images/banner2.png" alt="banner2" width={"1903px"} height={"800px"} />
        </div>
        <div className="slidebar position-absolute">
          <span className="bar" onClick={()=> nextSlide(1)}></span>
          <span className="bar" onClick={()=> nextSlide(1)}></span>
        </div>
      </div>
      <div className="d-flex align-items-center flex-column mt-5 custom-font-form">
        <h1>ค้นหาประวัติผู้ป่วย</h1>
        <div className="cards card custom-card mt-1">
            <form action="">
                <div className="input-group mb-3 mt-5">
                    <div className="input-group-prepend">
                        <span className="input-group-text b" id="basic-addon1"><i className="fas fa-user" aria-hidden="true"></i></span>
                    </div>
                    <input type="text" className="form-control custom-forms"  placeholder="ID CARD NUMBER" aria-label="Username" aria-describedby="basic-addon1" name="search"/>
                </div>
                <div className="d-flex justify-content-center custom-btn">
                    <input type="submit" name="submit" value="ค้นหาประวัติ" className="btn btn-outline-success mb-4" />
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
