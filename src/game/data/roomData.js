export const roomData = [
  {
    id: 1,
    name: "Introduction Room",
    position: [0, 0, 0],
    spawnPositionForward: [0, 0, 6],
    spawnPositionBackward: [-4, 0, -6],
    width: 15,
    depth: 15,
    height: 5,
    floorTexture: "/src/assets/models/Asphalt/Asphalt_Albedo.tga",
    walls: {
      back: { visible: true, texture: "/src/assets/models/Brick Wall/BrickWall_Albedo.tga" },
      left: { visible: false, texture: "/src/assets/models/Brick Wall/BrickWall_Albedo.tga" },
      right: { visible: false, texture: "/src/assets/models/Brick Wall/BrickWall_Albedo.tga" },
      front: { visible: false, texture: "/src/assets/models/Brick Wall/BrickWall_Albedo.tga" },
    },
    items: [
      {
        id: "door1",
        type: "door",
        position: [-4, 1.5, -7.2],
        rotation: [0, -55, 0],
        targetRoomId: 2,
        label: "Go to Project Room",
        model: "/src/assets/3dModels/door/scene.gltf",
        scale: [0.14, 0.12, 0.14],
        userData: { raycastable: true, isInteractive: true },
      },
    ],
  },
  {
    id: 2,
    name: "Project Room",
    position: [0, 0, 0],
    spawnPositionForward: [-4, 0, 6],
    spawnPositionBackward: [4.5, 0, -5.5],
    width: 15,
    depth: 15,
    height: 5,
    floorTexture: "/src/assets/models/Asphalt/Asphalt_Albedo.tga",
    walls: {
      back: { visible: true, texture: "/src/assets/models/Cement Brick Wall/CementBrickWallAlbedo.tga" },
      left: { visible: true, texture: "/src/assets/models/Cement Brick Wall/CementBrickWallAlbedo.tga" },
      right: { visible: false, texture: "/src/assets/models/Cement Brick Wall/CementBrickWallAlbedo.tga" },
      front: { visible: false, texture: "/src/assets/models/Cement Brick Wall/CementBrickWallAlbedo.tga" },
    },
    items: [
      {
        id: "door2",
        type: "door",
        position: [4, 0, -7.3],
        rotation: [0, Math.PI, 0],
        targetRoomId: 3,
        label: "Go to Game Room",
        model: "src/assets/3dModels/SciFiDoor.glb",
        scale: [0.9, 0.9, 0.9],
        userData: { raycastable: true, isInteractive: true },
      },
      {
        id: "door3",
        type: "door",
        position: [-4, 1.5, 7],
        rotation: [0, -55, 0],
        targetRoomId: 1,
        label: "Go to Introduction Room",
        model: "/src/assets/3dModels/door/scene.gltf",
        scale: [0.14, 0.12, 0.14],
        transparency: 0.2,
        userData: { raycastable: true, isInteractive: true },
      },
      {
        id: "project1",
        type: "project",
        position: [-6, 0.5, -6],
        rotation: [0, 0, 0],
        label: "Project One",
        color: "blue",
        model: "/src/assets/3dModels/Construction.glb",
        scale: [0.55, 0.55, 0.55],
        userData: { raycastable: true, isInteractive: true },
      },
    ],
  },
  {
    id: 3,
    name: "Danger Room",
    position: [0, 0, 0],
    spawnPositionForward: [5.5, 0, 6],
    spawnPositionBackward: [0, 0, -4],
    width: 15,
    depth: 15,
    height: 5,
    floorTexture: "/src/assets/models/Asphalt/Asphalt_Albedo.tga",
    walls: {
      back: { visible: true, texture: "/src/assets/models/Brick Wall/BrickWall_Albedo.tga" },
      left: { visible: true, texture: "/src/assets/models/Brick Wall/BrickWall_Albedo.tga" },
      right: { visible: false, texture: "/src/assets/models/Brick Wall/BrickWall_Albedo.tga" },
      front: { visible: false, texture: "/src/assets/models/Brick Wall/BrickWall_Albedo.tga" },
    },
    items: [
      {
        id: "door4",
        type: "door",
        position: [5, 0, 7.7],
        rotation: [0, 0, 0],
        targetRoomId: 2,
        label: "Go to Project Room",
        model: "src/assets/3dModels/SciFiDoor.glb",
        scale: [0.9, 0.9, 0.9],
        transparency: 0.2,
        userData: { raycastable: true, isInteractive: true, id: "door4", },
      },
    ],
  },
];
