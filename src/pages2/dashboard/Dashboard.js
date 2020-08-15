import React from "react"
import { Row, Col, Table, Button } from "reactstrap"

import usersImg from "../../images/usersImg.svg"
import smileImg from "../../images/smileImg.svg"
import totalSale from "../../images/total-sale.svg"
import orders from "../../images/orders.svg"
import stocksImg from "../../images/stocks.svg"
import stocksDownImg from "../../images/stocksDown.svg"

import { chartData } from "./chartsMock"

import Widget from "../../components/Widget"

import s from "./Dashboard.module.scss"
import ApexChart from "react-apexcharts"

//people
import p1 from "../../images/people/p1.png"
import p2 from "../../images/people/p2.png"
import p3 from "../../images/people/p3.png"
import p4 from "../../images/people/p4.png"
import p5 from "../../images/userAvatar.png"

import money from "../../images/total-sale.svg"
import stocks from "../../images/stocks.svg"

const orderValueOverride = {
  options: {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    colors: ["rgba(255, 173, 1, 0.3)"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        distributed: true,
        endingShape: "rounded",
        startingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    grid: {
      padding: {
        left: -9,
        right: 0,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  },
}

const convertionRateOverride = {
  series: [
    {
      data: [280, 300, 170, 200, 230, 190, 260, 100, 290, 280, 300, 250, 240],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    colors: ["rgba(246, 121, 93, 0.3)"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        distributed: true,
        endingShape: "rounded",
        startingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    grid: {
      padding: {
        left: -8,
        right: 0,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  },
}

const area = {
  series: [
    {
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  options: {
    stroke: {
      show: true,
      curve: "smooth",
      width: 3,
    },
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      type: "solid",
      colors: ["rgba(252, 215, 206, .25)"],
    },
    colors: ["rgba(246, 121, 93)"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    grid: {
      padding: {
        left: 5,
        right: 0,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  },
}

const area2 = {
  series: [
    {
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ],
  options: {
    stroke: {
      show: true,
      curve: "smooth",
      width: 3,
    },
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      type: "solid",
      colors: ["rgba(255, 230, 179, .25)"],
    },
    colors: ["rgba(255, 173, 1)"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    grid: {
      padding: {
        left: 5,
        right: 0,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  },
}

const splineArea = {
  series: [
    {
      name: "Income",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Outcome",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      colors: ["rgba(255, 205, 101, .2)", "rgba(0,0,0,0)"],
      type: "solid",
    },
    colors: ["#FFBF69", "#323232"],
    legend: {
      position: "top",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    yaxis: {
      labels: {
        style: {
          colors: [
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
          ],
          fontWeight: 300,
        },
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
      labels: {
        style: {
          colors: [
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
          ],
          fontWeight: 300,
        },
      },
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  },
}

class Dashboard extends React.Component {
  constructor() {
    super()
    this.forceUpdate = this.forceUpdate.bind(this)
  }
  state = {
    orderValue: { ...chartData.apex.column, ...orderValueOverride },
    convertionRate: { ...chartData.apex.column, ...convertionRateOverride },
    area: { ...area },
    area2: { ...area2 },
    splineArea: { ...splineArea },
  }

  componentDidMount() {
    window.addEventListener("resize", this.forceUpdate.bind(this))
  }

  forceUpdate() {
    return this.setState({})
  }

  render() {
    return (
      <div className={s.root}>
        <Row>
          <Col xl={4}>
            <Widget
              title={
                <p style={{ fontWeight: 200, fontSize: 10 }}>Wallet Balance</p>
              }
              customDropDown
            >
              <Row className={`justify-content-between mt-3`} noGutters>
                <Col sm={8} className={"d-flex align-items-center"}>
                  <h3 className={"fw-semi-bold mb-0"}>₦13,400</h3>
                </Col>
              </Row>
              <hr />
              <Row style={{ marginBottom: -9, marginTop: -1 }}>
                <Col sm={12}>
                  <h3 style={{ fontSize: "20px", fontWeight: "normal" }}>
                    MVWallet - AbdulQudus/Olajide
                  </h3>
                  <p
                    style={{
                      marginTop: "5px",
                      fontSize: "10px",
                      marginBottom: "15px",
                      letterSpacing: "1px",
                    }}
                  >
                    08092399019 - Providus Bank
                  </p>
                  <Row> </Row>
                  <Row className={`justify-content-between mt-3`} noGutters>
                    <Col sm={8} className={"d-flex align-items-center"}>
                      <Button color="info" outline size="sm">
                        Add Funds +{" "}
                      </Button>
                    </Col>
                    <Col
                      sm={4}
                      className={
                        "d-flex align-items-center justify-content-end"
                      }
                    >
                      <img
                        src={money}
                        alt="money"
                        width={"60px"}
                        height={"60px"}
                        className={"mr-1"}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Widget>
          </Col>
          <Col xl={4}>
            <Widget
              title={
                <p style={{ fontWeight: 200, fontSize: 10 }}>
                  Sponsorship Investments
                </p>
              }
              customDropDown
            >
              <Row className={`justify-content-between mt-3`} noGutters>
                <Col sm={8} className={"d-flex align-items-center"}>
                  <h3 className={"fw-semi-bold mb-0"}>₦10,200</h3>
                </Col>
              </Row>
              <hr />
              <Row style={{ marginBottom: -9, marginTop: -1 }}>
                <Col sm={12}>
                  <ul>
                    <li>Advansio Cooperative</li>
                    <li>Cashcruz Salon</li>
                  </ul>
                  <br />
                  <Row className={`justify-content-between mt-4`} noGutters>
                    <Col sm={8} className={"d-flex align-items-center"}>
                      <Button color="info" outline size="sm">
                        Add Funds +{" "}
                      </Button>
                    </Col>
                    <Col
                      sm={4}
                      className={
                        "d-flex align-items-center justify-content-end"
                      }
                    >
                      <img
                        src={stocks}
                        alt="money"
                        width={"60px"}
                        height={"60px"}
                        className={"mr-1"}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Widget>
          </Col>
          <Col xl={4}>
            <Widget
              title={
                <p style={{ fontWeight: 200, fontSize: 10 }}>
                  Pooled Sponsorship
                </p>
              }
              customDropDown
            >
              <Row className={`justify-content-between mt-3`} noGutters>
                <Col sm={8} className={"d-flex align-items-center"}>
                  <h3 className={"fw-semi-bold mb-0"}>₦0.00</h3>
                </Col>
              </Row>
              <hr />
              <Row style={{ marginBottom: -9, marginTop: -1 }}>
                <Col sm={12}>
                  <h3 style={{ fontSize: "20px", fontWeight: "normal" }}>
                    4 months
                  </h3>
                  <p
                    style={{
                      marginTop: "5px",
                      fontSize: "10px",
                      marginBottom: "15px",
                      letterSpacing: "1px",
                    }}
                  >
                    Tenor
                  </p>
                  <br />
                  <Row className={`justify-content-between mt-2`} noGutters>
                    <Col sm={8} className={"d-flex align-items-center"}>
                      <Button color="info" outline size="sm">
                        Add Funds +{" "}
                      </Button>
                    </Col>
                    <Col
                      sm={4}
                      className={
                        "d-flex align-items-center justify-content-end"
                      }
                    >
                      <img
                        src={money}
                        alt="money"
                        width={"60px"}
                        height={"60px"}
                        className={"mr-1"}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Widget>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Dashboard
