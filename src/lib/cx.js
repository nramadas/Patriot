export default function cx(cls, conditions={}) {
  return Object.keys(conditions).reduce((result, c) => {
    if (conditions[c]) return result + ` ${c}`;
    return result;
  }, cls);
}
