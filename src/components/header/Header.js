import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { showSidebar } from "../../actions/burger-btn";

import "./header.scss";


import Button from '../button/Button';
import ImgComponent from '../imgComponent/ImgComponent';

const menu = [
    { id: 1, path: "/", text:'Главная'},
    { id: 2, path: "/about", text:'О нас' },
    { id: 3, path: "/transfer", text:'Трансфер' },
    { id: 4, path: "/contact", text:'Контакты' }
];

export class Header extends React.Component {
    showSidebar(e){
        this.setState({showSidebar: !this.state.showSidebar})
    }

    render(){
        const { showSidebar } = this.props;
        
        return(
            <>
                <header>
                    <nav>
                        <Button
                            type="button"
                            className='burger menu-off'
                            id='burger'
                            onClick={showSidebar}
                            classNameIcon='menu-icon'/>

                        <Link to="/" className="logo">
                            <ImgComponent src="../../img/logo.svg" alt='logo'/>
                            <span>Travel</span>
                        </Link>
                        <ul className="menu-sm">
                            {
                                menu.map(el =>
                                    <li key={el.id}>
                                        <Link to={el.path} className='link'>
                                            {el.text}
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                    </nav>
                </header>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        showSidebarItem: state.burgerBtn.showSidebar
    };
};

export default connect(
    mapStateToProps,
    { showSidebar }
)(Header);