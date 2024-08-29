import React from "react";
import "./CopyRight.css";
import { Container, Col, Row } from "reactstrap";

const CopyRight = () => {
    const rawData = [
        {
            image: "amazing-icon.png",
            name: "Amazing customer Service",
        },
        {
            image: "support-icon.png",
            name: "24/7 Support",
        },
        {
            image: "instant-icon.png",
            name: "Instant load",
        },
        {
            image: "cash-out-icon.png",
            name: "Instant Cash-out",
        },
        {
            image: "first-time-icon.png",
            name: "200% First time deposit bonus",
        },
        {
            image: "referral-icon.png",
            name: "50% referral bonus",
        },
    ]
    return (
        <div className="copy-wrapper">
            <Container>
                <div classN ame="join-now-wrapper">
                    <div className="now-its">NOW IT'S MORE MILKY</div>
                    <div className="join-the-milkway-container">
                        <span>{`“Join the Milkway and rule the World of Slots and Fish Games. Be the next `}</span>
                        <span className="big-winner">
                            BIG WINNER <span>”</span>
                        </span>
                    </div>
                    <div className="button-wrapper">
                        <button
                            className="button3"
                            onClick={() => window.open('https://www.facebook.com/profile.php?id=61564151433682', '_blank')}
                        >
                            <b className="join-now2">Join Now</b>
                        </button>
                    </div>
                </div>
            </Container>
            <Container>
                <Row>
                    {rawData?.map((item, index) => (
                        <Col xs={6} sm={6} md={4} lg={4} xl={2} key={index + 1}>
                            <div className="feature-items1">
                                <div className="basildocument-solid-wrapper">
                                    <img
                                        className="basildocument-solid-icon"
                                        loading="lazy"
                                        alt=""
                                        src={`/assets/icon/${item?.image}`}
                                    />
                                </div>
                                <div className="amazing-customer-service">
                                    {item?.name}
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
            <div className="copy-right-bg">
                <div className="responsibilly">
                    Join Milky way & Play Responsibilly
                </div>
            </div>
            <div className="copy-right">
                © Copyright 2024 Milky Way All Rights Reserved
            </div>
        </div>
    );
};

export default CopyRight;
