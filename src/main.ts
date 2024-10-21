import './style.css'

const textInput = document.getElementById('text-input') as HTMLInputElement;
const keyInput = document.getElementById('key-input') as HTMLInputElement;
const output = document.getElementById('output') as HTMLElement;
const encodeBtn = document.getElementById('encode-btn') as HTMLButtonElement;
const decodeBtn = document.getElementById('decode-btn') as HTMLButtonElement;


// encodeBtn?.addEventListener('click', () => {
  // console.log("click");
  
  function caesar(text: string, key: number): string{
    return text.split('').map((char) => {

      if(/[a-zA-Z]/.test(char)){
        const letter = char === char.toLowerCase() ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0); // charCodeAt() -->  ASCII-код
        // console.log("Letter: " + letter);

        const charLetter = ((char.charCodeAt(0) - letter + key) % 26 + 26) % 26 + letter;
        // console.log("Char letter: " + charLetter);

        const newLetter = String.fromCharCode(charLetter);
        // console.log("New letter: " + newLetter);

        return newLetter;
      }
      return char;

    }).join('');
  }

//   caesar(textInput.value, parseInt(keyInput.value));
// });

encodeBtn?.addEventListener('click', () => {
  const textValue: string = textInput.value;
  const keyValue: number = parseInt(keyInput.value);

  const result = caesar(textValue, keyValue);
  output.innerHTML = result;
});

decodeBtn?.addEventListener('click', () => {
  const textValue: string = textInput.value;
  const keyValue: number = parseInt(keyInput.value);

  const result = caesar(textValue, -keyValue);
  output.innerHTML = result;
});