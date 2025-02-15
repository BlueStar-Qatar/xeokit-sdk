/**
 * @desc Default initial properties for {@link Entity}s loaded from models accompanied by metadata.
 *
 * When loading a model, a loader plugins such as {@link GLTFLoaderPlugin} and {@link BIMServerLoaderPlugin} create
 * a tree of {@link Entity}s that represent the model. These loaders can optionally load metadata, to create
 * a {@link MetaModel} corresponding to the root {@link Entity}, with a {@link MetaObject} corresponding to each
 * object {@link Entity} within the tree.
 *
 * @type {{String:Object}}
 */
const IFCObjectDefaults = {
    IfcSpace: {
        colorize: [0.137255, 0.403922, 0.870588],
        pickable: false,
        visible: false,
        opacity: 0.5
    },
    IfcRoof: {
        colorize: [0.837255, 0.203922, 0.270588]
    },
    IfcSlab: {
        colorize: [0.637255, 0.603922, 0.670588]
    },
    IfcWall: {
        colorize: [0.537255, 0.337255, 0.237255]
    },
    IfcWallStandardCase: {
        colorize: [0.537255, 0.337255, 0.237255]
    },
    IfcDoor: {
        colorize: [0.637255, 0.603922, 0.670588]
    },
    IfcWindow: {
        colorize: [0.137255, 0.403922, 0.870588],
        pickable: false,
        opacity: 0.4
    },
    IfcOpeningElement: {
        colorize: [0.137255, 0.403922, 0.870588],
        pickable: false,
        visible: false
    },
    IfcRailing: {
        colorize: [0.137255, 0.403922, 0.870588]
    },
    IfcColumn: {
        colorize: [0.137255, 0.403922, 0.870588]
    },
    IfcBeam: {
        colorize: [0.137255, 0.403922, 0.870588]
    },
    IfcFurnishingElement: {
        colorize: [0.137255, 0.403922, 0.870588]
    },
    IfcCurtainWall: {
        colorize: [0.137255, 0.403922, 0.870588]
    },
    IfcStair: {
        colorize: [0.637255, 0.603922, 0.670588]
    },
    IfcStairFlight: {
        colorize: [0.637255, 0.603922, 0.670588]
    },
    IfcBuildingElementProxy: {
        colorize: [0.5, 0.5, 0.5]
    },
    IfcFlowSegment: {
        colorize: [0.137255, 0.403922, 0.870588]
    },
    IfcFlowitting: {
        colorize: [0.137255, 0.403922, 0.870588]
    },
    IfcFlowTerminal: {
        colorize: [0.137255, 0.403922, 0.870588]
    },
    IfcProxy: {
        colorize: [0.137255, 0.403922, 0.870588]
    },
    IfcSite: {
        colorize: [0.137255, 0.403922, 0.870588]
    },
    IfcLightFixture: {
        colorize: [0.8470588235, 0.8470588235, 0.870588]
    },
    IfcDuctSegment: {
        colorize: [0.8470588235, 0.427450980392, 0]
    },
    IfcDistributionFlowElement: {
        colorize: [0.8470588235, 0.427450980392, 0]
    },
    IfcDuctFitting: {
        colorize: [0.8470588235, 0.427450980392, 0]
    },
    IfcPlate: {
        colorize: [0.8470588235, 0.427450980392, 0, 0.5],
        opacity: 0.5
    },
    IfcAirTerminal: {
        colorize: [0.8470588235, 0.427450980392, 0]
    },
    IfcMember: {
        colorize: [0.8470588235, 0.427450980392, 0]
    },
    IfcCovering: {
        colorize: [0.8470588235, 0.427450980392, 0]
    },
    IfcTransportElement: {
        colorize: [0.8470588235, 0.427450980392, 0]
    },
    IfcFlowController: {
        colorize: [0.8470588235, 0.427450980392, 0]
    },
    IfcFlowFitting: {
        colorize: [0.8470588235, 0.427450980392, 0]
    },
    IfcRamp: {
        colorize: [0.8470588235, 0.427450980392, 0]
    },
    IfcFurniture: {
        colorize: [0.8470588235, 0.427450980392, 0]
    },
    IfcFooting: {
        colorize: [0.8470588235, 0.427450980392, 0]
    },
    IfcSystemFurnitureElement: {
        colorize: [0.8470588235, 0.427450980392, 0]
    },
    DEFAULT: {
        colorize: [0.5, 0.5, 0.5]
    }
};

export {IFCObjectDefaults}