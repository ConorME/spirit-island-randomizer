const spirits = [
  "Lightning's Swift Strike",
  "River Surges in Sunlight",
  "Vital Strength of the Earth",
  "Shadows Flicker Like Flame",
  "Thunderspeaker",
  "A Spread of Rampant Green",
  "Ocean's Hungry Grasp",
  "Bringer of Dreams and Nightmares",
  "Sharp Fangs Behind the Leaves",
  "Keeper of the Forbidden Wilds",
  "Heart of the Wildfire",
  "Serpent Slumbering Beneath the Island"
];

document.getElementById('randomize-btn').addEventListener('click', function() {
  const randomSpirit = spirits[Math.floor(Math.random() * spirits.length)];
  document.getElementById('selected-spirit').textContent = randomSpirit;
});

