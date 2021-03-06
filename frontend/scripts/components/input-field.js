const inputs = document.querySelectorAll('.inputfile');

for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i];
  const label	 = input.nextElementSibling;
  const labelVal = label.innerHTML;

  input.addEventListener('change', function(e) {
    const fileName = (this.files && this.files.length > 1)
      ? 'Выбрано ' + this.files.length + ' файлов'
      : e.target.value.split( '\\' ).pop();

    if (fileName) label.innerHTML = fileName;
    else label.innerHTML = labelVal;
	});
};
