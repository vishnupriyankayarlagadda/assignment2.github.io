// Function to count vowels and consonants in a string
function countVowelsAndConsonants() {
    const inputString = document.getElementById('inputString').value.toLowerCase();
    const vowels = 'aeiou';
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of inputString) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char.match(/[a-z]/i)) {
            consonantCount++;
        }
    }

    document.getElementById('vowelCount').textContent = `Vowels: ${vowelCount}`;
    document.getElementById('consonantCount').textContent = `Consonants: ${consonantCount}`;
}

// Function to check if a string is a palindrome
function checkPalindrome() {
        let num1 = document.getElementById("inputPalindrome").value;
        if (num1.trim() === '') {
            document.getElementById('palindromeResult').textContent = 'Please enter a valid number.';
            return;
        }
        let num2 = 0;
        let num3 = num1;
  
        while (num1 > 0) {
          const x = num1 % 10;
          num2 = num2 * 10 + x;
          num1 = Math.floor(num1 / 10);
        }
  
        if (num3 == num2) {
          document.getElementById("palindromeResult").textContent = "Given number is a palindrome";
        } else {
          document.getElementById("palindromeResult").textContent = "Given number is not a palindrome";
        }
}

// Function to calculate the total amount including tip
function calculateTotal() {
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    if (!isNaN(subtotal) && !isNaN(tipPercentage)) {
        const tipAmount = (subtotal * tipPercentage) / 100;
        const totalAmount = subtotal + tipAmount;
        document.getElementById('totalAmount').textContent = `Total Amount (including ${tipPercentage}% tip): $${totalAmount.toFixed(2)}`;
    } else {
        document.getElementById('totalAmount').textContent = 'Please enter valid numbers.';
    }
}
