import React from "react";
import "./Cards.css";
import { Container, Card, CardBody, CardTitle, Row, Col } from "reactstrap";

const Crads = () => {
    const testData = [
        {
            image: "game-01.png",
            name: "Hot_St.PatrickFortunes",
        },
        {
            image: "game-02.png",
            name: "Hot_Joker_sMysteryReels",
        },
        {
            image: "game-03.png",
            name: "Monster  Awakener",
        },
        {
            image: "game-04.png",
            name: "Bunny Bonanza Spin",
        },
        {
            image: "game-05.png",
            name: "MerryChristmas",
        },
        {
            image: "game-06.png",
            name: "Hot_GoldRushFrenzy",
        },
        {
            image: "game-07.png",
            name: "Hot_LadyDiamond",
        },
        {
            image: "game-08.png",
            name: "Hot_ForestAviators",
        },
        {
            image: "game-09.png",
            name: "Fish_jackpotParty",
        },
        {
            image: "game-10.png",
            name: "PiggyGold",
        },
        {
            image: "game-11.png",
            name: "Hot_FiveTimesPay_Deluxe",
        },
        {
            image: "game-12.png",
            name: "SuperBingo",
        },
        {
            image: "game-13.png",
            name: "Dragon Dynasty",
        },
        {
            image: "game-14.png",
            name: "4thofJuly",
        },
        {
            image: "game-15.png",
            name: "RaceTheHorse",
        },
        {
            image: "game-16.png",
            name: "777Fruity",
        },
    ];

    return (
        <section className="bg-image">
            <div className="official-facebook-pages">OFFICIAL FACEBOOK PAGES</div>
            <div className="please-contact-our-container">
                <div>Please contact our official</div>
                <div>Partners for account creation</div>
            </div>
            {/* <Container fluid className="d-flex justify-content-center sm-mt-2 mt-5"> */}
            <div className="d-flex justify-content-center sm-mt-2 mt-5">
                <Row >
                    <Col sm="12" md="6" className="card-gamming-wrapper">
                        <Card className="card-gamming">
                            <div className="vip-gaming">VIP GAMING</div>
                            <div className="vip-gaming-is">
                                VIP Gaming is known for unmatched customer service, instant
                                cash-in and cash-outs and 24/7 support. Join them and experience
                                the thrill of online games.
                            </div>
                            <div className="facebook-fill">
                                <img
                                    loading="lazy"
                                    alt=""
                                    src="/assets/icon/facebook-icon.png"
                                />
                            </div>
                        </Card>
                    </Col>
                    <Col sm="12" md="6" className="card-gamming-wrapper">
                        <Card className="card-gamming">
                            <div className="vip-gaming">JUWA SLOTS </div>
                            <div className="vip-gaming-is">
                                Join Juwa slots to receive 200% bonus on the first deposit.
                            </div>
                            <div className="facebook-fill">
                                <img
                                    loading="lazy"
                                    alt=""
                                    src="/assets/icon/facebook-icon.png"
                                />
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
            {/* </Container> */}
            <div className="games-title">
                <h1 className="the-milky-way">THE MILKY WAY GAMES</h1>
            </div>
            <Row>
                {testData?.map((item, index) => (
                    <Col sm="6" md="3" key={index + 1}>
                        <Card className="my-2 card-override">
                            <img
                                className="card-image"
                                alt={index + 1}
                                src={`../assets/${item?.image}`}
                            />
                            <CardBody className="card-body-override">
                                <CardTitle className="guns-coins">
                                    {item?.name}
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
            <div className="carousel-controls">
                <div className="control-buttons">
                    <button className="button1">
                        <b className="previous-page">Previous Page</b>
                    </button>
                    <button className="button2">
                        <b className="next-page">Next Page</b>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Crads;
