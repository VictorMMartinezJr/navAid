// FIX 108A

export const graph = {
  // Main Entrance - Done
  "main entrance": [
    {
      node: "hall 200 start right",
      weight: 1.1,
      direction: "Turn right",
      directionFrom: { "hall 200 start left": " Continue straight" },
    },
    {
      node: "hall 200 start left",
      weight: 1.1,
      direction: "Turn left",
      directionFrom: { "hall 200 start right": " Continue straight" },
    },
    { node: "one stop", weight: 1, direction: "Straight ahead to one stop" },
    { node: "room 224", weight: 1, direction: "Slight right into room 224" },
  ],
  // Done

  // One Stop
  "one stop": [
    { node: "main entrance", weight: 1 },
    { node: "room 224", weight: 1 },
    { node: "hall 200 start left", weight: 1 },
    { node: "hall 200 start right", weight: 1 },
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
      node: "room 108A",
      weight: 1,
      direction: "Slight left into room 108A",
      directionFrom: {
        "hall 300 hall 600 meet": "Turn left then a slight left into room 108A",
        "room 604": "Turn left then a slight left into room 108A",
        "room 602": "Turn left then a slight left into room 108A",
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
        "room 108A": "Turn right then a slight left into room 602",
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
        "room 108A": "Turn right then a slight left into room 604",
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
        "room 108A": "Turn right then a slight left into room 606",
        "room 110": "Turn right then a slight left into room 606",
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
        "room 108A": "Turn right",
        "room 110": "Turn right",
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
      node: "room 108A",
      weight: 1,
      direction: "Slight right into room 108A",
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
      node: "room 108A",
      weight: 1,
      direction: "Turn right then a slight right into room 108A",
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
      node: "room 108A",
      weight: 1,
      direction: "Turn left then a slight right into room 108A",
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
      direction: "Turn right then a slight right into room 108A",
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
      node: "room 108A",
      weight: 1,
      direction: "Straight ahead into room 108A",
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
      node: "room 108A",
      weight: 1,
      direction: "Straight ahead into room 108A",
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
      node: "room 110",
      weight: 1,
      direction: "Straight ahead into room 110",
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
      weight: 1.1,
      direction: "Continue straight",
      directionFrom: {
        "hall 1100 lower mid": "Turn right",
        "room 1103": "Turn right",
        "room 1106": "Turn right",
        "room 1101": "Turn right",
        "room 1104": "Turn right",
        "room 1108": "Turn right",
        "hall 1100 start": "Turn left",
      },
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
    {
      node: "hall 1100 lower mid",
      weight: 1,
      direction: "Continue Straight",
      directionFrom: { "hall 200 right mid": "Turn left" },
    },
    {
      node: "hall 1100 start",
      weight: 1,
      direction: "Continue Straight",
      directionFrom: { "hall 200 right mid": "Turn right" },
    },
  ],

  // Done

  // Hall 1100 start - Done
  "hall 1100 start": [
    {
      node: "hall 200 hall 1100 meet",
      weight: 1.1,
      direction: "Continue straight",
    },
    {
      node: "room 1102",
      weight: 1,
      direction: "Slight right into room 1102",
    },
  ],
  // Done

  // Hall 1100 lower mid - Done
  "hall 1100 lower mid": [
    {
      node: "hall 200 hall 1100 meet",
      weight: 1.1,
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
      direction: "Slight right into room 1106",
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
    {
      node: "hall 1100 hall 400 meet",
      weight: 1,
      direction: "Continue straight",
    },
  ],
  // Done

  // Rooms hall 1100 - Done
  "room 1101": [
    { node: "hall 200 hall 1100 meet", weight: 1, direction: "Turn right" },
    { node: "hall 1100 lower mid", weight: 1.1, direction: "Turn left" },
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
    { node: "hall 1100 lower mid", weight: 1.1, direction: "Turn left" },
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
    { node: "hall 1100 lower mid", weight: 1.1, direction: "Turn right" },
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
    { node: "hall 200 left mid", weight: 1, direction: "Turn left" },
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
      node: "room 704 campus police",
      weight: 1,
      direction: "Slight right to room 704 - Campus Police",
    },
    {
      node: "room 701",
      weight: 1,
      direction: "Slight left to room 701",
    },
  ],
  // Done

  // Hall 200 hall 500 meet - Add 400s
  "hall 200 hall 500 meet": [
    {
      node: "hall 200 left mid",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 500 hall 400 meet": "Turn left",
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
        "hall 500 start": "Turn left",
        "room 513": "Turn left",
      },
    },
    {
      node: "hall 500 start",
      weight: 1,
      direction: "Continue straight",
      directionFrom: {
        "hall 200 hall 300 meet": "Turn right",
        "hall 200 left mid": "Turn left",
      },
    },
    {
      node: "room 212",
      weight: 1,
      direction: "Slight left into room 212",
      directionFrom: {
        "hall 500 hall 400 meet": "Turn left then a slight left to room 212",
        "hall 500 start": "Turn right then a slight left to room 212",
      },
    },
    {
      node: "room 214",
      weight: 1,
      direction: "Slight left into room 214",
      directionFrom: { "hall 200 hall 700 meet": "Slight right into room 214" },
    },
    {
      node: "room 213",
      weight: 1,
      direction: "Slight left into room 213",
      directionFrom: {
        "hall 500 hall 400 meet": "Turn left then a slight right to room 213",
        "hall 500 start": "Turn right then a slight right to room 213",
      },
    },
    {
      node: "room 211",
      weight: 1,
      direction: "Slight left into room 211",
      directionFrom: {
        "hall 500 hall 400 meet": "Turn left then a slight right to room 211",
        "hall 500 start": "Turn right then a slight right to room 211",
      },
    },
    {
      node: "room 209",
      weight: 1,
      direction: "Slight right into room 209",
      directionFrom: {
        "hall 500 hall 400 meet": "Turn left then a slight right to room 209",
        "hall 500 start": "Turn right then a slight right to room 209",
      },
    },
    {
      node: "room 210",
      weight: 1,
      direction: "Slight right into room 210",
      directionFrom: {
        "hall 500 hall 400 meet": "Turn right then a slight right to room 210",
        "hall 500 start": "Turn left then a slight right to room 210",
      },
    },
    {
      node: "room 208",
      weight: 1,
      direction: "Slight right into room 208",
      directionFrom: {
        "hall 500 hall 400 meet": "Turn right then a slight right to room 208",
        "hall 500 start": "Turn left then a slight right to room 208",
      },
    },
    {
      node: "room 513",
      weight: 1,
      direction: "Slight right into room 513",
      directionFrom: {
        "hall 200 hall 300 meet": "Turn right then a slight right to room 513",
        "hall 200 left mid": "Turn left then a slight right to room 513",
      },
    },
    {
      node: "room 515",
      weight: 1,
      direction: "Slight left into room 515",
      directionFrom: {
        "hall 200 hall 300 meet": "Turn left then a slight left to room 513",
        "hall 200 left mid": "Turn right then a slight left to room 513",
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

  // Hall 500
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

  // Hall 300 hall 600 meet - Done
  "hall 300 hall 600 meet": [
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
  ],
  // Done

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
  ],
  // Hall 500 bottom
  "hall 500 bottom": [
    {
      node: "hall 500 start",
      weight: 1,
      direction: "Continue straight",
      directionFrom: { "hall 500 bottom mid": "Turn left" },
    },
    {
      node: "hall 500 bottom mid",
      weight: 1.1,
      direction: "Continue straight",
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
  ],
  // Done

  // Hall 500 bottom mid
  "hall 500 bottom mid": [
    {
      node: "hall 500 bottom",
      weight: 1.1,
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
  ],

  // Rooms hall 500
  // Bottom
  library: [
    {
      node: "hall 500 bottom mid",
      weight: 1.1,
      direction: "Continue straight",
    },
    {
      node: "room 501",
      weight: 1.1,
      direction: "Slight left into room 501",
    },
    {
      node: "room 502",
      weight: 1.1,
      direction: "Slight right into room 502",
    },
  ], // Done
  "room 501": [
    {
      node: "hall 500 bottom mid",
      weight: 1.1,
      direction: "Turn left",
    },
    {
      node: "library",
      weight: 1,
      direction: "Turn right then straight to the Library",
    },
    {
      node: "room 502",
      weight: 1.1,
      direction: "Turn left then a slight right into room 502",
    },
  ], // Done
  "room 502": [
    {
      node: "hall 500 bottom mid",
      weight: 1.1,
      direction: "Turn right",
    },
    {
      node: "library",
      weight: 1,
      direction: "Turn left then straight to the Library",
    },
    {
      node: "room 501",
      weight: 1.1,
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

  // Hall 200 Start Left
  "hall 700 upper mid": [
    {
      node: "hall 200 start left",
      weight: 1.2,
      direction: "Continue straight towards the main entrance",
    },
    { node: "hall 800 end", weight: 1.1, direction: "Turn left" },
  ],

  "hall 800 end": [
    { node: "hall 700 upper mid", weight: 1.1, direction: "Continue straight" },
    { node: "room 127", weight: 1.1, direction: "Turn right into room 127" },
  ],

  "room 127": [{ node: "hall 800 end", weight: 1.1, direction: "Turn right" }],
};
