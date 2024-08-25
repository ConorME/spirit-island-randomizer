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
  "Serpent Slumbering Beneath the Island",
  "Grinning Trickster Stirs Up Trouble",
  "Lure of the Deep Wilderness",
  "Many Minds Move as One",
  "Shifting Memory of Ages",
  "Stone's Unyielding Defiance",
  "Volcano Looming High",
  "Shroud of Silent Mist",
  "Vengeance as a Burning Plague",
  "Fractured Days Split the Sky",
  "Starlight Seeks its Form",
  "Downpour Drenches the World",
  "Finder of Paths Unseen",
  "Devouring Teeth Lurk Underfoot",
  "Eyes Watch from the Trees",
  "Famotherless Mud of the Swamp",
  "Rising Heat of Stone and Sand",
  "Sun-Bright Whirlwind",
  "Ember-Eyed Behemoth",
  "Hearth-Vigil",
  "Towering Roots of the Jungle",
  "Breath of Darkness Down Your Spine",
  "Relentless Gaze of the Sun",
  "Wandering Voice Keens Delirium",
  "Wounded Waters Bleeding",
  "Dances Up Earthquakes"
];

document.getElementById('randomize-btn').addEventListener('click', function() {
  const randomSpirit = spirits[Math.floor(Math.random() * spirits.length)];
  document.getElementById('selected-spirit').textContent = randomSpirit;
});
