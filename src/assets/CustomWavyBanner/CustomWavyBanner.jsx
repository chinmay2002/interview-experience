import { useEffect } from "react";
import { Gradient } from "../../Pages/CompanyOverview/Gradient";

const CustomWavyBanner = (props) => {
  const { colorPalette } = props;
  console.log("Color Palette: ", colorPalette);
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#dynamic-gradient");
  }, []);

  return (
    <canvas style={colorPalette} id="dynamic-gradient" data-transition-in />
  );
};
export default CustomWavyBanner;
