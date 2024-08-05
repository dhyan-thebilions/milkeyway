import React from "react";
import { Container, Row, Col, Card } from "reactstrap"
import "./DownloadMilkyWay.css";

const DownloadMilkyWay = () => {
    return (
        <div className="milkyway-wrapper">
            <Container>
                <h1 className="download-the-milkyway">
                    Download the MilkyWay App
                </h1>
                <div className="follow-these-steps">
                    Follow these steps to download and install the Milky Way app
                    on your device
                </div>
            </Container>
            <Container
                className="d-flex justify-content-center sm-mt-2 mt-5"
            >
                <Row>
                    <Col sm="12" md="6" className="card-download-wrapper">
                        <Card className="card-download">
                            <div className="mobile-app-store-badge-parent">
                                <img
                                    className="mobile-app-store-badge"
                                    loading="lazy"
                                    alt=""
                                    src="/assets/android-store.png"
                                />
                                <img
                                    className="image-1-icon"
                                    loading="lazy"
                                    alt=""
                                    src="/assets/android.png"
                                />
                            </div>
                            <div className="platform-instructions">
                                <h2 className="download-for">
                                    Download for Android
                                </h2>
                                <div className="click-on-the-container">
                                    <ol >
                                        <li >
                                            Click on the link or scan the QR code.
                                        </li>
                                        <li >Click "DOWNLOAD."</li>
                                        <li >
                                            Approve the download.
                                        </li>
                                        <li>
                                            Approve file size download.
                                        </li>
                                        <li>
                                            Allow installation from unknown sources.
                                        </li>
                                        <li>
                                            Open the downloaded file.
                                        </li>
                                        <li>Click "install."</li>
                                        <li>
                                            Open the app and allow/deny call permissions.
                                        </li>
                                        <li>
                                            Enter your username and password.
                                        </li>
                                        <li>Enjoy the app!</li>
                                    </ol>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col sm="12" md="6" className="card-download-wrapper">
                        <Card className="card-download">
                            <div className="mobile-app-store-badge-parent">
                                <img
                                    className="mobile-app-store-badge"
                                    loading="lazy"
                                    alt=""
                                    src="/assets/ios-store.png"
                                />
                                <img
                                    className="image-1-icon"
                                    loading="lazy"
                                    alt=""
                                    src="/assets/ios.png"
                                />
                            </div>
                            <div className="platform-instructions">
                                <h2 className="download-for">
                                    Download for iOS
                                </h2>
                                <div className="click-on-the-container">
                                    <ol>
                                        <li>
                                            Click on the link or scan the QR code.
                                        </li>
                                        <li>Press "Download."</li>
                                        <li>
                                            Allow the configuration profile download.
                                        </li>
                                        <li>Select "close."</li>
                                        <li>Select "Install."</li>
                                        <li>
                                            Enter your password.
                                        </li>
                                        <li>
                                            Open the page on iTunes.
                                        </li>
                                        <li>Select "Install."</li>
                                        <li>
                                            Allow VPN configuration.
                                        </li>
                                        <li>Open the app.</li>
                                        <li>Log in.</li>
                                        <li>Verify the app if necessary.</li>
                                    </ol>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default DownloadMilkyWay;
