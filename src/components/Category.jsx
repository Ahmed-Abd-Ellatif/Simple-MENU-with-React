import React from "react";
import { Col, Row } from "react-bootstrap";
import Roll from "react-reveal/Roll";

const Category = ({ filterByCategory, allCategory }) => {
  const onFilter = (cat) => {
    filterByCategory(cat);
  };
  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        <Roll>
          {allCategory.length >= 1
            ? allCategory.map((item, index) => {
                return (
                  <div key={index}>
                    <button
                      onClick={() => onFilter(item)}
                      style={{ border: "1px solid #b45b35" }}
                      className="btn mx-2"
                    >
                      {item}
                    </button>
                  </div>
                );
              })
            : null}
        </Roll>
      </Col>
    </Row>
  );
};

export default Category;
