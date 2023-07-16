import { Component } from "react";
import css from "./filter.module.css";

export class Filter extends Component {
    render() {
        return (
            <div className={css.filter}>
                <label className={css.filter__label} htmlFor="">Find boxers by name</label>
                <input
                    className={css.filter__input}
                    type="text"
                    name="filter"
                    value={this.props.filterName}
                    onChange={this.props.addFilter}
                    placeholder="Enter name"
                />
            </div>
        );
    }
}
