import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import { Link } from 'react-router-dom';
import portfolioSections from '../../data/portfolioSections';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 900,
        height: 650,
        overflowY: 'auto',
    }
};


class PortfolioHome extends Component {
    constructor(props) {
        super(props);

        this.state = { portfolioSections };
    }

    renderSectionTiles() {
        return this.state.portfolioSections.map(({ title, key, thumb }) => {
            return (
                <Link to={`/section/${key}`} key={key}>
                    <GridTile
                        title={title}>
                        <img src={`/assets/thumbs/${thumb}`} />
                    </GridTile>
                </Link>
            );
        });
    }

    render() {
        return (
            <div style={styles.root}>
                <GridList
                    cols={3}
                    padding={10}
                    style={styles.gridList}>
                    {this.renderSectionTiles()}
                </GridList>
            </div>
        );
    }
}

export default PortfolioHome;




