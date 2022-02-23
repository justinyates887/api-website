import React, { useRef } from "react";
import { select } from 'd3';
import { NavHeader } from "../../components";
import { getUserData } from "../../utils/api";

export function Dashboard({ History }){

    const [loading, setLoading] = React.useState(true);
    const [userData, setUserData] = React.useState({});

    const svgRef = useRef();

    React.useEffect( () => {
        getUserData()
        .then((  {data }) => {
            if(data) setUserData(data)
        }).then(( {} ) => {
            const svg = select(svgRef.current);
            svg
                .select('#thirty') //select svg type element
                .append('svg')
                .data(userData)
                .join(
                    enter => enter.append(''), //append to svg type element
                    update => update.attr('class', 'updated'),
                    exit => exit.remove()
                )
            return setLoading(false)
        }).catch((err) => {
            console.log(err)
            history.push('/')
            setLoading(false)
        })
    }, [])

    return (
        <>
        <NavHeader />
        <svg ref={ svgRef } id='thirty'></svg>

        </>
    )
}