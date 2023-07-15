import React from "react";
import { Component } from 'react';

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

    addBoxer({ id, name, age, nationality, stance, division, record, photo });
    event.target.reset();
    };

    render() {
        return (
            <form className="mb-3" onSubmit={this.handleFormSubmit}>
                <label className="form-label">Id</label>
                <input
                    className="form-control"
                    type="number"
                    name="id"
                    placeholder="Enter id"
                    required
                />
                <label className="form-label">Name</label>
                <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    // required
                />
                <label className="form-label">Age</label>
                <input
                    className="form-control"
                    type="number"
                    name="age"
                    placeholder="Enter age"
                    // required
                />
                <label className="form-label">Nationality</label>
                <input
                    className="form-control"
                    type="text"
                    name="nationality"
                    placeholder="Enter nationality"
                    // required
                />
                <label className="form-label">Stance</label>
                <input
                    className="form-control"
                    type="text"
                    name="stance"
                    placeholder="Enter stance"
                    // required
                />
                <label className="form-label">Division</label>
                <input
                    className="form-control"
                    type="text"
                    name="division"
                    placeholder="Enter division"
                    // required
                />
                <label className="form-label">Record</label>
                <input
                    className="form-control"
                    type="text"
                    name="record"
                    placeholder="Enter record"
                    // required
                />
                <label className="form-label">Photo</label>
                <input
                    className="form-control"
                    type="text"
                    name="photo"
                    placeholder="Enter url photo"
                    // required
                />
                <button className="btn-warning" type="submit">
                    Add boxer
                </button>
            </form>
    );
    }
}
