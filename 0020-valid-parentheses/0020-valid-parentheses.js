function isValid(s) {
    const stack = [];
    
    const bracketPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (bracketPairs[char]) {
            const topElement = stack.pop();
            
            if (bracketPairs[char] !== topElement) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}
