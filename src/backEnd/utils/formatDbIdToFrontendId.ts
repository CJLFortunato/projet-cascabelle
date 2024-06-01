const formatDbIdToFrontendId = (results: any[]): any[] => {
  const formattedResults: any[] = [];
  results.forEach((obj) => {
    let formattedObj = {};
    Object.keys(obj).forEach((key) => {
      if (key.includes('pk_id')) {
        formattedObj = {
          ...formattedObj,
          id: obj[key],
        };
      } else {
        formattedObj = {
          ...formattedObj,
          [key]: obj[key],
        };
      }
    });
    formattedResults.push(formattedObj);
  });
  return formattedResults;
};

export default formatDbIdToFrontendId;
