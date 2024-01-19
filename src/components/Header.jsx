import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard,Autoplay } from "swiper/modules";

import "swiper/css";

const Header = () => {
  return (
    <header>
      <div className="menu ">
      <nav className="container">
      <div className="logo">
            <h1>LOGO</h1>
        </div>

        <ul>

          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Productos</a>
          </li>
          <li>
            <a href="">Acerca De</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
          <li>
            <a href=""></a>
          </li>
        </ul>
      </nav>
      </div>

      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard,Autoplay]}
        className="mySwiper container "


      >
        <div className="header-Info ">
          <SwiperSlide>
            <div className="headerContent ">
              <div className="header-txt">
                <h1>Tenologia</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                  at laboriosam eligendi molestias hic tenetur architecto
                  eveniet nulla itaque molestiae? Excepturi reprehenderit, rem
                  temporibus adipisci quia iure repellendus asperiores
                  consequatur!
                </p>

                <div className="btns1">
                  <button className="btn1">Comprar</button>
                  <button className="btn2 ">Ver Seccion</button>
                </div>
              </div>
              <div className="containerImg">
                <img
                  src="https://consumer.huawei.com/content/dam/huawei-cbg-site/latam/mx/support/laptop-user-guide/img/laptop.png"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="headerContent  ">
              <div className="header-txt">
                <h1>Moda</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                  at laboriosam eligendi molestias hic tenetur architecto
                  eveniet nulla itaque molestiae? Excepturi reprehenderit, rem
                  temporibus adipisci quia iure repellendus asperiores
                  consequatur!
                </p>
                <div className="btns1">
                  <button className="btn1">Comprar</button>
                  <button className="btn2 ">Ver Seccion</button>
                </div>
              </div>
              <div className="containerImg">
                <img
                  src="https://www.blucactus.com.mx/wp-content/uploads/2022/11/Blucactus-Cual-es-la-funcion-del-marketing-en-la-moda-2.png"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="headerContent  ">
              <div className="header-txt">
                <h1>Accesorios de casa</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                  at laboriosam eligendi molestias hic tenetur architecto
                  eveniet nulla itaque molestiae? Excepturi reprehenderit, rem
                  temporibus adipisci quia iure repellendus asperiores
                  consequatur!
                </p>
                <div className="btns1">
                  <button className="btn1">Comprar</button>
                  <button className="btn2 ">Ver Seccion</button>
                </div>
              </div>
              <div className="containerImg ">
                <img
                  src="https://grupovts.es/wp-content/uploads/2023/05/DIERRE_llaves_rec_2.png"
                  alt=""
                />
                a
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="headerContent">
              <div className="header-txt">
                <h1>Maquillaje</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                  at laboriosam eligendi molestias hic tenetur architecto
                  eveniet nulla itaque molestiae? Excepturi reprehenderit, rem
                  temporibus adipisci quia iure repellendus asperiores
                  consequatur!
                </p>
                <div className="btns1">
                  <button className="btn1">Comprar</button>
                  <button className="btn2 ">Ver Seccion</button>
                </div>
              </div>
              <div className="containerImg">
                <img
                  src="https://www.clara.es/medio/2018/11/27/maquillaje-principiantes_d90527d0_1200x700.png"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </header>
  );
};

export default Header;
