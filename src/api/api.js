export default function processAPIData(res) {
  const newObj = Object.entries(res).map(
    ([key, value]) => Object.assign(value[0], { item_id: key }),
  );
  return newObj;
}
