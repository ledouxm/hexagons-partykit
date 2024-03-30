import { Cylinder } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";

export const Floor = ({
    smallestRowCount = 6,
    hexSize = 1,
    spacing = 0.1,
}: {
    smallestRowCount?: number;
    hexSize?: number;
    spacing?: number;
}) => {
    const coordinates = generateHexMap({ rowCount: smallestRowCount, spacing, hexSize });

    const xGap = (hexSize + spacing) * Math.sqrt(3);
    const yGap = 1.5 * (hexSize + spacing);
    const groupX = -(xGap * (smallestRowCount - 1) * 0.5);
    const groupY = -(yGap * (smallestRowCount - 1));

    return (
        <group position={[groupX, 0, groupY]}>
            {coordinates.map(({ x, y }, i) => (
                <CylinderCell key={i} position={[x, 0, y]} hexSize={hexSize} />
            ))}
        </group>
    );
};

function generateHexMap({
    rowCount,
    spacing,
    hexSize,
}: {
    rowCount: number;
    spacing: number;
    hexSize: number;
}) {
    let hexMap: { x: number; y: number }[] = [];

    // Calculate the horizontal and vertical spacing
    const actualSpacing = hexSize + spacing;
    const horizontalSpacing = Math.sqrt(3) * actualSpacing;
    const verticalSpacing = 1.5 * actualSpacing;

    // Loop through each row
    for (let row = 0; row < 2 * rowCount - 1; row++) {
        const hexagonsInRow = row < rowCount ? rowCount + row : 3 * rowCount - 2 - row;
        const startX = (rowCount - hexagonsInRow) * 0.5 * horizontalSpacing;

        for (let col = 0; col < hexagonsInRow; col++) {
            const x = startX + col * horizontalSpacing;
            const y = row * verticalSpacing;

            hexMap.push({ x, y });
        }
    }

    return hexMap;
}

const CylinderCell = ({ hexSize, ...props }: MeshProps & { hexSize: number }) => {
    return (
        <RigidBody type="fixed" {...{ colliders: "trimesh" }}>
            <Cylinder {...props} args={[hexSize, hexSize, 0.3, 6]}>
                <meshStandardMaterial color="green" />
            </Cylinder>
        </RigidBody>
    );
};
