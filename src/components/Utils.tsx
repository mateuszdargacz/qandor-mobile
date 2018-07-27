export const chunkArray = (array: any, chunk=2) => {
	let resultArray = [];
	let tmpArray = array;
	while (tmpArray.length > 0) {
	  resultArray.push(tmpArray.slice(0, chunk));
	  tmpArray = tmpArray.slice(chunk);
	}
	return resultArray;
  }
