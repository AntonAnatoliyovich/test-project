import React from "react";

export const Table = (boxer) => {

    const {boxers} = boxer;
    const [sortedField, setSortedField] = React.useState(null);
    let sortedBoxers = [...boxers];
    sortedBoxers.sort((a,b) => {
        if (a[sortedField] < b[sortedField]) {
            return -1;
        }
        if (a[sortedField] > b[sortedField]) {
            return 1;
        }
        return 0;
    })

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">
                        <button type="button" onClick={() => setSortedField('id')}>
                            id
                        </button>
                    </th>
                    <th scope="col">
                        <button type="button" onClick={() => setSortedField('name')}>
                            name
                        </button>
                    </th>
                    <th scope="col">
                        <button type="button" onClick={() => setSortedField('age')}>
                            age
                        </button>
                    </th>
                    <th scope="col">
                        <button type="button" onClick={() => setSortedField('nationality')}>
                            nationality
                        </button>
                    </th>
                    <th scope="col">
                        <button type="button" onClick={() => setSortedField('stance')}>
                            stance
                        </button>
                    </th>
                    <th scope="col">
                        <button type="button" onClick={() => setSortedField('division')}>
                            division
                        </button>
                    </th>
                    <th scope="col">
                        <button type="button" onClick={() => setSortedField('record')}>
                            record
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {boxers.map((boxer) => (
                    <tr key={boxer.id}>
                        <th>{boxer.id}</th>
                        <td>{boxer.name}</td>
                        <td>{boxer.age}</td>
                        <td>{boxer.nationality}</td>
                        <td>{boxer.stance}</td>
                        <td>{boxer.division}</td>
                        <td>{boxer.record}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
