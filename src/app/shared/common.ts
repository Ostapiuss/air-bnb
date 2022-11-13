// @ts-ignore
export const filterByDate = (formData: any, filteredArray: any): Array<any> => {
  let newData = [...filteredArray];

  if (formData.arriveDate && formData.departureDate) {
    newData = newData.filter((item: any): any => {
      if (item.availableDate) {
        return item.availableDate.some((el: any) =>
          new Date(el.settlements).getTime() >= new Date(formData.arriveDate).getTime()
          && new Date(el.eviction).getTime() >= new Date(formData.departureDate).getTime()
        )
      }
    });
    return newData;
  };

  if (formData.arriveDate) {
    console.log(2)
    newData = newData.filter((item: any): any => {
      if (item.availableDate) {
        return item.availableDate.some((el: any) => new Date(el.settlements).getTime() >= new Date(formData.arriveDate).getTime())
      }
    });
    return newData;
  };
}
