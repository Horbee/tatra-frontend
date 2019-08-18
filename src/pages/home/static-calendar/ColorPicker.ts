export abstract class ColorPicker {
  public static colors = [
    "#801313",
    "#b71c1c",
    "#c54949",
    "#ff9800",
    "#81c784",
    "#43a047",
    "#1b5e20"
  ];

  public static getColor(votes: number[]) {
    const index = 3 - votes[0] + votes[2];
    console.log("index", index);

    if (index <= 0) {
      return ColorPicker.colors[0];
    } else if (index >= 6) {
      return ColorPicker.colors[6];
    } else {
      return ColorPicker.colors[index];
    }
  }
}
