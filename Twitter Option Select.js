function selectOption(option) {
    const yesOption = document.getElementById('option-yes');
    const noOption = document.getElementById('option-no');

    if (option === 'yes') {
        yesOption.classList.add('filled');
        yesOption.setAttribute('data-percent', '99%');
        noOption.classList.remove('filled');
        noOption.setAttribute('data-percent', '1%');
    } else if (option === 'no') {
        noOption.classList.add('filled');
        noOption.setAttribute('data-percent', '1%');
        yesOption.classList.remove('filled');
        yesOption.setAttribute('data-percent', '99%');
    }
}