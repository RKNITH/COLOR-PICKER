const colorPicker = document.getElementById('colorPicker');
const colorPreview = document.getElementById('colorPreview');

colorPicker.addEventListener('input', () => {
    colorPreview.style.backgroundColor = colorPicker.value;
});
