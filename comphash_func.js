const comphash = (hash1, hash2) => {
  if ((typeof hash1 !== 'string') || (typeof hash2 !== 'string')) {
    return false;
  }

  const hashString1 = hash1.toString();
  const hashString2 = hash2.toString();

  if (hashString1.length !== hashString2.length) {
    console.log('length case hit')
    return false;
  }

  let result = true;

  for (let i = 0; i < hashString1.length; i++) {
    console.log(`1: ${hashString1[i]} - 2: ${hashString2[i]}`);
    if (hashString1[i] !== hashString2[i]) {
      result = false;
    }
  }

  return result;
}

module.exports = {
  comphash
}
