import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    position: "fixed",
    top: 110,
    left: -55,
    zIndex: 50,
    transition: ".3s"
  },
  gridList: {
    width: 300,
    height: 500,
    overflowY: 'auto',
    marginBottom: 24,
  },
};

const tilesData = [
{
  img: 'http://www.labelyasan.com/files/img/template/sz1_word72h.jpg',
    title: 'honya',
    author: 'morake',
},
{
  img: 'https://t.pimg.jp/003/921/648/1/3921648.jpg',
    title: 'unya',
    author: 'goro',
},
{
  img: 'http://4.bp.blogspot.com/-KroApQo5jGk/U32NZ5zpBWI/AAAAAAAAguY/ljsg8-RkcBY/s450/message_otsukaresama.png',
    title: 'zap',
    author: 'pan',
},
{
  img: 'http://3.bp.blogspot.com/-0LzRcabLeS4/U0pTFP-ULvI/AAAAAAAAfDI/350gzN4bTN8/s800/text_warai.png',
    title: 'uge',
    author: 'm0n',
},
  ];

const Mordal = () => (
    <div style={styles.root} id="mordal">
    <GridList
    cellHeight={200}
    style={styles.gridList}
    >
    <Subheader> { name } </Subheader>
    {tilesData.map((tile) => (
        <GridTile
        key={tile.img}
        title={tile.title}
        subtitle={<span>by <b>{tile.author}</b></span>}
        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
        <img src={tile.img} />
        </GridTile>
        ))}
    </GridList>
    </div>
    );

export default Mordal;
