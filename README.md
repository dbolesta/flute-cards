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

  - Initially considered creating a function to keep track of the "absolute index" of elements within the nested `cards` state. That is, a single sequential index. Then I could have a single array of uuids, and have the cards call the uuids with their own "absolute index". But I decided that making a straight duplicate nested state would probably be a bit simpler. I'm still not positive if it would actually be easier

- Ran into a tiny issue when making Sharps selectable on the Staff. At first, the problem was that clicking on the "Sharp" svg would cause both the sharp and regular note to be added. I quickly realized that good old `e.stopProppagatio()` on the sharp's `onClick` function easily solved this.

## Known Issues

- MIDI will not play the first note on the very first play after pageload
