// Load text data from the JSON
const textData = 
[
    {start: 0, end: 4, "text": "Welcome, ladies and gentlemen, to the grand spectacle that is the Urban Gauntlet Grand Prix!"},
    {start: 5, end: 12, "text": "Tonight, in the heart of Magapore, the fusion of cutting-edge architecture and engineering ingenuity, we witness a race like no other."},
    {start: 13, end: 19, "text": "Forget turbocharged race cars—this event showcases the raw determination of engineers, architects, and builders."},
    {start: 20, end: 27, "text": "Some are sprinting on foot in steel-toe boots, others are behind the wheels of bulldozers, forklifts, and even a dredging vessel."},
    {start: 28, end: 31, "text": "The stage is set, the machines are revving, and the stakes couldn’t be higher!"},
    {start: 32, end: 38, "text": "As the hard hat is tossed into the air to signal the start, the participants surge forward with a roar!"},
    {start: 39, end: 45, "text": "Bulldozers lurch into motion, their blades scraping sparks off the tarmac as they push aside barriers."},
    {start: 46, end: 51, "text": "Forklifts weave through the chaos, their hydraulic lifts juddering under the strain of sharp turns."},
    {start: 52, end: 64, "text": "And look at that! A runner in a fluorescent vest dashes between a rumbling dump truck and a loader, their helmet reflecting the lights of the towering Petronas Towers that dominate the skyline."},
    {start: 65, end: 72, "text": "The track itself is a masterpiece of urban design, winding through the greatest landmarks of Magapore."},
    {start: 73, end: 82, "text": "Early on, the competitors pass the iconic Marina Bay Sands, its shimmering ship-like structure appearing to float on its trio of towering columns."},
    {start: 83, end: 88, "text": "The finish line lies just beyond, but the path to victory is a long and perilous one."},
    {start: 89, end: 98, "text": "As they navigate through the Gardens by the Greenery, the towering Supertrees glow like beacons, casting a kaleidoscope of colors on the vehicles below."},
    {start: 99, end: 107, "text": "One forklift nearly tips over as it swerves to avoid a planter box—who would’ve thought construction zones could be this thrilling?"},
    {start: 108, end: 112, "text": "The competition heats up as the participants approach the canal section of the track."},
    {start: 113, end: 121, "text": "The dredging vessel, moving at what can only be described as a glacial pace, churns forward with surprising determination."},
    {start: 122, end: 129, "text": "Its operator, cool under pressure, uses the vessel’s giant scoop to clear floating debris and gain a slight edge."},
    {start: 130, end: 137, "text": "Meanwhile, a bulldozer takes a risky shortcut, crashing through a wooden barrier that was clearly marked under repair."},
    {start: 138, end: 142, "text": "Sparks fly as it drags a chunk of fencing behind it!"},
    {start: 143, end: 149, "text": "Runners are taking full advantage of their mobility, scaling scaffolding near the Helix Bridge to avoid the gridlock below."},
    {start: 150, end: 162, "text": "The bridge, with its twisting, DNA-inspired design, glimmers in the city’s neon glow, creating a surreal backdrop to this race of machines and human endurance."},
    {start: 163, end: 170, "text": "One runner leaps from the scaffolding onto a moving excavator—an absolutely daring move that has the crowd on their feet!"},
    {start: 171, end: 180, "text": "And what’s this? A team of forklift drivers has decided to use their hydraulic lifts in unison to create a makeshift ramp."},
    {start: 181, end: 184, "text": "They’re attempting to leapfrog a stalled dump truck!"},
    {start: 185, end: 192, "text": "The crowd gasps as the first forklift soars over the obstacle, landing with a clatter near the base of the Singapore Flyer."},
    {start: 193, end: 197, "text": "Did you know the Flyer once held the record as the world’s tallest observation wheel?"},
    {start: 198, end: 201, "text": "But tonight, it’s witnessing a different kind of high-stakes performance!"},
    {start: 202, end: 209, "text": "The race now winds through the bustling Chinatown Quarter, where the narrow streets force the larger machines to slow down."},
    {start: 210, end: 214, "text": "Here, runners gain ground, darting through alleyways lined with glowing red lanterns."},
    {start: 215, end: 219, "text": "But back on the open straights near the Jewel Changi Airport, the machines pick up speed."},
    {start: 220, end: 230, "text": "A loader barrels forward, its scoop raised triumphantly like a jouster’s lance, while the dredging vessel has finally reached an incline—how it plans to get up and over is anyone’s guess!"},
    {start: 231, end: 237, "text": "The final stretch looms as competitors thunder past the National Mosque Pavilion, its elegant dome reflecting the city lights."},
    {start: 238, end: 244, "text": "The bulldozer, still dragging that piece of fencing, is neck-and-neck with a speeding dump truck."},
    {start: 245, end: 254, "text": "Meanwhile, one runner has found an ingenious shortcut through the Cloud Forest Dome, where the mist from the cascading waterfall cools their feverish sprint."},
    {start: 255, end: 264, "text": "Spectators gasp as the dredging vessel suddenly appears on the tarmac—it’s managed to hoist itself out of the canal using its massive scoop arm!"},
    {start: 265, end: 268, "text": "The finish line is in sight, just beyond the Marina Bay Sands."},
    {start: 269, end: 275, "text": "The skyline itself seems to cheer them on, with the glowing petals of the ArtScience Museum flashing in rhythm to the crowd’s roar."},
    {start: 276, end: 281, "text": "Bulldozers and forklifts jostle for position, their metal frames clanging like a symphony of industry."},
    {start: 282, end: 292, "text": "One runner sprints so hard their safety helmet wobbles precariously, while the dredging vessel lumbers behind, its horn blasting defiantly."},
    {start: 293, end: 295, "text": "And here we go—what an incredible finish!"},
    {start: 296, end: 304, "text": "It’s neck-and-neck as the runner dives across the line, just milliseconds ahead of a forklift that’s skidding sideways."},
    {start: 305, end: 307, "text": "But wait—did the dredging vessel clip the barrier?"},
    {start: 308, end: 310, "text": "Is the bulldozer’s shortcut even legal?"},
    {start: 311, end: 314, "text": "The stewards are deliberating, and the tension is through the roof!"},
    {start: 315, end: 319, "text": "Ladies and gentlemen, we don’t have the final results yet."},
    {start: 320, end: 324, "text": "The skyline will rest tonight, but we’re left wondering—who’s qualified, and who will take home the ultimate prize?"},
    {start: 325, end: 326, "text": "Stay tuned!"}
	{start: 327, end: 345, "text": "AM I QUALIFIED TO JOIN?"}
	
];

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio");
    const textDiv = document.getElementById("text");

    // Update the text according to the audio's current time
    audio.addEventListener("timeupdate", () => {
        const currentTime = audio.currentTime;
        const currentSentence = textData.find(
            (sentence) => currentTime >= sentence.start && currentTime <= sentence.end
        );
        textDiv.textContent = currentSentence ? currentSentence.text : "";
    });
});