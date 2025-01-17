import { ref } from "vue/reactivity";

export default function useColorPicker() {
  const colors = ["green", "red", "blue", "purple"];
  let message = ref("pick a color...");

  const matchColor = (value) => {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    if (value === randomColor) {
      message.value = `correct...[response: ${randomColor}]`;
      return;
    }
    message.value = `wrong...[response: ${randomColor}]`;
  };
  return { colors, message, matchColor };
}
