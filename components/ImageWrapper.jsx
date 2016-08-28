import React, { Component } from "react";
import { Image }            from "react-konva";


const imageCache = {
};

export default class ImageWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      error: false,
      loaded: false
    };
  }

  loadImage(src) {
    if (!src) {
      throw new Error("Expected image src instead saw " + typeof src);
    }

    let img = imageCache[src];

    if (!img) {
      console.log("cacheImg...");
      img = imageCache[src] = document.createElement("img");
      img.loadFns = [];
      img.errorFns = [];
      img.onerror = () => {
        img.error = true;
        img.errorFns.forEach(fn => fn.call(img));
      };
      img.onload = () => {
        const [w, h] = ('naturalHeight' in img) ? ["naturalWidth", "naturalHeight"] : ["width", "height"];

        if (img[w] + img[h] == 0) {
          img.onerror();
        } else {
          img.loaded = true;
          img.loadFns.forEach(fn => fn.call(img));
        }
      };
    }

    if (!img.loaded && !img.error) {
      img.loadFns.push(() => {
        img.loaded = true;
        this.setState({loaded: true, image: img});
      });

      img.errorFns.push(() => {
        img.error = true;
        this.setState({error: true, image: img});
      });
    } else if (img.error) {
      this.setState({error: true, image: img});
    } else {
      this.setState({loaded: true, image: img});
    }

    if (!img.src) {
      img.src = src;
    }
  }

  fillRect(p, c) {
    return (c.width / c.height) < (p.width / p.height)
      ? {width: p.width, height: c.height * (p.width / c.width)}
    : {height: p.height, width: c.width * (p.height / c.height)};
  };

  fitRect(p, c) {
    return (c.width / c.height) > (p.width / p.height)
      ? {width: p.width, height: c.height * (p.width / c.width)}
    : {height: p.height, width: c.width * (p.height / c.height)};
  };

  getDims(space, parent, child) {
    switch (space) {
      case "fill":
        return this.fillRect(parent, child);

      case "fit":
      default:
        return this.fitRect(parent, child);
    }
  };

  componentWillMount() {
    this.loadImage(this.props.src);
  };

  render() {
    const selfDims = { width: this.props.width, height: this.props.height };
    const image = this.state.image;
    const imageDims = image ? {width: image.width, height: image.height} : selfDims;
    const dims = this.getDims(this.props.space, selfDims, imageDims);
    const pos = {x: this.props.x || 0, y: this.props.y || 0};

    return (
        <Image image={this.state.image} x={pos.x} y={pos.y} width={dims.width} height={dims.height}/>
    );
  };
}
