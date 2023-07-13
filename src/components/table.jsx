import React from "react";

export const Table = (props) => {

    return (
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">
                        <button className="btn btn-success" type="button" onClick={props.onSort.bind(null, 'id')}>
                            id {props.sortField === 'id' ? <small>{props.sort}</small> : null}
                        </button>
                    </th>
                    <th scope="col">
                        <button className="btn btn-success" type="button" onClick={props.onSort.bind(null, 'name')}>
                            name {props.sortField === 'name' ? <small>{props.sort}</small> : null}
                        </button>
                    </th>
                    <th scope="col">
                        <button className="btn btn-success" type="button" onClick={props.onSort.bind(null, 'age')}>
                            age {props.sortField === 'age' ? <small>{props.sort}</small> : null}
                        </button>
                    </th>
                    <th scope="col">
                        <button className="btn btn-success" type="button" onClick={props.onSort.bind(null, 'nationality')}>
                            nationality {props.sortField === 'nationality' ? <small>{props.sort}</small> : null}
                        </button>
                    </th>
                    <th scope="col">
                        <button className="btn btn-success" type="button" onClick={props.onSort.bind(null, 'stance')}>
                            stance {props.sortField === 'stance' ? <small>{props.sort}</small> : null}
                        </button>
                    </th>
                    <th scope="col">
                        <button className="btn btn-success" type="button" onClick={props.onSort.bind(null, 'division')}>
                            division {props.sortField === 'division' ? <small>{props.sort}</small> : null}
                        </button>
                    </th>
                    <th scope="col">
                        <button className="btn btn-success">
                            record
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.boxers.map((boxer) => (
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
