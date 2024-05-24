import {
  IgrRadialGaugeModule,
  IgrRadialGauge,
  IgrRadialGaugeRange,
} from "igniteui-react-gauges";
import { useRef } from "react";
import { Box } from "@chakra-ui/react";

const RadialGauge = ({ value }) => {
  const gaugeref = useRef();

  return (
    <Box width={"35%"} height={"35rem"}>
      <IgrRadialGauge
        ref={gaugeref}
        backingShape={"Fitted"}
        height="calc(100% - 50px)"
        width="100%"
        value={value}
        interval={5}
        minimumValue={0}
        maximumValue={50}
        labelInterval={5}
        labelExtent={0.71}
        minorTickCount={4}
        minorTickEndExtent={0.625}
        minorTickStartExtent={0.6}
        minorTickStrokeThickness={1}
        minorTickBrush="#79797a"
        opticalScalingEnabled={true}
        tickStartExtent={0.6}
        tickEndExtent={0.65}
        tickStrokeThickness={2}
        tickBrush="#1C2B56"
        needleShape="triangle"
        needleEndWidthRatio={0.03}
        needleStartWidthRatio={0.05}
        needlePivotShape="CircleOverlay"
        needlePivotWidthRatio={0.15}
        needleBaseFeatureWidthRatio={0.15}
        needleBrush="white"
        needleOutline="#79797a"
        needlePivotBrush="#51525F"
        needlePivotOutline="#79797a"
        needleStrokeThickness={2}
        isNeedleDraggingEnabled={true}
        backingBrush="#fcfcfc"
        backingOutline="#868794"
        backingStrokeThickness={5}
        scaleStartAngle={120}
        scaleEndAngle={60}
        scaleBrush="#FFa908"
        transitionDuration={500}
        titleDisplaysValue={true}
        rangeBrushes="#F86232, #DC3F76, #7446B9"
        rangeOutlines="#F86232, #DC3F76, #7446B9"
      />
    </Box>
  );
};

export default RadialGauge;
