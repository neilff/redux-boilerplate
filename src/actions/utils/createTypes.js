export default function createTypes(base, types) {
  const res = {};
  types.forEach(type => { res[type] = `APP/${ base }/${ type }`; });
  return res;
}
