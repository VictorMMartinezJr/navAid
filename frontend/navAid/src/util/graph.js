export const graph = {
  // Main Entrance - Done
  "main entrance": [
    {
      node: "hall 200 start right",
      weight: 1,
      direction: "Turn right",
      directionFrom: { "hall 200 start left": " Continue straight" },
    },
    {
      node: "hall 200 start left",
      weight: 1,
      direction: "Turn left",
      directionFrom: { "hall 200 start right": " Continue straight" },
    },
    { node: "one stop", weight: 1, direction: "Straight ahead to one stop" },
    { node: "room 224", weight: 1, direction: "Slight right into room 224" },
  ],
  // Done

  // One Stop
  "one stop": [
    {
      node: "main entrance",
      weight: 1,
      direction: "Go straight towards the main entrance",
    },
    {
      node: "room 224",
      weight: 1,
      direction: "Slight right into room 224",
    },
    { node: "hall 200 start left", weight: 1, direction: "Turn left" },
    {
      node: "hall 200 start right",
      weight: 1,
      direction: "Turn right to hall 200",
    },
  ],

  // Hall 100 - Done
  "hall 200 hall 100 meet": [
    {
      node: "room 101",
      weight: 1,
      direction: "Slight right into room 101",
      directionFrom: {
        "hall 200 hall 300 meet": "Turn left then a slight right into room 101",
        "room 201": "Turn left then a slight right into room 101",
        "room 203": "Turn left then a slight right into room 101",
      },
    },
    {
      node: "room 103",
      weight: 1,
      direction: "Slight right into room 103",
      directionFrom: {
        "hall 200 hall 300 meet": "Turn left then a slight right into room 103",
        "room 201": "Turn left then a slight right into room 103",
        "room 203": "Turn left then a slight right into room 103",
      },
    },
    {
      node: "room 102",
      weight: 1,
      direction: "Slight right into room 102",
      directionFrom: {
        "hall 200 hall 300 meet":
          "Turn right then a slight right into room 102",
        "room 201": "Turn right then a slight right into room 102",
        "room 203": "Turn right then a slight right into room 102",
      },
    },
    {
      node: "room 105",
      weight: 1,
      direction: "Slight left into room 105",
      directionFrom: {
        "hall 200 hall 300 meet": "Turn right then a slight left into room 105",
        "room 201": "Turn right then a slight left into room 105",
        "room 203": "Turn right then a slight left into room 105",
      },
    },
    {
      node: "hall 100 lower mid",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 200 hall 300 meet": "Turn right",
        "room 201": "Turn right",
        "room 203": "Turn right",
      },
    },
    {
      node: "hall 200 hall 300 meet",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 100 lower mid": "Turn left",
        "room 101": "Turn right",
        "room 103": "Turn right",
      },
    },
  ], // Done

  "hall 100 hall 600 meet": [
    {
      node: "hall 100 lower mid",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 300 hall 600 meet": "Turn left",
        "room 604": "Turn left",
        "room 602": "Turn left",
      },
    },
    {
      node: "hall 300 hall 600 meet",
      weight: 1,
      direction: "Turn left",
      directionFrom: {
        "hall 100 lower mid": "Turn right",
        "room 111": "Turn right",
        "room 109": "Turn right",
        "room 107": "Turn right",
        "room 106": "Turn right",
        "room 108": "Turn right",
        "room 110": "Turn right",
      },
    },
    {
      node: "hall 100 hall 800 meet",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 300 hall 600 meet": "Turn right",
        "room 602": "Turn right",
        "room 604": "Turn right",
      },
    },
    {
      node: "room 110",
      weight: 1,
      direction: "Slight left into room 110",
      directionFrom: {
        "hall 300 hall 600 meet": "Turn left then a slight left into room 110",
        "room 604": "Turn left then a slight left into room 110",
        "room 602": "Turn left then a slight left into room 110",
      },
    },
    {
      node: "room 111",
      weight: 1,
      direction: "Slight right into room 111",
      directionFrom: {
        "hall 300 hall 600 meet": "Turn left then a slight right into room 111",
        "room 604": "Turn left then a slight right into room 111",
        "room 602": "Turn left then a slight right into room 111",
      },
    },
    {
      node: "room 109",
      weight: 1,
      direction: "Slight right into room 109",
      directionFrom: {
        "hall 300 hall 600 meet": "Turn left then a slight right into room 109",
        "room 604": "Turn left then a slight right into room 109",
        "room 602": "Turn left then a slight right into room 109",
      },
    },
    {
      node: "room 107",
      weight: 1,
      direction: "Slight right into room 107",
      directionFrom: {
        "hall 300 hall 600 meet": "Turn left then a slight right into room 107",
        "room 604": "Turn left then a slight right into room 107",
        "room 602": "Turn left then a slight right into room 107",
      },
    },
    {
      node: "room 106",
      weight: 1,
      direction: "Slight left into room 106",
      directionFrom: {
        "hall 300 hall 600 meet": "Turn left then a slight left into room 106",
        "room 604": "Turn left then a slight left into room 106",
        "room 602": "Turn left then a slight left into room 106",
      },
    },
    {
      node: "room 108",
      weight: 1,
      direction: "Slight left into room 108",
      directionFrom: {
        "hall 300 hall 600 meet": "Turn left then a slight left into room 108",
        "room 604": "Turn left then a slight left into room 108",
        "room 602": "Turn left then a slight left into room 108",
      },
    },
    {
      node: "room 115",
      weight: 1,
      direction: "Slight left into room 115",
      directionFrom: {
        "hall 300 hall 600 meet": "Turn right then a slight left into room 115",
        "room 602": "Turn right then a slight left into room 115",
        "room 604": "Turn right then a slight left into room 115",
      },
    },
    {
      node: "room 119",
      weight: 1,
      direction: "Slight left into room 119",
      directionFrom: {
        "hall 300 hall 600 meet": "Turn right then a slight left into room 119",
        "room 602": "Turn right then a slight left into room 119",
        "room 604": "Turn right then a slight left into room 119",
      },
    },
    {
      node: "room 602",
      weight: 1,
      direction: "Slight left into room 602",
      directionFrom: {
        "hall 100 hall 800 meet": "Turn left then a slight left into room 602",
        "hall 100 lower mid": "Turn right then a slight left into room 602",
        "room 111": "Turn right then a slight left into room 602",
        "room 109": "Turn right then a slight left into room 602",
        "room 107": "Turn right then a slight left into room 602",
        "room 106": "Turn right then a slight left into room 602",
        "room 108": "Turn right then a slight left into room 602",
        "room 110": "Turn right then a slight left into room 602",
      },
    },
    {
      node: "room 604",
      weight: 1,
      direction: "Slight left into room 604",
      directionFrom: {
        "hall 100 hall 800 meet": "Turn left then a slight left into room 604",
        "hall 100 lower mid": "Turn right then a slight left into room 604",
        "room 111": "Turn right then a slight left into room 604",
        "room 109": "Turn right then a slight left into room 604",
        "room 107": "Turn right then a slight left into room 604",
        "room 106": "Turn right then a slight left into room 604",
        "room 108": "Turn right then a slight left into room 604",
        "room 110": "Turn right then a slight left into room 604",
      },
    },
    {
      node: "room 606",
      weight: 1,
      direction: "Slight left into room 606",
      directionFrom: {
        "hall 100 hall 800 meet": "Turn left then a slight left into room 606",
        "hall 100 lower mid": "Turn right then a slight left into room 606",
        "room 111": "Turn right then a slight left into room 606",
        "room 109": "Turn right then a slight left into room 606",
        "room 107": "Turn right then a slight left into room 606",
        "room 106": "Turn right then a slight left into room 606",
        "room 108": "Turn right then a slight left into room 606",
        "room 110": "Turn right then a slight left into room 606",
      },
    },
  ], // Done
  "hall 100 lower mid": [
    {
      node: "hall 100 hall 600 meet",
      weight: 1,
      direction: "Continue straight",
    },
    {
      node: "hall 200 hall 100 meet",
      weight: 1,
      direction: "Continue straight",
    },
    {
      node: "room 105",
      weight: 1,
      direction: "Slight right into room 105",
    },
    {
      node: "room 102",
      weight: 1,
      direction: "Slight left into room 102",
    },
    {
      node: "room 106",
      weight: 1,
      direction: "Slight right into room 106",
    },
    {
      node: "room 109",
      weight: 1,
      direction: "Slight left into room 109",
    },
    {
      node: "room 111",
      weight: 1,
      direction: "Slight left into room 111",
    },
    {
      node: "room 108",
      weight: 1,
      direction: "Slight right into room 108",
    },
    {
      node: "room 110",
      weight: 1,
      direction: "Slight right into room 110",
    },

    {
      node: "room 105",
      weight: 1,
      direction: "Slight right into room 105",
      directionFrom: { "hall 200 hall 100 meet": "Slight left into room 105" },
    },
    {
      node: "room 104",
      weight: 1,
      direction: "Slight left into room 104",
      directionFrom: { "hall 200 hall 100 meet": "Slight right into room 105" },
    },
  ], // Done
  "hall 100 hall 800 meet": [
    {
      node: "hall 100 hall 600 meet",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 800 left mid": "Turn left",
        "room 801": "Turn left",
        "room 802": "Turn left",
        "room 803": "Turn left",
        "room 804": "Turn left",
        "room 805": "Turn left",
      },
    },
    {
      node: "hall 800 left mid",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 100 hall 600 meet": "Turn right",
        "room 119": "Turn right",
        "room 115": "Turn right",
        "room 127 student center": "Turn left",
        "room 112 student lounge": "Turn left",
      },
    },
    {
      node: "room 123",
      weight: 1,
      direction: "Slight left into room 123",
      directionFrom: {
        "hall 800 left mid": "Straight ahead into room 123",
        "room 801": "Straight ahead into room 123",
        "room 802": "Straight ahead into room 123",
        "room 803": "Straight ahead into room 123",
        "room 804": "Straight ahead into room 123",
        "room 805": "Straight ahead into room 123",
      },
    },
    {
      node: "room 119",
      weight: 1,
      direction: "Slight right into room 119",
      directionFrom: {
        "hall 800 left mid": "Turn left then a slight right into room 119",
        "room 805": "Turn left then a slight right into room 119",
        "room 801": "Turn left then a slight right into room 119",
        "room 802": "Turn left then a slight right into room 119",
        "room 803": "Turn left then a slight right into room 119",
        "room 804": "Turn left then a slight right into room 119",
      },
    },
    {
      node: "room 115",
      weight: 1,
      direction: "Slight right into room 115",
      directionFrom: {
        "hall 800 left mid": "Turn left then a slight right into room 115",
        "room 805": "Turn left then a slight right into room 115",
        "room 801": "Turn left then a slight right into room 115",
        "room 802": "Turn left then a slight right into room 115",
        "room 803": "Turn left then a slight right into room 115",
        "room 804": "Turn left then a slight right into room 115",
      },
    },
    {
      node: "room 127 student center",
      weight: 1,
      direction: "Slight left into room 127 - Student Center",
      directionFrom: {
        "hall 800 left mid":
          "Turn right then a slight left into room 127 - Student Center",
        "room 805":
          "Turn right then a slight left into room 127 - Student Center",
        "room 801":
          "Turn right then a slight left into room 127 - Student Center",
        "room 802":
          "Turn right then a slight left into room 127 - Student Center",
        "room 803":
          "Turn right then a slight left into room 127 - Student Center",
        "room 804":
          "Turn right then a slight left into room 127 - Student Center",
      },
    },
    {
      node: "room 112 student lounge",
      weight: 1,
      direction: "Slight right into room 112 - Student Center",
      directionFrom: {
        "hall 800 left mid":
          "Turn right then a slight right into room 112 - Student Center",
        "room 805":
          "Turn right then a slight right into room 112 - Student Center",
        "room 801":
          "Turn right then a slight right into room 112 - Student Center",
        "room 802":
          "Turn right then a slight right into room 112 - Student Center",
        "room 803":
          "Turn right then a slight right into room 112 - Student Center",
        "room 804":
          "Turn right then a slight right into room 112 - Student Center",
      },
    },
    {
      node: "room 801",
      weight: 1,
      direction: "Slight right into room 801",
      directionFrom: {
        "hall 100 hall 600 meet":
          "Turn right then a slight right into room 801",
        "room 119": "Turn right then a slight right into room 801",
        "room 115": "Turn right then a slight right into room 801",
        "room 127 student center":
          "Turn left then a slight right into room 801",
        "room 112 student lounge":
          "Turn left then a slight right into room 801",
      },
    },
    {
      node: "room 803",
      weight: 1,
      direction: "Slight right into room 803",
      directionFrom: {
        "hall 100 hall 600 meet":
          "Turn right then a slight right into room 803",
        "room 119": "Turn right then a slight right into room 803",
        "room 115": "Turn right then a slight right into room 803",
        "room 127 student center":
          "Turn left then a slight right into room 803",
        "room 112 student lounge":
          "Turn left then a slight right into room 803",
      },
    },
    {
      node: "room 805",
      weight: 1,
      direction: "Slight right into room 805",
      directionFrom: {
        "hall 100 hall 600 meet":
          "Turn right then a slight right into room 805",
        "room 119": "Turn right then a slight right into room 805",
        "room 115": "Turn right then a slight right into room 805",
        "room 127 student center":
          "Turn left then a slight right into room 805",
        "room 112 student lounge":
          "Turn left then a slight right into room 805",
      },
    },
    {
      node: "room 802 career services",
      weight: 1,
      direction: "Slight left into room 802 - Career Services",
      directionFrom: {
        "hall 100 hall 600 meet":
          "Turn right then a slight left into room 802 - Career Services",
        "room 119":
          "Turn right then a slight left into room 802 - Career Services",
        "room 115":
          "Turn right then a slight left into room 802 - Career Services",
        "room 127 student center":
          "Turn left then a slight left into room 802 - Career Services",
        "room 112 student lounge":
          "Turn left then a slight left into room 802 - Career Services",
      },
    },
    {
      node: "room 804",
      weight: 1,
      direction: "Slight left into room 804",
      directionFrom: {
        "hall 100 hall 600 meet": "Turn right then a slight left into room 804",
        "room 119": "Turn right then a slight left into room 804",
        "room 115": "Turn right then a slight left into room 804",
        "room 127 student center": "Turn left then a slight left into room 804",
        "room 112 student lounge": "Turn left then a slight left into room 804",
      },
    },
  ], // Done

  // Rooms hall 100
  "room 101": [
    {
      node: "room 103",
      weight: 1,
      direction: "Turn left then a slight left into room 103",
    },
    {
      node: "hall 200 hall 100 meet",
      weight: 1,
      direction: "Turn left",
    },
  ], // Done
  "room 103": [
    {
      node: "room 101",
      weight: 1,
      direction: "Turn right then a slight right into room 101",
    },
    {
      node: "hall 200 hall 100 meet",
      weight: 1,
      direction: "Turn left",
    },
  ], // Done
  "room 105": [
    {
      node: "room 102",
      weight: 1,
      direction: "Turn right then a slight left into room 102",
    },
    {
      node: "hall 200 hall 100 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 100 lower mid",
      weight: 1,
      direction: "Turn left",
    },
  ], // Done
  "room 102": [
    {
      node: "room 105",
      weight: 1,
      direction: "Turn right then a slight left into room 105",
    },
    {
      node: "hall 200 hall 100 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 100 lower mid",
      weight: 1,
      direction: "Turn right",
    },
  ], // Done
  "room 104": [
    {
      node: "room 107",
      weight: 1,
      direction: "Straight ahead into room 107",
    },
    {
      node: "room 106",
      weight: 1,
      direction: "Turn right then a slight right into room 106",
    },
    {
      node: "room 108",
      weight: 1,
      direction: "Turn right then a slight right into room 108",
    },
    {
      node: "room 110",
      weight: 1,
      direction: "Turn right then a slight right into room 110",
    },
    {
      node: "room 109",
      weight: 1,
      direction: "Turn right then a slight left into room 109",
    },
    {
      node: "room 111",
      weight: 1,
      direction: "Turn right then a slight left into room 111",
    },
    {
      node: "hall 100 hall 600 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 100 lower mid",
      weight: 1,
      direction: "Turn left",
    },
  ], // Done
  "room 107": [
    {
      node: "room 104",
      weight: 1,
      direction: "Straight ahead into room 104",
    },
    {
      node: "room 106",
      weight: 1,
      direction: "Straight ahead into room 106",
    },
    {
      node: "hall 100 hall 600 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 100 lower mid",
      weight: 1,
      direction: "Turn right",
    },
  ], // Done
  "room 106": [
    {
      node: "room 107",
      weight: 1,
      direction: "Straight ahead into room 107",
    },
    {
      node: "room 109",
      weight: 1,
      direction: "Turn right then a slight left into room 109",
    },
    {
      node: "room 111",
      weight: 1,
      direction: "Turn right then a slight left into room 111",
    },
    {
      node: "room 108",
      weight: 1,
      direction: "Turn right then a slight right into room 108",
    },
    {
      node: "room 110",
      weight: 1,
      direction: "Turn right then a slight right into room 110",
    },
    {
      node: "hall 100 hall 600 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 100 lower mid",
      weight: 1,
      direction: "Turn left",
    },
  ], // Done
  "room 109": [
    {
      node: "room 107",
      weight: 1,
      direction: "Turn right then a slight right into room 107",
    },
    {
      node: "room 106",
      weight: 1,
      direction: "Turn right then a slight right into room 106",
    },
    {
      node: "room 111",
      weight: 1,
      direction: "Turn left then a slight left into room 111",
    },
    {
      node: "room 108",
      weight: 1,
      direction: "Turn right then a slight left into room 108",
    },
    {
      node: "room 110",
      weight: 1,
      direction: "Turn left then a slight right into room 110",
    },

    {
      node: "hall 100 hall 600 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 100 lower mid",
      weight: 1,
      direction: "Turn right",
    },
  ], // Done
  "room 108": [
    {
      node: "room 107",
      weight: 1,
      direction: "Turn left then a slight right into room 107",
    },
    {
      node: "room 106",
      weight: 1,
      direction: "Turn left then a slight left into room 106",
    },
    {
      node: "room 111",
      weight: 1,
      direction: "Turn right then a slight left into room 111",
    },
    {
      node: "room 109",
      weight: 1,
      direction: "Turn right then a slight left into room 109",
    },
    {
      node: "room 110",
      weight: 1,
      direction: "Turn right then a slight right into room 110",
    },
    {
      node: "room 108A",
      weight: 1,
      direction: "Turn right then a slight left into room 108A",
    },
    {
      node: "hall 100 hall 600 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 100 lower mid",
      weight: 1,
      direction: "Turn left",
    },
  ], // Done
  "room 111": [
    {
      node: "room 107",
      weight: 1,
      direction: "Turn right then a slight right into room 107",
    },
    {
      node: "room 106",
      weight: 1,
      direction: "Turn right then a slight left into room 106",
    },
    {
      node: "room 109",
      weight: 1,
      direction: "Turn right then a slight right into room 109",
    },
    {
      node: "room 108",
      weight: 1,
      direction: "Turn right then a slight left into room 108",
    },
    {
      node: "room 110",
      weight: 1,
      direction: "Straight ahead into room 110",
    },
    {
      node: "hall 100 hall 600 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 100 lower mid",
      weight: 1,
      direction: "Turn right",
    },
  ], // Done
  "room 110": [
    {
      node: "room 107",
      weight: 1,
      direction: "Turn left then a slight right into room 107",
    },
    {
      node: "room 106",
      weight: 1,
      direction: "Turn left then a slight left into room 106",
    },
    {
      node: "room 109",
      weight: 1,
      direction: "Turn left then a slight right into room 109",
    },
    {
      node: "room 108",
      weight: 1,
      direction: "Turn left then a slight left into room 108",
    },
    {
      node: "room 111",
      weight: 1,
      direction: "Straight ahead into room 111",
    },
    {
      node: "hall 100 hall 600 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 100 lower mid",
      weight: 1,
      direction: "Turn left",
    },
  ], // Done
  "room 108A": [
    {
      node: "room 108",
      weight: 1,
      direction: "Turn left then a slight left into room 108",
    },
  ], // Done
  "room 115": [
    {
      node: "room 119",
      weight: 1,
      direction: "Turn left then a slight left into room 119",
    },
    {
      node: "hall 100 hall 600 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 100 hall 800 meet",
      weight: 1,
      direction: "Turn left",
    },
  ], // Done
  "room 119": [
    {
      node: "room 115",
      weight: 1,
      direction: "Turn right then a slight right into room 115",
    },
    {
      node: "hall 100 hall 600 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 100 hall 800 meet",
      weight: 1,
      direction: "Turn left",
    },
  ], // Done
  "room 123": [
    {
      node: "hall 100 hall 800 meet",
      weight: 1,
      direction: "Exit Room",
    },
  ], // Done
  "room 127 student center": [
    {
      node: "hall 100 hall 800 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 112 student lounge",
      weight: 1,
      direction: "Straight ahead into room 112 - Student Lounge",
    },
  ], // Done
  "room 112 student lounge": [
    {
      node: "hall 100 hall 800 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 127 student center",
      weight: 1,
      direction: "Straight ahead into room 127 - Student Center",
    },
  ], // Done

  // Hall 200 Start Right - Done
  "hall 200 start right": [
    {
      node: "main entrance",
      weight: 1,
      direction: "Continue straight towards the main entrance",
    },
    {
      node: "one stop",
      weight: 1.1,
      direction: "Go straight to one stop",
      directionFrom: {
        "hall 200 right mid": "Turn right to one stop",
      },
    },
    { node: "hall 200 right mid", weight: 1.1, direction: "Continue straight" },
    { node: "room 223", weight: 1, direction: "Slight right into room 223" },
    {
      node: "room 224",
      weight: 1,
      direction: "Straight ahead to room 224",
      directionFrom: {
        "hall 200 right mid": "Turn right into room 224",
      },
    },
  ],
  // Done

  // Hall 200 Right Mid - Done
  "hall 200 right mid": [
    {
      node: "hall 200 start right",
      weight: 1.1,
      direction: "Continue straight",
      directionFrom: { "room 225": "Turn left" },
    },
    {
      node: "room 225",
      weight: 1,
      direction: "Slight right into room 225",
      directionFrom: { "hall 200 hall 1100 meet": "Slight left into room 225" },
    },
    { node: "room 226", weight: 1, direction: "Slight left into room 226" },
    { node: "room 227", weight: 1, direction: "Slight right into room 227" },
    { node: "room 228", weight: 1, direction: "Slight left into room 228" },
    { node: "room 223", weight: 1, direction: "Slight left into room 223" },
    {
      node: "hall 200 hall 1100 meet",
      weight: 1.1,
      direction: "Continue Straight",
      directionFrom: { "room 225": "Turn right" },
    },
  ],
  // Done

  // Hall 200 Hall 1100 Meet - Done
  "hall 200 hall 1100 meet": [
    {
      node: "hall 200 right mid",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 1100 lower mid": "Turn right",
        "room 1103": "Turn right",
        "room 1106": "Turn right",
        "room 1101": "Turn right",
        "room 1104": "Turn right",
        "room 1108": "Turn right",
        "hall 1100 start": "Turn left",
        "room 1102": "Turn left",
      },
    },
    {
      node: "hall 1100 lower mid",
      weight: 1,
      direction: "Continue Straight",
      directionFrom: {
        "hall 200 right mid": "Turn left",
        "room 227": "Turn left",
        "room 228": "Turn left",
        "room 226": "Turn left",
        "room 225": "Turn left",
      },
    },
    {
      node: "hall 1100 start",
      weight: 1,
      direction: "Continue Straight",
      directionFrom: { "hall 200 right mid": "Turn right" },
    },
    {
      node: "room 228",
      weight: 1,
      direction: "Slight right into room 228",
    },
    { node: "room 226", weight: 1, direction: "Slight right into room 226" },
    { node: "room 227", weight: 1, direction: "Slight left into room 227" },
    { node: "room 228", weight: 1, direction: "Slight right into room 228" },
    {
      node: "room 1102",
      weight: 1,
      direction: "Slight left into room 1102",
      directionFrom: {
        "hall 200 right mid": "Turn right then slight left into room 1102",
      },
    },
    {
      node: "room 1101",
      weight: 1,
      direction: "Slight left into room 1101",
      directionFrom: {
        "hall 200 right mid": "Turn left then a slight left into room 1101",
      },
    },
    {
      node: "room 1104",
      weight: 1,
      direction: "Slight right into room 1104",
      directionFrom: {
        "hall 200 right mid": "Turn left then a slight right into room 1104",
      },
    },
    {
      node: "room 1106",
      weight: 1,
      direction: "Slight right into room 1106",
      directionFrom: {
        "hall 200 right mid": "Turn left then a slight right into room 1106",
      },
    },
    {
      node: "room 1108",
      weight: 1,
      direction: "Slight right into room 1108",
      directionFrom: {
        "hall 200 right mid": "Turn left then a slight right into room 1108",
      },
    },
    {
      node: "room 1103",
      weight: 1,
      direction: "Slight left into room 1103",
      directionFrom: {
        "hall 200 right mid": "Turn left then a slight left into room 1103",
      },
    },
  ], // Done

  // Hall 200 Start Left - Done
  "hall 200 start left": [
    {
      node: "main entrance",
      weight: 1,
      direction: "Continue straight towards the main entrance",
    },
    {
      node: "hall 200 hall 700 meet",
      weight: 1,
      direction: "Continue straight",
      directionFrom: { "room 224": "Turn right" },
    },
    {
      node: "one stop",
      weight: 1.1,
      direction: "Continue straight towards one stop",
      directionFrom: {
        "hall 200 hall 700 meet": "Turn left towards one stop",
      },
    },
  ],
  // Done

  // Hall 200 left mid - Done
  "hall 200 left mid": [
    {
      node: "room 212",
      weight: 1,
      direction: "Slight left into room 212",
    },
    {
      node: "room 214",
      weight: 1,
      direction: "Slight left into room 214",
      directionFrom: { "hall 200 hall 700 meet": "Slight right into room 214" },
    },
    {
      node: "room 216",
      weight: 1,
      direction: "Slight left into room 216",
    },
    {
      node: "room 215",
      weight: 1,
      direction: "Slight right into room 215",
    },
    {
      node: "room 218",
      weight: 1,
      direction: "Slight left into room 218",
    },
    {
      node: "room 209",
      weight: 1,
      direction: "Slight left into room 209",
    },
    {
      node: "room 211",
      weight: 1,
      direction: "Slight left into room 211",
    },
    {
      node: "room 213",
      weight: 1,
      direction: "Slight left into room 213",
    },
    {
      node: "hall 200 hall 500 meet",
      weight: 1,
      direction: "Continue straight",
    },
    {
      node: "hall 200 hall 700 meet",
      weight: 1,
      direction: "Continue straight",
    },
  ],
  // Done

  // Hall 200 hall 700 meet - Done
  "hall 200 hall 700 meet": [
    {
      node: "hall 200 start left",
      weight: 1,
      direction: "Continue straight",
      directionFrom: { "hall 200 left mid": "Turn right" },
    },
    {
      node: "hall 700 hall 400 meet",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 200 left mid": "Turn left",
        "room 215": "Turn left",
        "room 216": "Turn left",
        "room 218": "Turn left",
        "room 219": "Turn left",
      },
    },
    {
      node: "hall 200 left mid",
      weight: 1,
      direction: "Turn left",
      directionFrom: {
        "hall 700 hall 400 meet": "Turn right",
        "room 701 academic affairs": "Turn right",
        "hall 704 police": "Turn right",
      },
    },
    {
      node: "room 219 recruitment",
      weight: 1,
      direction: "Turn right then a slight left into room 219 - Recruitment",
      directionFrom: {
        "hall 200 start left":
          "Turn left then a slight left into room 219 - Recruitment",
      },
    },
    {
      node: "room 218",
      weight: 1,
      direction: "Turn right then a slight right into room 218",
      directionFrom: {
        "hall 200 start left": "Turn left then a slight right into room 218",
      },
    },
    {
      node: "room 215",
      weight: 1,
      direction: "Turn right then a slight left into room 215",
      directionFrom: {
        "hall 200 start left": "Turn left then a slight left into room 215",
      },
    },
    {
      node: "room 216",
      weight: 1,
      direction: "Turn right then a slight right into room 216",
      directionFrom: {
        "hall 200 start left": "Turn left then a slight right into room 216",
      },
    },
    {
      node: "room 704 police",
      weight: 1,
      direction: "Slight right to room 704 - Campus Police",
      directionFrom: {
        "hall 200 left mid":
          "Turn left then a slight right to room 704 - Campus Police",
        "room 215": "Turn left then a slight right to room 704 - Campus Police",
        "room 216": "Turn left then a slight right to room 704 - Campus Police",
        "room 218": "Turn left then a slight right to room 704 - Campus Police",
        "room 219": "Turn left then a slight right to room 704 - Campus Police",
      },
    },
    {
      node: "room 701 academic affairs",
      weight: 1,
      direction: "Slight left to room 701 - Academic Affairs",
      directionFrom: {
        "hall 200 left mid":
          "Turn left then a slight left to room 701 - Academic Affairs",
        "room 215":
          "Turn left then a slight left to room 701 - Academic Affairs",
        "room 216":
          "Turn left then a slight left to room 701 - Academic Affairs",
        "room 218":
          "Turn left then a slight left to room 701 - Academic Affairs",
        "room 219":
          "Turn left then a slight left to room 701 - Academic Affairs",
      },
    },
  ], // Done

  // Hall 200 hall 500 meet - Add 400s
  "hall 200 hall 500 meet": [
    {
      node: "hall 200 left mid",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 500 hall 400 meet": "Turn left",
        "room 517": "Turn left",
        "room 515": "Turn left",
        "hall 500 start": "Turn right",
        "room 513": "Turn right",
      },
    },
    {
      node: "hall 200 hall 300 meet",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 500 hall 400 meet": "Turn right",
        "room 517": "Turn right",
        "room 515": "Turn right",
        "hall 500 start": "Turn left",
        "room 513": "Turn left",
      },
    },
    {
      node: "hall 500 hall 400 meet",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 200 left mid": "Turn right",
        "room 212": "Turn right",
        "room 214": "Turn right",
        "room 209": "Turn right",
        "room 211": "Turn right",
        "room 213": "Turn right",
        "hall 200 hall 300 meet": "Turn left",
        "room 207": "Turn left",
        "room 208": "Turn left",
        "room 210": "Turn left",
      },
    },
    {
      node: "hall 500 start",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 200 left mid": "Turn left",
        "room 212": "Turn left",
        "room 214": "Turn left",
        "room 209": "Turn left",
        "room 211": "Turn left",
        "room 213": "Turn left",
        "hall 200 hall 300 meet": "Turn right",
        "room 207": "Turn right",
        "room 208": "Turn right",
        "room 210": "Turn right",
      },
    },
    {
      node: "room 212",
      weight: 1,
      direction: "Slight left into room 212",
      directionFrom: {
        "hall 500 hall 400 meet": "Turn left then a slight left into room 212",
        "room 515": "Turn left then a slight left into room 212",
        "room 517": "Turn left then a slight left into room 212",
        "hall 500 start": "Turn right then a slight left into room 212",
        "room 513": "Turn right then a slight left into room 212",
      },
    },
    {
      node: "room 214",
      weight: 1,
      direction: "Slight left into room 214",
      directionFrom: {
        directionFrom: {
          "hall 500 hall 400 meet":
            "Turn left then a slight left into room 214",
          "room 515": "Turn left then a slight left into room 214",
          "room 517": "Turn left then a slight left into room 214",
          "hall 500 start": "Turn right then a slight left into room 214",
          "room 513": "Turn right then a slight left into room 214",
        },
      },
    },
    {
      node: "room 213",
      weight: 1,
      direction: "Slight right into room 213",
      directionFrom: {
        "hall 500 hall 400 meet": "Turn left then a slight right into room 213",
        "room 515": "Turn left then a slight right into room 213",
        "room 517": "Turn left then a slight right into room 213",
        "hall 500 start": "Turn right then a slight right into room 213",
        "room 513": "Turn right then a slight right into room 213",
      },
    },
    {
      node: "room 211",
      weight: 1,
      direction: "Slight right into room 211",
      directionFrom: {
        "hall 500 hall 400 meet": "Turn left then a slight right into room 211",
        "room 515": "Turn left then a slight right into room 211",
        "room 517": "Turn left then a slight right into room 211",
        "hall 500 start": "Turn right then a slight right into room 211",
        "room 513": "Turn right then a slight right into room 211",
      },
    },
    {
      node: "room 209",
      weight: 1,
      direction: "Slight right into room 209",
      directionFrom: {
        "hall 500 hall 400 meet": "Turn left then a slight right into room 209",
        "room 515": "Turn left then a slight right into room 209",
        "room 517": "Turn left then a slight right into room 209",
        "hall 500 start": "Turn right then a slight right into room 209",
        "room 513": "Turn right then a slight right into room 209",
      },
    },
    {
      node: "room 210",
      weight: 1,
      direction: "Slight right into room 210",
      directionFrom: {
        "hall 500 hall 400 meet":
          "Turn right then a slight right into room 210",
        "room 515": "Turn right then a slight right into room 210",
        "room 517": "Turn right then a slight right into room 210",
        "hall 500 start": "Turn left then a slight right into room 210",
        "room 513": "Turn left then a slight right into room 210",
      },
    },
    {
      node: "room 208",
      weight: 1,
      direction: "Slight right into room 208",
      directionFrom: {
        "hall 500 hall 400 meet":
          "Turn right then a slight right into room 208",
        "room 515": "Turn right then a slight right into room 208",
        "room 517": "Turn right then a slight right into room 208",
        "hall 500 start": "Turn left then a slight right into room 208",
        "room 513": "Turn left then a slight right into room 208",
      },
    },
    {
      node: "room 207",
      weight: 1,
      direction: "Slight left into room 207",
      directionFrom: {
        "hall 500 hall 400 meet": "Turn right then a slight left into room 207",
        "room 515": "Turn right then a slight left into room 207",
        "room 517": "Turn right then a slight left into room 207",
        "hall 500 start": "Turn left then a slight left into room 207",
        "room 513": "Turn left then a slight left into room 207",
      },
    },
    {
      node: "room 513",
      weight: 1,
      direction: "Slight right into room 513",
      directionFrom: {
        "hall 200 hall 300 meet": "Turn right then a slight right to room 513",
        "room 208": "Turn right then a slight right to room 513",
        "room 210": "Turn right then a slight right to room 513",
        "room 207": "Turn right then a slight right to room 513",
        "hall 200 left mid": "Turn left then a slight right to room 513",
        "room 212": "Turn left then a slight right to room 513",
        "room 209": "Turn left then a slight right to room 513",
        "room 211": "Turn left then a slight right to room 513",
        "room 213": "Turn left then a slight right to room 513",
      },
    },
    {
      node: "room 515",
      weight: 1,
      direction: "Slight left into room 515",
      directionFrom: {
        "hall 200 hall 300 meet": "Turn left then a slight left to room 515",
        "room 208": "Turn left then a slight left to room 515",
        "room 210": "Turn left then a slight left to room 515",
        "room 207": "Turn left then a slight left to room 515",
        "hall 200 left mid": "Turn right then a slight left to room 515",
        "room 212": "Turn right then a slight left to room 515",
        "room 209": "Turn right then a slight left to room 515",
        "room 211": "Turn right then a slight left to room 515",
        "room 213": "Turn right then a slight left to room 515",
      },
    },
    {
      node: "room 517",
      weight: 1,
      direction: "Slight left into room 517",
      directionFrom: {
        "hall 200 hall 300 meet": "Turn left then a slight left to room 517",
        "room 208": "Turn left then a slight left to room 517",
        "room 210": "Turn left then a slight left to room 517",
        "room 207": "Turn left then a slight left to room 517",
        "hall 200 left mid": "Turn right then a slight left to room 517",
        "room 212": "Turn right then a slight left to room 517",
        "room 209": "Turn right then a slight left to room 517",
        "room 211": "Turn right then a slight left to room 517",
        "room 213": "Turn right then a slight left to room 517",
      },
    },
  ],

  // Hall 200 hall 300 meet - Done
  "hall 200 hall 300 meet": [
    {
      node: "room 203",
      weight: 1,
      direction: "Slight left into room 203",
    },
    {
      node: "room 201",
      weight: 1,
      direction: "Slight left into room 201",
    },
    {
      node: "room 207",
      weight: 1,
      direction: "Slight right into room 207",
    },
    {
      node: "room 208",
      weight: 1,
      direction: "Slight left into room 208",
    },
    {
      node: "room 210",
      weight: 1,
      direction: "Slight left into room 208",
    },
    {
      node: "room 302",
      weight: 1,
      direction: "Turn right then a slight right into room 302",
      directionFrom: {
        "hall 200 hall 100 meet": "Turn left then a slight right into room 302",
        "room 201": "Turn left then a slight right into room 302",
        "room 203": "Turn left then a slight right into room 302",
      },
    },
    {
      node: "room 301",
      weight: 1,
      direction: "Turn right then a slight left into room 301",
      directionFrom: {
        "hall 200 hall 100 meet": "Turn left then a slight left into room 301",
        "room 201": "Turn left then a slight left into room 301",
        "room 203": "Turn left then a slight left into room 301",
      },
    },
    {
      node: "room 303",
      weight: 1,
      direction: "Turn right then a slight left into room 303",
      directionFrom: {
        "hall 200 hall 100 meet": "Turn left then a slight left into room 303",
        "room 201": "Turn left then a slight left into room 303",
        "room 203": "Turn left then a slight left into room 303",
      },
    },
    {
      node: "hall 300 mid",
      weight: 1,
      direction: "Turn right",
      directionFrom: {
        "hall 200 hall 100 meet": "Turn left",
        "room 201": "Turn left",
        "room 203": "Turn left",
      },
    },
    {
      node: "hall 200 hall 500 meet",
      weight: 1,
      direction: "Continue straight",
      directionFrom: { "hall 300 mid": "Turn left" },
    },
    {
      node: "hall 200 hall 100 meet",
      weight: 1,
      direction: "Continue straight",
      directionFrom: { "hall 300 mid": "Turn right" },
    },
  ],
  // Done

  // Rooms hall 200 -
  "room 201": [
    { node: "hall 200 hall 100 meet", weight: 1, direction: "Turn left" },
    { node: "hall 200 hall 300 meet", weight: 1, direction: "Turn right" },
    {
      node: "room 203",
      weight: 1,
      direction: "Turn right then a slight right into room 203",
    },
  ], // Done
  "room 203": [
    { node: "hall 200 hall 100 meet", weight: 1, direction: "Turn left" },
    { node: "hall 200 hall 300 meet", weight: 1, direction: "Turn right" },
    {
      node: "room 201",
      weight: 1,
      direction: "Turn left then a slight left into room 203",
    },
  ], // Done
  "room 207": [
    { node: "hall 200 hall 500 meet", weight: 1, direction: "Turn right" },
    { node: "hall 200 hall 300 meet", weight: 1, direction: "Turn left" },
    {
      node: "room 208",
      weight: 1,
      direction: "Turn right then a slight left into room 208",
    },
    {
      node: "room 210",
      weight: 1,
      direction: "Turn right then a slight left into room 210",
    },
  ], // Done
  "room 208": [
    { node: "hall 200 hall 500 meet", weight: 1, direction: "Turn left" },
    { node: "hall 200 hall 300 meet", weight: 1.1, direction: "Turn right" },
    {
      node: "room 210",
      weight: 1,
      direction: "Turn left then a slight left into room 210",
    },
    {
      node: "room 207",
      weight: 1,
      direction: "Turn right then a slight left into room 207",
    },
  ], // Done
  "room 210": [
    { node: "hall 200 hall 500 meet", weight: 1, direction: "Turn left" },
    { node: "hall 200 hall 300 meet", weight: 1.1, direction: "Turn right" },
    {
      node: "room 208",
      weight: 1,
      direction: "Turn right then a slight right into room 208",
    },
    {
      node: "room 207",
      weight: 1,
      direction: "Turn right then a slight left into room 207",
    },
  ], // Done
  "room 209": [
    { node: "hall 200 hall 500 meet", weight: 1, direction: "Turn left" },
    { node: "hall 200 left mid", weight: 1.1, direction: "Turn right" },
    {
      node: "room 212",
      weight: 1,
      direction: "Turn right then a slight left into room 212",
    },
    {
      node: "room 211",
      weight: 1,
      direction: "Turn right then a slight right into room 211",
    },
    {
      node: "room 213",
      weight: 1,
      direction: "Turn right then a slight right into room 213",
    },
  ], // Done
  "room 211": [
    { node: "hall 200 hall 500 meet", weight: 1, direction: "Turn left" },
    { node: "hall 200 left mid", weight: 1, direction: "Turn right" },
    {
      node: "room 209",
      weight: 1,
      direction: "Turn left then a slight left into room 209",
    },
    {
      node: "room 212",
      weight: 1,
      direction: "Turn left then a slight right into room 212",
    },
    {
      node: "room 214",
      weight: 1,
      direction: "Turn right then a slight left into room 214",
    },
    {
      node: "room 213",
      weight: 1,
      direction: "Turn right then a slight right into room 213",
    },
  ], // Done
  "room 213": [
    { node: "hall 200 hall 500 meet", weight: 1.1, direction: "Turn left" },
    { node: "hall 200 left mid", weight: 1, direction: "Turn right" },
    {
      node: "room 211",
      weight: 1,
      direction: "Turn left then a slight left into room 211",
    },
    {
      node: "room 209",
      weight: 1,
      direction: "Turn left then a slight left into room 209",
    },
    {
      node: "room 212",
      weight: 1,
      direction: "Turn left then a slight right into room 212",
    },
  ], // Done
  "room 215": [
    { node: "hall 200 hall 700 meet", weight: 1.1, direction: "Turn right" },
    { node: "hall 200 left mid", weight: 1, direction: "Turn left" },
    {
      node: "room 219 recruitment",
      weight: 1,
      direction: "Turn right then a slight right into room 219 - Recruitment",
    },
    {
      node: "room 218",
      weight: 1,
      direction: "Turn right then a slight left into room 218",
    },
  ], // Done
  "room 219 recruitment": [
    { node: "hall 200 hall 700 meet", weight: 1, direction: "Turn right" },
    { node: "hall 200 left mid", weight: 1.1, direction: "Turn left" },
    {
      node: "room 218",
      weight: 1,
      direction: "Straight ahead into to room 218",
    },
    {
      node: "room 215",
      weight: 1,
      direction: "Turn left then a slight left into room 215",
    },
    {
      node: "room 216",
      weight: 1,
      direction: "Turn left then a slight right into room 216",
    },
  ], // Done
  "room 218": [
    { node: "hall 200 hall 700 meet", weight: 1, direction: "Turn left" },
    { node: "hall 200 left mid", weight: 1, direction: "Turn right" },
    {
      node: "room 219",
      weight: 1,
      direction: "Straight ahead into room 219 - Recruitment",
    },
    {
      node: "room 216",
      weight: 1,
      direction: "Turn right then a slight left into room 216",
    },
    {
      node: "room 215",
      weight: 1,
      direction: "Turn right then a slight left into room 215",
    },
  ], // Done
  "room 216": [
    { node: "hall 200 hall 700 meet", weight: 1.1, direction: "Turn left" },
    { node: "hall 200 left mid", weight: 1, direction: "Turn right" },
    {
      node: "room 215",
      weight: 1,
      direction: "Straight ahead into room 215",
    },
    {
      node: "room 219 - Recruitment",
      weight: 1,
      direction: "Turn left then a slight right into room 219 - Recruitment",
    },
    {
      node: "room 218",
      weight: 1,
      direction: "Turn left then a slight left into room 218",
    },
  ], // Done
  "room 214": [
    { node: "hall 200 left mid", weight: 1, direction: "Exit room" },
    {
      node: "room 212",
      weight: 1,
      direction: "Turn right then a slight right into room 212",
    },
    {
      node: "room 211",
      weight: 1,
      direction: "Turn right then a slight left into room 211",
    },
    {
      node: "room 209",
      weight: 1,
      direction: "Turn right then a slight left into room 209",
    },
    {
      node: "room 213",
      weight: 1,
      direction: "Turn right then a slight left into room 213",
    },
  ], // Done
  "room 212": [
    { node: "hall 200 hall 500 meet", weight: 1, direction: "Turn right" },
    { node: "hall 200 left mid", weight: 1.1, direction: "Turn left" },
    {
      node: "room 209",
      weight: 1,
      direction: "Turn right then a slight left into room 209",
    },
    {
      node: "room 211",
      weight: 1,
      direction: "Turn left then a slight right into room 211",
    },
    {
      node: "room 213",
      weight: 1,
      direction: "Turn left then a slight right into room 213",
    },
    {
      node: "room 214",
      weight: 1,
      direction: "Turn left then a slight left into room 214",
    },
  ], // Done
  "room 224": [
    {
      node: "main entrance",
      weight: 1,
      direction: "Straight ahead to main entrance",
    },
    { node: "one stop", weight: 1, direction: "Turn right towards one stop" },
    { node: "hall 200 start right", weight: 1, direction: "Turn left" },
    { node: "hall 200 start left", weight: 1, direction: "Go straight" },
  ], // Done
  "room 223": [
    { node: "hall 200 start right", weight: 1, direction: "Turn left" },
    { node: "hall 200 right mid", weight: 1, direction: "Turn right" },
  ], // Done
  "room 225": [
    { node: "hall 200 right mid", weight: 1, direction: "Exit room" },
  ], // Done
  "room 227": [
    { node: "hall 200 right mid", weight: 1, direction: "Turn left" },
    { node: "hall 200 hall 1100 meet", weight: 1, direction: "Turn right" },
    {
      node: "room 228",
      weight: 1,
      direction: "Straight ahead into room 228",
    },
  ], // Done
  "room 226": [
    { node: "hall 200 right mid", weight: 1, direction: "Turn right" },
    { node: "hall 200 hall 1100 meet", weight: 1, direction: "Turn left" },
  ], // Done
  "room 228": [
    { node: "hall 200 right mid", weight: 1.1, direction: "Turn right" },
    { node: "hall 200 hall 1100 meet", weight: 1, direction: "Turn left" },
    {
      node: "room 227",
      weight: 1,
      direction: "Straight ahead into room 227",
    },
  ], // Done

  // Hall 300
  "hall 300 mid": [
    {
      node: "room 302",
      weight: 1,
      direction: "Slight left into room 302",
    },
    {
      node: "room 306",
      weight: 1,
      direction: "Slight left into room 306",
    },
    {
      node: "room 301",
      weight: 1,
      direction: "Slight right into room 301",
    },
    {
      node: "room 305",
      weight: 1,
      direction: "Slight left into room 305",
    },
    {
      node: "room 308",
      weight: 1,
      direction: "Slight right into room 308",
    },
    {
      node: "room 310",
      weight: 1,
      direction: "Slight right into room 310",
    },
    {
      node: "room 312",
      weight: 1,
      direction: "Slight right into room 312",
    },
    {
      node: "room 309A",
      weight: 1,
      direction: "Slight left into room 309A",
    },
    {
      node: "room 309",
      weight: 1,
      direction: "Slight left into room 309",
    },
    {
      node: "room 311",
      weight: 1,
      direction: "Slight left into room 311",
    },
    {
      node: "hall 200 hall 300 meet",
      weight: 1,
      direction: "Continue straight",
    },
    {
      node: "hall 300 hall 600 meet",
      weight: 1,
      direction: "Continue straight",
    },
  ],

  // Rooms hall 300 - Done
  "room 301": [
    {
      node: "room 302",
      weight: 1,
      direction: "Go straight into room 302",
    },
    {
      node: "room 303",
      weight: 1,
      direction: "Turn left then a slight left into room 303",
    },
    {
      node: "room 306",
      weight: 1,
      direction: "Turn left then a slight right into room 306",
    },
    {
      node: "hall 300 mid",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 200 hall 300 meet",
      weight: 1,
      direction: "Turn right",
    },
  ], // Done
  "room 303": [
    {
      node: "room 302",
      weight: 1,
      direction: "Turn right then a slight left into room 302",
    },
    {
      node: "room 301",
      weight: 1,
      direction: "Turn right then a slight right into room 301",
    },
    {
      node: "room 306",
      weight: 1,
      direction: "Turn left then a slight right into room 306",
    },
    {
      node: "hall 300 mid",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 200 hall 300 meet",
      weight: 1,
      direction: "Turn right",
    },
  ], // Done
  "room 305": [
    {
      node: "hall 300 mid",
      weight: 1,
      direction: "Exit room",
    },
  ], // Done
  "room 306": [
    {
      node: "room 302",
      weight: 1,
      direction: "Turn left then a slight left into room 302",
    },
    {
      node: "room 301",
      weight: 1,
      direction: "Turn left then a slight right into room 301",
    },
    {
      node: "room 303",
      weight: 1,
      direction: "Turn left then a slight right into room 303",
    },
    {
      node: "hall 300 mid",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 200 hall 300 meet",
      weight: 1,
      direction: "Turn left",
    },
  ], // Done
  "room 302": [
    {
      node: "room 301",
      weight: 1,
      direction: "Go straight into room 301",
    },
    {
      node: "room 303",
      weight: 1,
      direction: "Turn right then a slight left into room 303",
    },
    {
      node: "room 306",
      weight: 1,
      direction: "Turn right then a slight right into room 306",
    },
    {
      node: "hall 300 mid",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 200 hall 300 meet",
      weight: 1,
      direction: "Turn left",
    },
  ], // Done
  "room 309A": [
    {
      node: "room 309",
      weight: 1,
      direction: "Turn left then a slight left into room 309",
    },
    {
      node: "room 308",
      weight: 1,
      direction: "Turn left then a slight right into room 308",
    },
    {
      node: "room 310",
      weight: 1,
      direction: "Turn left then a slight right into room 310",
    },
    {
      node: "room 312",
      weight: 1,
      direction: "Turn left then a slight right into room 312",
    },
    {
      node: "room 311",
      weight: 1,
      direction: "Turn left then a slight left into room 311",
    },
    {
      node: "hall 300 mid",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 300 hall 600 meet",
      weight: 1,
      direction: "Turn left",
    },
  ], // Done
  "room 309": [
    {
      node: "room 309A",
      weight: 1,
      direction: "Turn right then a slight right into room 309A",
    },
    {
      node: "room 308",
      weight: 1,
      direction: "Turn left then a slight right into room 308",
    },
    {
      node: "room 310",
      weight: 1,
      direction: "Turn left then a slight right into room 310",
    },
    {
      node: "room 312",
      weight: 1,
      direction: "Turn left then a slight right into room 312",
    },
    {
      node: "room 311",
      weight: 1,
      direction: "Turn left then a slight left into room 311",
    },
    {
      node: "hall 300 mid",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 300 hall 600 meet",
      weight: 1,
      direction: "Turn left",
    },
  ], // Done
  "room 311": [
    {
      node: "room 309",
      weight: 1,
      direction: "Turn right then a slight right into room 309",
    },
    {
      node: "room 309A",
      weight: 1,
      direction: "Turn right then a slight right into room 309A",
    },
    {
      node: "room 308",
      weight: 1,
      direction: "Turn left then a slight right into room 308",
    },
    {
      node: "room 310",
      weight: 1,
      direction: "Turn left then a slight right into room 310",
    },
    {
      node: "room 312",
      weight: 1,
      direction: "Turn left then a slight right into room 312",
    },
    {
      node: "hall 300 mid",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 300 hall 600 meet",
      weight: 1,
      direction: "Turn left",
    },
  ], // Done
  "room 312": [
    {
      node: "room 309",
      weight: 1,
      direction: "Turn left then a slight right into room 309",
    },
    {
      node: "room 309A",
      weight: 1,
      direction: "Turn left then a slight right into room 309A",
    },
    {
      node: "room 308",
      weight: 1,
      direction: "Turn left then a slight left into room 308",
    },
    {
      node: "room 310",
      weight: 1,
      direction: "Turn left then a slight left into room 310",
    },
    {
      node: "room 311",
      weight: 1,
      direction: "Turn right then a slight left into room 311",
    },
    {
      node: "hall 300 mid",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 300 hall 600 meet",
      weight: 1,
      direction: "Turn right",
    },
  ], // Done
  "room 310": [
    {
      node: "room 309",
      weight: 1,
      direction: "Turn left then a slight right into room 309",
    },
    {
      node: "room 309A",
      weight: 1,
      direction: "Turn left then a slight right into room 309A",
    },
    {
      node: "room 308",
      weight: 1,
      direction: "Turn left then a slight left into room 308",
    },
    {
      node: "room 311",
      weight: 1,
      direction: "Turn right then a slight left into room 311",
    },
    {
      node: "room 312",
      weight: 1,
      direction: "Turn right then a slight right into room 312",
    },
    {
      node: "hall 300 mid",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 300 hall 600 meet",
      weight: 1,
      direction: "Turn right",
    },
  ], // Done
  "room 308": [
    {
      node: "room 309",
      weight: 1,
      direction: "Turn left then a slight right into room 309",
    },
    {
      node: "room 309A",
      weight: 1,
      direction: "Turn left then a slight right into room 309A",
    },
    {
      node: "room 310",
      weight: 1,
      direction: "Turn right then a slight right into room 310",
    },
    {
      node: "room 311",
      weight: 1,
      direction: "Turn right then a slight left into room 311",
    },
    {
      node: "room 312",
      weight: 1,
      direction: "Turn right then a slight right into room 312",
    },
    {
      node: "hall 300 mid",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 300 hall 600 meet",
      weight: 1,
      direction: "Turn right",
    },
  ], // Done

  // Hall 300 hall 600 meet
  "hall 300 hall 600 meet": [
    {
      node: "hall 300 mid",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 600 hall 100 meet": "Turn right",
        "hall 600 hall 500 meet": "Turn left",
        "room 608": "Turn left",
      },
    },
    {
      node: "hall 600 hall 500 meet",
      weight: 1,
      direction: "Continue Straight",
      directionFrom: {
        "hall 300 mid": "Turn right",
        "room 311": "Turn right",
        "room 312": "Turn right",
        "room 310": "Turn right",
        "room 309": "Turn right",
        "room 308": "Turn right",
      },
    },
    {
      node: "hall 100 hall 600 meet",
      weight: 1,
      direction: "Continue Straight",
      directionFrom: {
        "hall 300 mid": "Turn left",
        "room 311": "Turn left",
        "room 312": "Turn left",
        "room 310": "Turn left",
        "room 309": "Turn left",
        "room 308": "Turn left",
      },
    },
    {
      node: "room 311",
      weight: 1,
      direction: "Slight right into room 311",
      directionFrom: {
        "hall 600 hall 100 meet":
          "Turn right then a slight right into room 311",
        "hall 600 hall 500 meet": "Turn left then a slight right into room 311",
        "room 608": "Turn left then a slight right into room 311",
      },
    },
    {
      node: "room 309",
      weight: 1,
      direction: "Slight right into room 309",
      directionFrom: {
        "hall 600 hall 100 meet":
          "Turn right then a slight right into room 309",
        "hall 600 hall 500 meet": "Turn left then a slight right into room 309",
        "room 608": "Turn left then a slight right into room 309",
      },
    },
    {
      node: "room 309A",
      weight: 1,
      direction: "Slight right into room 309A",
      directionFrom: {
        "hall 600 hall 100 meet":
          "Turn right then a slight right into room 309A",
        "hall 600 hall 500 meet":
          "Turn left then a slight right into room 309A",
        "room 608": "Turn left then a slight right into room 309A",
      },
    },
    {
      node: "room 308",
      weight: 1,
      direction: "Slight left into room 308",
      directionFrom: {
        "hall 600 hall 100 meet": "Turn right then a slight left into room 308",
        "hall 600 hall 500 meet": "Turn left then a slight left into room 308",
        "room 608": "Turn left then a slight left into room 308",
      },
    },
    {
      node: "room 310",
      weight: 1,
      direction: "Slight left into room 310",
      directionFrom: {
        "hall 600 hall 100 meet": "Turn right then a slight left into room 310",
        "hall 600 hall 500 meet": "Turn left then a slight left into room 310",
        "room 608": "Turn left then a slight left into room 310",
      },
    },
    {
      node: "room 312",
      weight: 1,
      direction: "Slight left into room 312",
      directionFrom: {
        "hall 600 hall 100 meet": "Turn right then a slight left into room 312",
        "hall 600 hall 500 meet": "Turn left then a slight left into room 312",
        "room 608": "Turn left then a slight left into room 312",
      },
    },
    {
      node: "room 602",
      weight: 1,
      direction: "Slight right into room 602",
      directionFrom: {
        "hall 300 mid": "Turn left then a slight right into room 602",
      },
    },
    {
      node: "room 604",
      weight: 1,
      direction: "Slight right into room 604",
      directionFrom: {
        "hall 300 mid": "Turn left then a slight right into room 604",
      },
    },
    {
      node: "room 606",
      weight: 1,
      direction: "Slight left into room 606",
      directionFrom: {
        "hall 300 mid": "Turn right then a slight left into room 606",
      },
    },
    {
      node: "room 608",
      weight: 1,
      direction: "Slight left into room 608",
      directionFrom: {
        "hall 300 mid": "Turn right then a slight left into room 608",
      },
    },
    {
      node: "room 521A",
      weight: 1,
      direction: "Slight right into room 521A",
      directionFrom: {
        "hall 300 mid": "Turn right then a slight right into room 521A",
      },
    },
  ],
  // Done

  // Hall 400
  "hall 400 hall 900 meet": [
    {
      node: "hall 700 hall 400 meet",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 900 mid": "Turn right",
      },
    },
    {
      node: "hall 1100 hall 400 meet",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 900 mid": "Turn left",
        "room 901": "Turn left",
        "room 901A": "Turn left",
        "room 905": "Turn left",
        "room 902": "Turn left",
      },
    },
    {
      node: "hall 900 mid",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 700 hall 400 meet": "Turn left",
        "room 412": "Turn left",
        "room 409 assessment center": "Turn left",
        "hall 1100 hall 400 meet": "Turn right",
        "room 411": "Turn right",
        "room 414": "Turn right",
      },
    },
    {
      node: "room 409",
      weight: 1,
      direction: "Slight left into room 409",
      directionFrom: {
        "hall 900 mid": "Turn right then a slight left into room 409",
      },
    },
    {
      node: "room 412",
      weight: 1,
      direction: "Slight right into room 412",
      directionFrom: {
        "hall 900 mid": "Turn right then a slight right into room 412",
      },
    },
    {
      node: "room 411",
      weight: 1,
      direction: "Slight right into room 411",
      directionFrom: {
        "hall 900 mid": "Turn left then a slight right into room 411",
      },
    },
    {
      node: "room 414",
      weight: 1,
      direction: "Slight left into room 414",
      directionFrom: {
        "hall 900 mid": "Turn left then a slight left into room 414",
      },
    },
    {
      node: "room 901",
      weight: 1,
      direction: "Slight left into room 901",
      directionFrom: {
        "hall 700 hall 400 meet": "Turn left then a slight left into room 901",
        "room 412": "Turn left then a slight left into room 901",
        "room 409 assessment center":
          "Turn left then a slight left into room 901",
        "hall 1100 hall 400 meet":
          "Turn right then a slight left into room 901",
        "room 411": "Turn right then a slight left into room 901",
        "room 414": "Turn right then a slight left into room 901",
      },
    },
    {
      node: "room 901A",
      weight: 1,
      direction: "Slight left into room 901A",
      directionFrom: {
        "hall 700 hall 400 meet": "Turn left then a slight left into room 901A",
        "room 412": "Turn left then a slight left into room 901A",
        "room 409 assessment center":
          "Turn left then a slight left into room 901A",
        "hall 1100 hall 400 meet":
          "Turn right then a slight left into room 901A",
        "room 411": "Turn right then a slight left into room 901A",
        "room 414": "Turn right then a slight left into room 901A",
      },
    },
    {
      node: "room 905",
      weight: 1,
      direction: "Slight left into room 905",
      directionFrom: {
        "hall 700 hall 400 meet": "Turn left then a slight left into room 905",
        "room 412": "Turn left then a slight left into room 901",
        "room 409 assessment center":
          "Turn left then a slight left into room 905",
        "hall 1100 hall 400 meet":
          "Turn right then a slight left into room 905",
        "room 411": "Turn right then a slight left into room 905",
        "room 414": "Turn right then a slight left into room 905",
      },
    },
    {
      node: "room 902",
      weight: 1,
      direction: "Slight right into room 902",
      directionFrom: {
        "hall 700 hall 400 meet": "Turn left then a slight right into room 902",
        "room 412": "Turn left then a slight right into room 902",
        "room 409 assessment center":
          "Turn left then a slight right into room 902",
        "hall 1100 hall 400 meet":
          "Turn right then a slight left into room 905",
        "room 411": "Turn right then a slight right into room 902",
        "room 414": "Turn right then a slight right into room 902",
      },
    },
  ], // Done
  "hall 400 left mid": [
    {
      node: "hall 700 hall 400 meet",
      weight: 1,
      direction: "Continue straight",
    },
    {
      node: "hall 500 hall 400 meet",
      weight: 1,
      direction: "Continue straight",
    },
    {
      node: "room 402",
      weight: 1,
      direction: "Slight right into room 402",
    },
    {
      node: "room 404",
      weight: 1,
      direction: "Slight right into room 404",
    },
    {
      node: "room 401",
      weight: 1,
      direction: "Slight left into room 401",
    },
    {
      node: "room 403",
      weight: 1,
      direction: "Slight left into room 403",
    },
    {
      node: "room 406",
      weight: 1,
      direction: "Slight left into room 406",
    },
    {
      node: "room 408",
      weight: 1,
      direction: "Slight left into room 408",
    },
    {
      node: "room 410",
      weight: 1,
      direction: "Slight left into room 410",
    },
    {
      node: "room 405",
      weight: 1,
      direction: "Slight right into room 405",
    },
  ], // Done

  // Rooms hall 400
  "room 412": [
    {
      node: "hall 700 hall 400 meet",
      weight: 1.1,
      direction: "Turn right",
    },
    {
      node: "hall 400 hall 900 meet",
      weight: 1.1,
      direction: "Turn left",
    },
    {
      node: "room 409",
      weight: 1.1,
      direction:
        "Turn left then a slight right into room 409 - Assessment Center",
    },
  ], // Done
  "room 409 assessment center": [
    {
      node: "hall 700 hall 400 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 400 hall 900 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 412",
      weight: 1,
      direction: "Turn left then a slight right into room 412",
    },
  ],
  "room 414": [
    {
      node: "hall 400 hall 900 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 1100 hall 400 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 411",
      weight: 1,
      direction: "Turn left then a slight right into room 411",
    },
    {
      node: "room 414A",
      weight: 1,
      direction: "Continue staight into room 414A",
    },
  ],
  "room 414A": [
    {
      node: "room 414",
      weight: 1,
      direction: "Go straight into room 414",
    },
  ],
  "room 411": [
    {
      node: "hall 400 hall 900 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 1100 hall 400 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 414",
      weight: 1,
      direction: "Turn right then a slight right into room 414",
    },
  ], // Done
  "room 410": [
    {
      node: "hall 400 hall 900 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 400 left mid",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 405",
      weight: 1,
      direction: "Turn right then a slight left into room 405",
    },
    {
      node: "room 408",
      weight: 1,
      direction: "Turn right then a slight right into room 408",
    },
    {
      node: "room 406",
      weight: 1,
      direction: "Turn right then a slight right into room 406",
    },
  ], // Done
  "room 405": [
    {
      node: "hall 700 hall 400 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 400 left mid",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 410",
      weight: 1,
      direction: "Turn right then a slight left into room 410",
    },
    {
      node: "room 408",
      weight: 1,
      direction: "Turn right then a slight left into room 408",
    },
    {
      node: "room 406",
      weight: 1,
      direction: "Straight into room 406",
    },
  ], // Done
  "room 406": [
    {
      node: "hall 700 hall 400 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 400 left mid",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 410",
      weight: 1,
      direction: "Turn left then a slight left into room 410",
    },
    {
      node: "room 408",
      weight: 1,
      direction: "Turn left then a slight left into room 408",
    },
    {
      node: "room 405",
      weight: 1,
      direction: "Straight into room 405",
    },
  ], // Done
  "room 408": [
    {
      node: "hall 700 hall 400 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 400 left mid",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 410",
      weight: 1,
      direction: "Turn left then a slight left into room 410",
    },
    {
      node: "room 406",
      weight: 1,
      direction: "Turn right then a slight right into room 406",
    },
    {
      node: "room 405",
      weight: 1,
      direction: "Straight into room 405",
    },
  ], // Done
  "room 403": [
    {
      node: "hall 400 left mid",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 500 hall 400 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 401",
      weight: 1,
      direction: "Turn left then a slight left into room 401",
    },
    {
      node: "room 404",
      weight: 1,
      direction: "Straight into room 401",
    },
    {
      node: "room 402",
      weight: 1,
      direction: "Turn left then a slight right into room 402",
    },
  ], // Done
  "room 401": [
    {
      node: "hall 400 left mid",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 500 hall 400 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 404",
      weight: 1,
      direction: "Turn right then a slight left into room 404",
    },
    {
      node: "room 402",
      weight: 1,
      direction: "Straight into room 402",
    },
    {
      node: "room 403",
      weight: 1,
      direction: "Turn right then a slight right into room 403",
    },
  ], // Done
  "room 402": [
    {
      node: "hall 400 left mid",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 500 hall 400 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 404",
      weight: 1,
      direction: "Turn left then a slight left into room 404",
    },
    {
      node: "room 401",
      weight: 1,
      direction: "Straight into room 401",
    },
    {
      node: "room 403",
      weight: 1,
      direction: "Turn left then a slight right into room 403",
    },
  ], // Done
  "room 404": [
    {
      node: "hall 400 left mid",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 500 hall 400 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 402",
      weight: 1,
      direction: "Turn right then a slight right into room 402",
    },
    {
      node: "room 401",
      weight: 1,
      direction: "Turn right then a slight left into room 401",
    },
    {
      node: "room 403",
      weight: 1,
      direction: "Turn left then a slight right into room 403",
    },
  ], // Done

  // Hall 500
  "hall 500 start": [
    {
      node: "hall 500 bottom",
      weight: 1,
      direction: "Continue straight",
    },
    {
      node: "hall 200 hall 500 meet",
      weight: 1,
      direction: "Continue straight",
    },
    {
      node: "room 513",
      weight: 1,
      direction: "Slight left into room 513",
    },
  ], // Done
  "hall 500 bottom": [
    {
      node: "hall 500 start",
      weight: 1,
      direction: "Continue straight",
      directionFrom: { "hall 500 bottom mid": "Turn left" },
    },
    {
      node: "hall 500 bottom mid",
      weight: 1,
      direction: "Continue straight",
      directionFrom: { "hall 500 start": "Turn right" },
    },
    {
      node: "room 505",
      weight: 1,
      direction: "Slight right into room 505",
    },
    {
      node: "room 503",
      weight: 1,
      direction: "Slight right into room 503",
    },
    {
      node: "room 506",
      weight: 1,
      direction: "Slight left into room 506",
    },
  ], // Dome
  "hall 500 bottom mid": [
    {
      node: "hall 500 bottom",
      weight: 1,
      direction: "Continue straight",
    },
    {
      node: "library",
      weight: 1,
      direction: "Continue straight to the Library",
    },
    {
      node: "room 501",
      weight: 1,
      direction: "Slight right into room 501",
    },
    {
      node: "room 502",
      weight: 1,
      direction: "Slight left into room 502",
    },
    {
      node: "room 503",
      weight: 1,
      direction: "Slight left into room 503",
    },
    {
      node: "room 505",
      weight: 1,
      direction: "Slight left into room 503",
    },
    {
      node: "room 506",
      weight: 1,
      direction: "Slight right into room 506",
    },
  ], // Done
  "hall 500 hall 400 meet": [
    {
      node: "hall 200 hall 500 meet",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 400 left mid": "Turn left",
        "room 401": "Turn left",
        "room 403": "Turn left",
        "room 402": "Turn left",
        "room 404": "Turn left",
      },
    },
    {
      node: "hall 400 left mid",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 200 hall 500 meet": "Turn right",
        "room 515": "Turn right",
        "room 517": "Turn right",
        "hall 600 hall 500 meet": "Turn left",
        "room 521": "Turn left",
        "room 519": "Turn left",
      },
    },
    {
      node: "room 402",
      weight: 1,
      direction: "Slight left into room 402",
      directionFrom: {
        "hall 200 hall 500 meet": "Turn right then a slight left into room 402",
        "room 515": "Turn right then a slight left into room 402",
        "room 517": "Turn right then a slight left into room 402",
        "hall 600 hall 500 meet": "Turn left then a slight left into room 402",
        "room 521": "Turn left then a slight left into room 402",
        "room 519": "Turn left then a slight left into room 402",
      },
    },
    {
      node: "room 404",
      weight: 1,
      direction: "Slight left into room 404",
      directionFrom: {
        "hall 200 hall 500 meet": "Turn right then a slight left into room 404",
        "room 515": "Turn right then a slight left into room 404",
        "room 517": "Turn right then a slight left into room 404",
        "hall 600 hall 500 meet": "Turn left then a slight left into room 404",
        "room 521": "Turn left then a slight left into room 404",
        "room 519": "Turn left then a slight left into room 404",
      },
    },
    {
      node: "room 401",
      weight: 1,
      direction: "Slight right into room 401",
      directionFrom: {
        "hall 200 hall 500 meet":
          "Turn right then a slight right into room 401",
        "room 515": "Turn right then a slight right into room 401",
        "room 517": "Turn right then a slight right into room 401",
        "hall 600 hall 500 meet": "Turn left then a slight right into room 401",
        "room 521": "Turn left then a slight right into room 401",
        "room 519": "Turn left then a slight right into room 401",
      },
    },
    {
      node: "room 403",
      weight: 1,
      direction: "Slight right into room 403",
      directionFrom: {
        "hall 200 hall 500 meet":
          "Turn right then a slight right into room 403",
        "room 515": "Turn right then a slight right into room 403",
        "room 517": "Turn right then a slight right into room 403",
        "hall 600 hall 500 meet": "Turn left then a slight right into room 403",
        "room 521": "Turn left then a slight right into room 403",
        "room 519": "Turn left then a slight right into room 403",
      },
    },
    {
      node: "room 521",
      weight: 1,
      direction: "Slight left into room 521",
      directionFrom: {
        "hall 400 left mid": "Turn right then a slight left into room 521",
        "room 401": "Turn right then a slight left into room 521",
        "room 402": "Turn right then a slight left into room 521",
        "room 403": "Turn right then a slight left into room 521",
        "room 404": "Turn right then a slight left into room 521",
      },
    },
    {
      node: "room 519",
      weight: 1,
      direction: "Slight left into room 519",
      directionFrom: {
        "hall 400 left mid": "Turn right then a slight left into room 519",
        "room 401": "Turn right then a slight left into room 519",
        "room 402": "Turn right then a slight left into room 519",
        "room 403": "Turn right then a slight left into room 519",
        "room 404": "Turn right then a slight left into room 519",
      },
    },
    {
      node: "room 517",
      weight: 1,
      direction: "Slight right into room 517",
      directionFrom: {
        "hall 400 left mid": "Turn left then a slight right into room 517",
        "room 401": "Turn left then a slight right into room 517",
        "room 402": "Turn left then a slight right into room 517",
        "room 403": "Turn left then a slight right into room 517",
        "room 404": "Turn left then a slight right into room 517",
      },
    },
    {
      node: "room 515",
      weight: 1,
      direction: "Slight right into room 515",
      directionFrom: {
        "hall 400 left mid": "Turn left then a slight right into room 515",
        "room 401": "Turn left then a slight right into room 515",
        "room 402": "Turn left then a slight right into room 515",
        "room 403": "Turn left then a slight right into room 515",
        "room 404": "Turn left then a slight right into room 515",
      },
    },
  ],

  // Rooms hall 500
  library: [
    {
      node: "hall 500 bottom mid",
      weight: 1,
      direction: "Continue straight",
    },
    {
      node: "room 501",
      weight: 1,
      direction: "Slight left into room 501",
    },
    {
      node: "room 502",
      weight: 1,
      direction: "Slight right into room 502",
    },
  ], // Done
  "room 501": [
    {
      node: "hall 500 bottom mid",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "library",
      weight: 1,
      direction: "Turn right then straight to the Library",
    },
    {
      node: "room 502",
      weight: 1,
      direction: "Turn left then a slight right into room 502",
    },
  ], // Done
  "room 502": [
    {
      node: "hall 500 bottom mid",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "library",
      weight: 1,
      direction: "Turn left then straight to the Library",
    },
    {
      node: "room 501",
      weight: 1,
      direction: "Turn left then a slight right into room 501",
    },
  ], // Done
  "room 503": [
    {
      node: "hall 500 bottom mid",
      weight: 1,
      direction: "Turn right",
    },
  ], // Done
  "room 505": [
    {
      node: "hall 500 bottom mid",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 500 bottom",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 506",
      weight: 1,
      direction: "Turn left then a slight right into room 506",
    },
  ], // Done
  "room 506": [
    {
      node: "hall 500 bottom mid",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 500 bottom",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 506",
      weight: 1,
      direction: "Turn left then a slight right into room 506",
    },
  ], // Done
  "room 513": [
    {
      node: "hall 500 start",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 200 hall 500 meet",
      weight: 1,
      direction: "Turn left",
    },
  ], // Done
  "room 515": [
    {
      node: "hall 200 hall 500 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 500 hall 400 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 517",
      weight: 1,
      direction: "Turn left then a slight left into room 517",
    },
  ], // Done
  "room 517": [
    {
      node: "hall 200 hall 500 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 500 hall 400 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 515",
      weight: 1,
      direction: "Turn right then a slight right into room 517",
    },
  ], // Done
  "room 519": [
    {
      node: "hall 600 hall 500 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 500 hall 400 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 521",
      weight: 1,
      direction: "Turn left then a slight left into room 521",
    },
  ], // Done
  "room 521": [
    {
      node: "hall 600 hall 500 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 500 hall 400 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 519",
      weight: 1,
      direction: "Turn right then a slight right into room 521",
    },
  ], // Done
  "room 521A": [
    {
      node: "hall 600 hall 500 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 600 left mid",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 608",
      weight: 1,
      direction: "Turn left then a slight right into room 608",
    },
    {
      node: "room 606",
      weight: 1,
      direction: "Turn left then a slight right into room 606",
    },
  ], // Done
  "room 516 ged testing": [
    {
      node: "hall 800 hall 500 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 518",
      weight: 1,
      direction: "Turn right then a slight right into room 518",
    },
    {
      node: "room 525",
      weight: 1,
      direction: "Turn right then a slight left into room 525",
    },
  ], // Done
  "room 518": [
    {
      node: "hall 800 hall 500 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 516 ged testing",
      weight: 1,
      direction: "Turn left then a slight left into room 516 - GED Testing",
    },
    {
      node: "room 525",
      weight: 1,
      direction: "Turn left then a slight right into room 525",
    },
  ], // Done
  "room 525": [
    {
      node: "hall 800 hall 500 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 516 ged testing",
      weight: 1,
      direction: "Turn right then a slight left into room 516 - GED Testing",
    },
    {
      node: "room 518",
      weight: 1,
      direction: "Turn left then a slight right into room 518",
    },
  ], // Done

  // Hall 600
  "hall 600 hall 500 meet": [
    {
      node: "hall 600 right mid",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 500 hall 400 meet": "Turn right",
        "room 521": "Turn right",
        "room 519": "Turn right",
        "room 402": "Turn right",
        "hall 800 hall 500 meet": "Turn left",
      },
    },
    {
      node: "hall 300 hall 600 meet",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 500 hall 400 meet": "Turn left",
        "room 521": "Turn left",
        "room 519": "Turn left",
        "room 402": "Turn left",
        "hall 800 hall 500 meet": "Turn right",
      },
    },
    {
      node: "hall 500 hall 400 meet",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 300 hall 600 meet": "Turn right",
        "room 521A": "Turn right",
        "room 608": "Turn right",
        "room 606": "Turn right",
        "hall 600 right mid": "Turn left",
        "room 610": "Turn left",
        "room 603": "Turn left",
        "room 605": "Turn left",
        "room 612": "Turn left",
      },
    },

    {
      node: "room 610",
      weight: 1,
      direction: "Slight left into room 610",
      directionFrom: {
        "hall 500 hall 400 meet": "Turn right then a slight left into room 610",
        "room 521": "Turn right then a slight left into room 610",
        "room 519": "Turn right then a slight left into room 610",
        "room 402": "Turn right then a slight left into room 610",
        "hall 800 hall 500 meet": "Turn left then a slight left into room 610",
      },
    },
    {
      node: "room 603",
      weight: 1,
      direction: "Slight right into room 603",
      directionFrom: {
        "hall 500 hall 400 meet":
          "Turn right then a slight right into room 603",
        "room 521": "Turn right then a slight right into room 603",
        "room 519": "Turn right then a slight right into room 603",
        "room 402": "Turn right then a slight right into room 603",
        "hall 800 hall 500 meet": "Turn left then a slight right into room 603",
      },
    },
    {
      node: "room 612",
      weight: 1,
      direction: "Slight left into room 612",
      directionFrom: {
        "hall 500 hall 400 meet": "Turn right then a slight left into room 612",
        "room 521": "Turn right then a slight left into room 612",
        "room 519": "Turn right then a slight left into room 612",
        "room 402": "Turn right then a slight left into room 612",
        "hall 800 hall 500 meet": "Turn left then a slight left into room 612",
      },
    },
    {
      node: "room 605",
      weight: 1,
      direction: "Slight right into room 605",
      directionFrom: {
        "hall 500 hall 400 meet":
          "Turn right then a slight right into room 605",
        "room 521": "Turn right then a slight right into room 605",
        "room 519": "Turn right then a slight right into room 605",
        "room 402": "Turn right then a slight right into room 605",
        "hall 800 hall 500 meet": "Turn left then a slight right into room 605",
      },
    },
    {
      node: "room 608",
      weight: 1,
      direction: "Slight right into room 608",
      directionFrom: {
        "hall 500 hall 400 meet": "Turn left then a slight right into room 608",
        "room 521": "Turn left then a slight right into room 608",
        "room 519": "Turn left then a slight right into room 608",
        "room 402": "Turn left then a slight right into room 608",
        "hall 800 hall 500 meet":
          "Turn right then a slight right into room 608",
      },
    },
    {
      node: "room 606",
      weight: 1,
      direction: "Slight right into room 606",
      directionFrom: {
        "hall 500 hall 400 meet": "Turn left then a slight right into room 606",
        "room 521": "Turn left then a slight right into room 606",
        "room 519": "Turn left then a slight right into room 606",
        "room 402": "Turn left then a slight right into room 606",
        "hall 800 hall 500 meet":
          "Turn right then a slight right into room 606",
      },
    },
    {
      node: "room 521A",
      weight: 1,
      direction: "Slight left into room 521A",
      directionFrom: {
        "hall 500 hall 400 meet": "Turn left then a slight left into room 521A",
        "room 521": "Turn left then a slight left into room 521A",
        "room 519": "Turn left then a slight left into room 521A",
        "room 402": "Turn left then a slight left into room 521A",
        "hall 800 hall 500 meet":
          "Turn right then a slight left into room 521A",
      },
    },
  ], // Done
  "hall 600 right mid": [
    {
      node: "hall 600 hall 500 meet",
      weight: 1,
      direction: "Continue straight",
    },
    {
      node: "hall 600 hall 700 meet",
      weight: 1,
      direction: "Continue straight",
    },
    {
      node: "room 603",
      weight: 1,
      direction: "Slight left into room 603",
    },
    {
      node: "room 605",
      weight: 1,
      direction: "Slight left into room 605",
    },
    {
      node: "room 610",
      weight: 1,
      direction: "Slight right into room 610",
    },
    {
      node: "room 612",
      weight: 1,
      direction: "Slight right into room 612",
    },
    {
      node: "room 614",
      weight: 1,
      direction: "Slight left into room 614",
    },
    {
      node: "room 607",
      weight: 1,
      direction: "Slight right into room 607",
    },
    {
      node: "room 609",
      weight: 1,
      direction: "Slight right into room 609",
    },
    {
      node: "room 709",
      weight: 1,
      direction: "Slight right into room 709",
    },
    {
      node: "room 616",
      weight: 1,
      direction: "Slight left into room 616",
    },
  ], // Done
  "hall 600 hall 700 meet": [
    {
      node: "hall 600 right mid",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 700 hall 400 meet": "Turn left",
        "room 706": "Turn left",
        "room 708": "Turn left",
        "hall 800 hall 700 meet": "Turn right",
        "room 711": "Turn right",
        "room 710": "Turn right",
        "room 712": "Turn right",
        "room 713": "Turn right",
        "room 714": "Turn right",
        "room 715": "Turn right",
      },
    },
    {
      node: "hall 800 hall 700 meet",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 600 right mid": "Turn left",
        "room 614": "Turn left",
        "room 607": "Turn left",
        "room 609": "Turn left",
        "room 616": "Turn left",
        "room 709": "Turn left",
      },
    },
    {
      node: "room 616",
      weight: 1,
      direction: "Slight right into room 616",
      directionFrom: {
        "hall 700 hall 400 meet": "Turn left then a slight right into room 616",
        "room 706": "Turn left then a slight right into room 616",
        "room 708": "Turn left then a slight right into room 616",
        "hall 800 hall 700 meet":
          "Turn right then a slight right into room 616",
        "room 711": "Turn right then a slight right into room 616",
        "room 710": "Turn right then a slight right into room 616",
        "room 712": "Turn right then a slight right into room 616",
        "room 713": "Turn right then a slight right into room 616",
        "room 714": "Turn right then a slight right into room 616",
        "room 715": "Turn right then a slight right into room 616",
      },
    },
    {
      node: "room 614",
      weight: 1,
      direction: "Slight right into room 614",
      directionFrom: {
        "hall 700 hall 400 meet": "Turn left then a slight right into room 614",
        "room 706": "Turn left then a slight right into room 614",
        "room 708": "Turn left then a slight right into room 614",
        "hall 800 hall 700 meet":
          "Turn right then a slight right into room 614",
        "room 711": "Turn right then a slight right into room 614",
        "room 710": "Turn right then a slight right into room 614",
        "room 712": "Turn right then a slight right into room 614",
        "room 713": "Turn right then a slight right into room 614",
        "room 714": "Turn right then a slight right into room 614",
        "room 715": "Turn right then a slight right into room 614",
      },
    },
    {
      node: "room 607",
      weight: 1,
      direction: "Slight left into room 607",
      directionFrom: {
        "hall 700 hall 400 meet": "Turn left then a slight left into room 607",
        "room 706": "Turn left then a slight left into room 607",
        "room 708": "Turn left then a slight left into room 607",
        "hall 800 hall 700 meet": "Turn right then a slight left into room 607",
        "room 711": "Turn right then a slight left into room 607",
        "room 710": "Turn right then a slight left into room 607",
        "room 712": "Turn right then a slight left into room 607",
        "room 713": "Turn right then a slight left into room 607",
        "room 714": "Turn right then a slight left into room 607",
        "room 715": "Turn right then a slight left into room 607",
      },
    },
    {
      node: "room 609",
      weight: 1,
      direction: "Slight left into room 609",
      directionFrom: {
        "hall 700 hall 400 meet": "Turn left then a slight left into room 609",
        "room 706": "Turn left then a slight left into room 609",
        "room 708": "Turn left then a slight left into room 609",
        "hall 800 hall 700 meet": "Turn right then a slight left into room 609",
        "room 711": "Turn right then a slight left into room 609",
        "room 710": "Turn right then a slight left into room 609",
        "room 712": "Turn right then a slight left into room 609",
        "room 713": "Turn right then a slight left into room 609",
        "room 714": "Turn right then a slight left into room 609",
        "room 715": "Turn right then a slight left into room 609",
      },
    },
    {
      node: "room 709",
      weight: 1,
      direction: "Slight left into room 709",
      directionFrom: {
        "hall 700 hall 400 meet": "Turn left then a slight left into room 709",
        "room 706": "Turn left then a slight left into room 709",
        "room 708": "Turn left then a slight left into room 709",
        "hall 800 hall 700 meet": "Turn right then a slight left into room 709",
        "room 711": "Turn right then a slight left into room 709",
        "room 710": "Turn right then a slight left into room 709",
        "room 712": "Turn right then a slight left into room 709",
        "room 713": "Turn right then a slight left into room 709",
        "room 714": "Turn right then a slight left into room 709",
        "room 715": "Turn right then a slight left into room 709",
      },
    },
    {
      node: "room 706",
      weight: 1,
      direction: "Slight left into room 706",
      directionFrom: {
        "hall 600 right mid": "Turn right then a slight left into room 706",
        "room 709": "Turn right then a slight left into room 706",
        "room 609": "Turn right then a slight left into room 706",
        "room 616": "Turn right then a slight left into room 706",
        "room 607": "Turn right then a slight left into room 706",
        "room 614": "Turn right then a slight left into room 706",
      },
    },
    {
      node: "room 708",
      weight: 1,
      direction: "Slight left into room 708",
      directionFrom: {
        "hall 600 right mid": "Turn right then a slight left into room 708",
        "room 709": "Turn right then a slight left into room 708",
        "room 609": "Turn right then a slight left into room 708",
        "room 616": "Turn right then a slight left into room 708",
        "room 607": "Turn right then a slight left into room 708",
        "room 614": "Turn right then a slight left into room 708",
      },
    },
    {
      node: "room 710",
      weight: 1,
      direction: "Slight right into room 710",
      directionFrom: {
        "hall 600 right mid": "Turn left then a slight right into room 710",
        "room 709": "Turn left then a slight right into room 710",
        "room 609": "Turn left then a slight right into room 710",
        "room 616": "Turn left then a slight right into room 710",
        "room 607": "Turn left then a slight right into room 710",
        "room 614": "Turn left then a slight right into room 710",
      },
    },
    {
      node: "room 712",
      weight: 1,
      direction: "Slight right into room 712",
      directionFrom: {
        "hall 600 right mid": "Turn left then a slight right into room 712",
        "room 709": "Turn left then a slight right into room 712",
        "room 609": "Turn left then a slight right into room 712",
        "room 616": "Turn left then a slight right into room 712",
        "room 607": "Turn left then a slight right into room 712",
        "room 614": "Turn left then a slight right into room 712",
      },
    },
    {
      node: "room 714",
      weight: 1,
      direction: "Slight right into room 714",
      directionFrom: {
        "hall 600 right mid": "Turn left then a slight right into room 714",
        "room 709": "Turn left then a slight right into room 714",
        "room 609": "Turn left then a slight right into room 714",
        "room 616": "Turn left then a slight right into room 714",
        "room 607": "Turn left then a slight right into room 714",
        "room 614": "Turn left then a slight right into room 714",
      },
    },
    {
      node: "room 711",
      weight: 1,
      direction: "Slight left into room 711",
      directionFrom: {
        "hall 600 right mid": "Turn left then a slight left into room 711",
        "room 709": "Turn left then a slight left into room 711",
        "room 609": "Turn left then a slight left into room 711",
        "room 616": "Turn left then a slight left into room 711",
        "room 607": "Turn left then a slight left into room 711",
        "room 614": "Turn left then a slight left into room 711",
      },
    },
    {
      node: "room 713",
      weight: 1,
      direction: "Slight left into room 713",
      directionFrom: {
        "hall 600 right mid": "Turn left then a slight left into room 713",
        "room 709": "Turn left then a slight left into room 713",
        "room 609": "Turn left then a slight left into room 713",
        "room 616": "Turn left then a slight left into room 713",
        "room 607": "Turn left then a slight left into room 713",
        "room 614": "Turn left then a slight left into room 713",
      },
    },
    {
      node: "room 715",
      weight: 1,
      direction: "Slight left into room 715",
      directionFrom: {
        "hall 600 right mid": "Turn left then a slight left into room 715",
        "room 709": "Turn left then a slight left into room 715",
        "room 609": "Turn left then a slight left into room 715",
        "room 616": "Turn left then a slight left into room 715",
        "room 607": "Turn left then a slight left into room 715",
        "room 614": "Turn left then a slight left into room 715",
      },
    },
  ], // Done

  // Rooms hall 600
  "room 602": [
    {
      node: "hall 100 hall 600 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 300 hall 600 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 604",
      weight: 1,
      direction: "Turn left then a slight left into room 604",
    },
  ], // Done
  "room 604": [
    {
      node: "hall 100 hall 600 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 300 hall 600 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 602",
      weight: 1,
      direction: "Turn right then a slight right into room 602",
    },
  ], // Done
  "room 606": [
    {
      node: "hall 300 hall 600 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 600 hall 500 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 608",
      weight: 1,
      direction: "Turn left then a slight left into room 608",
    },
    {
      node: "room 521A",
      weight: 1,
      direction: "Turn left then a slight right into room 521A",
    },
  ], // Done
  "room 608": [
    {
      node: "hall 300 hall 600 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 600 hall 500 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 606",
      weight: 1,
      direction: "Turn right then a slight right into room 606",
    },
    {
      node: "room 521A",
      weight: 1,
      direction: "Turn left then a slight right into room 521A",
    },
  ], // Done
  "room 610": [
    {
      node: "hall 600 hall 500 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 600 right mid",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 603",
      weight: 1,
      direction: "Turn left then a slight right into room 603",
    },
    {
      node: "room 612",
      weight: 1,
      direction: "Turn left then a slight left into room 612",
    },
    {
      node: "room 605",
      weight: 1,
      direction: "Turn left then a slight right into room 605",
    },
  ], // Done
  "room 610": [
    {
      node: "hall 600 hall 500 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 600 right mid",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 603",
      weight: 1,
      direction: "Straight ahead into room 603",
    },
    {
      node: "room 612",
      weight: 1,
      direction: "Turn left then a slight left into room 612",
    },
    {
      node: "room 605",
      weight: 1,
      direction: "Turn left then a slight right into room 605",
    },
  ], // Done
  "room 612": [
    {
      node: "hall 600 hall 500 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 600 right mid",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 603",
      weight: 1,
      direction: "Straight ahead into room 603",
    },
    {
      node: "room 610",
      weight: 1,
      direction: "Turn right then a slight right into room 610",
    },
    {
      node: "room 605",
      weight: 1,
      direction: "Turn left then a slight right into room 605",
    },
  ], // Done
  "room 603": [
    {
      node: "hall 600 hall 500 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 600 right mid",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 612",
      weight: 1,
      direction: "Straight ahead into room 612",
    },
    {
      node: "room 610",
      weight: 1,
      direction: "Turn left then a slight right into room 610",
    },
    {
      node: "room 605",
      weight: 1,
      direction: "Turn right then a slight right into room 605",
    },
  ], // Done
  "room 605": [
    {
      node: "hall 600 hall 500 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 600 right mid",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 612",
      weight: 1,
      direction: "Turn left then a slight right into room 612",
    },
    {
      node: "room 610",
      weight: 1,
      direction: "Turn left then a slight right into room 610",
    },
    {
      node: "room 603",
      weight: 1,
      direction: "Turn left then a slight left into room 603",
    },
  ], // Done
  "room 614": [
    {
      node: "hall 600 right mid",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 607",
      weight: 1,
      direction: "Straight ahead into room 607",
    },
    {
      node: "room 609",
      weight: 1,
      direction: "Turn left then a slight right into room 609",
    },
    {
      node: "room 616",
      weight: 1,
      direction: "Turn left then a slight left into room 616",
    },
    {
      node: "room 709",
      weight: 1,
      direction: "Turn left then a slight right into room 709",
    },
    {
      node: "hall 600 hall 700 meet",
      weight: 1,
      direction: "Turn left",
    },
  ], // Done
  "room 616": [
    {
      node: "hall 600 right mid",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 607",
      weight: 1,
      direction: "Turn right then a slight left into room 607",
    },
    {
      node: "room 609",
      weight: 1,
      direction: "Straight ahead into room 609",
    },
    {
      node: "room 614",
      weight: 1,
      direction: "Turn right then a slight right into room 614",
    },
    {
      node: "room 709",
      weight: 1,
      direction: "Turn left then a slight right into room 709",
    },
    {
      node: "hall 600 hall 700 meet",
      weight: 1,
      direction: "Turn left",
    },
  ], // Done
  "room 607": [
    {
      node: "hall 600 right mid",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 616",
      weight: 1,
      direction: "Turn right then a slight left into room 616",
    },
    {
      node: "room 609",
      weight: 1,
      direction: "Turn right then a slight right into room 609",
    },
    {
      node: "room 614",
      weight: 1,
      direction: "Straight ahead into room 614",
    },
    {
      node: "room 709",
      weight: 1,
      direction: "Turn right then a slight right into room 709",
    },
    {
      node: "hall 600 hall 700 meet",
      weight: 1,
      direction: "Turn right",
    },
  ], // Done
  "room 609": [
    {
      node: "hall 600 right mid",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 616",
      weight: 1,
      direction: "Straight ahead into room 616",
    },
    {
      node: "room 607",
      weight: 1,
      direction: "Turn left then a slight left into room 607",
    },
    {
      node: "room 614",
      weight: 1,
      direction: "Turn left then a slight right into room 614",
    },
    {
      node: "room 709",
      weight: 1,
      direction: "Turn right then a slight right into room 709",
    },
    {
      node: "hall 600 hall 700 meet",
      weight: 1,
      direction: "Turn right",
    },
  ], // Done
  "room 709": [
    {
      node: "hall 600 right mid",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 616",
      weight: 1,
      direction: "Turn left then a slight right into room 616",
    },
    {
      node: "room 607",
      weight: 1,
      direction: "Turn left then a slight left into room 607",
    },
    {
      node: "room 614",
      weight: 1,
      direction: "Turn left then a slight right into room 614",
    },
    {
      node: "room 609",
      weight: 1,
      direction: "Turn left then a slight left into room 609",
    },
    {
      node: "hall 600 hall 700 meet",
      weight: 1,
      direction: "Turn right",
    },
  ], // Done

  // Hall 700
  "hall 700 hall 400 meet": [
    {
      node: "hall 200 hall 700 meet",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 400 hall 900 meet": "Turn left",
        "room 412": "Turn left",
        "room 409 assessment center": "Turn left",
        "hall 400 left mid": "Turn right",
        "room 405": "Turn right",
        "room 406": "Turn right",
        "room 408": "Turn right",
        "room 410": "Turn right",
      },
    },
    {
      node: "hall 600 hall 700 meet",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 400 hall 900 meet": "Turn right",
        "room 412": "Turn right",
        "room 409 assessment center": "Turn right",
        "hall 400 left mid": "Turn left",
        "room 405": "Turn left",
        "room 406": "Turn left",
        "room 408": "Turn left",
        "room 410": "Turn left",
      },
    },
    {
      node: "hall 400 hall 900 meet",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 600 hall 700 meet": "Turn left",
        "room 706": "Turn left",
        "room 708": "Turn left",
        "hall 200 hall 700 meet": "Turn right",
        "room 701 academic affairs": "Turn right",
        "room 704 police": "Turn right",
      },
    },
    {
      node: "hall 400 left mid",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 600 hall 700 meet": "Turn right",
        "room 706": "Turn right",
        "room 708": "Turn right",
        "room 701 academic affairs": "Turn left",
        "room 704 police": "Turn left",
        "hall 200 hall 700 meet": "Turn left",
      },
    },
    {
      node: "room 405",
      weight: 1,
      direction: "Slight left into room 405",
      directionFrom: {
        "hall 600 hall 700 meet": "Turn right then a slight left into room 405",
        "hall 200 hall 700 meet": "Turn left then a slight left into room 405",
      },
    },
    {
      node: "room 406",
      weight: 1,
      direction: "Slight right into room 406",
      directionFrom: {
        "hall 600 hall 700 meet":
          "Turn right then a slight right into room 406",
        "hall 200 hall 700 meet": "Turn left then a slight right into room 406",
      },
    },
    {
      node: "room 408",
      weight: 1,
      direction: "Slight right into room 408",
      directionFrom: {
        "hall 600 hall 700 meet":
          "Turn right then a slight right into room 408",
        "hall 200 hall 700 meet": "Turn left then a slight right into room 408",
      },
    },
    {
      node: "room 410",
      weight: 1,
      direction: "Slight right into room 410",
      directionFrom: {
        "hall 600 hall 700 meet":
          "Turn right then a slight right into room 410",
        "hall 200 hall 700 meet": "Turn left then a slight right into room 410",
      },
    },
    {
      node: "room 412",
      weight: 1,
      direction: "Slight left into room 410",
      directionFrom: {
        "hall 600 hall 700 meet": "Turn left then a slight left into room 412",
        "hall 200 hall 700 meet": "Turn right then a slight left into room 412",
      },
    },
    {
      node: "room 409 assessment center",
      weight: 1,
      direction: "Slight right into room 409 - Assessment Center",
      directionFrom: {
        "hall 600 hall 700 meet":
          "Turn left then a slight right into room 409 - Assessment Center",
        "hall 200 hall 700 meet":
          "Turn right then a slight right into room 409 - Assessment Center",
      },
    },
    {
      node: "room 701 academic affairs",
      weight: 1,
      direction: "Slight right into room 701 - Academic Affairs",
      directionFrom: {
        "hall 400 left mid":
          "Turn right then a slight right into room 701 - Academic Affairs",
        "hall 400 hall 900 meet":
          "Turn left then a slight right into room 701 - Academic Affairs",
      },
    },
    {
      node: "room 704 police",
      weight: 1,
      direction: "Slight left into room 704 - Police",
      directionFrom: {
        "hall 400 left mid":
          "Turn right then a slight left into room 704 - Police",
        "hall 400 hall 900 meet":
          "Turn left then a slight left into room 704 - Police",
      },
    },
    {
      node: "room 706",
      weight: 1,
      direction: "Slight right into room 706",
      directionFrom: {
        "hall 400 left mid": "Turn left then a slight right into room 706",
        "hall 400 hall 900 meet":
          "Turn right then a slight right into room 706",
      },
    },
    {
      node: "room 708",
      weight: 1,
      direction: "Slight right into room 708",
      directionFrom: {
        "hall 400 left mid": "Turn left then a slight right into room 708",
        "hall 400 hall 900 meet":
          "Turn right then a slight right into room 708",
      },
    },
  ], // Done
  "hall 700 top": [
    {
      node: "hall 800 hall 700 top",
      weight: 1,
      direction: "Continue straight",
      directionFrom: { "room 719": "Turn right", "room 717": "Turn right" },
    },
    {
      node: "room 717",
      weight: 1,
      direction: "Turn left then a slight left into room 717",
    },
    {
      node: "room 719",
      weight: 1,
      direction: "Turn left then a slight left into room 719",
    },
  ],

  // Rooms hall 700
  "room 701 academic affairs": [
    {
      node: "room 704 police",
      weight: 1,
      direction: "Straight ahead into room 704 - Police",
    },
    {
      node: "hall 200 hall 700 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 700 hall 400 meet",
      weight: 1,
      direction: "Turn left",
    },
  ], // Done
  "room 706": [
    {
      node: "hall 700 hall 400 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 600 hall 700 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 708",
      weight: 1,
      direction: "Turn right then a slight right into room 708",
    },
  ], // Done
  "room 704 police": [
    {
      node: "room 701 academic affairs",
      weight: 1,
      direction: "Straight ahead into room 701 - Academic Affairs",
    },
    {
      node: "hall 200 hall 700 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 700 hall 400 meet",
      weight: 1,
      direction: "Turn right",
    },
  ], // Done
  "room 708": [
    {
      node: "hall 700 hall 400 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 600 hall 700 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 706",
      weight: 1,
      direction: "Turn left then a slight left into room 706",
    },
    {
      node: "room 708A",
      weight: 1,
      direction: "Continue straight into room 708A",
    },
  ], // Done
  "room 708A": [
    {
      node: "room 708",
      weight: 1,
      direction: "Continue straight",
    },
  ], // Done
  "room 710": [
    {
      node: "hall 600 hall 700 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 800 hall 700 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 711",
      weight: 1,
      direction: "Straight ahead into room 711",
    },
    {
      node: "room 713",
      weight: 1,
      direction: "Turn right then a slight left into room 713",
    },
    {
      node: "room 715",
      weight: 1,
      direction: "Turn right then a slight left into room 715",
    },
    {
      node: "room 714",
      weight: 1,
      direction: "Turn right then a slight right into room 714",
    },
    {
      node: "room 712",
      weight: 1,
      direction: "Turn right then a slight right into room 712",
    },
  ], // Done
  "room 712": [
    {
      node: "hall 600 hall 700 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 800 hall 700 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 711",
      weight: 1,
      direction: "Turn left then a slight right into room 711",
    },
    {
      node: "room 713",
      weight: 1,
      direction: "Turn left then a slight right into room 713",
    },
    {
      node: "room 715",
      weight: 1,
      direction: "Turn right then a slight left into room 715",
    },
    {
      node: "room 714",
      weight: 1,
      direction: "Turn right then a slight right into room 714",
    },
    {
      node: "room 710",
      weight: 1,
      direction: "Turn left then a slight left into room 710",
    },
  ], // Done
  "room 714": [
    {
      node: "hall 600 hall 700 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 800 hall 700 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 711",
      weight: 1,
      direction: "Turn left then a slight right into room 711",
    },
    {
      node: "room 713",
      weight: 1,
      direction: "Turn left then a slight right into room 713",
    },
    {
      node: "room 715",
      weight: 1,
      direction: "Turn right then a slight left into room 715",
    },
    {
      node: "room 712",
      weight: 1,
      direction: "Turn left then a slight left into room 712",
    },
    {
      node: "room 710",
      weight: 1,
      direction: "Turn left then a slight left into room 710",
    },
  ], // Done
  "room 715": [
    {
      node: "hall 600 hall 700 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 800 hall 700 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 711",
      weight: 1,
      direction: "Turn right then a slight right into room 711",
    },
    {
      node: "room 713",
      weight: 1,
      direction: "Turn right then a slight right into room 713",
    },
    {
      node: "room 714",
      weight: 1,
      direction: "Turn left then a slight right into room 714",
    },
    {
      node: "room 712",
      weight: 1,
      direction: "Turn right then a slight left into room 712",
    },
    {
      node: "room 710",
      weight: 1,
      direction: "Turn right then a slight left into room 710",
    },
  ], // Done
  "room 713": [
    {
      node: "hall 600 hall 700 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 800 hall 700 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 711",
      weight: 1,
      direction: "Turn right then a slight right into room 711",
    },
    {
      node: "room 715",
      weight: 1,
      direction: "Turn left then a slight left into room 715",
    },
    {
      node: "room 714",
      weight: 1,
      direction: "Turn left then a slight right into room 714",
    },
    {
      node: "room 712",
      weight: 1,
      direction: "Turn left then a slight right into room 712",
    },
    {
      node: "room 710",
      weight: 1,
      direction: "Turn right then a slight left into room 710",
    },
  ], // Done
  "room 711": [
    {
      node: "hall 600 hall 700 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 800 hall 700 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 713",
      weight: 1,
      direction: "Turn left then a slight left into room 713",
    },
    {
      node: "room 715",
      weight: 1,
      direction: "Turn left then a slight left into room 715",
    },
    {
      node: "room 714",
      weight: 1,
      direction: "Turn left then a slight right into room 714",
    },
    {
      node: "room 712",
      weight: 1,
      direction: "Turn left then a slight right into room 712",
    },
    {
      node: "room 710",
      weight: 1,
      direction: "Straight ahead into room 710",
    },
  ], // Done
  "room 717": [
    {
      node: "hall 700 top",
      weight: 1,
      direction: "Turn right",
    },
  ], // Done
  "room 719": [
    {
      node: "hall 700 top",
      weight: 1,
      direction: "Turn right",
    },
  ], // Done

  // Hall 800
  "hall 800 hall 900 meet": [
    {
      node: "hall 1100 hall 800 meet",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 900 mid": "Turn right",
        "room 904": "Turn right",
        "room 906": "Turn right",
        "room 908": "Turn right",
        "room 907": "Turn right",
        "room 909": "Turn right",
      },
    },
    {
      node: "hall 800 hall 700 meet",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 900 mid": "Turn left",
        "room 904": "Turn left",
        "room 906": "Turn left",
        "room 908": "Turn left",
        "room 907": "Turn left",
        "room 909": "Turn left",
      },
    },
    {
      node: "room 824",
      weight: 1,
      direction: "Slight left into room 824",
      directionFrom: {
        "hall 900 mid": "Turn right then a slight left into room 824",
        "room 904": "Turn right then a slight left into room 824",
        "room 906": "Turn right then a slight left into room 824",
        "room 908": "Turn right then a slight left into room 824",
        "room 907": "Turn right then a slight left into room 824",
        "room 909": "Turn right then a slight left into room 824",
      },
    },
    {
      node: "room 822",
      weight: 1,
      direction: "Slight left into room 822",
      directionFrom: {
        "hall 900 mid": "Turn right then a slight left into room 822",
        "room 904": "Turn right then a slight left into room 822",
        "room 906": "Turn right then a slight left into room 822",
        "room 908": "Turn right then a slight left into room 822",
        "room 907": "Turn right then a slight left into room 822",
        "room 909": "Turn right then a slight left into room 822",
      },
    },
    {
      node: "room 829",
      weight: 1,
      direction: "Slight right into room 829",
      directionFrom: {
        "hall 900 mid": "Turn right then a slight right into room 829",
        "room 904": "Turn right then a slight right into room 829",
        "room 906": "Turn right then a slight right into room 829",
        "room 908": "Turn right then a slight right into room 829",
        "room 907": "Turn right then a slight right into room 829",
        "room 909": "Turn right then a slight right into room 829",
      },
    },
    {
      node: "room 820",
      weight: 1,
      direction: "Slight left into room 820",
      directionFrom: {
        "hall 1100 hall 800 meet": "Slight right into room 820",
      },
    },
    {
      node: "room 818",
      weight: 1,
      direction: "Slight right into room 818",
      directionFrom: {
        "hall 900 mid": "Turn left then a slight right into room 818",
        "room 904": "Turn left then a slight right into room 818",
        "room 906": "Turn left then a slight right into room 818",
        "room 908": "Turn left then a slight right into room 818",
        "room 907": "Turn left then a slight right into room 818",
        "room 909": "Turn left then a slight right into room 818",
      },
    },
    {
      node: "room 816",
      weight: 1,
      direction: "Slight right into room 816",
      directionFrom: {
        "hall 900 mid": "Turn left then a slight right into room 816",
        "room 904": "Turn left then a slight right into room 816",
        "room 906": "Turn left then a slight right into room 816",
        "room 908": "Turn left then a slight right into room 816",
        "room 907": "Turn left then a slight right into room 816",
        "room 909": "Turn left then a slight right into room 816",
      },
    },
  ], // Done
  "hall 800 left mid": [
    {
      node: "hall 800 hall 500 meet",
      weight: 1,
      direction: "Continue straight",
    },
    {
      node: "hall 100 hall 800 meet",
      weight: 1,
      direction: "Continue straight",
    },
    {
      node: "room 801",
      weight: 1,
      direction: "Slight left into room 801",
    },
    {
      node: "room 803",
      weight: 1,
      direction: "Slight left into room 803",
    },
    {
      node: "room 805",
      weight: 1,
      direction: "Slight left into room 805",
    },
    {
      node: "room 806 bookstore",
      weight: 1,
      direction: "Slight left into room 806 - Bookstore",
    },
    {
      node: "room 808",
      weight: 1,
      direction: "Slight left into room 808",
    },
    {
      node: "room 810",
      weight: 1,
      direction: "Slight left into room 810",
    },
    {
      node: "room 802 career services",
      weight: 1,
      direction: "Slight right into room 802 - Career Services",
    },
    {
      node: "room 804",
      weight: 1,
      direction: "Slight right into room 804",
    },
    {
      node: "room 807",
      weight: 1,
      direction: "Slight right into room 807",
    },
    {
      node: "room 809",
      weight: 1,
      direction: "Slight right into room 809",
    },
  ], // Done
  "hall 800 hall 500 meet": [
    {
      node: "hall 800 left mid",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 600 hall 500 meet": "Turn left",
        "room 525": "Turn right",
        "room 518": "Turn right",
        "room 516 ged testing": "Turn right",
      },
    },
    {
      node: "hall 800 right mid",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 600 hall 500 meet": "Turn right",
        "room 525": "Turn left",
        "room 518": "Turn left",
        "room 516 ged testing": "Turn left",
      },
    },
    {
      node: "hall 600 hall 500 meet",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 800 left mid": "Turn right",
        "room 810": "Turn right",
        "room 808": "Turn right",
        "room 806 bookstore": "Turn right",
        "room 809": "Turn right",
        "room 807": "Turn right",
        "hall 800 right mid": "Turn left",
        "room 815": "Turn left",
        "room 817": "Turn left",
      },
    },
    {
      node: "room 810",
      weight: 1,
      direction: "Slight right into room 810",
      directionFrom: {
        "hall 600 hall 500 meet": "Turn left then a slight right into room 810",
        "room 525": "Turn right then a slight right into room 810",
        "room 518": "Turn right then a slight right into room 810",
        "room 516 ged testing": "Turn right then a slight right into room 810",
      },
    },
    {
      node: "room 808",
      weight: 1,
      direction: "Slight right into room 808",
      directionFrom: {
        "hall 600 hall 500 meet": "Turn left then a slight right into room 808",
        "room 525": "Turn right then a slight right into room 808",
        "room 518": "Turn right then a slight right into room 808",
        "room 516 ged testing": "Turn right then a slight right into room 808",
      },
    },
    {
      node: "room 806 bookstore",
      weight: 1,
      direction: "Slight right into room 806 - Bookstore",
      directionFrom: {
        "hall 600 hall 500 meet":
          "Turn left then a slight right into room 806 - Bookstore",
        "room 525": "Turn right then a slight right into room 806 - Bookstore",
        "room 518": "Turn right then a slight right into room 806 - Bookstore",
        "room 516 ged testing":
          "Turn right then a slight right into room 806 - Bookstore",
      },
    },
    {
      node: "room 809",
      weight: 1,
      direction: "Slight left into room 809",
      directionFrom: {
        "hall 600 hall 500 meet": "Turn left then a slight left into room 809",
        "room 525": "Turn right then a slight left into room 809",
        "room 518": "Turn right then a slight left into room 809",
        "room 516 ged testing": "Turn right then a slight left into room 809",
      },
    },
    {
      node: "room 807",
      weight: 1,
      direction: "Slight left into room 807",
      directionFrom: {
        "hall 600 hall 500 meet": "Turn left then a slight left into room 807",
        "room 525": "Turn right then a slight left into room 807",
        "room 518": "Turn right then a slight left into room 807",
        "room 516 ged testing": "Turn right then a slight left into room 807",
      },
    },
    {
      node: "room 525",
      weight: 1,
      direction: "Slight left into room 525",
      directionFrom: {
        "hall 800 left mid": "Turn left then a slight left into room 525",
        "room 809": "Turn left then a slight left into room 525",
        "room 810": "Turn left then a slight left into room 525",
        "room 811": "Turn left then a slight left into room 525",
        "room 807": "Turn left then a slight left into room 525",
        "room 806 bookstore": "Turn left then a slight left into room 525",
        "room 815": "Turn right then a slight left into room 518",
        "room 817": "Turn right then a slight left into room 518",
      },
    },
    {
      node: "room 518",
      weight: 1,
      direction: "Slight right into room 518",
      directionFrom: {
        "hall 800 left mid": "Turn left then a slight right into room 518",
        "room 809": "Turn left then a slight right into room 518",
        "room 810": "Turn left then a slight right into room 518",
        "room 811": "Turn left then a slight right into room 518",
        "room 807": "Turn left then a slight right into room 518",
        "room 806 bookstore": "Turn left then a slight right into room 518",
        "room 815": "Turn right then a slight right into room 518",
        "room 817": "Turn right then a slight right into room 518",
      },
    },
    {
      node: "room 516 ged testing",
      weight: 1,
      direction: "Slight right into room 516 - GED Testing",
      directionFrom: {
        "hall 800 left mid":
          "Turn left then a slight right into room 516 - GED Testing",
        "room 809": "Turn left then a slight right into room 516 - GED Testing",
        "room 810": "Turn left then a slight right into room 516 - GED Testing",
        "room 811": "Turn left then a slight right into room 516 - GED Testing",
        "room 807": "Turn left then a slight right into room 516 - GED Testing",
        "room 806 bookstore":
          "Turn left then a slight right into room 516 - GED Testing",
        "room 815":
          "Turn right then a slight right into room 516 - GED Testing",
        "room 817":
          "Turn right then a slight right into room 516 - GED Testing",
      },
    },
    {
      node: "room 815",
      weight: 1,
      direction: "Slight right into room 815",
      directionFrom: {
        "hall 600 hall 500 meet":
          "Turn right then a slight right into room 815",
        "room 525": "Turn left then a slight right into room 815",
        "room 518": "Turn left then a slight right into room 815",
        "room 516 ged testing": "Turn left then a slight right into room 815",
      },
    },
    {
      node: "room 817",
      weight: 1,
      direction: "Slight right into room 817",
      directionFrom: {
        "hall 600 hall 500 meet":
          "Turn right then a slight right into room 817",
        "room 525": "Turn left then a slight right into room 817",
        "room 518": "Turn left then a slight right into room 817",
        "room 516 ged testing": "Turn left then a slight right into room 817",
      },
    },
  ], // Done
  "hall 800 right mid": [
    {
      node: "hall 800 hall 600 meet",
      weight: 1,
      direction: "Continue straight",
    },
    {
      node: "hall 800 hall 700 meet",
      weight: 1,
      direction: "Continue straight",
    },
    {
      node: "hall 800 hall 500 meet",
      weight: 1,
      direction: "Continue straight",
    },
    {
      node: "room 815",
      weight: 1,
      direction: "Slight left into room 815",
    },
    {
      node: "room 817",
      weight: 1,
      direction: "Slight left into room 817",
    },
    {
      node: "room 812 adult education",
      weight: 1,
      direction: "Slight left into room 812 - Adult Education",
    },
    {
      node: "room 814",
      weight: 1,
      direction: "Slight left into room 814",
    },
    {
      node: "room 819",
      weight: 1,
      direction: "Slight right into room 819",
    },
    {
      node: "room 821",
      weight: 1,
      direction: "Slight right into room 821",
    },
  ],
  "hall 800 hall 700 meet": [
    {
      node: "hall 700 top",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 800 hall 900 meet": "Turn right",
        "room 816": "Turn right",
        "room 818": "Turn right",
        "hall 800 right mid": "Turn left",
        "room 821": "Turn left",
        "room 818": "Turn left",
        "room 814": "Turn left",
        "room 812": "Turn left",
      },
    },
    {
      node: "hall 600 hall 700 meet",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 800 hall 900 meet": "Turn left",
        "room 816": "Turn left",
        "room 818": "Turn left",
        "hall 800 right mid": "Turn right",
        "room 821": "Turn right",
        "room 818": "Turn right",
        "room 814": "Turn right",
        "room 812": "Turn right",
      },
    },
    {
      node: "hall 800 right mid",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 600 hall 700 meet": "Turn left",
        "room 715": "Turn left",
        "room 713": "Turn left",
        "room 711": "Turn left",
        "room 710": "Turn left",
        "room 712": "Turn left",
        "room 714": "Turn left",
        "hall 700 top": "Turn right",
      },
    },
    {
      node: "hall 800 hall 900 meet",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 600 hall 700 meet": "Turn right",
        "room 715": "Turn right",
        "room 713": "Turn right",
        "room 711": "Turn right",
        "room 710": "Turn right",
        "room 712": "Turn right",
        "room 714": "Turn right",
        "hall 700 top": "Turn left",
      },
    },
    {
      node: "room 715",
      weight: 1,
      direction: "Slight right into room 715",
      directionFrom: {
        "hall 800 hall 900 meet": "Turn left then a slight right into room 715",
        "room 816": "Turn left then a slight right into room 715",
        "room 818": "Turn left then a slight right into room 715",
        "hall 800 right mid": "Turn right then a slight right into room 715",
        "room 821": "Turn right then a slight right into room 715",
        "room 818": "Turn right then a slight right into room 715",
        "room 814": "Turn right then a slight right into room 715",
        "room 812": "Turn right then a slight right into room 715",
      },
    },
    {
      node: "room 713",
      weight: 1,
      direction: "Slight right into room 713",
      directionFrom: {
        "hall 800 hall 900 meet": "Turn left then a slight right into room 713",
        "room 816": "Turn left then a slight right into room 713",
        "room 818": "Turn left then a slight right into room 713",
        "hall 800 right mid": "Turn right then a slight right into room 713",
        "room 821": "Turn right then a slight right into room 713",
        "room 818": "Turn right then a slight right into room 713",
        "room 814": "Turn right then a slight right into room 713",
        "room 812": "Turn right then a slight right into room 713",
      },
    },
    {
      node: "room 711",
      weight: 1,
      direction: "Slight right into room 711",
      directionFrom: {
        "hall 800 hall 900 meet": "Turn left then a slight right into room 711",
        "room 816": "Turn left then a slight right into room 711",
        "room 818": "Turn left then a slight right into room 711",
        "hall 800 right mid": "Turn right then a slight right into room 711",
        "room 821": "Turn right then a slight right into room 711",
        "room 818": "Turn right then a slight right into room 711",
        "room 814": "Turn right then a slight right into room 711",
        "room 812": "Turn right then a slight right into room 711",
      },
    },
    {
      node: "room 710",
      weight: 1,
      direction: "Slight left into room 710",
      directionFrom: {
        "hall 800 hall 900 meet": "Turn left then a slight left into room 710",
        "room 816": "Turn left then a slight left into room 710",
        "room 818": "Turn left then a slight left into room 710",
        "hall 800 right mid": "Turn right then a slight left into room 710",
        "room 821": "Turn right then a slight left into room 710",
        "room 818": "Turn right then a slight left into room 710",
        "room 814": "Turn right then a slight left into room 710",
        "room 812": "Turn right then a slight left into room 710",
      },
    },
    {
      node: "room 712",
      weight: 1,
      direction: "Slight left into room 712",
      directionFrom: {
        "hall 800 hall 900 meet": "Turn left then a slight left into room 712",
        "room 816": "Turn left then a slight left into room 712",
        "room 818": "Turn left then a slight left into room 712",
        "hall 800 right mid": "Turn right then a slight left into room 712",
        "room 821": "Turn right then a slight left into room 712",
        "room 818": "Turn right then a slight left into room 712",
        "room 814": "Turn right then a slight left into room 712",
        "room 812": "Turn right then a slight left into room 712",
      },
    },
    {
      node: "room 714",
      weight: 1,
      direction: "Slight left into room 714",
      directionFrom: {
        "hall 800 hall 900 meet": "Turn left then a slight left into room 714",
        "room 816": "Turn left then a slight left into room 714",
        "room 818": "Turn left then a slight left into room 714",
        "hall 800 right mid": "Turn right then a slight left into room 714",
        "room 821": "Turn right then a slight left into room 714",
        "room 818": "Turn right then a slight left into room 714",
        "room 814": "Turn right then a slight left into room 714",
        "room 812": "Turn right then a slight left into room 714",
      },
    },
    {
      node: "room 821",
      weight: 1,
      direction: "Slight left into room 821",
      directionFrom: {
        "hall 700 top": "Turn right then a slight left into room 821",
        "hall 600 hall 700 meet": "Turn left then a slight left into room 821",
        "room 715": "Turn left then a slight left into room 821",
        "room 713": "Turn left then a slight left into room 821",
        "room 711": "Turn left then a slight left into room 821",
        "room 710": "Turn left then a slight left into room 821",
        "room 712": "Turn left then a slight left into room 821",
        "room 714": "Turn left then a slight left into room 821",
      },
    },
    {
      node: "room 819",
      weight: 1,
      direction: "Slight left into room 819",
      directionFrom: {
        "hall 700 top": "Turn right then a slight left into room 819",
        "hall 600 hall 700 meet": "Turn left then a slight left into room 819",
        "room 715": "Turn left then a slight left into room 819",
        "room 713": "Turn left then a slight left into room 819",
        "room 711": "Turn left then a slight left into room 819",
        "room 710": "Turn left then a slight left into room 819",
        "room 712": "Turn left then a slight left into room 819",
        "room 714": "Turn left then a slight left into room 819",
      },
    },
    {
      node: "room 814",
      weight: 1,
      direction: "Slight right into room 814",
      directionFrom: {
        "hall 700 top": "Turn right then a slight right into room 814",
        "hall 600 hall 700 meet": "Turn left then a slight right into room 814",
        "room 715": "Turn left then a slight right into room 814",
        "room 713": "Turn left then a slight right into room 814",
        "room 711": "Turn left then a slight right into room 814",
        "room 710": "Turn left then a slight right into room 814",
        "room 712": "Turn left then a slight right into room 814",
        "room 714": "Turn left then a slight right into room 814",
      },
    },
    {
      node: "room 812 adult education",
      weight: 1,
      direction: "Slight right into room 812 - Adult Education",
      directionFrom: {
        "hall 700 top":
          "Turn right then a slight right into room 812 - Adult Education",
        "hall 600 hall 700 meet":
          "Turn left then a slight right into room 812 - Adult Education",
        "room 715":
          "Turn left then a slight right into room 812 - Adult Education",
        "room 713":
          "Turn left then a slight right into room 812 - Adult Education",
        "room 711":
          "Turn left then a slight right into room 812 - Adult Education",
        "room 710":
          "Turn left then a slight right into room 812 - Adult Education",
        "room 712":
          "Turn left then a slight right into room 812 - Adult Education",
        "room 714":
          "Turn left then a slight right into room 812 - Adult Education",
      },
    },
    {
      node: "room 816",
      weight: 1,
      direction: "Slight left into room 816",
      directionFrom: {
        "hall 700 top": "Turn left then a slight left into room 816",
        "hall 600 hall 700 meet": "Turn right then a slight left into room 816",
        "room 715": "Turn right then a slight left into room 816",
        "room 713": "Turn right then a slight left into room 816",
        "room 711": "Turn right then a slight left into room 816",
        "room 710": "Turn right then a slight left into room 816",
        "room 712": "Turn right then a slight left into room 816",
        "room 714": "Turn right then a slight left into room 816",
      },
    },
    {
      node: "room 818",
      weight: 1,
      direction: "Slight left into room 818",
      directionFrom: {
        "hall 700 top": "Turn left then a slight left into room 818",
        "hall 600 hall 700 meet": "Turn right then a slight left into room 818",
        "room 715": "Turn right then a slight left into room 818",
        "room 713": "Turn right then a slight left into room 818",
        "room 711": "Turn right then a slight left into room 818",
        "room 710": "Turn right then a slight left into room 818",
        "room 712": "Turn right then a slight left into room 818",
        "room 714": "Turn right then a slight left into room 818",
      },
    },
  ],

  // Rooms hall 800
  "room 801": [
    {
      node: "hall 100 hall 800 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 800 left mid",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 802 career services",
      weight: 1,
      direction:
        "Turn right then a slight left into room 802 - Career Services",
    },
    {
      node: "room 804",
      weight: 1,
      direction: "Turn right then a slight left into room 804",
    },
    {
      node: "room 805",
      weight: 1,
      direction: "Turn right then a slight right into room 805",
    },
    {
      node: "room 803",
      weight: 1,
      direction: "Turn right then a slight right into room 803",
    },
  ], // Done
  "room 802 career services": [
    {
      node: "hall 100 hall 800 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 800 left mid",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 804",
      weight: 1,
      direction: "Turn left then a slight left into room 804",
    },
    {
      node: "room 805",
      weight: 1,
      direction: "Turn left then a slight right into room 805",
    },
    {
      node: "room 803",
      weight: 1,
      direction: "Turn left then a slight right into room 803",
    },
    {
      node: "room 801",
      weight: 1,
      direction: "Turn right then a slight left into room 801",
    },
  ], // Done
  "room 803": [
    {
      node: "hall 100 hall 800 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 800 left mid",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 802 career services",
      weight: 1,
      direction:
        "Turn left then a slight right into room 802 - Career Services",
    },
    {
      node: "room 804",
      weight: 1,
      direction: "Straight ahead into room 804",
    },
    {
      node: "room 805",
      weight: 1,
      direction: "Turn right then a slight right into room 805",
    },
    {
      node: "room 801",
      weight: 1,
      direction: "Turn left then a slight left into room 801",
    },
  ], // Done
  "room 804": [
    {
      node: "hall 100 hall 800 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 800 left mid",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 802 career services",
      weight: 1,
      direction:
        "Turn right then a slight right into room 802 - Career Services",
    },
    {
      node: "room 804",
      weight: 1,
      direction: "Straight ahead into room 805",
    },
    {
      node: "room 803",
      weight: 1,
      direction: "Straight ahead into room 803",
    },
    {
      node: "room 801",
      weight: 1,
      direction: "Turn right then a slight left into room 801",
    },
  ], // Done
  "room 805": [
    {
      node: "hall 100 hall 800 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 800 left mid",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 802 career services",
      weight: 1,
      direction:
        "Turn left then a slight right into room 802 - Career Services",
    },
    {
      node: "room 804",
      weight: 1,
      direction: "Straight ahead into room 804",
    },
    {
      node: "room 803",
      weight: 1,
      direction: "Turn left then a slight left into room 803",
    },
    {
      node: "room 801",
      weight: 1,
      direction: "Turn left then a slight left into room 801",
    },
  ], // Done
  "room 807": [
    {
      node: "hall 800 hall 500 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 800 left mid",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 806 bookstore",
      weight: 1,
      direction: "Straight ahead into room 806 - Bookstore",
    },
    {
      node: "room 809",
      weight: 1,
      direction: "Turn right then a slight right into room 809",
    },
    {
      node: "room 808",
      weight: 1,
      direction: "Turn right then a slight left into room 808",
    },
    {
      node: "room 810",
      weight: 1,
      direction: "Turn right then a slight left into room 810",
    },
  ], // Done
  "room 806 bookstore": [
    {
      node: "hall 800 hall 500 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 800 left mid",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 808",
      weight: 1,
      direction: "Turn left then a slight left into room 808",
    },
    {
      node: "room 807",
      weight: 1,
      direction: "Straight ahead into room 807",
    },
    {
      node: "room 810",
      weight: 1,
      direction: "Turn left then a slight left into room 810",
    },
    {
      node: "room 809",
      weight: 1,
      direction: "Turn left then a slight right into room 809",
    },
  ], // Done
  "room 808": [
    {
      node: "hall 800 hall 500 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 800 left mid",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 806 bookstore",
      weight: 1,
      direction: "Turn right then a slight right into room 806 - Bookstore",
    },
    {
      node: "room 807",
      weight: 1,
      direction: "Turn right then a slight left into room 807",
    },
    {
      node: "room 810",
      weight: 1,
      direction: "Turn left then a slight left into room 810",
    },
    {
      node: "room 809",
      weight: 1,
      direction: "Straight ahead into room 809",
    },
  ], // Done
  "room 809": [
    {
      node: "hall 800 hall 500 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 800 left mid",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 806 bookstore",
      weight: 1,
      direction: "Turn left then a slight right into room 806 - Bookstore",
    },
    {
      node: "room 807",
      weight: 1,
      direction: "Turn left then a slight left into room 807",
    },
    {
      node: "room 808",
      weight: 1,
      direction: "Straight ahead into room 808",
    },
    {
      node: "room 810",
      weight: 1,
      direction: "Straight ahead into room 810",
    },
    {
      node: "room 811",
      weight: 1,
      direction: "Slight left into room 811",
    },
  ], // Done
  "room 810": [
    {
      node: "hall 800 hall 500 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 800 left mid",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 806 bookstore",
      weight: 1,
      direction: "Turn right then a slight right into room 806 - Bookstore",
    },
    {
      node: "room 807",
      weight: 1,
      direction: "Turn right then a slight left into room 807",
    },
    {
      node: "room 808",
      weight: 1,
      direction: "Turn right then a slight right into room 808",
    },
    {
      node: "room 809",
      weight: 1,
      direction: "Straight ahead into room 809",
    },
  ], // Done
  "room 811": [
    {
      node: "room 809",
      weight: 1,
      direction: "Go straight into room 809",
    },
  ], // Done
  "room 812 adult education": [
    {
      node: "hall 800 right mid",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 800 hall 700 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 814",
      weight: 1,
      direction: "Turn left then a slight left into room 814",
    },
    {
      node: "room 819",
      weight: 1,
      direction: "Turn left then a slight right into room 819",
    },
    {
      node: "room 821",
      weight: 1,
      direction: "Turn left then a slight right into room 821",
    },
  ], // Done
  "room 814": [
    {
      node: "hall 800 right mid",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 800 hall 700 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 812 adult education",
      weight: 1,
      direction:
        "Turn right then a slight right into room 812 - Adult Education",
    },
    {
      node: "room 819",
      weight: 1,
      direction: "Turn left then a slight right into room 819",
    },
    {
      node: "room 821",
      weight: 1,
      direction: "Turn left then a slight right into room 821",
    },
  ], // Done
  "room 815": [
    {
      node: "hall 800 right mid",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 800 hall 500 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 817",
      weight: 1,
      direction: "Turn right then a slight right into room 817",
    },
  ], // Done
  "room 817": [
    {
      node: "hall 800 right mid",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 800 hall 500 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 815",
      weight: 1,
      direction: "Turn left then a slight left into room 815",
    },
  ], // Done
  "room 819": [
    {
      node: "hall 800 right mid",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 800 hall 700 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 812 adult education",
      weight: 1,
      direction:
        "Turn left then a slight right into room 812 - Adult Education",
    },
    {
      node: "room 814",
      weight: 1,
      direction: "Turn left then a slight right into room 814",
    },
    {
      node: "room 821",
      weight: 1,
      direction: "Turn right then a slight right into room 821",
    },
  ], // Done
  "room 821": [
    {
      node: "hall 800 right mid",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 800 hall 700 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 812 adult education",
      weight: 1,
      direction:
        "Turn left then a slight right into room 812 - Adult Education",
    },
    {
      node: "room 814",
      weight: 1,
      direction: "Turn left then a slight right into room 814",
    },
    {
      node: "room 819",
      weight: 1,
      direction: "Turn left then a slight left into room 819",
    },
  ], // Done
  "room 822": [
    {
      node: "hall 1100 hall 800 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 800 hall 900 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 829",
      weight: 1,
      direction: "Continue straight into room 829",
    },
    {
      node: "room 824",
      weight: 1,
      direction: "Turn left then a slight left into room 824",
    },
  ], // Done
  "room 824": [
    {
      node: "hall 1100 hall 800 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 800 hall 900 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 829",
      weight: 1,
      direction: "Turn right then a slight left into room 829",
    },
    {
      node: "room 822",
      weight: 1,
      direction: "Turn right then a slight right into room 822",
    },
    {
      node: "room 824A",
      weight: 1,
      direction: "Continue straight into room 824A",
    },
  ], // Done
  "room 824A": [
    {
      node: "room 824",
      weight: 1,
      direction: "Continue straight into room 824",
    },
    {
      node: "room 824B",
      weight: 1,
      direction: "Continue straight into room 824B",
    },
  ], // Done
  "room 824B": [
    {
      node: "room 824A",
      weight: 1,
      direction: "Continue straight into room 824A",
    },
  ], // Done
  "room 829": [
    {
      node: "hall 1100 hall 800 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 800 hall 900 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 824",
      weight: 1,
      direction: "Turn right then a slight left into room 824",
    },
    {
      node: "room 822",
      weight: 1,
      direction: "Straight ahead into room 822",
    },
  ], // Done
  "room 820": [
    {
      node: "hall 800 hall 900 meet",
      weight: 1,
      direction: "Exit room",
    },
  ], // Done
  "room 818": [
    {
      node: "hall 800 hall 900 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 800 hall 700 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 816",
      weight: 1,
      direction: "Turn right then a slight right into room 816",
    },
  ], // Done
  "room 816": [
    {
      node: "hall 800 hall 900 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 800 hall 700 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 818",
      weight: 1,
      direction: "Turn left then a slight left into room 818",
    },
  ], // Done

  // Hall 900
  "hall 900 mid": [
    {
      node: "hall 400 hall 900 meet",
      weight: 1,
      direction: "Continue straight",
    },
    {
      node: "hall 800 hall 900 meet",
      weight: 1,
      direction: "Continue straight",
    },
    {
      node: "room 901A",
      weight: 1,
      direction: "Slight right into room 901A",
    },
    {
      node: "room 901",
      weight: 1,
      direction: "Slight right into room 901",
    },
    {
      node: "room 905",
      weight: 1,
      direction: "Slight right into room 905",
    },
    {
      node: "room 902",
      weight: 1,
      direction: "Slight left into room 902",
    },
    {
      node: "room 904",
      weight: 1,
      direction: "Slight right into room 904",
    },
    {
      node: "room 906",
      weight: 1,
      direction: "Slight right into room 906",
    },
    {
      node: "room 908",
      weight: 1,
      direction: "Slight right into room 908",
    },
    {
      node: "room 909",
      weight: 1,
      direction: "Slight left into room 909",
    },
    {
      node: "room 907",
      weight: 1,
      direction: "Slight left into room 907",
    },
  ], // Done

  // Rooms hall 900
  "room 901": [
    {
      node: "hall 400 hall 900 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 900 mid",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 902",
      weight: 1,
      direction: "Turn left then a slight right into room 902",
    },
    {
      node: "room 901A",
      weight: 1,
      direction: "Turn left then a slight left into room 901A",
    },
    {
      node: "room 905",
      weight: 1,
      direction: "Turn left then a slight left into room 905",
    },
  ], // Done
  "room 901A": [
    {
      node: "hall 400 hall 900 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 900 mid",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 902",
      weight: 1,
      direction: "Turn left then a slight right into room 902",
    },
    {
      node: "room 901",
      weight: 1,
      direction: "Turn right then a slight right into room 901",
    },
    {
      node: "room 905",
      weight: 1,
      direction: "Turn left then a slight left into room 905",
    },
  ], // Done
  "room 902": [
    {
      node: "hall 400 hall 900 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 900 mid",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 901A",
      weight: 1,
      direction: "Turn left then a slight right into room 901A",
    },
    {
      node: "room 901",
      weight: 1,
      direction: "Turn left then a slight right into room 901",
    },
    {
      node: "room 905",
      weight: 1,
      direction: "Straight ahead into room 905",
    },
  ], // Done
  "room 905": [
    {
      node: "hall 400 hall 900 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 900 mid",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 901A",
      weight: 1,
      direction: "Turn right then a slight right into room 901A",
    },
    {
      node: "room 901",
      weight: 1,
      direction: "Turn right then a slight right into room 901",
    },
    {
      node: "room 902",
      weight: 1,
      direction: "Straight ahead into room 902",
    },
  ], // Done
  "room 904": [
    {
      node: "hall 800 hall 900 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 900 mid",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 907",
      weight: 1,
      direction: "Straight ahead into room 907",
    },
    {
      node: "room 906",
      weight: 1,
      direction: "Turn right then a slight right into room 906",
    },
    {
      node: "room 908",
      weight: 1,
      direction: "Turn right then a slight right into room 908",
    },
    {
      node: "room 909",
      weight: 1,
      direction: "Turn right then a slight left into room 909",
    },
  ], // Done
  "room 906": [
    {
      node: "hall 800 hall 900 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 900 mid",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 907",
      weight: 1,
      direction: "Turn left then a slight right into room 907",
    },
    {
      node: "room 904",
      weight: 1,
      direction: "Turn left then a slight left into room 904",
    },
    {
      node: "room 908",
      weight: 1,
      direction: "Turn right then a slight right into room 908",
    },
    {
      node: "room 909",
      weight: 1,
      direction: "Turn right then a slight left into room 909",
    },
  ], // Done
  "room 908": [
    {
      node: "hall 800 hall 900 meet",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "hall 900 mid",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "room 907",
      weight: 1,
      direction: "Turn left then a slight right into room 907",
    },
    {
      node: "room 904",
      weight: 1,
      direction: "Turn left then a slight left into room 904",
    },
    {
      node: "room 906",
      weight: 1,
      direction: "Turn left then a slight left into room 906",
    },
    {
      node: "room 909",
      weight: 1,
      direction: "Straight ahead into room 909",
    },
  ], // Done
  "room 909": [
    {
      node: "hall 800 hall 900 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 900 mid",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 907",
      weight: 1,
      direction: "Turn right then a slight right into room 907",
    },
    {
      node: "room 904",
      weight: 1,
      direction: "Turn right then a slight left into room 904",
    },
    {
      node: "room 906",
      weight: 1,
      direction: "Turn right then a slight left into room 906",
    },
    {
      node: "room 908",
      weight: 1,
      direction: "Straight ahead into room 908",
    },
  ], // Done
  "room 907": [
    {
      node: "hall 800 hall 900 meet",
      weight: 1,
      direction: "Turn left",
    },
    {
      node: "hall 900 mid",
      weight: 1,
      direction: "Turn right",
    },
    {
      node: "room 909",
      weight: 1,
      direction: "Turn left then a slight left into room 909",
    },
    {
      node: "room 904",
      weight: 1,
      direction: "Turn right then a slight left into room 904",
    },
    {
      node: "room 906",
      weight: 1,
      direction: "Turn left then a slight right into room 906",
    },
    {
      node: "room 908",
      weight: 1,
      direction: "Turn left then a slight right into room 908",
    },
  ], // Done

  // Hall 1100
  "hall 1100 start": [
    {
      node: "hall 200 hall 1100 meet",
      weight: 1,
      direction: "Continue straight",
    },
    {
      node: "room 1102",
      weight: 1,
      direction: "Slight right into room 1102",
    },
  ], // Done
  "hall 1100 lower mid": [
    {
      node: "hall 200 hall 1100 meet",
      weight: 1,
      direction: "Continue straight",
    },
    {
      node: "hall 1100 hall 400 meet",
      weight: 1,
      direction: "Continue straight",
    },
    {
      node: "room 1101",
      weight: 1,
      direction: "Slight right into room 1101",
    },
    {
      node: "room 1106",
      weight: 1,
      direction: "Slight left into room 1106",
    },
    {
      node: "room 1104",
      weight: 1,
      direction: "Slight left into room 1104",
    },
    {
      node: "room 1108",
      weight: 1,
      direction: "Slight left into room 1108",
    },
    {
      node: "room 1103",
      weight: 1,
      direction: "Slight right into room 1103",
    },
    {
      node: "room 1110",
      weight: 1,
      direction: "Slight left into room 1110",
      directionFrom: {
        "hall 200 hall 1100 meet": "Slight right into room 1110",
      },
    },
    {
      node: "room 1112",
      weight: 1,
      direction: "Slight left into room 1112",
      directionFrom: {
        "hall 200 hall 1100 meet": "Slight right into room 1112",
      },
    },
    {
      node: "room 1105",
      weight: 1,
      direction: "Slight left into room 1105",
    },
  ], // Done
  "hall 1100 hall 400 meet": [
    {
      node: "hall 1100 lower mid",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 400 hall 900 meet": "Turn right",
        "room 414": "Turn right",
        "room 411": "Turn right",
      },
    },
    {
      node: "hall 400 hall 900 meet",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 1100 upper mid": "Turn right",
        "hall 1100 lower mid": "Turn left",
        "room 1105": "Turn left",
        "room 1112": "Turn left",
        "room 1110": "Turn left",
      },
    },
    {
      node: "hall 1100 upper mid",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 400 hall 900 meet": "Turn left",
        "room 411": "Turn left",
        "room 414": "Turn left",
      },
    },
    {
      node: "room 1105",
      weight: 1,
      direction: "Slight right into room 1105",
      directionFrom: {
        "hall 400 hall 900 meet":
          "Turn right then a slight right into room 1105",
        "room 414": "Turn right then a slight right into room 1105",
        "room 414": "Turn right then a slight right into room 1105",
      },
    },
    {
      node: "room 1112",
      weight: 1,
      direction: "Slight left into room 1112",
      directionFrom: {
        "hall 400 hall 900 meet":
          "Turn right then a slight left into room 1112",
        "room 414": "Turn right then a slight left into room 1112",
        "room 414": "Turn right then a slight left into room 1112",
      },
    },
    {
      node: "room 1110",
      weight: 1,
      direction: "Slight left into room 1110",
      directionFrom: {
        "hall 400 hall 900 meet":
          "Turn right then a slight left into room 1110",
        "room 414": "Turn right then a slight left into room 1110",
        "room 414": "Turn right then a slight left into room 1110",
      },
    },
    {
      node: "room 1109",
      weight: 1,
      direction: "Slight left into room 1109",
      directionFrom: {
        "hall 400 hall 900 meet": "Turn left then a slight left into room 1109",
        "room 414": "Turn left then a slight left into room 1109",
        "room 414": "Turn left then a slight left into room 1109",
      },
    },
    {
      node: "room 1120",
      weight: 1,
      direction: "Slight right into room 1120",
      directionFrom: {
        "hall 400 hall 900 meet":
          "Turn left then a slight right into room 1120",
        "room 414": "Turn left then a slight right into room 1120",
        "room 414": "Turn left then a slight right into room 1120",
      },
    },
    {
      node: "room 1122",
      weight: 1,
      direction: "Slight right into room 1122",
      directionFrom: {
        "hall 400 hall 900 meet":
          "Turn left then a slight right into room 1122",
        "room 414": "Turn left then a slight right into room 1122",
        "room 414": "Turn left then a slight right into room 1122",
      },
    },
  ], // Done
  "hall 1100 upper mid": [
    {
      node: "hall 1100 hall 400 meet",
      weight: 1,
      direction: "Continue straight",
    },
    {
      node: "hall 1100 hall 800 meet",
      weight: 1,
      direction: "Continue straight",
    },
    {
      node: "room 1109",
      weight: 1,
      direction: "Slight right into room 1109",
    },
    {
      node: "room 1111",
      weight: 1,
      direction: "Slight right into room 1111",
    },
    {
      node: "room 1120",
      weight: 1,
      direction: "Slight left into room 1120",
    },
    {
      node: "room 1122",
      weight: 1,
      direction: "Slight left into room 1122",
    },
    {
      node: "room 1124",
      weight: 1,
      direction: "Slight left into room 1124",
    },
    {
      node: "room 1113",
      weight: 1,
      direction: "Slight left into room 1113",
    },
    {
      node: "room 1115",
      weight: 1,
      direction: "Slight left into room 1115",
    },
    {
      node: "room 1126",
      weight: 1,
      direction: "Slight right into room 1126",
    },
  ], // Done
  "hall 1100 hall 800 meet": [
    {
      node: "hall 1100 upper mid",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 800 hall 900 meet": "Turn right",
        "room 822": "Turn right",
        "room 824": "Turn right",
      },
    },
    {
      node: "hall 800 hall 900 meet",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 1100 upper mid": "Turn left",
        "room 1126": "Turn left",
        "room 1115": "Turn left",
        "room 1113": "Turn left",
        "room 1128": "Turn right",
        "room 1130": "Turn right",
      },
    },
    {
      node: "room 1128",
      weight: 1,
      direction: "Slight right into room 1128",
      directionFrom: {
        "hall 800 hall 900 meet":
          "Turn left then a slight right into room 1128",
        "room 822": "Turn left then a slight right into room 1128",
        "room 824": "Turn left then a slight right into room 1128",
      },
    },
    {
      node: "room 1130",
      weight: 1,
      direction: "Slight right into room 1130",
      directionFrom: {
        "hall 800 hall 900 meet":
          "Turn left then a slight right into room 1130",
        "room 822": "Turn left then a slight right into room 1130",
        "room 824": "Turn left then a slight right into room 1130",
      },
    },
    {
      node: "room 824",
      weight: 1,
      direction: "Slight right into room 824",
      directionFrom: {
        "hall 1100 upper mid": "Turn left then a slight right into room 824",
        "room 1126": "Turn left then a slight right into room 824",
        "room 1115": "Turn left then a slight right into room 824",
        "room 1113": "Turn left then a slight right into room 824",
        "room 1128": "Turn right then a slight right into room 824",
        "room 1130": "Turn right then a slight right into room 824",
      },
    },
    {
      node: "room 822",
      weight: 1,
      direction: "Slight right into room 822",
      directionFrom: {
        "hall 1100 upper mid": "Turn left then a slight right into room 822",
        "room 1126": "Turn left then a slight right into room 822",
        "room 1115": "Turn left then a slight right into room 822",
        "room 1113": "Turn left then a slight right into room 822",
        "room 1128": "Turn right then a slight right into room 822",
        "room 1130": "Turn right then a slight right into room 822",
      },
    },
    {
      node: "room 829",
      weight: 1,
      direction: "Slight right into room 829",
      directionFrom: {
        "hall 1100 upper mid": "Turn left then a slight left into room 829",
        "room 1126": "Turn left then a slight left into room 829",
        "room 1115": "Turn left then a slight left into room 829",
        "room 1113": "Turn left then a slight left into room 829",
        "room 1128": "Turn right then a slight left into room 829",
        "room 1130": "Turn right then a slight left into room 829",
      },
    },
  ], // Done

  // Rooms hall 1100 - Done
  "room 1101": [
    { node: "hall 200 hall 1100 meet", weight: 1, direction: "Turn right" },
    { node: "hall 1100 lower mid", weight: 1, direction: "Turn left" },
    {
      node: "room 1104",
      weight: 1,
      direction: "Turn right then a slight left into room 1104",
    },
    {
      node: "room 1106",
      weight: 1,
      direction: "Turn left then a slight right into room 1106",
    },
    {
      node: "room 1103",
      weight: 1,
      direction: "Turn left then a slight left into room 1103",
    },
    {
      node: "room 1108",
      weight: 1,
      direction: "Turn right then a slight right into room 1108",
    },
  ], // Done
  "room 1102": [
    { node: "hall 200 hall 1100 meet", weight: 1, direction: "Turn right" },
    { node: "hall 1100 start", weight: 1, direction: "Turn left" },
  ], // Done
  "room 1104": [
    { node: "hall 200 hall 1100 meet", weight: 1, direction: "Turn left" },
    { node: "hall 1100 lower mid", weight: 1, direction: "Turn right" },
    {
      node: "room 1101",
      weight: 1,
      direction: "Turn right then a slight left into room 1101",
    },
    {
      node: "room 1103",
      weight: 1,
      direction: "Turn right then a slight left into room 1103",
    },
    {
      node: "room 1106",
      weight: 1,
      direction: "Turn right then a slight right into room 1106",
    },
    {
      node: "room 1108",
      weight: 1,
      direction: "Turn right then a slight right into room 1108",
    },
  ], // Done
  "room 1106": [
    { node: "hall 200 hall 1100 meet", weight: 1, direction: "Turn left" },
    { node: "hall 1100 lower mid", weight: 1, direction: "Turn right" },
    {
      node: "room 1101",
      weight: 1,
      direction: "Turn left then a slight right into room 1101",
    },
    {
      node: "room 1104",
      weight: 1,
      direction: "Turn left then a slight left into room 1104",
    },
    {
      node: "room 1103",
      weight: 1,
      direction: "Turn right then a slight left into room 1103",
    },
    {
      node: "room 1108",
      weight: 1,
      direction: "Turn right then a slight right into room 1108",
    },
  ], // Done
  "room 1108": [
    { node: "hall 200 hall 1100 meet", weight: 1.1, direction: "Turn left" },
    { node: "hall 1100 lower mid", weight: 1, direction: "Turn right" },
    {
      node: "room 1103",
      weight: 1,
      direction: "Straight ahead into room 1103",
    },
    {
      node: "room 1101",
      weight: 1,
      direction: "Turn left then a slight right into room 1101",
    },
    {
      node: "room 1106",
      weight: 1,
      direction: "Turn left then a slight left into room 1106",
    },
    {
      node: "room 1104",
      weight: 1,
      direction: "Turn left then a slight left into room 1104",
    },
  ], // Done
  "room 1103": [
    { node: "hall 200 hall 1100 meet", weight: 1.1, direction: "Turn right" },
    { node: "hall 1100 lower mid", weight: 1, direction: "Turn left" },
    {
      node: "room 1108",
      weight: 1,
      direction: "Straight ahead into room 1108",
    },
    {
      node: "room 1101",
      weight: 1,
      direction: "Turn right then a slight right into room 1101",
    },
    {
      node: "room 1106",
      weight: 1,
      direction: "Turn right then a slight left into room 1106",
    },
    {
      node: "room 1104",
      weight: 1,
      direction: "Turn right then a slight left into room 1104",
    },
  ], // Done
  "room 1110": [
    { node: "hall 1100 lower mid", weight: 1, direction: "Turn left" },
    { node: "hall 1100 hall 400 meet", weight: 1.1, direction: "Turn right" },
    {
      node: "room 1112",
      weight: 1,
      direction: "Turn right then a slight right into room 1112",
    },
    {
      node: "room 1105",
      weight: 1,
      direction: "Turn right then a slight left into room 1105",
    },
  ], // Done
  "room 1112": [
    { node: "hall 1100 lower mid", weight: 1, direction: "Turn left" },
    { node: "hall 1100 hall 400 meet", weight: 1, direction: "Turn right" },
    {
      node: "room 1110",
      weight: 1,
      direction: "Turn left then a slight left into room 1110",
    },
    {
      node: "room 1105",
      weight: 1,
      direction: "Turn right then a slight left into room 1105",
    },
  ], // Done
  "room 1105": [
    { node: "hall 1100 lower mid", weight: 1, direction: "Turn right" },
    { node: "hall 1100 hall 400 meet", weight: 1, direction: "Turn left" },
    {
      node: "room 1112",
      weight: 1,
      direction: "Turn right then a slight left into room 1112",
    },
    {
      node: "room 1110",
      weight: 1,
      direction: "Turn right then a slight left into room 1110",
    },
  ], // Done
  "room 1109": [
    { node: "hall 1100 upper mid", weight: 1, direction: "Turn left" },
    { node: "hall 1100 hall 400 meet", weight: 1, direction: "Turn right" },
    {
      node: "room 1120",
      weight: 1,
      direction: "Turn right then a slight left into room 1120",
    },
    {
      node: "room 1122",
      weight: 1,
      direction: "Turn right then a slight left into room 1122",
    },
    {
      node: "room 1124",
      weight: 1,
      direction: "Turn left then a slight right into room 1124",
    },
    {
      node: "room 1111",
      weight: 1,
      direction: "Turn left then a slight left into room 1111",
    },
  ], // Done
  "room 1111": [
    { node: "hall 1100 upper mid", weight: 1, direction: "Turn left" },
    { node: "hall 1100 hall 400 meet", weight: 1, direction: "Turn right" },
    {
      node: "room 1120",
      weight: 1,
      direction: "Turn right then a slight left into room 1120",
    },
    {
      node: "room 1122",
      weight: 1,
      direction: "Turn right then a slight left into room 1122",
    },
    {
      node: "room 1124",
      weight: 1,
      direction: "Turn right then a slight left into room 1124",
    },
    {
      node: "room 1109",
      weight: 1,
      direction: "Turn right then a slight right into room 1109",
    },
  ], // Done
  "room 1120": [
    { node: "hall 1100 upper mid", weight: 1, direction: "Turn right" },
    { node: "hall 1100 hall 400 meet", weight: 1, direction: "Turn left" },
    {
      node: "room 1111",
      weight: 1,
      direction: "Turn right then a slight left into room 1111",
    },
    {
      node: "room 1122",
      weight: 1,
      direction: "Turn right then a slight right into room 1122",
    },
    {
      node: "room 1124",
      weight: 1,
      direction: "Turn right then a slight right into room 1124",
    },
    {
      node: "room 1109",
      weight: 1,
      direction: "Turn right then a slight left into room 1109",
    },
  ], // Done
  "room 1122": [
    { node: "hall 1100 upper mid", weight: 1, direction: "Turn right" },
    { node: "hall 1100 hall 400 meet", weight: 1, direction: "Turn left" },
    {
      node: "room 1111",
      weight: 1,
      direction: "Turn right then a slight left into room 1111",
    },
    {
      node: "room 1120",
      weight: 1,
      direction: "Turn left then a slight left into room 1120",
    },
    {
      node: "room 1124",
      weight: 1,
      direction: "Turn right then a slight right into room 1124",
    },
    {
      node: "room 1109",
      weight: 1,
      direction: "Turn right then a slight left into room 1109",
    },
  ], // Done
  "room 1124": [
    { node: "hall 1100 upper mid", weight: 1.1, direction: "Turn right" },
    { node: "hall 1100 hall 400 meet", weight: 1, direction: "Turn left" },
    {
      node: "room 1111",
      weight: 1,
      direction: "Turn right then a slight left into room 1111",
    },
    {
      node: "room 1120",
      weight: 1,
      direction: "Turn left then a slight left into room 1120",
    },
    {
      node: "room 1122",
      weight: 1,
      direction: "Turn left then a slight left into room 1122",
    },
    {
      node: "room 1109",
      weight: 1,
      direction: "Turn left then a slight right into room 1109",
    },
  ], // Done
  "room 1113": [
    { node: "hall 1100 upper mid", weight: 1, direction: "Turn right" },
    { node: "hall 1100 hall 800 meet", weight: 1, direction: "Turn left" },
    {
      node: "room 1115",
      weight: 1,
      direction: "Turn left then a slight left into room 1115",
    },
    {
      node: "room 1126",
      weight: 1,
      direction: "Turn left then a slight right into room 1126",
    },
  ], // Done
  "room 1115": [
    { node: "hall 1100 upper mid", weight: 1, direction: "Turn right" },
    { node: "hall 1100 hall 800 meet", weight: 1, direction: "Turn left" },
    {
      node: "room 1113",
      weight: 1,
      direction: "Turn right then a slight right into room 1113",
    },
    {
      node: "room 1126",
      weight: 1,
      direction: "Straight ahead into room 1126",
    },
  ], // Done
  "room 1126": [
    { node: "hall 1100 upper mid", weight: 1, direction: "Turn left" },
    { node: "hall 1100 hall 800 meet", weight: 1, direction: "Turn right" },
    {
      node: "room 1113",
      weight: 1,
      direction: "Turn left then a slight right into room 1113",
    },
    {
      node: "room 1115",
      weight: 1,
      direction: "Straight ahead into room 1115",
    },
  ], // Done
  "room 1128": [
    { node: "hall 1100 hall 800 meet", weight: 1, direction: "Turn left" },
    {
      node: "room 1130",
      weight: 1,
      direction: "Turn right then a slight right into room 1130",
    },
  ], // Done
  "room 1130": [
    { node: "hall 1100 hall 800 meet", weight: 1, direction: "Turn left" },
    {
      node: "room 1130",
      weight: 1,
      direction: "Turn left then a slight left into room 1128",
    },
  ], // Done
};
