// all uuid crud functions. Match card functions almost exactly.
// in their own utility file to save space in App.js file
import uuid from 'react-uuid';

export const addUuid = (uuids, activeRow) => {
  //1. copy current uuids
  let uuidsCopy = uuids.slice();
  // 2. push new uuid into the currently active rows array
  uuidsCopy[activeRow].push(uuid());

  return uuidsCopy;
};

export const removeUuid = (uuids, rowIndex, cardIndex) => {
  // 1. copy current uuids
  let uuidsCopy = uuids.slice();

  // 2. splice out selected uuid in selected row
  uuidsCopy[rowIndex].splice(cardIndex, 1);

  return uuidsCopy;
};

export const addUuidRow = uuids => {
  // 1. copy current uuids
  let uuidsCopy = uuids.slice();

  // 2. push empty array to end
  uuidsCopy.push([]);

  return uuidsCopy;
};

export const removeUuidRow = (uuids, rowIndex) => {
  // 1. copy current uuids
  let uuidsCopy = uuids.slice();

  // 2. splice out selected row
  uuidsCopy.splice(rowIndex, 1);

  return uuidsCopy;
};

// react-beautiful-dnd onDragEnd clones
export const dragUuid = (
  uuids,
  sourceDropId,
  sourceIndex,
  destIndex
) => {
  // 1. make reference to row were working within
  let row = uuids[sourceDropId];

  // 2. make deeper copy that we will tamper with
  const newRow = Array.from(row); // can also copy array with `const newRow = [...row];`

  // 3. use splice to remove the uuid that was moved (source)
  newRow.splice(sourceIndex, 1);

  // 4. use splice to insert the moved uuid (taken from first copy) into its new position
  newRow.splice(destIndex, 0, row[sourceIndex]);

  // 5. copy state, and insert newly constructed array in place of old one
  let uuidsCopy = Array.from(uuids);
  uuidsCopy[sourceDropId] = newRow;

  return uuidsCopy;
};

export const dragUuidBetweenRows = (
  uuids,
  start,
  end,
  sourceDropId,
  sourceIndex,
  destIndex
) => {
  // 1. reference starting row so we can get the card object to move later
  let startUuidRow = uuids[sourceDropId];

  // 2. shallow copy the Source Row, and remove card from position
  const newUuidStartRow = Array.from(uuids[start]);
  newUuidStartRow.splice(sourceIndex, 1);

  // 3. shallow copt the Destination Row, and move card into new position
  // startRow[source.index] is the card object were moving
  const newUuidEndRow = Array.from(uuids[end]);
  newUuidEndRow.splice(destIndex, 0, startUuidRow[sourceIndex]);

  /// 4. shallow copy the card state, and directly replace the rows (indexes)
  // with the newly constructed rows we made above
  let newUuids = Array.from(uuids);
  newUuids[start] = newUuidStartRow;
  newUuids[end] = newUuidEndRow;

  return newUuids;
};

export const dragUuidRow = (uuids, start, end) => {
  let uuidsCopy = [...uuids]; // copy state

  let arrToMove = uuidsCopy[start]; // copy the array that is being moved

  uuidsCopy.splice(start, 1); // delete where it was
  uuidsCopy.splice(end, 0, arrToMove); // insert where we want it

  return uuidsCopy;
};
