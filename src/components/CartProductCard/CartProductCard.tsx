import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../store/modules/Cart/cartActions";
import formatCurrency from "../../utils/utilsFunctions/currencyFormatter";
import {
  CartProductCardContainer,
  CartProductDetailContainer,
  CartProductImage,
  CartProductName,
  CartProductPrice,
  CartProductQuantity,
  DeleteProduct,
  DetailContainer,
  Minus,
  Plus,
} from "./CartProductCart.css";
import { useLocation } from "react-router-dom";
import { getCommaSeperateNumber } from "../../utils/utilsFunctions/numberConverter";

type ProductData = {
  id: number;
  name: string;
  price: string;
  image: string;
  stock: number;
  createDate: string;
  quantity: number;
  category: string[];
};

const CartProductCard = ({ product }: { product: ProductData }) => {
  const dispatch = useDispatch();

  const deleteItem = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  /** Issues with render a step late than click action, Needs fixing later **/
  const increase = (productId: number, quantity: number, stock: number) => {
    if (quantity < stock) {
      dispatch(increaseQuantity(productId));
    }
  };
  const decrease = (productId: number, quantity: number) => {
    console.log(quantity);
    if (quantity > 1) {
      dispatch(decreaseQuantity(productId));
    }
  };

  const location = useLocation();
  console.log(location.pathname);

  return (
    <CartProductCardContainer>
      <DetailContainer>
        <CartProductImage
          src={`https://electronic-ecommerce.herokuapp.com/` + product.image}
        />
        <CartProductDetailContainer>
          <CartProductName>{product.name}</CartProductName>
          <CartProductPrice>
            Rs.
            {getCommaSeperateNumber(
              Number(product.price.substring(1)) * product.quantity
            )}
          </CartProductPrice>
          <CartProductQuantity>
            {location.pathname !== "/checkout" ? (
              <>
                <Plus
                  onClick={() =>
                    increase(product.id, product.quantity, product.stock)
                  }
                />
                {product.quantity}
                <Minus onClick={() => decrease(product.id, product.quantity)} />
              </>
            ) : (
              <>Qty:{product.quantity}</>
            )}
          </CartProductQuantity>
        </CartProductDetailContainer>
      </DetailContainer>
      {location.pathname !== "/checkout" && (
        <DeleteProduct onClick={() => deleteItem(product.id)} />
      )}
    </CartProductCardContainer>
  );
};

export default CartProductCard;
