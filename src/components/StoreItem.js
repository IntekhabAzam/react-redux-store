import { Card, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";

export function StoreItem(item) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const quantity = cartItems?.find((i) => i.id === item.id)?.quantity || 0;

  return (
    <Card>
      <Card.Img
        variant="top"
        src={item.imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-4">{item.name}</span>
          <span className="ms-2 text-muted">{formatCurrency(item.price)}</span>
        </Card.Title>
        <div>
          {quantity === 0 ? (
            <Button
              className="w-100"
              onClick={() => dispatch(cartActions.increaseCartQuantity(item))}
            >
              + Add To Cart
            </Button>
          ) : (
            <div className="d-flex flex-column justify-content-center gap-2">
              <div className="d-flex justify-content-center align-items-center gap-2">
                <Button
                  onClick={() =>
                    dispatch(cartActions.decreaseCartQuantity(item))
                  }
                >
                  -
                </Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button
                  onClick={() =>
                    dispatch(cartActions.increaseCartQuantity(item))
                  }
                >
                  +
                </Button>
              </div>
              <Button
                variant="danger"
                onClick={() => dispatch(cartActions.removeFromCart(item.id))}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
