import React from "react";
import { NavHeader, Loading } from "../../components";

export function Home({ History }) {

    const [loading, setLoading] = React.useState(true);

    React.useEffect( () => {
        setLoading(false);
    })

    return (
        <>
        {loading? (
            <Loading />
        ) : (
            <React.Fragment>
                <NavHeader />
                <h1>Sup Bitches</h1>
            </React.Fragment>
        )}
        </>
    )
}