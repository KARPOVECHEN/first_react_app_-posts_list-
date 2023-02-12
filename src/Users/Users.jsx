import { useRouteMatch } from "react-router-dom";

function Users() {

    let match = useRouteMatch();
    return (
        <>
            <h1>Users</h1>
            <ul>
                <li><a href={`${match.url}/ONE`}>ONE</a></li>
                <li><a href={`${match.url}/TWO`}>TWO</a></li>
                <li><a href={`${match.url}/THREE`}>THREE</a></li>
                <li><a href={`${match.url}/FOUR`}>FOUR</a></li >
            </ul >
        </>
    );
}

export default Users;
