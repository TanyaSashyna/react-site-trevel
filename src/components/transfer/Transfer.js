import React from 'react';

import "./transfer.scss";

import Caption from '../caption/Caption';
import SelectsBlock from '../selects-block/SelectsBlock';
import AboutWay from '../aboutWay/AboutWay';
import FormOrder from '../formOrder/FormOrder';

export default class Transfer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fromTo: ['Выберите город', 'Харьков', 'Кириловка', 'Скадовск', 'Лазурное'],
            fromWhereOne: ['Выберите город', 'Харьков'],
            fromWhereTwo: ['Выберите город', 'Кириловка', 'Скадовск', 'Лазурное'],
            valueOne: 0,
            valueTwo: 0,
            showSelect: false
        }
    }

    handleSelectChange(event) {
        //сделать это через redux
        
        //console.log(this.state.fromWhere[event.target.value], this.state.showSelect);

        event.target.name === "from-where" ?
            this.setState({ valueOne: event.target.value }) :
            this.setState({ valueTwo: event.target.value });

        if (event.target.name === "from-where") {
            //console.log(event.target.value, this.state.showSelect);
            +event.target.value !== 0 ?
                this.setState({ showSelect: true }) :
                this.setState({ showSelect: false })
        }
    }

    render() {
        return (
            <div className="main">
                <Caption/>
                <div className="select-wrap">
                    <SelectsBlock
                        name="from-where"
                        value={this.state.valueOne}
                        fromWhere={this.state.fromTo}
                        onChange={this.handleSelectChange.bind(this)}
                        text="Откуда"
                    />{/* при onChange менять обьект для второго селекта, отправлять в redux, затем передавать его второму селекту */}
                    <SelectsBlock
                        className={this.state.showSelect ? 'd-block' : 'd-none'}
                        name="where"
                        value={this.state.valueTwo}
                        fromWhere={this.state.fromTo}
                        onChange={this.handleSelectChange.bind(this)}
                        text="Куда"
                    />
                </div>
                <AboutWay />{/* если выбран город во втором селекте, брать данные из redux в компонент, делать запрос и перерисовать */}
                <FormOrder />{/*если true рисовать FormOrder*/}
            </div>
        )
    }
}
