import React from 'react';

const Card = props => (
    <div className="card" style={styles.cardStyle} onClick={() => props.handleClick(props.id)}>
        <div className="img-container" style={styles.imgContainerStyle}>
            <img alt={props.name} src={props.image} style={styles.imgStyle} />
        </div>
    </div>
)

const styles = {
    cardStyle: {
        borderRadius: 10,
        background: "white",
        height: 200,
        margin: 10,
        position: "relative",
        width: 200,
        textAlign: "center",
        boxShadow: "0 3px 6px #333, 0 3px 6px #333"
    },
    imgContainerStyle: {
        borderRadius: 10,
        height: 200,
        overflow: "hidden",
        textAlign: "center",
        background:"#4682b4",
    },
    imgStyle: {
        width: "60%"
    }
}

export default Card;