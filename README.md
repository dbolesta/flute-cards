# Flute Cards

Assists in learning the flute fingering for every note on the flute. Select notes, and a card will display a fingering chart for that note.

## Built With

- [create-react-app](https://github.com/facebook/create-react-app) - Small little package by some indie developer
- [react-abc](https://www.npmjs.com/package/react-abc) - Generates music note & staff svgs, and plays midi audio
- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) - Allows for dragging and dropping of cards and rows
- [react-transition-group](https://github.com/reactjs/react-transition-group) - Enables entrance / exit animations when state is modified

## Authors

- **Damon Bolesta** - [Website](https://damonbolesta.com)

## Learning Log

- Array.from() is a great way to quickly make a copy of state before you tamper with it
- In `react-beautiful-dnd`, the `draggable` / `droppable` indexes need to be consecutive numbers, and can almost always be the loop index. The id must be a string, and must be unique, so index will not work. This is why the `uuids` state and functions were created.

  - Initially considered creating a function to keep track of the "absolute index" of elements within the nested `cards` state. That is, a single sequential index. Then I could have a single array of uuids, and have the cards call the uuids with their own "absolute index". But I decided that making a straight duplicate nested state would probably be a bit simpler. I'm still not positive if it would actually be easier

- Ran into a tiny issue when making Sharps selectable on the Staff. At first, the problem was that clicking on the "Sharp" svg would cause both the sharp and regular note to be added. I quickly realized that good old `e.stopProppagation()` on the sharp's `onClick` function easily solved this.

- With help from [my stackoverflow question](https://stackoverflow.com/questions/60177932/react-transition-group-and-react-abc-abcjs-midi-will-not-work-at-the-same-time), I was able to realize that the `Midi` component itself needed a `key` in order to have animations and Midi working together. Midi needs a `key` because it needs to remount with the new notation code even when the `CardRow` itself doesn't remount.

## Known Issues

- MIDI will not play the first note on the very first play after pageload (on Chrome)
- MIDI seems to not work great on mobile Safari
