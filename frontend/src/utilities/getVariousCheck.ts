const getVariousCheck = <T>($event: any, vec: T[]) => {
  const id = $event.target.value;
  var auxiliar = null;
  if (vec.includes(id)) {
    auxiliar = vec.filter((ele: T) => ele !== id);
  } else {
    auxiliar = vec.concat(id);
  }
  vec = auxiliar;
  return vec;
};
export default getVariousCheck;
