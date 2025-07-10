import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from 'react'
import CrwnLogo from '../../assets/svg/crown.svg'
import { UserContext } from '../../context/userContext'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon-component/CartIcon'
import CartDropdown from '../../components/Cart-Dropdown/CartDropdown'
import { CartContext } from '../../context/cartContext'

import {NavigationContainer , LogoContainer,NavLinksContainer,NavLink} from './Navbar.styles'

const Navbar = () => {

    const { currentUser  } = useContext(UserContext)
    const { isCartOpen ,setIsCartOpen } = useContext(CartContext)
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer  to='/'>
                    <div><img className='logo' src={CrwnLogo} alt="" /></div>
                </LogoContainer>
                <NavLinksContainer >
                    <NavLink  to='/shop'>
                        Shop
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                        )
                            : (
                                <NavLink  to='/auth'>
                                    SIGN IN
                                </NavLink>
                            )
                    }
                    <CartIcon/>
                </NavLinksContainer>
              
             {  isCartOpen && <CartDropdown/>}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navbar
