import React from 'react';
import { PageHeader } from 'react-bootstrap';

const Header = props => ( 
    <PageHeader>
        <div style={styles.headerContainerStyle}>
            <div>
                <h1 style={styles.h1Style}>Clicky Game!</h1>
            </div>
            <div>
                <h2>{props.message}</h2>
            </div>
            <div className="scores">
                <h2 style={styles.h2Style}>Score: {props.score}</h2>
                <h2 style={styles.h2Style}>Top Score: {props.topScore}</h2>
            </div>
        </div>
    </PageHeader>
)

const styles = {
    headerContainerStyle: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    },
    h1Style: {
        margin: 0
    },
    h2Style: {
        margin: 0,
        fontSize: 20
    },
    scoresStyle: {
        fontSize: 20
    }
}

export default Header;