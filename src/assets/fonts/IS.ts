interface IAtlasDefinition {
    ix: number, 
    iy: number, 
    row_height: number, 
    aspect: number, 
    ascent: number, 
    descent: number, 
    line_gap: number, 
    cap_height: number, 
    x_height: number, 
    space_advance: number, 
    chars: object,
    kern: object,
};

let ISDefinition: IAtlasDefinition = {
    ix: 0.0107422, 
    iy: 0.0107422, 
    row_height: 0.0556641, 
    aspect: 1, 
    ascent: 0.0268271, 
    descent: 0.00735261, 
    line_gap: 0, 
    cap_height: 0.0247571, 
    x_height: 0.0181497, 
    space_advance: 0.0107143, 

    chars: { 
    "\u0021": {
        codepoint: 33,
        rect: [0, 0.944336, 0.0247301, 1],
        bearing_x: 0.00183815,
        advance_x: 0.00695517,
        flags: 4
    },
    "\u0022": {
        codepoint: 34,
        rect: [0.0249023, 0.944336, 0.0553622, 1],
        bearing_x: 0.00183815,
        advance_x: 0.0126518,
        flags: 4
    },
    "\u0023": {
        codepoint: 35,
        rect: [0.0556641, 0.944336, 0.0981133, 1],
        bearing_x: 0.000231839,
        advance_x: 0.0214617,
        flags: 4
    },
    "\u0024": {
        codepoint: 36,
        rect: [0.0981445, 0.944336, 0.133605, 1],
        bearing_x: 0.00372598,
        advance_x: 0.0214617,
        flags: 4
    },
    "\u0025": {
        codepoint: 37,
        rect: [0.133789, 0.944336, 0.177563, 1],
        bearing_x: 0.000198719,
        advance_x: 0.0226871,
        flags: 4
    },
    "\u0026": {
        codepoint: 38,
        rect: [0.177734, 0.944336, 0.220167, 1],
        bearing_x: 0.00125855,
        advance_x: 0.023631,
        flags: 4
    },
    "\u0027": {
        codepoint: 39,
        rect: [0.220215, 0.944336, 0.24579, 1],
        bearing_x: 0.00183815,
        advance_x: 0.00776661,
        flags: 4
    },
    "\u0028": {
        codepoint: 40,
        rect: [0.246094, 0.944336, 0.275345, 1],
        bearing_x: 0.00203687,
        advance_x: 0.0110289,
        flags: 4
    },
    "\u0029": {
        codepoint: 41,
        rect: [0.275391, 0.944336, 0.304642, 1],
        bearing_x: 0.00122543,
        advance_x: 0.0110289,
        flags: 4
    },
    "\u002a": {
        codepoint: 42,
        rect: [0.304688, 0.944336, 0.338857, 1],
        bearing_x: 0.00183815,
        advance_x: 0.0163446,
        flags: 4
    },
    "\u002b": {
        codepoint: 43,
        rect: [0.338867, 0.944336, 0.379959, 1],
        bearing_x: 0.000910796,
        advance_x: 0.0214617,
        flags: 4
    },
    "\u002c": {
        codepoint: 44,
        rect: [0.380371, 0.944336, 0.405946, 1],
        bearing_x: 0.00329543,
        advance_x: 0.0107143,
        flags: 4
    },
    "\u002d": {
        codepoint: 45,
        rect: [0.40625, 0.944336, 0.435087, 1],
        bearing_x: 0.00183815,
        advance_x: 0.0110289,
        flags: 4
    },
    "\u002e": {
        codepoint: 46,
        rect: [0.435547, 0.944336, 0.461122, 1],
        bearing_x: 0.00329543,
        advance_x: 0.0107143,
        flags: 4
    },
    "\u002f": {
        codepoint: 47,
        rect: [0.461426, 0.944336, 0.499255, 1],
        bearing_x: 0.000198719,
        advance_x: 0.0167586,
        flags: 4
    },
    "\u0030": {
        codepoint: 48,
        rect: [0.499512, 0.944336, 0.538152, 1],
        bearing_x: 0.00213623,
        advance_x: 0.0214617,
        flags: 2
    },
    "\u0031": {
        codepoint: 49,
        rect: [0.538574, 0.944336, 0.566567, 1],
        bearing_x: 0.00563037,
        advance_x: 0.0214617,
        flags: 2
    },
    "\u0032": {
        codepoint: 50,
        rect: [0.566895, 0.944336, 0.603101, 1],
        bearing_x: 0.00281519,
        advance_x: 0.0214617,
        flags: 2
    },
    "\u0033": {
        codepoint: 51,
        rect: [0.603516, 0.944336, 0.639275, 1],
        bearing_x: 0.00346102,
        advance_x: 0.0214617,
        flags: 2
    },
    "\u0034": {
        codepoint: 52,
        rect: [0.639648, 0.944336, 0.678504, 1],
        bearing_x: 0.00172223,
        advance_x: 0.0214617,
        flags: 2
    },
    "\u0035": {
        codepoint: 53,
        rect: [0.678711, 0.944336, 0.713493, 1],
        bearing_x: 0.00407374,
        advance_x: 0.0214617,
        flags: 2
    },
    "\u0036": {
        codepoint: 54,
        rect: [0.713867, 0.944336, 0.752077, 1],
        bearing_x: 0.00226871,
        advance_x: 0.0214617,
        flags: 2
    },
    "\u0037": {
        codepoint: 55,
        rect: [0.752441, 0.944336, 0.789658, 1],
        bearing_x: 0.00365974,
        advance_x: 0.0214617,
        flags: 2
    },
    "\u0038": {
        codepoint: 56,
        rect: [0.790039, 0.944336, 0.828034, 1],
        bearing_x: 0.00248399,
        advance_x: 0.0214617,
        flags: 2
    },
    "\u0039": {
        codepoint: 57,
        rect: [0.828125, 0.944336, 0.866318, 1],
        bearing_x: 0.00248399,
        advance_x: 0.0214617,
        flags: 2
    },
    "\u003a": {
        codepoint: 58,
        rect: [0.866699, 0.944336, 0.892274, 1],
        bearing_x: 0.00329543,
        advance_x: 0.0107143,
        flags: 4
    },
    "\u003b": {
        codepoint: 59,
        rect: [0.892578, 0.944336, 0.918153, 1],
        bearing_x: 0.00329543,
        advance_x: 0.0107143,
        flags: 4
    },
    "\u003c": {
        codepoint: 60,
        rect: [0.918457, 0.944336, 0.959548, 1],
        bearing_x: 0.000910796,
        advance_x: 0.0214617,
        flags: 4
    },
    "\u003d": {
        codepoint: 61,
        rect: [0, 0.888672, 0.0410913, 0.944336],
        bearing_x: 0.000910796,
        advance_x: 0.0214617,
        flags: 4
    },
    "\u003e": {
        codepoint: 62,
        rect: [0.0415039, 0.888672, 0.0825952, 0.944336],
        bearing_x: 0.000910796,
        advance_x: 0.0214617,
        flags: 4
    },
    "\u003f": {
        codepoint: 63,
        rect: [0.0830078, 0.888672, 0.117575, 0.944336],
        bearing_x: 0.000612717,
        advance_x: 0.0143078,
        flags: 4
    },
    "\u0040": {
        codepoint: 64,
        rect: [0.117676, 0.888672, 0.16554, 0.944336],
        bearing_x: 0.00135791,
        advance_x: 0.0290958,
        flags: 4
    },
    "\u0041": {
        codepoint: 65,
        rect: [0.166016, 0.888672, 0.210154, 0.944336],
        bearing_x: 0.000380878,
        advance_x: 0.0233992,
        flags: 2
    },
    "\u0042": {
        codepoint: 66,
        rect: [0.210449, 0.888672, 0.246639, 0.944336],
        bearing_x: 0.00326231,
        advance_x: 0.0195076,
        flags: 2
    },
    "\u0043": {
        codepoint: 67,
        rect: [0.24707, 0.888672, 0.288211, 0.944336],
        bearing_x: 0.00183815,
        advance_x: 0.0234654,
        flags: 2
    },
    "\u0044": {
        codepoint: 68,
        rect: [0.288574, 0.888672, 0.330361, 0.944336],
        bearing_x: 0.00326231,
        advance_x: 0.0254029,
        flags: 2
    },
    "\u0045": {
        codepoint: 69,
        rect: [0.330566, 0.888672, 0.366259, 0.944336],
        bearing_x: 0.00326231,
        advance_x: 0.0183815,
        flags: 2
    },
    "\u0046": {
        codepoint: 70,
        rect: [0.366699, 0.888672, 0.40168, 0.944336],
        bearing_x: 0.00326231,
        advance_x: 0.0181828,
        flags: 2
    },
    "\u0047": {
        codepoint: 71,
        rect: [0.401855, 0.888672, 0.44303, 0.944336],
        bearing_x: 0.00183815,
        advance_x: 0.0245253,
        flags: 2
    },
    "\u0048": {
        codepoint: 72,
        rect: [0.443359, 0.888672, 0.483258, 0.944336],
        bearing_x: 0.00326231,
        advance_x: 0.0249227,
        flags: 2
    },
    "\u0049": {
        codepoint: 73,
        rect: [0.483398, 0.888672, 0.508129, 0.944336],
        bearing_x: 0.00326231,
        advance_x: 0.00977036,
        flags: 2
    },
    "\u004a": {
        codepoint: 74,
        rect: [0.508301, 0.888672, 0.540085, 0.944336],
        bearing_x: -0.00301391,
        advance_x: 0.0105487,
        flags: 2
    },
    "\u004b": {
        codepoint: 75,
        rect: [0.540527, 0.888672, 0.580393, 0.944336],
        bearing_x: 0.00326231,
        advance_x: 0.0221406,
        flags: 2
    },
    "\u004c": {
        codepoint: 76,
        rect: [0.580566, 0.888672, 0.616359, 0.944336],
        bearing_x: 0.00326231,
        advance_x: 0.0180834,
        flags: 2
    },
    "\u004d": {
        codepoint: 77,
        rect: [0.616699, 0.888672, 0.660871, 0.944336],
        bearing_x: 0.00326231,
        advance_x: 0.0291952,
        flags: 2
    },
    "\u004e": {
        codepoint: 78,
        rect: [0.661133, 0.888672, 0.701231, 0.944336],
        bearing_x: 0.00326231,
        advance_x: 0.025138,
        flags: 2
    },
    "\u004f": {
        codepoint: 79,
        rect: [0.70166, 0.888672, 0.745832, 0.944336],
        bearing_x: 0.00183815,
        advance_x: 0.0263468,
        flags: 2
    },
    "\u0050": {
        codepoint: 80,
        rect: [0.746094, 0.888672, 0.782366, 0.944336],
        bearing_x: 0.00298079,
        advance_x: 0.0187624,
        flags: 2
    },
    "\u0051": {
        codepoint: 81,
        rect: [0.782715, 0.888672, 0.829254, 0.944336],
        bearing_x: 0.00183815,
        advance_x: 0.0263468,
        flags: 2
    },
    "\u0052": {
        codepoint: 82,
        rect: [0.82959, 0.888672, 0.868777, 0.944336],
        bearing_x: 0.00326231,
        advance_x: 0.0214617,
        flags: 2
    },
    "\u0053": {
        codepoint: 83,
        rect: [0.869141, 0.888672, 0.905347, 0.944336],
        bearing_x: 0.00172223,
        advance_x: 0.0182822,
        flags: 2
    },
    "\u0054": {
        codepoint: 84,
        rect: [0.905762, 0.888672, 0.947863, 0.944336],
        bearing_x: 0.000413998,
        advance_x: 0.0214617,
        flags: 2
    },
    "\u0055": {
        codepoint: 85,
        rect: [0.948242, 0.888672, 0.987098, 0.944336],
        bearing_x: 0.00304703,
        advance_x: 0.0234985,
        flags: 2
    },
    "\u0056": {
        codepoint: 86,
        rect: [0, 0.833008, 0.0429129, 0.888672],
        bearing_x: 0.000380878,
        advance_x: 0.0221737,
        flags: 2
    },
    "\u0057": {
        codepoint: 87,
        rect: [0.0429688, 0.833008, 0.0932508, 0.888672],
        bearing_x: 9.93596e-05,
        advance_x: 0.0289964,
        flags: 2
    },
    "\u0058": {
        codepoint: 88,
        rect: [0.0932617, 0.833008, 0.134684, 0.888672],
        bearing_x: 0.000546478,
        advance_x: 0.0212298,
        flags: 2
    },
    "\u0059": {
        codepoint: 89,
        rect: [0.134766, 0.833008, 0.176453, 0.888672],
        bearing_x: 0.000447118,
        advance_x: 0.0211305,
        flags: 2
    },
    "\u005a": {
        codepoint: 90,
        rect: [0.176758, 0.833008, 0.215514, 0.888672],
        bearing_x: 0.00162287,
        advance_x: 0.0205177,
        flags: 2
    },
    "\u005b": {
        codepoint: 91,
        rect: [0.21582, 0.833008, 0.243846, 0.888672],
        bearing_x: 0.00326231,
        advance_x: 0.0110289,
        flags: 4
    },
    "\u005c": {
        codepoint: 92,
        rect: [0.244141, 0.833008, 0.28197, 0.888672],
        bearing_x: 0.000198719,
        advance_x: 0.0167586,
        flags: 4
    },
    "\u005d": {
        codepoint: 93,
        rect: [0.282227, 0.833008, 0.310252, 0.888672],
        bearing_x: 0.00122543,
        advance_x: 0.0110289,
        flags: 4
    },
    "\u005e": {
        codepoint: 94,
        rect: [0.310547, 0.833008, 0.351638, 0.888672],
        bearing_x: 0.000910796,
        advance_x: 0.0214617,
        flags: 4
    },
    "\u005f": {
        codepoint: 95,
        rect: [0.352051, 0.833008, 0.390493, 0.888672],
        bearing_x: 0,
        advance_x: 0.0169574,
        flags: 4
    },
    "\u0060": {
        codepoint: 96,
        rect: [0.390625, 0.833008, 0.419479, 0.888672],
        bearing_x: 0.00592845,
        advance_x: 0.0208158,
        flags: 4
    },
    "\u0061": {
        codepoint: 97,
        rect: [0.419922, 0.833008, 0.457618, 0.888672],
        bearing_x: 0.00149039,
        advance_x: 0.0187127,
        flags: 1
    },
    "\u0062": {
        codepoint: 98,
        rect: [0.458008, 0.833008, 0.495737, 0.888672],
        bearing_x: 0.00291455,
        advance_x: 0.0213623,
        flags: 1
    },
    "\u0063": {
        codepoint: 99,
        rect: [0.496094, 0.833008, 0.531472, 0.888672],
        bearing_x: 0.00183815,
        advance_x: 0.0175701,
        flags: 1
    },
    "\u0064": {
        codepoint: 100,
        rect: [0.531738, 0.833008, 0.569468, 0.888672],
        bearing_x: 0.00183815,
        advance_x: 0.0213623,
        flags: 1
    },
    "\u0065": {
        codepoint: 101,
        rect: [0.569824, 0.833008, 0.605914, 0.888672],
        bearing_x: 0.00183815,
        advance_x: 0.0188949,
        flags: 1
    },
    "\u0066": {
        codepoint: 102,
        rect: [0.605957, 0.833008, 0.639596, 0.888672],
        bearing_x: 0.00165599,
        advance_x: 0.0124531,
        flags: 1
    },
    "\u0067": {
        codepoint: 103,
        rect: [0.639648, 0.833008, 0.677378, 0.888672],
        bearing_x: 0.00183815,
        advance_x: 0.0211305,
        flags: 1
    },
    "\u0068": {
        codepoint: 104,
        rect: [0.677734, 0.833008, 0.713941, 0.888672],
        bearing_x: 0.00314639,
        advance_x: 0.0210311,
        flags: 1
    },
    "\u0069": {
        codepoint: 105,
        rect: [0.714355, 0.833008, 0.739086, 0.888672],
        bearing_x: 0.00326231,
        advance_x: 0.00980348,
        flags: 1
    },
    "\u006a": {
        codepoint: 106,
        rect: [0.739258, 0.833008, 0.77038, 0.888672],
        bearing_x: -0.00261647,
        advance_x: 0.0103168,
        flags: 1
    },
    "\u006b": {
        codepoint: 107,
        rect: [0.770508, 0.833008, 0.808022, 0.888672],
        bearing_x: 0.00326231,
        advance_x: 0.0198388,
        flags: 1
    },
    "\u006c": {
        codepoint: 108,
        rect: [0.808105, 0.833008, 0.832836, 0.888672],
        bearing_x: 0.00326231,
        advance_x: 0.00980348,
        flags: 1
    },
    "\u006d": {
        codepoint: 109,
        rect: [0.833008, 0.833008, 0.879779, 0.888672],
        bearing_x: 0.00319607,
        advance_x: 0.0316791,
        flags: 1
    },
    "\u006e": {
        codepoint: 110,
        rect: [0.879883, 0.833008, 0.916089, 0.888672],
        bearing_x: 0.00314639,
        advance_x: 0.0210311,
        flags: 1
    },
    "\u006f": {
        codepoint: 111,
        rect: [0.916504, 0.833008, 0.955144, 0.888672],
        bearing_x: 0.00183815,
        advance_x: 0.0208158,
        flags: 1
    },
    "\u0070": {
        codepoint: 112,
        rect: [0.955566, 0.833008, 0.993296, 0.888672],
        bearing_x: 0.00326231,
        advance_x: 0.0213623,
        flags: 1
    },
    "\u0071": {
        codepoint: 113,
        rect: [0, 0.777344, 0.0377297, 0.833008],
        bearing_x: 0.00183815,
        advance_x: 0.0213623,
        flags: 1
    },
    "\u0072": {
        codepoint: 114,
        rect: [0.0380859, 0.777344, 0.0695063, 0.833008],
        bearing_x: 0.00326231,
        advance_x: 0.0138772,
        flags: 1
    },
    "\u0073": {
        codepoint: 115,
        rect: [0.0698242, 0.777344, 0.103381, 0.833008],
        bearing_x: 0.00261647,
        advance_x: 0.0172886,
        flags: 1
    },
    "\u0074": {
        codepoint: 116,
        rect: [0.103516, 0.777344, 0.135135, 0.833008],
        bearing_x: 0.00115919,
        advance_x: 0.0126849,
        flags: 1
    },
    "\u0075": {
        codepoint: 117,
        rect: [0.135254, 0.777344, 0.17146, 0.833008],
        bearing_x: 0.00314639,
        advance_x: 0.0210311,
        flags: 1
    },
    "\u0076": {
        codepoint: 118,
        rect: [0.171875, 0.777344, 0.21184, 0.833008],
        bearing_x: 0.000447118,
        advance_x: 0.0193917,
        flags: 1
    },
    "\u0077": {
        codepoint: 119,
        rect: [0.211914, 0.777344, 0.259133, 0.833008],
        bearing_x: 0.00135791,
        advance_x: 0.0284831,
        flags: 1
    },
    "\u0078": {
        codepoint: 120,
        rect: [0.259277, 0.777344, 0.298531, 0.833008],
        bearing_x: 0.00149039,
        advance_x: 0.0207827,
        flags: 1
    },
    "\u0079": {
        codepoint: 121,
        rect: [0.298828, 0.777344, 0.338694, 0.833008],
        bearing_x: 0.000579597,
        advance_x: 0.0192592,
        flags: 1
    },
    "\u007a": {
        codepoint: 122,
        rect: [0.338867, 0.777344, 0.375719, 0.833008],
        bearing_x: 0.00203687,
        advance_x: 0.0194414,
        flags: 1
    },
    "\u007b": {
        codepoint: 123,
        rect: [0.375977, 0.777344, 0.405824, 0.833008],
        bearing_x: 0.000413998,
        advance_x: 0.0110289,
        flags: 4
    },
    "\u007c": {
        codepoint: 124,
        rect: [0.40625, 0.777344, 0.430169, 0.833008],
        bearing_x: 0.00326231,
        advance_x: 0.00899204,
        flags: 4
    },
    "\u007d": {
        codepoint: 125,
        rect: [0.430176, 0.777344, 0.460039, 0.833008],
        bearing_x: 0.00223559,
        advance_x: 0.0110289,
        flags: 4
    },
    "\u007e": {
        codepoint: 126,
        rect: [0.460449, 0.777344, 0.501541, 0.833008],
        bearing_x: 0.000910796,
        advance_x: 0.0214617,
        flags: 4
    },
    "\u00a1": {
        codepoint: 161,
        rect: [0.501953, 0.777344, 0.526683, 0.833008],
        bearing_x: 0.00183815,
        advance_x: 0.00695517,
        flags: 4
    },
    "\u00a2": {
        codepoint: 162,
        rect: [0.526855, 0.777344, 0.562234, 0.833008],
        bearing_x: 0.00332855,
        advance_x: 0.0214617,
        flags: 4
    },
    "\u00a3": {
        codepoint: 163,
        rect: [0.5625, 0.777344, 0.597994, 0.833008],
        bearing_x: 0.00407374,
        advance_x: 0.0214617,
        flags: 4
    },
    "\u00a4": {
        codepoint: 164,
        rect: [0.598145, 0.777344, 0.639236, 0.833008],
        bearing_x: 0.000910796,
        advance_x: 0.0214617,
        flags: 4
    },
    "\u00a5": {
        codepoint: 165,
        rect: [0.639648, 0.777344, 0.680326, 0.833008],
        bearing_x: 0.00112608,
        advance_x: 0.0214617,
        flags: 4
    },
    "\u00a6": {
        codepoint: 166,
        rect: [0.680664, 0.777344, 0.704583, 0.833008],
        bearing_x: 0.00326231,
        advance_x: 0.00899204,
        flags: 4
    },
    "\u00a7": {
        codepoint: 167,
        rect: [0.70459, 0.777344, 0.74073, 0.833008],
        bearing_x: 0.00339478,
        advance_x: 0.0214617,
        flags: 4
    },
    "\u00a8": {
        codepoint: 168,
        rect: [0.741211, 0.777344, 0.772052, 0.833008],
        bearing_x: 0.00572973,
        advance_x: 0.0208158,
        flags: 4
    },
    "\u00a9": {
        codepoint: 169,
        rect: [0.772461, 0.777344, 0.819696, 0.833008],
        bearing_x: 0.00162287,
        advance_x: 0.0289964,
        flags: 4
    },
    "\u00aa": {
        codepoint: 170,
        rect: [0.819824, 0.777344, 0.853745, 0.833008],
        bearing_x: 0.00119231,
        advance_x: 0.0143078,
        flags: 1
    },
    "\u00ab": {
        codepoint: 171,
        rect: [0.854004, 0.777344, 0.890194, 0.833008],
        bearing_x: 0.00183815,
        advance_x: 0.0177688,
        flags: 4
    },
    "\u00ac": {
        codepoint: 172,
        rect: [0.890625, 0.777344, 0.931716, 0.833008],
        bearing_x: 0.000910796,
        advance_x: 0.0214617,
        flags: 4
    },
    "\u00ae": {
        codepoint: 174,
        rect: [0.932129, 0.777344, 0.968335, 0.833008],
        bearing_x: 0.00336167,
        advance_x: 0.0214617,
        flags: 4
    },
    "\u00af": {
        codepoint: 175,
        rect: [0.96875, 0.777344, 0.999657, 0.833008],
        bearing_x: 0.00569661,
        advance_x: 0.0208158,
        flags: 4
    },
    "\u00b0": {
        codepoint: 176,
        rect: [0, 0.72168, 0.0272141, 0.777344],
        bearing_x: 0.00183815,
        advance_x: 0.00938948,
        flags: 4
    },
    "\u00b1": {
        codepoint: 177,
        rect: [0.0273438, 0.72168, 0.0684351, 0.777344],
        bearing_x: 0.000910796,
        advance_x: 0.0214617,
        flags: 4
    },
    "\u00b2": {
        codepoint: 178,
        rect: [0.0688477, 0.72168, 0.10055, 0.777344],
        bearing_x: 0.00223559,
        advance_x: 0.0143078,
        flags: 4
    },
    "\u00b3": {
        codepoint: 179,
        rect: [0.100586, 0.72168, 0.13194, 0.777344],
        bearing_x: 0.00255023,
        advance_x: 0.0143078,
        flags: 4
    },
    "\u00b4": {
        codepoint: 180,
        rect: [0.132324, 0.72168, 0.161161, 0.777344],
        bearing_x: 0.00753477,
        advance_x: 0.0208158,
        flags: 4
    },
    "\u00b5": {
        codepoint: 181,
        rect: [0.161621, 0.72168, 0.197811, 0.777344],
        bearing_x: 0.00326231,
        advance_x: 0.0212629,
        flags: 1
    },
    "\u00b6": {
        codepoint: 182,
        rect: [0.198242, 0.72168, 0.233223, 0.777344],
        bearing_x: 0.00356038,
        advance_x: 0.0214617,
        flags: 4
    },
    "\u00b8": {
        codepoint: 184,
        rect: [0.233398, 0.72168, 0.260066, 0.777344],
        bearing_x: 0.00844556,
        advance_x: 0.0208158,
        flags: 4
    },
    "\u00b9": {
        codepoint: 185,
        rect: [0.260254, 0.72168, 0.286855, 0.777344],
        bearing_x: 0.00346102,
        advance_x: 0.0143078,
        flags: 4
    },
    "\u00ba": {
        codepoint: 186,
        rect: [0.287109, 0.72168, 0.320881, 0.777344],
        bearing_x: 0.00101016,
        advance_x: 0.0143078,
        flags: 1
    },
    "\u00bb": {
        codepoint: 187,
        rect: [0.321289, 0.72168, 0.357495, 0.777344],
        bearing_x: 0.00122543,
        advance_x: 0.0177688,
        flags: 4
    },
    "\u00bc": {
        codepoint: 188,
        rect: [0.35791, 0.72168, 0.40291, 0.777344],
        bearing_x: 0.00158975,
        advance_x: 0.0271583,
        flags: 4
    },
    "\u00bd": {
        codepoint: 189,
        rect: [0.40332, 0.72168, 0.449727, 0.777344],
        bearing_x: 0.000612717,
        advance_x: 0.0271583,
        flags: 4
    },
    "\u00be": {
        codepoint: 190,
        rect: [0.450195, 0.72168, 0.497215, 0.777344],
        bearing_x: 0.00203687,
        advance_x: 0.0296091,
        flags: 4
    },
    "\u00bf": {
        codepoint: 191,
        rect: [0.497559, 0.72168, 0.532125, 0.777344],
        bearing_x: 0.000612717,
        advance_x: 0.0143078,
        flags: 4
    },
    "\u00c0": {
        codepoint: 192,
        rect: [0.532227, 0.72168, 0.576365, 0.777344],
        bearing_x: 0.000380878,
        advance_x: 0.0233992,
        flags: 2
    },
    "\u00c1": {
        codepoint: 193,
        rect: [0.57666, 0.72168, 0.620799, 0.777344],
        bearing_x: 0.000380878,
        advance_x: 0.0233992,
        flags: 2
    },
    "\u00c2": {
        codepoint: 194,
        rect: [0.621094, 0.72168, 0.665232, 0.777344],
        bearing_x: 0.000380878,
        advance_x: 0.0233992,
        flags: 2
    },
    "\u00c3": {
        codepoint: 195,
        rect: [0.665527, 0.72168, 0.709666, 0.777344],
        bearing_x: 0.000380878,
        advance_x: 0.0233992,
        flags: 2
    },
    "\u00c4": {
        codepoint: 196,
        rect: [0.709961, 0.72168, 0.754099, 0.777344],
        bearing_x: 0.000380878,
        advance_x: 0.0233992,
        flags: 2
    },
    "\u00c5": {
        codepoint: 197,
        rect: [0.754395, 0.72168, 0.798533, 0.777344],
        bearing_x: 0.000380878,
        advance_x: 0.0233992,
        flags: 2
    },
    "\u00c6": {
        codepoint: 198,
        rect: [0.798828, 0.72168, 0.849739, 0.777344],
        bearing_x: 0.000413998,
        advance_x: 0.0307683,
        flags: 2
    },
    "\u00c7": {
        codepoint: 199,
        rect: [0.850098, 0.72168, 0.891239, 0.777344],
        bearing_x: 0.00183815,
        advance_x: 0.0234654,
        flags: 2
    },
    "\u00c8": {
        codepoint: 200,
        rect: [0.891602, 0.72168, 0.927294, 0.777344],
        bearing_x: 0.00326231,
        advance_x: 0.019607,
        flags: 2
    },
    "\u00c9": {
        codepoint: 201,
        rect: [0.927734, 0.72168, 0.963427, 0.777344],
        bearing_x: 0.00326231,
        advance_x: 0.019607,
        flags: 2
    },
    "\u00ca": {
        codepoint: 202,
        rect: [0.963867, 0.72168, 0.99956, 0.777344],
        bearing_x: 0.00326231,
        advance_x: 0.019607,
        flags: 2
    },
    "\u00cb": {
        codepoint: 203,
        rect: [0, 0.666016, 0.0356928, 0.72168],
        bearing_x: 0.00326231,
        advance_x: 0.019607,
        flags: 2
    },
    "\u00cc": {
        codepoint: 204,
        rect: [0.0361328, 0.666016, 0.0649698, 0.72168],
        bearing_x: 0.000413998,
        advance_x: 0.0153014,
        flags: 2
    },
    "\u00cd": {
        codepoint: 205,
        rect: [0.0654297, 0.666016, 0.0942667, 0.72168],
        bearing_x: 0.00200375,
        advance_x: 0.0153014,
        flags: 2
    },
    "\u00ce": {
        codepoint: 206,
        rect: [0.0947266, 0.666016, 0.12724, 0.72168],
        bearing_x: -0.000645837,
        advance_x: 0.0153014,
        flags: 2
    },
    "\u00cf": {
        codepoint: 207,
        rect: [0.127441, 0.666016, 0.158299, 0.72168],
        bearing_x: 0.000198719,
        advance_x: 0.0153014,
        flags: 2
    },
    "\u00d0": {
        codepoint: 208,
        rect: [0.158691, 0.666016, 0.204155, 0.72168],
        bearing_x: -0.000413998,
        advance_x: 0.0254029,
        flags: 2
    },
    "\u00d1": {
        codepoint: 209,
        rect: [0.20459, 0.666016, 0.244688, 0.72168],
        bearing_x: 0.00326231,
        advance_x: 0.025138,
        flags: 2
    },
    "\u00d2": {
        codepoint: 210,
        rect: [0.245117, 0.666016, 0.289289, 0.72168],
        bearing_x: 0.00183815,
        advance_x: 0.0263468,
        flags: 2
    },
    "\u00d3": {
        codepoint: 211,
        rect: [0.289551, 0.666016, 0.333722, 0.72168],
        bearing_x: 0.00183815,
        advance_x: 0.0263468,
        flags: 2
    },
    "\u00d4": {
        codepoint: 212,
        rect: [0.333984, 0.666016, 0.378156, 0.72168],
        bearing_x: 0.00183815,
        advance_x: 0.0263468,
        flags: 2
    },
    "\u00d5": {
        codepoint: 213,
        rect: [0.378418, 0.666016, 0.422589, 0.72168],
        bearing_x: 0.00183815,
        advance_x: 0.0263468,
        flags: 2
    },
    "\u00d6": {
        codepoint: 214,
        rect: [0.422852, 0.666016, 0.467023, 0.72168],
        bearing_x: 0.00183815,
        advance_x: 0.0263468,
        flags: 2
    },
    "\u00d7": {
        codepoint: 215,
        rect: [0.467285, 0.666016, 0.508376, 0.72168],
        bearing_x: 0.000910796,
        advance_x: 0.0214617,
        flags: 4
    },
    "\u00d8": {
        codepoint: 216,
        rect: [0.508789, 0.666016, 0.552961, 0.72168],
        bearing_x: 0.00183815,
        advance_x: 0.0263468,
        flags: 2
    },
    "\u00d9": {
        codepoint: 217,
        rect: [0.553223, 0.666016, 0.592078, 0.72168],
        bearing_x: 0.00304703,
        advance_x: 0.0234985,
        flags: 2
    },
    "\u00da": {
        codepoint: 218,
        rect: [0.592285, 0.666016, 0.631141, 0.72168],
        bearing_x: 0.00304703,
        advance_x: 0.0234985,
        flags: 2
    },
    "\u00db": {
        codepoint: 219,
        rect: [0.631348, 0.666016, 0.670203, 0.72168],
        bearing_x: 0.00304703,
        advance_x: 0.0234985,
        flags: 2
    },
    "\u00dc": {
        codepoint: 220,
        rect: [0.67041, 0.666016, 0.709266, 0.72168],
        bearing_x: 0.00304703,
        advance_x: 0.0234985,
        flags: 2
    },
    "\u00dd": {
        codepoint: 221,
        rect: [0.709473, 0.666016, 0.75116, 0.72168],
        bearing_x: 0.000447118,
        advance_x: 0.0211305,
        flags: 2
    },
    "\u00de": {
        codepoint: 222,
        rect: [0.751465, 0.666016, 0.787737, 0.72168],
        bearing_x: 0.00326231,
        advance_x: 0.0187624,
        flags: 2
    },
    "\u00df": {
        codepoint: 223,
        rect: [0.788086, 0.666016, 0.825567, 0.72168],
        bearing_x: 0.00326231,
        advance_x: 0.0202859,
        flags: 1
    },
    "\u00e0": {
        codepoint: 224,
        rect: [0.825684, 0.666016, 0.86338, 0.72168],
        bearing_x: 0.00149039,
        advance_x: 0.0197726,
        flags: 1
    },
    "\u00e1": {
        codepoint: 225,
        rect: [0.86377, 0.666016, 0.901466, 0.72168],
        bearing_x: 0.00149039,
        advance_x: 0.0197726,
        flags: 1
    },
    "\u00e2": {
        codepoint: 226,
        rect: [0.901855, 0.666016, 0.939552, 0.72168],
        bearing_x: 0.00149039,
        advance_x: 0.0197726,
        flags: 1
    },
    "\u00e3": {
        codepoint: 227,
        rect: [0.939941, 0.666016, 0.977638, 0.72168],
        bearing_x: 0.00149039,
        advance_x: 0.0197726,
        flags: 1
    },
    "\u00e4": {
        codepoint: 228,
        rect: [0, 0.610352, 0.0376965, 0.666016],
        bearing_x: 0.00149039,
        advance_x: 0.0197726,
        flags: 1
    },
    "\u00e5": {
        codepoint: 229,
        rect: [0.0380859, 0.610352, 0.0757825, 0.666016],
        bearing_x: 0.00149039,
        advance_x: 0.0197726,
        flags: 1
    },
    "\u00e6": {
        codepoint: 230,
        rect: [0.0761719, 0.610352, 0.122413, 0.666016],
        bearing_x: 0.00168911,
        advance_x: 0.0289302,
        flags: 1
    },
    "\u00e7": {
        codepoint: 231,
        rect: [0.122559, 0.610352, 0.157937, 0.666016],
        bearing_x: 0.00183815,
        advance_x: 0.019193,
        flags: 1
    },
    "\u00e8": {
        codepoint: 232,
        rect: [0.158203, 0.610352, 0.194293, 0.666016],
        bearing_x: 0.00183815,
        advance_x: 0.0198719,
        flags: 1
    },
    "\u00e9": {
        codepoint: 233,
        rect: [0.194336, 0.610352, 0.230426, 0.666016],
        bearing_x: 0.00183815,
        advance_x: 0.0198719,
        flags: 1
    },
    "\u00ea": {
        codepoint: 234,
        rect: [0.230469, 0.610352, 0.266559, 0.666016],
        bearing_x: 0.00183815,
        advance_x: 0.0198719,
        flags: 1
    },
    "\u00eb": {
        codepoint: 235,
        rect: [0.266602, 0.610352, 0.302692, 0.666016],
        bearing_x: 0.00183815,
        advance_x: 0.0198719,
        flags: 1
    },
    "\u00ec": {
        codepoint: 236,
        rect: [0.302734, 0.610352, 0.331571, 0.666016],
        bearing_x: 0.000447118,
        advance_x: 0.0153345,
        flags: 1
    },
    "\u00ed": {
        codepoint: 237,
        rect: [0.332031, 0.610352, 0.360868, 0.666016],
        bearing_x: 0.00203687,
        advance_x: 0.0153345,
        flags: 1
    },
    "\u00ee": {
        codepoint: 238,
        rect: [0.361328, 0.610352, 0.393841, 0.666016],
        bearing_x: -0.000612717,
        advance_x: 0.0153345,
        flags: 1
    },
    "\u00ef": {
        codepoint: 239,
        rect: [0.394043, 0.610352, 0.4249, 0.666016],
        bearing_x: 0.000231839,
        advance_x: 0.0153345,
        flags: 1
    },
    "\u00f0": {
        codepoint: 240,
        rect: [0.425293, 0.610352, 0.463553, 0.666016],
        bearing_x: 0.00180503,
        advance_x: 0.0204184,
        flags: 1
    },
    "\u00f1": {
        codepoint: 241,
        rect: [0.463867, 0.610352, 0.500073, 0.666016],
        bearing_x: 0.00314639,
        advance_x: 0.0210311,
        flags: 1
    },
    "\u00f2": {
        codepoint: 242,
        rect: [0.500488, 0.610352, 0.539129, 0.666016],
        bearing_x: 0.00183815,
        advance_x: 0.0208158,
        flags: 1
    },
    "\u00f3": {
        codepoint: 243,
        rect: [0.539551, 0.610352, 0.578191, 0.666016],
        bearing_x: 0.00183815,
        advance_x: 0.0208158,
        flags: 1
    },
    "\u00f4": {
        codepoint: 244,
        rect: [0.578613, 0.610352, 0.617254, 0.666016],
        bearing_x: 0.00183815,
        advance_x: 0.0208158,
        flags: 1
    },
    "\u00f5": {
        codepoint: 245,
        rect: [0.617676, 0.610352, 0.656316, 0.666016],
        bearing_x: 0.00183815,
        advance_x: 0.0208158,
        flags: 1
    },
    "\u00f6": {
        codepoint: 246,
        rect: [0.656738, 0.610352, 0.695379, 0.666016],
        bearing_x: 0.00183815,
        advance_x: 0.0208158,
        flags: 1
    },
    "\u00f7": {
        codepoint: 247,
        rect: [0.695801, 0.610352, 0.736892, 0.666016],
        bearing_x: 0.000910796,
        advance_x: 0.0214617,
        flags: 4
    },
    "\u00f8": {
        codepoint: 248,
        rect: [0.737305, 0.610352, 0.775945, 0.666016],
        bearing_x: 0.00183815,
        advance_x: 0.0208158,
        flags: 1
    },
    "\u00f9": {
        codepoint: 249,
        rect: [0.776367, 0.610352, 0.812573, 0.666016],
        bearing_x: 0.00314639,
        advance_x: 0.0210311,
        flags: 1
    },
    "\u00fa": {
        codepoint: 250,
        rect: [0.812988, 0.610352, 0.849194, 0.666016],
        bearing_x: 0.00314639,
        advance_x: 0.0210311,
        flags: 1
    },
    "\u00fb": {
        codepoint: 251,
        rect: [0.849609, 0.610352, 0.885816, 0.666016],
        bearing_x: 0.00314639,
        advance_x: 0.0210311,
        flags: 1
    },
    "\u00fc": {
        codepoint: 252,
        rect: [0.88623, 0.610352, 0.922437, 0.666016],
        bearing_x: 0.00314639,
        advance_x: 0.0210311,
        flags: 1
    },
    "\u00fd": {
        codepoint: 253,
        rect: [0.922852, 0.610352, 0.962717, 0.666016],
        bearing_x: 0.000579597,
        advance_x: 0.0200375,
        flags: 1
    },
    "\u00fe": {
        codepoint: 254,
        rect: [0, 0.554688, 0.0377297, 0.610352],
        bearing_x: 0.00326231,
        advance_x: 0.0213623,
        flags: 1
    },
    "\u00ff": {
        codepoint: 255,
        rect: [0.0380859, 0.554688, 0.0779518, 0.610352],
        bearing_x: 0.000579597,
        advance_x: 0.0200375,
        flags: 1
    }
    }, // end chars
    kern: {
        "\u0077\u002e" : -0.00304703,
        "\u0077\u002c" : -0.00304703,
        "\u0076\u002e" : -0.00339478,
        "\u0076\u002c" : -0.00339478,
        "\u0072\u0066" : 0,
        "\u0072\u006d" : 0,
        "\u0072\u002e" : -0.00423934,
        "\u0072\u0074" : 0,
        "\u0072\u0075" : 0,
        "\u0072\u0079" : 0,
        "\u0072\u002c" : -0.00423934,
        "\u0079\u002c" : -0.00339478,
        "\u0072\u0063" : -0.000678957,
        "\u0072\u0072" : 0,
        "\u0066\u0066" : -0.000612717,
        "\u0059\u003a" : -0.00187127,
        "\u0059\u002c" : -0.00543166,
        "\u0072\u0071" : -0.000678957,
        "\u0059\u0065" : -0.00311327,
        "\u0059\u002d" : -0.00390814,
        "\u0059\u006f" : -0.00311327,
        "\u0072\u0068" : 0,
        "\u0059\u0071" : -0.00311327,
        "\u0059\u003b" : -0.00220247,
        "\u0059\u0076" : -0.00187127,
        "\u0059\u0061" : -0.00251711,
        "\u0059\u0041" : -0.00271583,
        "\u0056\u0041" : -0.00271583,
        "\u0056\u0061" : -0.00251711,
        "\u0056\u003a" : -0.00125855,
        "\u0072\u006e" : 0,
        "\u0056\u002c" : -0.0050839,
        "\u0059\u0075" : -0.00271583,
        "\u0056\u0065" : -0.00187127,
        "\u0056\u002d" : -0.00187127,
        "\u0054\u0075" : -0.00390814,
        "\u0052\u0057" : -0.000612717,
        "\u0041\u0056" : -0.00271583,
        "\u0052\u0056" : -0.000612717,
        "\u0052\u0059" : -0.000612717,
        "\u0072\u0065" : -0.000678957,
        "\u0052\u0079" : -0.000678957,
        "\u0054\u0079" : -0.00339478,
        "\u0072\u0077" : 0,
        "\u004c\u0054" : -0.00390814,
        "\u0072\u006f" : -0.000678957,
        "\u0041\u0079" : -0.000612717,
        "\u0041\u0059" : -0.00271583,
        "\u004c\u0057" : -0.00203687,
        "\u0041\u0077" : -0.00101016,
        "\u004c\u0056" : -0.00288143,
        "\u0072\u002d" : -0.00203687,
        "\u0054\u0041" : -0.00339478,
        "\u004c\u0059" : -0.00304703,
        "\u0041\u0076" : -0.000612717,
        "\u0057\u0075" : -0.00101016,
        "\u0041\u0054" : -0.00339478,
        "\u0072\u0067" : -0.000678957,
        "\u0054\u0065" : -0.0037591,
        "\u0057\u0061" : -0.00125855,
        "\u0059\u0070" : -0.00304703,
        "\u0059\u002e" : -0.00543166,
        "\u0056\u0072" : -0.00220247,
        "\u0052\u0054" : -0.000612717,
        "\u0046\u002e" : -0.00611061,
        "\u0072\u007a" : 0,
        "\u0050\u0041" : -0.00220247,
        "\u0046\u002c" : -0.00611061,
        "\u0057\u006f" : -0.00135791,
        "\u0050\u002c" : -0.00678957,
        "\u0054\u0077" : -0.00407374,
        "\u0057\u002e" : -0.00339478,
        "\u0041\u0057" : -0.00135791,
        "\u0054\u003a" : -0.0037591,
        "\u0050\u002e" : -0.00678957,
        "\u0046\u0041" : -0.00236807,
        "\u0072\u0078" : 0,
        "\u0054\u003b" : -0.0037591,
        "\u0054\u0073" : -0.0037591,
        "\u0054\u0069" : -0.00135791,
        "\u0079\u002e" : -0.00339478,
        "\u0057\u0065" : -0.00135791,
        "\u0059\u0069" : -0.00125855,
        "\u0054\u0072" : -0.00390814,
        "\u0056\u0069" : -0.000612717,
        "\u0054\u002e" : -0.00611061,
        "\u0054\u0061" : -0.0037591,
        "\u0056\u0079" : -0.00125855,
        "\u0054\u002d" : -0.00423934,
        "\u0056\u002e" : -0.0050839,
        "\u0054\u002c" : -0.00611061,
        "\u0054\u0063" : -0.0037591,
        "\u0054\u006f" : -0.00423934,
        "\u0057\u0041" : -0.00135791,
        "\u0057\u003a" : -0.000612717,
        "\u0057\u002d" : -0.000612717,
        "\u004c\u0079" : -0.00152351,
        "\u0056\u0075" : -0.00168911,
        "\u0057\u0072" : -0.000612717,
        "\u0057\u003b" : -0.000612717,
        "\u0057\u0079" : -0.000298079,
        "\u0056\u003b" : -0.00125855,
        "\u0072\u0064" : -0.000678957,
        "\u0072\u0076" : 0,
        "\u0056\u006f" : -0.00271583,
    } // end kern
}; // end font

export { ISDefinition }
