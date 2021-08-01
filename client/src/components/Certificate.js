import React from "react";
import PropTypes from "prop-types";
import cert from '../img/cert.jpg'

export const Canvas = ({ height, width, text, fontSize, textX, textY }) => {
  const canvas = React.useRef();

  React.useEffect(() => {
    const context = canvas.current.getContext("2d");
    const certificate = new Image();
    certificate.src = cert
    certificate.onload = () => {
      context.drawImage(certificate, 0, 0, width, height);
      context.font = `bold ${fontSize}px sans-serif`;
      context.fillText(text, textX, textY);
    };
  });

  return <canvas ref={canvas} height={height} width={width}/>;
};

export const DownloadCanvas = ({ height, width, text }) => {
  const downloadCanvas = React.useRef();

  React.useEffect(() => {
    const context = downloadCanvas.current.getContext("2d");
    const certificate = new Image();
    certificate.src = cert
    certificate.onload = () => {
      context.drawImage(certificate, 0, 0, 1188, 840);
      context.font = 'bold 29px sans-serif';
      context.fillText(text, 77, 468);
    };
  });

  return <canvas style={{display: 'none'}} ref={downloadCanvas} height={height} width={width} id='downloadCanvas'/>;
};

Canvas.propTypes = {
  draw: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};

DownloadCanvas.propTypes = {
  draw: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};