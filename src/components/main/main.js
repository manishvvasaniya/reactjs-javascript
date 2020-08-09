import React from "react";
import { Row, Col } from "antd";
import AuthCard from "./authCard/authCard";
import InfoCard from "./infoCard/infoCard";
import _ from "lodash";
import "./main.scss";
const Main = ({ infoCard, authCard }) => {
  return (
    <section className="main">
      <div className="main-title text-title">
        <h1>Earning Rewards is as Easy at 1,2,3</h1>
      </div>
      <div className="info">
        <Row gutter={50}>
          {_.map(infoCard, (item, index) => {
            return (
              <Col
                key={index}
                xl={{ span: 8 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
              >
                <InfoCard {...item}></InfoCard>
              </Col>
            );
          })}
        </Row>
      </div>
      <div className="bg-light-primary auth">
        <Row>
          {_.map(authCard, (item, index) => {
            return (
              <Col
                key={index}
                xl={{ span: 12 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
              >
                <AuthCard {...item}></AuthCard>
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
};

export default Main;
