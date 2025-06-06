window.convertToSvgCoords = function (svgElement, screenX, screenY) {
    let point = svgElement.createSVGPoint();
    point.x = screenX;
    point.y = screenY;

    point = point.matrixTransform(svgElement.getScreenCTM().inverse());

    return [point.x, point.y];
};
