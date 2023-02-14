import { Stack, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { formatCurrency } from "../utilities/formatCurrency";

export function CartItem(item) {
  const dispatch = useDispatch();

  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2}>
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {item.quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{item.quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * item.quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => dispatch(cartActions.removeFromCart(item.id))}
      >
        &times;
      </Button>
    </Stack>
  );
}
