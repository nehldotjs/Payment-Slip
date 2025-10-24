import React, { useState } from "react";
import "./app.css";
import { IoArrowBackOutline, IoTimeOutline } from "react-icons/io5";
import { PiShareBold } from "react-icons/pi";
import { BsBatteryFull } from "react-icons/bs";
import { MdWifi } from "react-icons/md";
import { TbAntennaBars5 } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";

function App() {
  const [isActive, setIsActive] = useState(false);
  const officeStaff = [
    {
      id: 1,
      name: "Emeka",
      image:
        "https://pngtree.com/freepng/portrait-of-african-boy-child-avatar-like-vector_10388388.html",
      isPaid: true
    },
    {
      id: 2,
      name: "Ngozi",
      image:
        "https://pngtree.com/freepng/portrait-of-african-woman-in-hat-avatar-young-teenager-vector_10388483.html",
      isPaid: false
    },
    {
      id: 3,
      name: "Tunde",
      image:
        "https://pngtree.com/freepng/face-of-african-woman-young-icon-avatar-vector_10388019.html",
      isPaid: true
    },
    {
      id: 4,
      name: "Amara",
      image:
        "https://pngtree.com/freepng/avatar-job-student-flat-portrait-of-african-american-man_14519307.html",
      isPaid: false
    },
    {
      id: 5,
      name: "Ibrahim",
      image:
        "https://pngtree.com/freepng/avatar-job-student-flat-portrait-of-african-american-man_14519307.html",
      isPaid: true
    }
  ];

  return (
    <div className="receipt-wrapper">
      <div className="iphone17-prMax-resolution">
        {/* ====== Top Status Bar ====== */}
        <div className="top-section">
          <div className="safeAreaView">
            <h2>9:41</h2>
            <div className="netWork">
              <TbAntennaBars5 className="react-icons" />
              <MdWifi className="react-icons" />
              <BsBatteryFull className="react-icons" />
            </div>
          </div>

          {/* ====== Header ====== */}
          <div className="slipNav-wrapper">
            <div className="arrow">
              <IoArrowBackOutline className="react-icons" />
            </div>
            <h1>Payment Status</h1>
            <div className="share">
              <PiShareBold className="react-icons" />
            </div>
          </div>

          {/* ====== Staff Payment Section ====== */}
          <div className="slipSlot-wrapper">
            <div className="slot">
              <div className="slot-receipt-start-point">
                <div className="receiptWrapper">
                  <div className="receiptLine"></div>
                  <div
                    className={
                      isActive
                        ? "staffCardOverlay"
                        : "staffCardOverlay isDisplayed"
                    }></div>
                  <div
                    className={
                      isActive ? "receipt-list" : "receipt-list isReceipt"
                    }>
                    <div className="listHeader">
                      <h3>Trip Invoice - Japan summer 2025</h3>
                    </div>

                    <div className="numbersWrapper">
                      <div className="total">
                        <h2>Total</h2>
                        <h1>$30,000 .00</h1>
                      </div>
                      <div className="total">
                        <h2>Per Person</h2>
                        <h1>$6,000 .00</h1>
                      </div>
                    </div>

                    <div className="contributorsListWrapper">
                      {officeStaff.map((x) => (
                        <div key={x.id} className="staff-card">
                          <div className="imgWrapper">
                            <img src={x.image} alt={x.name} />
                          </div>
                          <div className="staff-info">
                            <h4>{x.name}</h4>

                            <div className={x.isPaid ? "paid" : "unpaid"}>
                              {x.isPaid ? (
                                <p>
                                  Paid{" "}
                                  <FaCheckCircle className="paymentIcon check" />
                                </p>
                              ) : (
                                <p>
                                  Unpaid{" "}
                                  <IoTimeOutline className="paymentIcon time" />
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="paymentStatusWrapper">
                      <div className="statusHeader">
                        <p>Payment Status</p>
                        <h2>UNPAID</h2>
                      </div>
                      <div className="paymentIndicator">
                        {officeStaff.map((x) => (
                          <div className="indicator ">
                            {x.isPaid ? (
                              <FaCheckCircle className="indicatorIcon" />
                            ) : (
                              <IoTimeOutline
                                className="indicatorIcon"
                                style={{ color: "orange" }}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="receiptBtnWrapper">
                      <div className="button btn1">Set Reminder</div>
                      <div className="button btn2">Download Invoice</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ====== Bottom Section ====== */}
        <div className="bottom-section">
          <div className="bottomHeader">
            <p>Payment Method</p>
            <p>Visa Ending: 29807</p>
          </div>
          <button onClick={() => setIsActive(!isActive)}>
            {isActive ? "Pay Now" : "View Payment"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;