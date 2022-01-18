import ReactLoading from "react-loading";

export function Loading() {

    return (
        <>
            <ReactLoading 
                type={"bars"}
                color={"#0080ff"}
                height={100}
                width={100}
            />
        </>
    )
}