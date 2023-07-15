import React from "react";
import { Component } from 'react';
import css from "./boxersForm.module.css"

export class BoxersForm extends Component {
    handleFormSubmit = event => {
    event.preventDefault();

    const id = event.target.id.value;
    const name = event.target.name.value;
    const age = event.target.age.value;
    const nationality = event.target.nationality.value;
    const stance = event.target.stance.value;
    const division = event.target.division.value;
    const record = event.target.record.value;
    const photo = event.target.photo.value;
    const { addBoxer } = this.props;
    const newBoxer = { id, name, age, nationality, stance, division, record, photo }

    addBoxer(newBoxer);
    event.target.reset();
    };

    render() {
        return (
            <form className={css.form} onSubmit={this.handleFormSubmit}>
                <label className={css.form__label}>
                    <input
                        className={css.form__input}
                        type="number"
                        name="id"
                        placeholder="Enter id"
                        required
                    />
                    Id
                </label>
                <label className={css.form__label}>
                    <input
                        className={css.form__input}
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        // required
                    />
                    Name
                </label>
                <label className={css.form__label}>
                    <input
                        className={css.form__input}
                        type="number"
                        name="age"
                        placeholder="Enter age"
                        // required
                    />
                    Age
                </label>
                <label className={css.form__label}>
                    <input
                        className={css.form__input}
                        type="text"
                        name="nationality"
                        placeholder="Enter nationality"
                        // required
                    />
                    Nationality</label>
                <label className={css.form__label}>
                    <input
                        className={css.form__input}
                        type="text"
                        name="stance"
                        placeholder="Enter stance"
                        // required
                    />
                    Stance
                </label>
                <label className={css.form__label}>
                    <input
                        className={css.form__input}
                        type="text"
                        name="division"
                        placeholder="Enter division"
                        // required
                    />
                    Division
                </label>
                <label className={css.form__label}>
                    <input
                        className={css.form__input}
                        type="text"
                        name="record"
                        placeholder="Enter record"
                        // required
                    />
                    Record
                </label>
                <label className={css.form__label}>
                    <input
                        className={css.form__input}
                        type="text"
                        name="photo"
                        placeholder="Enter url photo"
                        // required
                    />
                    Photo
                </label>
                <button className={css.form__button} type="submit">
                    Add boxer
                </button>
            </form>
    );
    }
}
