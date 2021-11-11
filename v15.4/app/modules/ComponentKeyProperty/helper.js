export function clone(arr) {
  return arr.slice();
}

export function insertElementToArrayByIndex(src, dest, rules) {
  //TODO 参数校验
  if (!src.length || !dest.length || !rules || !rules.length) return src.concat(dest);

  const idxArr = clone(rules).map(el => el - 1);
  const tempArray = src.concat(dest);
  const destClone = clone(dest);
  const srcClone = clone(src);

  return tempArray.reduce((acc, val, idx) => {
    const findIdx = idxArr.indexOf(idx) !== -1;

    if (findIdx) {
      if (destClone.length) {
        acc[idx] = destClone.shift();
      } else {
        acc = acc.concat(srcClone);
      }
    } else {
      if (srcClone.length) {
        acc[idx] = srcClone.shift();
      }
    }

    return acc;
  }, []);
}

export const AD_MAP = new Map([
  ['react', '人民的名义'],
  ['angular', '小说']
]);

export const adInsertRules = [2, 3, 6];
