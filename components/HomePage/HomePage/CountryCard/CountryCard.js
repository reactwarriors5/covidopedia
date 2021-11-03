import React from "react";
import "antd/dist/antd.css";
import { Statistic, Card, Row, Col } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";

const CountryCard = ({ country }) => {
  return (
    <section className="my-6">
      {/* country name */}
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Statistic title="Country" value={country.country_name} />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic title="Continent" value={country.continent} />
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        {/* active cases */}
        <Col span={12}>
          <Card>
            <Statistic
              title="Active Cases"
              value={country.active_cases}
              precision={2}
            />
          </Card>
        </Col>
        {/* new cases */}
        <Col span={12}>
          <Card>
            <Statistic
              title="New Cases"
              value={country.new_cases}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ArrowUpOutlined />}
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        {/* total death */}
        <Col span={12}>
          <Card>
            <Statistic
              title="Total Deaths"
              value={country.deaths}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
            />
          </Card>
        </Col>
        {/* Recovered */}
        <Col span={12}>
          <Card>
            <Statistic
              title="Recovered"
              value={country.total_recovered}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              //   prefix={<ArrowDownOutlined />}
              //   suffix="%"
            />
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default CountryCard;
