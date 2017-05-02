import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import { Grid, Row, Col } from 'react-material-responsive-grid';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 900,
        height: 650,
        overflowY: 'auto'
    }
};

class PortfolioSection extends Component {

    constructor(props) {
        super(props);

        this.state = { data: props.data };
    }

    renderImageTiles() {
        const { gridTiles } = this.state.portfolioSection;
        return gridTiles.map(({ image }, idx) => {
            return (
                <GridTile key={idx}>
                    <img src={`/assets/full/${image}`} />
                </GridTile>
            );
        });
    }

    render(props) {
        // const { title } = this.state.data;
        // return (
        //     <div style={styles.root}>
        //         <h3>{title}</h3>
        //         <br/>
        //         <GridList
        //             cols={3}
        //             padding={10}
        //             style={styles.gridList}>
        //             {this.renderImageTiles()}
        //         </GridList>
        //     </div>
        // );

        const { title } = this.state.data;

        return (
            <section>
                <h1>{title}</h1>
                <Grid>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <p>This column consumes the entire row for extra-small,
                                small, and medium screens.  For large and extra-large
                                screens, it consumes half of the row.</p>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <p>This column isn't visible for extra-small, small,
                                and medium screens, but is visible for large and
                                extra-large screens.  It consumes half of the row.</p>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <p>This column is only visible for medium and large
                                screens and consumes the entire row.</p>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <p>This column is hidden for small and large screens
                                and consumes the entire row.</p>
                        </Col>
                    </Row>
                </Grid>
            </section>
        );
    }
}

export default PortfolioSection;