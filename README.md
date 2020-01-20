# Flute Cards

Assists in learning the flute fingering for every note on the flute. Select notes, and a card will display a fingering chart for that note.

## Built With

- [create-react-app](https://github.com/facebook/create-react-app) - Cool little package
- [react-abc](https://www.npmjs.com/package/react-abc) - Generates music note & staff svgs, and plays midi audio
- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) - Allows for dragging and dropping of cards and row

## Authors

- **Damon Bolesta** - [Website](https://damonbolesta.com)

## Learning Log

- Array.from() is a great way to quickly make a copy of state before you tamper with it
- In `react-beautiful-dnd`, the `draggable` / `droppable` indexes need to be consecutive numbers, and can almost always be the loop index. The id must be a string, and must be unique, so index will not work. This is why the `uuids` state and functions were created.

## Known Issues

- MIDI will not play the first note on the very first play after pageload
