import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown , Label} from 'semantic-ui-react'
import { useSelector } from 'react-redux'

export default function CartSummary() {


    const {cartItems} = useSelector(state => state.cart)

    return (
        <div>
            <Dropdown item text="Sepetiniz">
                <Dropdown.Menu>
                    {/* <Dropdown.Item>Acer Laptop</Dropdown.Item>
                    <Dropdown.Item>Asus Laptop</Dropdown.Item>
                    <Dropdown.Item>Dell Laptop</Dropdown.Item> */}
                    {
                        cartItems.map((cartItem) => (
                            <Dropdown.Item>
                                {cartItem.product.productName}
                                <Label>
                                    {cartItem.quantity}
                                </Label>
                            </Dropdown.Item>    
                        ))
                    }
                    
                    <Dropdown.Divider/>
                    <Dropdown.Item as={NavLink} to="/cart">Sepete Git</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
