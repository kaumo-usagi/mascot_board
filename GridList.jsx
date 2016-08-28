import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";
import Paper from "material-ui/Paper";
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {GridList, GridTile} from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import Subheader from "material-ui/Subheader";
import StarBorder from "material-ui/svg-icons/toggle/star-border";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  gridList: {
    width: 500,
    height: 500,
    overflowY: "auto",
    marginButtom: 24
  }
};

let titleData = [
  {
      url: "http://www.labelyasan.com/files/img/template/sz1_word72h.jpg",
    title: "honya",
    author: "morake"
  },
  {
      url: "http://www.labelyasan.com/files/img/template/sz1_word72h.jpg",
    title: "honya",
    author: "morake"
  },
  {
      url: "http://www.labelyasan.com/files/img/template/sz1_word72h.jpg",
    title: "honya",
    author: "morake"
  },
  {
      url: "http://www.labelyasan.com/files/img/template/sz1_word72h.jpg",
    title: "honya",
    author: "morake"
  },
  {
      url: "http://www.labelyasan.com/files/img/template/sz1_word72h.jpg",
    title: "honya",
    author: "morake"
  },
  {
      url: "http://www.labelyasan.com/files/img/template/sz1_word72h.jpg",
    title: "honya",
    author: "morake"
  }
]

class GridList extends Component {

  render() {
    return(
        <div style={style.root}>
          <GridList
            cellHeight={200}
            style={styles.gridList}
          >
          <Subheader>December</Subheader>
          {tilesData.map((tile) => (
              <GridTile
                key={tile.img}
                title={tile.tile}
                subtitle={<span>by <b>{tile.author}</b></span>}
                actionIcon={<IconButton><StarBorder color="white"  /></Iconbutton}
              >
              <img src={tile.img} />
            </GridTile>
          ))}
        </Gridlist>
      </div>
    )
  }
}

export default GridList
