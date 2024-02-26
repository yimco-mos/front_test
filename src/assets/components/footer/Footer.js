import React from "react";

import "../../../styles/footer/footer.css";
export const Footer = () => {
  return (
    <>
      <div className="footer-widgets">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1">
            <div className="foot_contact" id="#contactos">
              <h4>Contactanos</h4>
              <ul>
                <li>
                  {" "}
                  <img
                    src="https://img.icons8.com/dusk/16/cell-phone.png"
                    alt="cell-phone"
                  />
                  <span className="spn_foo"> +57 314 668 2573</span>
                </li>
                <li>
                  <img
                    src="https://img.icons8.com/fluency/16/mail.png"
                    alt="mail"
                  />
                  <span className="spn_foo"> yimcomos@gmail.com</span>
                </li>
                <li>
                  <img
                    src="https://img.icons8.com/papercut/16/order-delivered--v1.png"
                    alt="order-delivered--v1"
                  />
                  <span className="spn_foo"> Bogotá D.C</span>
                </li>
              </ul>
            </div>

            <div className="info_foot flex justify-around mt-4 items-center ">
              <div className="redes">
                <a href="#">
                  <img
                    src="https://img.icons8.com/fluency/40/facebook.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="redes">
                <a target="_blank" href="#">
                  <img
                    src="https://img.icons8.com/fluency/40/instagram-new.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="redes">
                <a href="https://wa.me/+573219499271" target="blanck">
                  <img
                    src="https://img.icons8.com/color/40/whatsapp--v1.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
