document.querySelectorAll(".drop-checkbox").forEach((checkbox) => {
	const parentDiv = checkbox.parentElement;

	// Encontrar a checkbox correspondente da classe .drop
	const correspondingDropCheckbox = document.getElementById(
		checkbox.id.replace("-Active", "")
	);

	parentDiv.style.backgroundColor = checkbox.checked ? "#0e0" : "#e00";

	if (!checkbox.checked) {
		correspondingDropCheckbox.parentElement.classList.add("invisible");
	} else {
		correspondingDropCheckbox.parentElement.classList.remove("invisible");
	}

	checkbox.addEventListener("input", function () {
		parentDiv.style.backgroundColor = checkbox.checked ? "#0e0" : "#e00";

		if (!checkbox.checked) {
			correspondingDropCheckbox.parentElement.classList.add("invisible");
		} else {
			correspondingDropCheckbox.parentElement.classList.remove(
				"invisible"
			);
		}
	});
});

document.querySelectorAll(".drop").forEach((checkbox) => {
	const label = document.querySelector(`label[for="${checkbox.id}"] img`);

	if (checkbox.checked) {
		label.classList.add("dimmed");
	}

	checkbox.addEventListener("input", function () {
		if (checkbox.checked) {
			label.classList.add("dimmed");
		} else {
			label.classList.remove("dimmed");
		}
		checkAllCheckboxes();
	});
});

function checkAllCheckboxes() {
	const allCheckboxes = document.querySelectorAll(
		".drop:not(.invisible .drop)"
	);
	const allChecked = Array.from(allCheckboxes).every(
		(checkbox) => checkbox.checked
	);

	if (allChecked) {
		setTimeout(() => {
			allCheckboxes.forEach((checkbox) => {
				checkbox.checked = false;
				const label = document.querySelector(
					`label[for="${checkbox.id}"] img`
				);
				if (label) {
					label.classList.remove("dimmed");
				}
			});
		}, 1000);
	}
}
