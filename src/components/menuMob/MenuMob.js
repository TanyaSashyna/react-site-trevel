import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { showSidebar } from "../../actions/burger-btn";

import "./menuMob.scss";

export class MenuMob extends React.Component {
    logout(e) {
        console.log('logout')
    }

    render() {
        const { showSidebarItem , showSidebar, menu } = this.props;

        return(
            <div className={`sidebar ${ showSidebarItem? 'open' : 'close' }`} id="sidebar">

                <div className="nav-list">
                    <ul>
                        {
                            menu.map(el =>
                                <li key={el.id}>
                                    <Link to={el.path} className='link' onClick={showSidebar}>
                                        {el.text}
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        showSidebarItem: state.burgerBtn.showSidebar,
        menu: state.transfer.menu
    };
};

export default connect(
    mapStateToProps,
    { showSidebar }
)(MenuMob);
