import { Row, Col } from "react-bootstrap";
import { StoreItem } from "./StoreItem";
import { useSelector } from "react-redux";

export function Store() {
  const storeItems = useSelector((state) => state.cart.storeItems);

  return (
    <div className="px-2">
      <h1 className="mb-3">Store</h1>
      <Row xs={1} md={2} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
