import { Row, Col } from "react-bootstrap";
import { StoreItem } from "./StoreItem";
import { useSelector } from "react-redux";

export function Store() {
  const storeItems = useSelector((state) => state.cart.storeItems);

  return (
    <div className="px-2 pt-2">
      <Row xs={1} sm={2} md={3} lg={4} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
