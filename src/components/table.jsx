export const Table = ({boxers}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">age</th>
                    <th scope="col">nationality</th>
                    <th scope="col">stance</th>
                    <th scope="col">division</th>
                    <th scope="col">record</th>
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
