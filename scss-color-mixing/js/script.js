document.addEventListener('DOMContentLoaded', function() {
    // Color Picker Section (Original)
    const color1Input = document.getElementById('color1');
    const color2Input = document.getElementById('color2');
    const mixAmountInput = document.getElementById('mixAmount');
    const mixValueDisplay = document.getElementById('mixValue');
    const resultColorDiv = document.getElementById('resultColor');
    const resultCodeDiv = document.getElementById('resultCode');

    // Mix Function Section
    const mixColor1Input = document.getElementById('mixColor1');
    const mixColor2Input = document.getElementById('mixColor2');
    const mixPercentageInput = document.getElementById('mixPercentage');
    const mixPercentageValue = document.getElementById('mixPercentageValue');
    const mixColor1Box = document.getElementById('mixColor1Box');
    const mixColor2Box = document.getElementById('mixColor2Box');
    const mixResultBox = document.getElementById('mixResultBox');
    const mixCodeDisplay = document.getElementById('mixCode');

    // Lighten & Darken Section
    const lightenBaseColorInput = document.getElementById('lightenBaseColor');
    const lightenAmountInput = document.getElementById('lightenAmount');
    const lightenAmountValue = document.getElementById('lightenAmountValue');
    const lightenBox = document.getElementById('lightenBox');
    const lightenBaseBox = document.getElementById('lightenBaseBox');
    const darkenBox = document.getElementById('darkenBox');
    const lightenCodeDisplay = document.getElementById('lightenCode');

    // Saturate & Desaturate Section
    const saturateBaseColorInput = document.getElementById('saturateBaseColor');
    const saturateAmountInput = document.getElementById('saturateAmount');
    const saturateAmountValue = document.getElementById('saturateAmountValue');
    const saturateBox = document.getElementById('saturateBox');
    const saturateBaseBox = document.getElementById('saturateBaseBox');
    const desaturateBox = document.getElementById('desaturateBox');
    const saturateCodeDisplay = document.getElementById('saturateCode');

    // Adjust-hue Section
    const hueBaseColorInput = document.getElementById('hueBaseColor');
    const hueAmountInput = document.getElementById('hueAmount');
    const hueAmountValue = document.getElementById('hueAmountValue');
    const hueMinusBox = document.getElementById('hueMinusBox');
    const hueBaseBox = document.getElementById('hueBaseBox');
    const huePlusBox = document.getElementById('huePlusBox');
    const hueCodeDisplay = document.getElementById('hueCode');

    // Opacity/Alpha Section
    const opacityBaseColorInput = document.getElementById('opacityBaseColor');
    const opacityAmountInput = document.getElementById('opacityAmount');
    const opacityAmountValue = document.getElementById('opacityAmountValue');
    const opacity25Box = document.getElementById('opacity25Box');
    const opacity50Box = document.getElementById('opacity50Box');
    const opacity75Box = document.getElementById('opacity75Box');
    const opacityBaseBox = document.getElementById('opacityBaseBox');
    const opacityCodeDisplay = document.getElementById('opacityCode');

    // Helper Functions
    function hexToRgb(hex) {
        hex = hex.replace(/^#/, '');
        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return { r, g, b };
    }

    function rgbToHex(r, g, b) {
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    function mixColors(color1, color2, weight) {
        const c1 = hexToRgb(color1);
        const c2 = hexToRgb(color2);
        const r = Math.round(c1.r * (1 - weight) + c2.r * weight);
        const g = Math.round(c1.g * (1 - weight) + c2.g * weight);
        const b = Math.round(c1.b * (1 - weight) + c2.b * weight);
        return rgbToHex(r, g, b);
    }

    function lightenColor(color, amount) {
        const { r, g, b } = hexToRgb(color);
        const factor = 1 + amount / 100;
        const newR = Math.min(255, Math.round(r * factor));
        const newG = Math.min(255, Math.round(g * factor));
        const newB = Math.min(255, Math.round(b * factor));
        return rgbToHex(newR, newG, newB);
    }

    function darkenColor(color, amount) {
        const { r, g, b } = hexToRgb(color);
        const factor = 1 - amount / 100;
        const newR = Math.max(0, Math.round(r * factor));
        const newG = Math.max(0, Math.round(g * factor));
        const newB = Math.max(0, Math.round(b * factor));
        return rgbToHex(newR, newG, newB);
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
        return { h: h * 360, s: s * 100, l: l * 100 };
    }

    function hslToRgb(h, s, l) {
        h /= 360;
        s /= 100;
        l /= 100;
        let r, g, b;

        if (s === 0) {
            r = g = b = l; // achromatic
        } else {
            const hue2rgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1/6) return p + (q - p) * 6 * t;
                if (t < 1/2) return q;
                if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                return p;
            };
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }
        return {
            r: Math.round(r * 255),
            g: Math.round(g * 255),
            b: Math.round(b * 255)
        };
    }

    function adjustHue(color, degrees) {
        const { r, g, b } = hexToRgb(color);
        let { h, s, l } = rgbToHsl(r, g, b);
        h = (h + degrees) % 360;
        if (h < 0) h += 360;
        const rgb = hslToRgb(h, s, l);
        return rgbToHex(rgb.r, rgb.g, rgb.b);
    }

    function saturateColor(color, amount) {
        const { r, g, b } = hexToRgb(color);
        let { h, s, l } = rgbToHsl(r, g, b);
        s = Math.min(100, s + amount);
        const rgb = hslToRgb(h, s, l);
        return rgbToHex(rgb.r, rgb.g, rgb.b);
    }

    function desaturateColor(color, amount) {
        const { r, g, b } = hexToRgb(color);
        let { h, s, l } = rgbToHsl(r, g, b);
        s = Math.max(0, s - amount);
        const rgb = hslToRgb(h, s, l);
        return rgbToHex(rgb.r, rgb.g, rgb.b);
    }

    // Update Functions
    function updateResultColor() {
        const color1 = color1Input.value;
        const color2 = color2Input.value;
        const mixAmount = mixAmountInput.value;
        
        mixValueDisplay.textContent = `${mixAmount}%`;
        const mixedColor = mixColors(color1, color2, mixAmount / 100);
        resultColorDiv.style.backgroundColor = mixedColor;
        resultCodeDiv.textContent = `mix(${color1}, ${color2}, ${mixAmount}%)`;
    }

    function updateMixFunction() {
        const color1 = mixColor1Input.value;
        const color2 = mixColor2Input.value;
        const percentage = mixPercentageInput.value;
        
        mixPercentageValue.textContent = `${percentage}%`;
        mixColor1Box.style.backgroundColor = color1;
        mixColor2Box.style.backgroundColor = color2;
        
        const mixedColor = mixColors(color1, color2, percentage / 100);
        mixResultBox.style.backgroundColor = mixedColor;
        
        // Update text content in the color boxes
        mixColor1Box.textContent = "Color 1";
        mixResultBox.textContent = `${percentage}% Mix`;
        mixColor2Box.textContent = "Color 2";
        
        mixCodeDisplay.textContent = `mix(${color1}, ${color2}, ${percentage}%)`;
    }

    function updateLightenDarken() {
        const baseColor = lightenBaseColorInput.value;
        const amount = lightenAmountInput.value;
        
        lightenAmountValue.textContent = `${amount}%`;
        lightenBaseBox.style.backgroundColor = baseColor;
        
        const lightenedColor = lightenColor(baseColor, amount);
        const darkenedColor = darkenColor(baseColor, amount);
        
        lightenBox.style.backgroundColor = lightenedColor;
        darkenBox.style.backgroundColor = darkenedColor;
        
        // Update text content in the color boxes
        lightenBox.textContent = `Lighten ${amount}%`;
        lightenBaseBox.textContent = "Base Color";
        darkenBox.textContent = `Darken ${amount}%`;
        
        lightenCodeDisplay.textContent = `lighten(${baseColor}, ${amount}%)\ndarken(${baseColor}, ${amount}%)`;
    }

    function updateSaturateDesaturate() {
        const baseColor = saturateBaseColorInput.value;
        const amount = saturateAmountInput.value;
        
        saturateAmountValue.textContent = `${amount}%`;
        saturateBaseBox.style.backgroundColor = baseColor;
        
        const saturatedColor = saturateColor(baseColor, parseInt(amount));
        const desaturatedColor = desaturateColor(baseColor, parseInt(amount));
        
        saturateBox.style.backgroundColor = saturatedColor;
        desaturateBox.style.backgroundColor = desaturatedColor;
        
        // Update text content in the color boxes
        saturateBox.textContent = `Saturate ${amount}%`;
        saturateBaseBox.textContent = "Base Color";
        desaturateBox.textContent = `Desaturate ${amount}%`;
        
        saturateCodeDisplay.textContent = `saturate(${baseColor}, ${amount}%)\ndesaturate(${baseColor}, ${amount}%)`;
    }

    function updateHue() {
        const baseColor = hueBaseColorInput.value;
        const amount = hueAmountInput.value;
        
        hueAmountValue.textContent = `${amount}°`;
        hueBaseBox.style.backgroundColor = baseColor;
        
        const minusHueColor = adjustHue(baseColor, -parseInt(amount));
        const plusHueColor = adjustHue(baseColor, parseInt(amount));
        
        hueMinusBox.style.backgroundColor = minusHueColor;
        huePlusBox.style.backgroundColor = plusHueColor;
        
        // Update text content in the color boxes
        hueMinusBox.textContent = `-${amount}° Hue`;
        hueBaseBox.textContent = "Base Color";
        huePlusBox.textContent = `+${amount}° Hue`;
        
        hueCodeDisplay.textContent = `adjust-hue(${baseColor}, -${amount}deg)\nadjust-hue(${baseColor}, ${amount}deg)`;
    }

    function updateOpacity() {
        const baseColor = opacityBaseColorInput.value;
        const amount = opacityAmountInput.value;
        const opacityValue = amount / 100;
        
        opacityAmountValue.textContent = `${amount}%`;
        
        const { r, g, b } = hexToRgb(baseColor);
        
        // Calculate opacity values based on the slider
        const opacity25 = Math.max(0.1, Math.min(0.25, opacityValue));
        const opacity50 = Math.max(0.25, Math.min(0.5, opacityValue));
        const opacity75 = Math.max(0.5, Math.min(0.75, opacityValue));
        const opacity100 = Math.max(0.75, Math.min(1.0, opacityValue));
        
        opacity25Box.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity25})`;
        opacity50Box.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity50})`;
        opacity75Box.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity75})`;
        opacityBaseBox.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity100})`;
        
        // Update text content in the color boxes
        opacity25Box.textContent = `${Math.round(opacity25 * 100)}% Opacity`;
        opacity50Box.textContent = `${Math.round(opacity50 * 100)}% Opacity`;
        opacity75Box.textContent = `${Math.round(opacity75 * 100)}% Opacity`;
        opacityBaseBox.textContent = `${Math.round(opacity100 * 100)}% Opacity`;
        
        opacityCodeDisplay.textContent = `rgba(${baseColor}, ${opacity25.toFixed(2)})\nrgba(${baseColor}, ${opacity50.toFixed(2)})\nrgba(${baseColor}, ${opacity75.toFixed(2)})\nrgba(${baseColor}, ${opacity100.toFixed(2)})`;
    }

    // Add Event Listeners
    // Original Color Picker
    color1Input.addEventListener('input', updateResultColor);
    color2Input.addEventListener('input', updateResultColor);
    mixAmountInput.addEventListener('input', updateResultColor);

    // Mix Function
    mixColor1Input.addEventListener('input', updateMixFunction);
    mixColor2Input.addEventListener('input', updateMixFunction);
    mixPercentageInput.addEventListener('input', updateMixFunction);

    // Lighten & Darken
    lightenBaseColorInput.addEventListener('input', updateLightenDarken);
    lightenAmountInput.addEventListener('input', updateLightenDarken);

    // Saturate & Desaturate
    saturateBaseColorInput.addEventListener('input', updateSaturateDesaturate);
    saturateAmountInput.addEventListener('input', updateSaturateDesaturate);

    // Adjust-hue
    hueBaseColorInput.addEventListener('input', updateHue);
    hueAmountInput.addEventListener('input', updateHue);

    // Opacity/Alpha
    opacityBaseColorInput.addEventListener('input', updateOpacity);
    opacityAmountInput.addEventListener('input', updateOpacity);

    // Initialize all displays
    updateResultColor();
    updateMixFunction();
    updateLightenDarken();
    updateSaturateDesaturate();
    updateHue();
    updateOpacity();
}); 