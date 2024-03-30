import { Box, Capsule, KeyboardControls } from "@react-three/drei";
import Ecctrl, { EcctrlAnimation } from "ecctrl";

const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
    // Optional animation key map
    { name: "action1", keys: ["1"] },
    { name: "action2", keys: ["2"] },
    { name: "action3", keys: ["3"] },
    { name: "action4", keys: ["KeyF"] },
];
export const Character = () => {
    return (
        <KeyboardControls map={keyboardMap}>
            <Ecctrl
                capsuleHalfHeight={0.8}
                capsuleRadius={0.8}
                enabledRotations={[false, true, false]}
                autoBalance={false}
            >
                {/* <Box /> */}
                <Capsule scale={[0.8, 1, 0.8]}>
                    <meshStandardMaterial color="hotpink" transparent opacity={0.3} />
                </Capsule>
                <Box position={[0, 0.8, 0]}></Box>
            </Ecctrl>
        </KeyboardControls>
    );
};
