import React, { useRef } from "react";
import { select } from 'd3';
import { NavHeader } from "../../components";
import { getUserData } from "../../utils/api";

export function Dashboard({  }){

    const [loading, setLoading] = React.useState(true);
    const [userData, setUserData] = React.useState({});

    function drawThirty(data){

        console.log(data)

        const w = 700
        const h = 400

        const svg = select('body')
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .style("margin-left", 100);
        svg
            .selectAll('rect') //select svg type element
            .append('rect')
            .attr("width", 700)
            .attr("height", 300)
            .data(data)
            .join(
                enter => enter.append(''), //append to svg type element
                update => update.attr('class', 'updated'),
                exit => exit.remove()
            )
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => h - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "blue")

        svg.selectAll("text")
            .data(data.metricValues)
            .enter()
            .append("text")
            .text((d) => d)
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => h - (10 * d) - 3)

    }

    React.useEffect( () => {
        getUserData()
        .then((  {data }) => {
            if(data) setUserData(data)
        }).then(() => {
            drawThirty(userData[0])
            return setLoading(false)
        }).catch((err) => {
            console.log(err)
            setLoading(false)
        })
    }, [])

    return (
        <>
        <NavHeader />
        <div></div>

        </>
    )
}