import { Offcanvas, Stack } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";

export function ShoppingCart() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.cart.isOpen);
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <Offcanvas
      show={isOpen}
      onHide={() => dispatch(cartActions.closeCart())}
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems?.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                return total + (cartItem?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
