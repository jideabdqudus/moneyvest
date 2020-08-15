import React from "react"

const trash = () => {
  return (
    <div>
      <Row>
        <Col xl={4}>
          <Widget
            title={<p style={{ fontWeight: 700 }}>Upsell Take Rate </p>}
            customDropDown
          >
            <Row className={`justify-content-between mt-3`} noGutters>
              <Col sm={8} className={"d-flex align-items-center"}>
                <h3 className={"fw-semi-bold mb-0"}>20.7%</h3>
              </Col>
              <Col
                sm={4}
                className={"d-flex align-items-center justify-content-end"}
              >
                <img src={stocksImg} alt="" className={"mr-1"} />
                <p className={"text-success mb-0"}>20%</p>
              </Col>
            </Row>
            <Row style={{ marginBottom: -9, marginTop: -1 }}>
              <Col sm={12}>
                <ApexChart
                  className="sparkline-chart"
                  height={80}
                  series={this.state.area.series}
                  options={this.state.area.options}
                  type={"area"}
                />
              </Col>
            </Row>
          </Widget>
        </Col>
        <Col xl={4}>
          <Widget
            title={<p style={{ fontWeight: 700 }}>Number of returns</p>}
            customDropDown
          >
            <Row className={`justify-content-between mt-3`} noGutters>
              <Col sm={8} className={"d-flex align-items-center"}>
                <h3 className={"fw-semi-bold mb-0"}>12</h3>
              </Col>
              <Col
                sm={4}
                className={"d-flex align-items-center justify-content-end"}
              >
                <img src={stocksImg} alt="" className={"mr-1"} />
                <p className={"text-success mb-0"}>14%</p>
              </Col>
            </Row>
            <Row style={{ marginBottom: -9, marginTop: -1 }}>
              <Col sm={12}>
                <ApexChart
                  className="sparkline-chart"
                  height={80}
                  series={this.state.area2.series}
                  options={this.state.area2.options}
                  type={"area"}
                />
              </Col>
            </Row>
          </Widget>
        </Col>
        <Col xl={window.innerWidth > 1280 ? 2 : 4} sm={6}>
          <Widget>
            <Row
              className={`${s.row} justify-content-center align-items-center`}
            >
              <Col
                sm={12}
                className={
                  "d-flex justify-content-center align-items-center mb-2"
                }
              >
                <img src={totalSale} alt="" style={{ paddingTop: 30 }} />
              </Col>
              <Col
                sm={12}
                className={"d-flex justify-content-center align-items-center"}
              >
                <h3 className={"fw-semi-bold pt-1 mb-0"}>$92k</h3>
              </Col>
              <Col
                sm={12}
                className={"d-flex justify-content-center align-items-center"}
              >
                <h5 className={"fw-thin pt-1 mb-0"}>Sales</h5>
              </Col>
              <Col
                sm={12}
                className={
                  "d-flex justify-content-center align-items-center pt-1"
                }
              >
                <img src={stocksImg} alt="" className={"mr-1"} />
                <p className={"fw-thin text-success mb-0"}>15%</p>
              </Col>
            </Row>
          </Widget>
        </Col>
        <Col xl={2} className={`${s.dashboardBlock}`} sm={6}>
          <Widget>
            <Row
              className={`${s.row} justify-content-center align-items-center`}
            >
              <Col
                sm={12}
                className={
                  "d-flex justify-content-center align-items-center mb-2"
                }
              >
                <img src={orders} alt="" style={{ paddingTop: 30 }} />
              </Col>
              <Col
                sm={12}
                className={"d-flex justify-content-center align-items-center"}
              >
                <h3 className={"fw-semi-bold pt-1 mb-0"}>3240</h3>
              </Col>
              <Col
                sm={12}
                className={"d-flex justify-content-center align-items-center"}
              >
                <h5 className={"fw-thin pt-1 mb-0"}>Orders</h5>
              </Col>
              <Col
                sm={12}
                className={
                  "d-flex justify-content-center align-items-center pt-1"
                }
              >
                <img src={stocksDownImg} alt="" className={"mr-1"} />
                <p className={"fw-thin text-danger mb-0"}>15%</p>
              </Col>
            </Row>
          </Widget>
        </Col>
      </Row>
      <Row>
        <Col xl={8}>
          <Widget
            title={
              <Row>
                <Col xs={12} sm={5}>
                  <p style={{ fontWeight: 700 }}>Daily Line Chart</p>
                </Col>
                <Col xs={12} sm={7}>
                  <div className="chart-legend" />
                </Col>
              </Row>
            }
            customDropDown
          >
            <Row className={s.dailyLineChart}>
              <Col sm={12}>
                <ApexChart
                  className="sparkline-chart"
                  series={this.state.splineArea.series}
                  options={this.state.splineArea.options}
                  type={"area"}
                  height={"350px"}
                />
              </Col>
            </Row>
          </Widget>
        </Col>
        <Col xl={4}>
          <Widget
            title={<p style={{ fontWeight: 700 }}>Status</p>}
            customDropDown
          >
            <Row
              className={`${s.row} justify-content-center`}
              noGutters
              style={{ marginBottom: 30, marginTop: 24 }}
            >
              <ApexChart
                className="sparkline-chart"
                type={"donut"}
                height={180}
                series={chartData.apex.pie.series}
                options={chartData.apex.pie.options}
              />
            </Row>
            <Row className={`justify-content-between`}>
              <Col sm={4}>
                <div className={`${s.pieElementsDanger} ${s.pieElements}`}>
                  <h4 className={"mt-3 mb-1"}>253</h4>
                  <p>Booked</p>
                </div>
              </Col>
              <Col sm={4}>
                <div className={`${s.pieElementsWarning} ${s.pieElements}`}>
                  <h4 className={"mt-3 mb-1"}>1732</h4>
                  <p>On progress</p>
                </div>
              </Col>
              <Col sm={4}>
                <div className={`${s.pieElementsBlack} ${s.pieElements}`}>
                  <h4 className={"mt-3 mb-1"}>50</h4>
                  <p>Canceled</p>
                </div>
              </Col>
            </Row>
          </Widget>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Widget
            customDropDown
            title={<p className={"fw-bold"}>Recent Order</p>}
          >
            <Table className={"mb-0"} borderless responsive>
              <thead>
                <tr>
                  <th key={0} scope="col" className={"pl-0"}>
                    Invoices
                  </th>
                  <th key={1} scope="col" className={"pl-0"}>
                    Customers
                  </th>
                  <th key={2} scope="col" className={"pl-0"}>
                    Date
                  </th>
                  <th key={3} scope="col" className={"pl-0"}>
                    Amount
                  </th>
                  <th key={4} scope="col" className={"pl-0"}>
                    Status
                  </th>
                  <th key={5} scope="col" className={"pl-0"}>
                    Tracking
                  </th>
                </tr>
              </thead>
              <tbody className="text-dark">
                <tr key={0}>
                  <td className="fw-thin pl-0 fw-thin">
                    <i className={`fa fa-circle text-success mr-3`} />
                    #003486
                  </td>
                  <td className={"pl-0 fw-thin"}>
                    <img src={p1} alt="" className={"mr-3"} />
                    Kate Claus
                  </td>
                  <td className={"pl-0 fw-thin"}>10 Jan 2020</td>
                  <td className={"pl-0 fw-normal"}>$8400</td>
                  <td className={"pl-0 text-success fw-normal"}>On Delivery</td>
                  <td className={"pl-0 fw-thin"}>RU00250TF</td>
                </tr>
                <tr key={1}>
                  <td className="fw-normal pl-0 fw-thin">
                    <i className={`fa fa-circle text-success mr-3`} />
                    #004326
                  </td>
                  <td className={"pl-0 fw-thin"}>
                    <img src={p2} alt="" className={"mr-3"} />
                    Maria Gordon
                  </td>
                  <td className={"pl-0 fw-thin"}>08 Jan 2020</td>
                  <td className={"pl-0 fw-normal"}>$8400</td>
                  <td className={"pl-0 text-success fw-normal"}>On Delivery</td>
                  <td className={"pl-0 fw-thin"}>RU00250TF</td>
                </tr>
                <tr key={2}>
                  <td className="fw-normal pl-0 fw-thin">
                    <i className={`fa fa-circle text-danger mr-3`} />
                    #001258
                  </td>
                  <td className={"pl-0 fw-thin"}>
                    <img src={p3} alt="" className={"mr-3"} />
                    Nick Peru
                  </td>
                  <td className={"pl-0 fw-thin"}>05 Jan 2020</td>
                  <td className={"pl-0 fw-normal"}>$1300</td>
                  <td className={"pl-0 text-danger fw-normal"}>Pending</td>
                  <td className={"pl-0 fw-thin"}>RU00250TF</td>
                </tr>
                <tr key={3}>
                  <td className="fw-normal pl-0 fw-thin">
                    <i className={`fa fa-circle text-danger mr-3`} />
                    #0014176
                  </td>
                  <td className={"pl-0 fw-thin"}>
                    <img src={p4} alt="" className={"mr-3"} />
                    Lian Robinson
                  </td>
                  <td className={"pl-0 fw-thin"}>20 Dec 2019</td>
                  <td className={"pl-0 fw-normal"}>$880</td>
                  <td className={"pl-0 text-danger fw-normal"}>Pending</td>
                  <td className={"pl-0 fw-thin"}>RU00250TF</td>
                </tr>
                <tr key={4}>
                  <td className="fw-normal pl-0 fw-thin">
                    <i className={`fa fa-circle text-danger mr-3`} />
                    #0014177
                  </td>
                  <td className={"pl-0 fw-thin"}>
                    <img
                      src={p5}
                      alt=""
                      className={"mr-3"}
                      width={"34px"}
                      height={"34px"}
                    />
                    Sam Fisher
                  </td>
                  <td className={"pl-0 fw-thin"}>16 Dec 2019</td>
                  <td className={"pl-0 fw-normal"}>$9400</td>
                  <td className={"pl-0 text-danger fw-normal"}>Pending</td>
                  <td className={"pl-0 fw-thin"}>RU00250TF</td>
                </tr>
              </tbody>
            </Table>
          </Widget>
        </Col>
      </Row>
    </div>
  )
}

export default trash
