// anatomy.js

const anatomy = {
  skeletalSystem: {
    bones: {
      count: "variable",
      function: "support and protection",
    },
    joints: {
      count: "variable",
      function: "allow movement",
    },
    cartilage: {
      type: "variable",
      function: "reduce friction and absorb shock",
    },
  },
  muscularSystem: {
    skeletalMuscles: {
      count: "variable",
      function: "voluntary movement",
    },
    smoothMuscles: {
      location: "internal organs",
      function: "involuntary movement (e.g., peristalsis)",
    },
    cardiacMuscle: {
      location: "heart",
      function: "involuntary contraction to pump blood",
    },
  },
  digestiveSystem: {
    mouth: {
      function: "ingestion and mechanical digestion",
    },
    esophagus: {
      function: "transportation of food to stomach",
    },
    stomach: {
      function: "chemical and mechanical digestion",
    },
    smallIntestine: {
      function: "nutrient absorption",
    },
    largeIntestine: {
      function: "water absorption and feces formation",
    },
    liver: {
      function: "metabolic functions, detoxification",
    },
    pancreas: {
      function: "production of digestive enzymes and insulin",
    },
  },
  respiratorySystem: {
    nose: {
      function: "filtering, warming, and moistening air",
    },
    trachea: {
      function: "air passage to lungs",
    },
    lungs: {
      function: "gas exchange (oxygen and carbon dioxide)",
    },
    diaphragm: {
      function: "muscle contraction for breathing",
    },
  },
  nervousSystem: {
    brain: {
      function: "processing sensory information, cognition",
    },
    spinalCord: {
      function: "transmitting signals between body and brain",
    },
    nerves: {
      function: "transmitting signals throughout the body",
    },
    sensoryOrgans: {
      function: "receive sensory input (e.g., eyes, ears)",
    },
    centralNervousSystem: {
      function: "brain and spinal cord",
    },
    peripheralNervousSystem: {
      function: "nerves outside the brain and spinal cord",
    },
  },
  // Add more systems or body parts as needed
};

// Export the anatomy object
module.exports = anatomy;

// anatomy.js

const anatomy = {
  head: {
    eyes: {
      count: 2,
      color: "brown",
      function: "vision",
    },
    ears: {
      count: 2,
      shape: "oval",
      function: "hearing",
    },
    nose: {
      count: 1,
      shape: "triangular",
      function: "smell",
    },
    mouth: {
      count: 1,
      shape: "oval",
      function: "eating",
    },
    brain: {
      hemisphere: 2,
      function: "cognition",
    },
  },
  torso: {
    arms: {
      count: 2,
      length: "variable",
      function: "manipulation",
    },
    legs: {
      count: 2,
      length: "variable",
      function: "mobility",
    },
    heart: {
      count: 1,
      size: "fist-sized",
      function: "circulation",
    },
    lungs: {
      count: 2,
      capacity: "variable",
      function: "respiration",
    },
    stomach: {
      count: 1,
      size: "variable",
      function: "digestion",
    },
    liver: {
      count: 1,
      function: "detoxification",
    },
    kidneys: {
      count: 2,
      function: "filtration",
    },
    intestines: {
      count: 2,
      type: ["small", "large"],
      function: "absorption",
    },
  },
  limbs: {
    hands: {
      count: 2,
      fingers: 5,
      function: "grasping",
    },
    feet: {
      count: 2,
      toes: 5,
      function: "balance",
    },
  },
  skin: {
    type: "variable",
    function: "protection",
  },
  // Add more body parts as needed
};

// Export the anatomy object
module.exports = anatomy;
