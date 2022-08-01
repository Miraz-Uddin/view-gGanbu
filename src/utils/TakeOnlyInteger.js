/**
 * @param {Maximum Value of 1st input field} maxValue1
 * @param {Maximum Value of 2nd input field} maxValue2
 * @param {Input field Marker} pointer
 * @param {Setter Function of Input Field} inputValueChanger
 * @param {Get the Value of 1st input field} value1
 * @param {Get the Value of 2nd input field} value2
 * @param {Submit Button Toggler} btnToggle
 */

export default function TakeOnlyInteger(
  maxValue1,
  maxValue2,
  pointer,
  inputValueChanger,
  value1,
  value2,
  btnToggle
) {
  inputValueChanger((prev) => {
    return {
      ...prev,
      [pointer]: value1,
    };
  });

  const regexForOnlyInteger = /(([1-9]{1})|([1-9]{1}[0-9]{1,}))/;
  let check =
    regexForOnlyInteger.test(value1) &&
    Boolean(value1) == true &&
    value1 >= 0 &&
    regexForOnlyInteger.test(value2) &&
    Boolean(value2) == true &&
    value2 >= 0 &&
    value1[0] != 0 &&
    value2[0] != 0 &&
    parseInt(value1) > 0 &&
    parseInt(value1) <= maxValue1 &&
    parseInt(value2) > 0 &&
    parseInt(value2) <= maxValue2;
  btnToggle(false);
  if (check) btnToggle(true);
}
