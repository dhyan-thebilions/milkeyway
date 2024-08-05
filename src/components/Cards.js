import React, { useState, useMemo } from "react";
import "./Cards.css";
import { cardData } from "../data/CardData";
import Pagination from "./Pagination";
import { Container, Card, CardBody, CardTitle, Row, Col } from "reactstrap";

const Crads = () => {
    const PageSize = 16;

    const [currentPage, setCurrentPage] = useState(1);

    const rawData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return cardData.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
        <section className="bg-image">
            <div className="official-facebook-pages">OFFICIAL FACEBOOK PAGES</div>
            <div className="please-contact-our-container">
                <div>Please contact our official</div>
                <div>Partners for account creation</div>
            </div>
            <Container className="d-flex justify-content-center my-sm-2 my-md-3 my-lg-5">
                <Row>
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
            </Container>
            <div className="games-title">
                <h1 className="the-milky-way">THE MILKY WAY GAMES</h1>
            </div>
            <Container>
                <Row>
                    {rawData?.map((item, index) => (
                        <Col xs={12} sm={12} md={6} lg={3} xl={3} key={index + 1}>
                            <Card className="my-2 card-override">
                                <img
                                    className="card-image"
                                    alt={index + 1}
                                    src={`../assets/game/${item?.image}`}
                                />
                                <CardBody className="card-body-override">
                                    <CardTitle className="guns-coins">{item?.name}</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            {/* <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={cardData?.length}
                pageSize={PageSize}
                onPageChange={(page) => setCurrentPage(page)}
            /> */}
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
