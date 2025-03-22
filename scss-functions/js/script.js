// Color conversion functions
function hslToHsb(h, s, l) {
    s /= 100;
    l /= 100;
    
    const v = l + s * Math.min(l, 1 - l);
    const sv = v === 0 ? 0 : 2 * (1 - l / v);
    
    return {
        h: h,
        s: Math.round(sv * 100),
        b: Math.round(v * 100)
    };
}

function hsbToHsl(h, s, v) {
    s /= 100;
    v /= 100;
    
    const l = v * (1 - s / 2);
    const sl = l === 0 || l === 1 ? 0 : (v - l) / Math.min(l, 1 - l);
    
    return {
        h: h,
        s: Math.round(sl * 100),
        l: Math.round(l * 100)
    };
}

function hslToRgb(h, s, l) {
    s /= 100;
    l /= 100;
    
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;
    
    let r, g, b;
    
    if (h >= 0 && h < 60) {
        [r, g, b] = [c, x, 0];
    } else if (h >= 60 && h < 120) {
        [r, g, b] = [x, c, 0];
    } else if (h >= 120 && h < 180) {
        [r, g, b] = [0, c, x];
    } else if (h >= 180 && h < 240) {
        [r, g, b] = [0, x, c];
    } else if (h >= 240 && h < 300) {
        [r, g, b] = [x, 0, c];
    } else {
        [r, g, b] = [c, 0, x];
    }
    
    return {
        r: Math.round((r + m) * 255),
        g: Math.round((g + m) * 255),
        b: Math.round((b + m) * 255)
    };
}

function rgbToHex(r, g, b) {
    const toHex = (n) => {
        const hex = n.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

function hexToRgb(hex) {
    // Remove # if present
    hex = hex.replace(/^#/, '');
    
    // Parse the hex values
    let r, g, b;
    if (hex.length === 3) {
        // Short notation (e.g. #ABC)
        r = parseInt(hex.charAt(0) + hex.charAt(0), 16);
        g = parseInt(hex.charAt(1) + hex.charAt(1), 16);
        b = parseInt(hex.charAt(2) + hex.charAt(2), 16);
    } else {
        // Full notation (e.g. #AABBCC)
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
    }
    
    return { r, g, b };
}

function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    
    if (max === min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        
        h /= 6;
    }
    
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100)
    };
}

function rgbToHsb(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const d = max - min;
    
    let h = 0;
    const s = max === 0 ? 0 : d / max;
    const v = max;
    
    if (max !== min) {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        b: Math.round(v * 100)
    };
}

// SCSS Color Functions
function calculateLighten(h, s, l, amount) {
    return {
        h: h,
        s: s,
        l: Math.min(100, l + amount)
    };
}

function calculateDarken(h, s, l, amount) {
    return {
        h: h,
        s: s,
        l: Math.max(0, l - amount)
    };
}

function calculateSaturate(h, s, l, amount) {
    return {
        h: h,
        s: Math.min(100, s + amount),
        l: l
    };
}

function calculateDesaturate(h, s, l, amount) {
    return {
        h: h,
        s: Math.max(0, s - amount),
        l: l
    };
}

function calculateGrayscale(h, s, l) {
    return {
        h: h,
        s: 0,
        l: l
    };
}

function calculateAdjustHue(h, s, l, amount) {
    // Adjust hue by adding the amount (degrees)
    // Ensure the result is between 0 and 360
    let newHue = (h + amount) % 360;
    if (newHue < 0) newHue += 360;
    
    return {
        h: newHue,
        s: s,
        l: l
    };
}

// UI Elements
const colorPicker = document.getElementById('colorPicker');
const colorPreview = document.querySelector('.color-preview-box');
const colorValuesOutput = document.getElementById('colorValuesOutput');

// Function controls from index.html
const functionControls = {
    adjustHueAmount: document.getElementById('adjustHueAmount'),
    adjustHueAmountNumber: document.getElementById('adjustHueAmountNumber'),
    lightenAmount: document.getElementById('lightenAmount'),
    lightenAmountNumber: document.getElementById('lightenAmountNumber'),
    darkenAmount: document.getElementById('darkenAmount'),
    darkenAmountNumber: document.getElementById('darkenAmountNumber'),
    saturateAmount: document.getElementById('saturateAmount'),
    saturateAmountNumber: document.getElementById('saturateAmountNumber'),
    desaturateAmount: document.getElementById('desaturateAmount'),
    desaturateAmountNumber: document.getElementById('desaturateAmountNumber'),
    grayscaleButton: document.getElementById('grayscaleButton')
};

// Base color state
let currentColor = {
    h: 180,
    s: 50,
    l: 50
};

// Original color (before transformations)
let originalColor = {
    h: 180,
    s: 50,
    l: 50
};

// Function to update color display
function updateColorDisplay(h, s, l) {
    // Update preview color
    const currentColorStr = `hsl(${h}, ${s}%, ${l}%)`;
    colorPreview.style.backgroundColor = currentColorStr;
    
    // Update color values output
    const rgb = hslToRgb(h, s, l);
    const hex = rgbToHex(rgb.r, rgb.g, rgb.b);
    
    // Get SCSS function values
    const adjustHueValue = parseInt(functionControls.adjustHueAmount.value);
    const lightenValue = parseInt(functionControls.lightenAmount.value);
    const darkenValue = parseInt(functionControls.darkenAmount.value);
    const saturateValue = parseInt(functionControls.saturateAmount.value);
    const desaturateValue = parseInt(functionControls.desaturateAmount.value);
    
    // Build SCSS function display
    let scssOutput = '';
    
    // Original color as SCSS variable
    scssOutput += `$color: hsl(${Math.round(originalColor.h)}, ${Math.round(originalColor.s)}%, ${Math.round(originalColor.l)}%);\n\n`;
    
    // Build the SCSS function chain
    let scssFunction = '$color';
    let functionApplied = false;
    
    // Add applied functions in sequence
    if (adjustHueValue !== 0) {
        scssFunction = `adjust-hue(${scssFunction}, ${adjustHueValue}deg)`;
        functionApplied = true;
    }
    
    if (lightenValue > 0) {
        scssFunction = `lighten(${scssFunction}, ${lightenValue}%)`;
        functionApplied = true;
    }
    
    if (darkenValue > 0) {
        scssFunction = `darken(${scssFunction}, ${darkenValue}%)`;
        functionApplied = true;
    }
    
    if (saturateValue > 0) {
        scssFunction = `saturate(${scssFunction}, ${saturateValue}%)`;
        functionApplied = true;
    }
    
    if (desaturateValue > 0) {
        scssFunction = `desaturate(${scssFunction}, ${desaturateValue}%)`;
        functionApplied = true;
    }
    
    // Add the final SCSS code
    scssOutput += `// SCSS function chain:\n${scssFunction};\n\n`;
    
    // Add individual function examples
    scssOutput += "// Individual functions:\n";
    if (adjustHueValue !== 0) {
        scssOutput += `adjust-hue($color, ${adjustHueValue}deg);\n`;
    }
    
    if (lightenValue > 0) {
        scssOutput += `lighten($color, ${lightenValue}%);\n`;
    }
    
    if (darkenValue > 0) {
        scssOutput += `darken($color, ${darkenValue}%);\n`;
    }
    
    if (saturateValue > 0) {
        scssOutput += `saturate($color, ${saturateValue}%);\n`;
    }
    
    if (desaturateValue > 0) {
        scssOutput += `desaturate($color, ${desaturateValue}%);\n`;
    }
    
    // If no functions applied, show the original color
    if (!functionApplied) {
        scssOutput += '// No functions applied\n';
    }
    
    colorValuesOutput.textContent = `// RGB: rgb(${rgb.r}, ${rgb.g}, ${rgb.b})
// HEX: ${hex}
// HSL: hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)

${scssOutput}`;

    // Store the current color
    currentColor = { h, s, l };
}

// Function to update color based on SCSS function values
function updateColor() {
    const adjustHueValue = parseInt(functionControls.adjustHueAmount.value);
    const lightenValue = parseInt(functionControls.lightenAmount.value);
    const darkenValue = parseInt(functionControls.darkenAmount.value);
    const saturateValue = parseInt(functionControls.saturateAmount.value);
    const desaturateValue = parseInt(functionControls.desaturateAmount.value);
    
    // Start with the original color (from color picker)
    let newColor = { ...originalColor };
    
    // Apply SCSS functions in sequence
    if (adjustHueValue !== 0) {
        newColor = calculateAdjustHue(newColor.h, newColor.s, newColor.l, adjustHueValue);
    }
    
    if (lightenValue > 0) {
        newColor = calculateLighten(newColor.h, newColor.s, newColor.l, lightenValue);
    }
    
    if (darkenValue > 0) {
        newColor = calculateDarken(newColor.h, newColor.s, newColor.l, darkenValue);
    }
    
    if (saturateValue > 0) {
        newColor = calculateSaturate(newColor.h, newColor.s, newColor.l, saturateValue);
    }
    
    if (desaturateValue > 0) {
        newColor = calculateDesaturate(newColor.h, newColor.s, newColor.l, desaturateValue);
    }
    
    updateColorDisplay(newColor.h, newColor.s, newColor.l);
}

// Reset all sliders to 0
function resetSliders() {
    // Reset all sliders to 0
    Object.entries(functionControls).forEach(([key, element]) => {
        if (key !== 'grayscaleButton' && element) {
            element.value = 0;
            const numberInput = functionControls[key + 'Number'];
            if (numberInput) {
                numberInput.value = 0;
            }
        }
    });
}

// Handle color picker change
function handleColorPickerChange(e) {
    const hexColor = e.target.value;
    const rgb = hexToRgb(hexColor);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    
    // Update original color
    originalColor = { 
        h: hsl.h, 
        s: hsl.s, 
        l: hsl.l 
    };
    
    // Reset sliders
    resetSliders();
    
    // Update display
    updateColorDisplay(originalColor.h, originalColor.s, originalColor.l);
}

// Event listeners for function controls
Object.entries(functionControls).forEach(([key, element]) => {
    if (key === 'grayscaleButton') {
        element.addEventListener('click', () => {
            let newColor = calculateGrayscale(originalColor.h, originalColor.s, originalColor.l);
            updateColorDisplay(newColor.h, newColor.s, newColor.l);
        });
    } else if (element) {
        const numberInput = functionControls[key + 'Number'];
        
        if (element && numberInput) {
            element.addEventListener('input', (e) => {
                numberInput.value = e.target.value;
                updateColor();
            });
            
            numberInput.addEventListener('input', (e) => {
                element.value = e.target.value;
                updateColor();
            });
        }
    }
});

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Set initial color from the color picker
    const initialHexColor = colorPicker.value;
    const rgb = hexToRgb(initialHexColor);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    
    originalColor = { h: hsl.h, s: hsl.s, l: hsl.l };
    
    // Add event listener to color picker
    colorPicker.addEventListener('input', handleColorPickerChange);
    
    // Reset all sliders to 0
    resetSliders();
    
    // Set initial color
    updateColorDisplay(originalColor.h, originalColor.s, originalColor.l);
}); 