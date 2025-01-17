export function DisplayFilterData(searchData, realData) {
  return searchData.length > 0 ? searchData : realData;
}
