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

// Add these new functions after the existing color conversion functions

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

// UI Elements
const hslInputs = {
    hue: document.getElementById('hslHue'),
    hueNumber: document.getElementById('hslHueNumber'),
    saturation: document.getElementById('hslSaturation'),
    saturationNumber: document.getElementById('hslSaturationNumber'),
    lightness: document.getElementById('hslLightness'),
    lightnessNumber: document.getElementById('hslLightnessNumber')
};

const hsbInputs = {
    hue: document.getElementById('hsbHue'),
    hueNumber: document.getElementById('hsbHueNumber'),
    saturation: document.getElementById('hsbSaturation'),
    saturationNumber: document.getElementById('hsbSaturationNumber'),
    brightness: document.getElementById('hsbBrightness'),
    brightnessNumber: document.getElementById('hsbBrightnessNumber')
};

const outputs = {
    lightness: document.getElementById('lightnessOutput'),
    saturation: document.getElementById('saturationOutput'),
    colorValues: document.getElementById('colorValuesOutput')
};

const colorRing = document.getElementById('colorRing');
const colorIndicator = document.getElementById('colorIndicator');
const colorPreview = document.getElementById('colorPreview');

// Function to update color indicator position
function updateColorIndicator(h, s, l) {
    // Convert lightness and saturation to polar coordinates
    const radius = s * 1.5; // Back to 1.5 to keep indicator within ring bounds
    const angle = (-h + 90) * (Math.PI / 180); // Convert hue to radians, 0° at top
    
    // Calculate x and y position
    const centerX = 150; // Half of container width
    const centerY = 150; // Half of container height
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY - Math.sin(angle) * radius; // Negative to match coordinate system
    
    // Update indicator position
    colorIndicator.style.left = `${x}px`;
    colorIndicator.style.top = `${y}px`;
    
    // Update colors
    const currentColor = `hsl(${h}, ${s}%, ${l}%)`;
    document.documentElement.style.setProperty('--current-color', currentColor);
    document.documentElement.style.setProperty('--indicator-color', currentColor);
}

function updateColorRing(s) {
    // The gradient is now handled by CSS
}

// Update functions
function updateFromHsl() {
    const h = parseInt(hslInputs.hue.value);
    const s = parseInt(hslInputs.saturation.value);
    const l = parseInt(hslInputs.lightness.value);
    
    // Update color ring with current saturation
    updateColorRing(s);
    
    // Calculate percentages based on current values
    const lightenAmount = l;          // Amount needed to get from black (0%) to current lightness
    const darkenAmount = 100 - l;     // Amount needed to get from white (100%) to current lightness
    
    // New calculation for saturation amounts
    const saturateAmount = 100 - s;    // How much more saturation can be added
    const desaturateAmount = s;        // How much saturation can be removed
    
    // Update color ring and indicator
    updateColorIndicator(h, s, l);
    
    // Update preview colors
    const currentColor = `hsl(${h}, ${s}%, ${l}%)`;
    document.documentElement.style.setProperty('--preview-color', currentColor);
    colorPreview.style.backgroundColor = currentColor;
    
    // Convert to HSB and update inputs
    const hsb = hslToHsb(h, s, l);
    hsbInputs.hue.value = hsb.h;
    hsbInputs.hueNumber.value = hsb.h;
    hsbInputs.saturation.value = hsb.s;
    hsbInputs.saturationNumber.value = hsb.s;
    hsbInputs.brightness.value = hsb.b;
    hsbInputs.brightnessNumber.value = hsb.b;
    
    // Convert to RGB for other outputs
    const rgb = hslToRgb(h, s, l);
    const hex = rgbToHex(rgb.r, rgb.g, rgb.b);
    
    // Calculate modified colors with dynamic percentages
    const lightenColor = calculateLighten(h, s, l, lightenAmount);
    const darkenColor = calculateDarken(h, s, l, darkenAmount);
    const saturateColor = calculateSaturate(h, s, l, saturateAmount);
    const desaturateColor = calculateDesaturate(h, s, l, desaturateAmount);
    const grayscaleColor = calculateGrayscale(h, s, l);
    
    // Update SCSS outputs with dynamic percentages
    outputs.lightness.textContent = `lighten($color, ${lightenAmount}%)
darken($color, ${darkenAmount}%)`;
    
    outputs.saturation.textContent = `saturate($color, ${saturateAmount}%)
desaturate($color, ${desaturateAmount}%)
grayscale($color)`;
    
    outputs.colorValues.textContent = `// RGB: rgb(${rgb.r}, ${rgb.g}, ${rgb.b})
// HEX: ${hex}
// HSB: hsb(${hsb.h}, ${hsb.s}%, ${hsb.b}%)`;
}

function updateFromHsb() {
    const h = parseInt(hsbInputs.hue.value);
    const s = parseInt(hsbInputs.saturation.value);
    const v = parseInt(hsbInputs.brightness.value);
    
    // Convert to HSL and update inputs
    const hsl = hsbToHsl(h, s, v);
    hslInputs.hue.value = hsl.h;
    hslInputs.hueNumber.value = hsl.h;
    hslInputs.saturation.value = hsl.s;
    hslInputs.saturationNumber.value = hsl.s;
    hslInputs.lightness.value = hsl.l;
    hslInputs.lightnessNumber.value = hsl.l;
    
    // Update color ring with current saturation
    updateColorRing(hsl.s);
    
    // Update color ring and indicator
    updateColorIndicator(hsl.h, hsl.s, hsl.l);
    
    // Update preview colors
    const currentColor = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
    document.documentElement.style.setProperty('--preview-color', currentColor);
    colorPreview.style.backgroundColor = currentColor;
    
    // Convert to RGB for other outputs
    const rgb = hslToRgb(hsl.h, hsl.s, hsl.l);
    const hex = rgbToHex(rgb.r, rgb.g, rgb.b);
    
    // New calculation for saturation amounts
    const saturateAmount = 100 - hsl.s;    // How much more saturation can be added
    const desaturateAmount = hsl.s;        // How much saturation can be removed
    
    const lightenAmount = hsl.l;          // Amount needed to get from black (0%) to current lightness
    const darkenAmount = 100 - hsl.l;     // Amount needed to get from white (100%) to current lightness
    
    const lightenColor = calculateLighten(hsl.h, hsl.s, hsl.l, lightenAmount);
    const darkenColor = calculateDarken(hsl.h, hsl.s, hsl.l, darkenAmount);
    const saturateColor = calculateSaturate(hsl.h, hsl.s, hsl.l, saturateAmount);
    const desaturateColor = calculateDesaturate(hsl.h, hsl.s, hsl.l, desaturateAmount);
    const grayscaleColor = calculateGrayscale(hsl.h, hsl.s, hsl.l);
    
    // Update SCSS outputs with dynamic percentages
    outputs.lightness.textContent = `lighten($color, ${lightenAmount}%)
darken($color, ${darkenAmount}%)`;
    
    outputs.saturation.textContent = `saturate($color, ${saturateAmount}%)
desaturate($color, ${desaturateAmount}%)
grayscale($color)`;
    
    outputs.colorValues.textContent = `// RGB: rgb(${rgb.r}, ${rgb.g}, ${rgb.b})
// HEX: ${hex}
// HSB: hsb(${h}, ${s}%, ${v}%)`;
}

// Event listeners for HSL inputs
[hslInputs.hue, hslInputs.hueNumber].forEach(input => {
    input.addEventListener('input', (e) => {
        const value = e.target.value;
        hslInputs.hue.value = value;
        hslInputs.hueNumber.value = value;
        updateFromHsl();
    });
});

[hslInputs.saturation, hslInputs.saturationNumber].forEach(input => {
    input.addEventListener('input', (e) => {
        const value = e.target.value;
        hslInputs.saturation.value = value;
        hslInputs.saturationNumber.value = value;
        updateFromHsl();
    });
});

[hslInputs.lightness, hslInputs.lightnessNumber].forEach(input => {
    input.addEventListener('input', (e) => {
        const value = e.target.value;
        hslInputs.lightness.value = value;
        hslInputs.lightnessNumber.value = value;
        updateFromHsl();
    });
});

// Event listeners for HSB inputs
[hsbInputs.hue, hsbInputs.hueNumber].forEach(input => {
    input.addEventListener('input', (e) => {
        const value = e.target.value;
        hsbInputs.hue.value = value;
        hsbInputs.hueNumber.value = value;
        updateFromHsb();
    });
});

[hsbInputs.saturation, hsbInputs.saturationNumber].forEach(input => {
    input.addEventListener('input', (e) => {
        const value = e.target.value;
        hsbInputs.saturation.value = value;
        hsbInputs.saturationNumber.value = value;
        updateFromHsb();
    });
});

[hsbInputs.brightness, hsbInputs.brightnessNumber].forEach(input => {
    input.addEventListener('input', (e) => {
        const value = e.target.value;
        hsbInputs.brightness.value = value;
        hsbInputs.brightnessNumber.value = value;
        updateFromHsb();
    });
});

// Initialize the display
updateFromHsl(); 