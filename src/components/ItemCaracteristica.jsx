import React, {useId} from "react";

const ItemCaracteristica = ({c}) => {
    const idFeature = useId();

    return (
        <p key={idFeature}>- {c[1]}</p>
    )
}

export default ItemCaracteristica