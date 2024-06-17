import { useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../styles/code-wars.css";
function CodeWars() {
    const kata = useLoaderData();

    return (
        <>
            <NavLink to="/">
                <h1 className="h1-code-wars">CodeWars et moi</h1>
            </NavLink>

            <table>
                <caption>
                    Nombres de kata realisé sur CodeWars : {kata.data.length}
                </caption>
                <thead>
                    <tr>
                        <th scope="col">realisé le</th>
                        <th scope="col">Langage</th>
                        <th scope="col">Nom du kata</th>
                    </tr>
                </thead>

                {kata.data.map((e, index) => (
                    <tbody key={index}>
                        <tr>
                            <th>{new Date(e.completedAt).toLocaleDateString()} {new Date(e.completedAt).toLocaleTimeString()} </th>
                            <th>{e.completedLanguages}</th>
                            <th>{`=> ${e.name}`}</th>
                        </tr>
                    </tbody>
                ))}
                <tfoot>
                        ...en attente de resolution de Kata...
                </tfoot>
            </table>

            <section>
                <p>donnée récupérée sur :</p>
                <p>
                    https://www.codewars.com/api/v1/users/julien44830/code-challenges/completed?page=page
                </p>
            </section>
        </>
    );
}

export default CodeWars;
