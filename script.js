const optionOrder = [
    '-u',
    '-v',
    '--batch',
    '--flush-session',
    '--wizard',
    '--data',
    '--cookie',
    '--random-agent',
    '--proxy',
    '--tor',
    '--check-tor',
    '-p',
    '--dbms',
    '--level',
    '--risk',
    '--technique',
    '-a',
    '-b',
    '--current-user',
    '--current-db',
    '--passwords',
    '--dbs',
    '--tables',
    '--columns',
    '--schema',
    '-D',
    '-T',
    '-C',
    '--dump',
    '--dump-all',
    '--os-shell',
    '--os-pwn',
    '--tamper'
];

const sectionColors = {
    'target-section': 'color-target',
    'general-section': 'color-general',
    'request-section': 'color-request',
    'injection-section': 'color-injection',
    'detection-section': 'color-detection',
    'techniques-section': 'color-techniques',
    'enumeration-section': 'color-enumeration',
    'os-access-section': 'color-os-access',
    'tamper-scripts-section': 'color-tamper'
};


function escapeHTML(str) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}


function updateCommand() {
    let plainCommand = 'sqlmap';
    const selectedOptions = [];

    optionOrder.forEach(flag => {
        switch (flag) {
            case '-u':
                const targetUrl = document.getElementById('target-url').value.trim();
                if (targetUrl) {
                    selectedOptions.push({
                        flag: `-u "${escapeHTML(targetUrl)}"`,
                        order: optionOrder.indexOf('-u'),
                        section: 'target-section'
                    });
                }
                break;
            case '-v':
                const verbosity = document.getElementById('verbosity').value.trim();
                if (verbosity !== '') {
                    selectedOptions.push({
                        flag: `-v ${escapeHTML(verbosity)}`,
                        order: optionOrder.indexOf('-v'),
                        section: 'general-section'
                    });
                }
                break;
            case '--batch':
                if (document.getElementById('batch').checked) {
                    selectedOptions.push({
                        flag: '--batch',
                        order: optionOrder.indexOf('--batch'),
                        section: 'general-section'
                    });
                }
                break;
            case '--flush-session':
                if (document.getElementById('flush-session').checked) {
                    selectedOptions.push({
                        flag: '--flush-session',
                        order: optionOrder.indexOf('--flush-session'),
                        section: 'general-section'
                    });
                }
                break;
            case '--wizard':
                if (document.getElementById('wizard').checked) {
                    selectedOptions.push({
                        flag: '--wizard',
                        order: optionOrder.indexOf('--wizard'),
                        section: 'general-section'
                    });
                }
                break;
            case '--data':
                const data = document.getElementById('data').value.trim();
                if (data) {
                    selectedOptions.push({
                        flag: `--data="${escapeHTML(data)}"`,
                        order: optionOrder.indexOf('--data'),
                        section: 'request-section'
                    });
                }
                break;
            case '--cookie':
                const cookie = document.getElementById('cookie').value.trim();
                if (cookie) {
                    selectedOptions.push({
                        flag: `--cookie="${escapeHTML(cookie)}"`,
                        order: optionOrder.indexOf('--cookie'),
                        section: 'request-section'
                    });
                }
                break;
            case '--random-agent':
                if (document.getElementById('random-agent').checked) {
                    selectedOptions.push({
                        flag: '--random-agent',
                        order: optionOrder.indexOf('--random-agent'),
                        section: 'request-section'
                    });
                }
                break;
            case '--proxy':
                const proxy = document.getElementById('proxy').value.trim();
                if (proxy) {
                    selectedOptions.push({
                        flag: `--proxy="${escapeHTML(proxy)}"`,
                        order: optionOrder.indexOf('--proxy'),
                        section: 'request-section'
                    });
                }
                break;
            case '--tor':
                if (document.getElementById('tor').checked) {
                    selectedOptions.push({
                        flag: '--tor',
                        order: optionOrder.indexOf('--tor'),
                        section: 'request-section'
                    });
                }
                break;
            case '--check-tor':
                if (document.getElementById('check-tor').checked) {
                    selectedOptions.push({
                        flag: '--check-tor',
                        order: optionOrder.indexOf('--check-tor'),
                        section: 'request-section'
                    });
                }
                break;
            case '-p':
                const testParameter = document.getElementById('test-parameter').value.trim();
                if (testParameter) {
                    selectedOptions.push({
                        flag: `-p "${escapeHTML(testParameter)}"`,
                        order: optionOrder.indexOf('-p'),
                        section: 'injection-section'
                    });
                }
                break;
            case '--dbms':
                const dbms = document.getElementById('dbms').value.trim();
                if (dbms) {
                    selectedOptions.push({
                        flag: `--dbms="${escapeHTML(dbms)}"`,
                        order: optionOrder.indexOf('--dbms'),
                        section: 'injection-section'
                    });
                }
                break;
            case '--level':
                const level = document.getElementById('level').value.trim();
                if (level !== '') {
                    selectedOptions.push({
                        flag: `--level=${escapeHTML(level)}`,
                        order: optionOrder.indexOf('--level'),
                        section: 'detection-section'
                    });
                }
                break;
            case '--risk':
                const risk = document.getElementById('risk').value.trim();
                if (risk !== '') {
                    selectedOptions.push({
                        flag: `--risk=${escapeHTML(risk)}`,
                        order: optionOrder.indexOf('--risk'),
                        section: 'detection-section'
                    });
                }
                break;
                case '--technique':
                    const techniqueCheckboxes = document.querySelectorAll('.technique-checkbox:checked');

                    const selectedTechniques = Array.from(techniqueCheckboxes)
                        .map(checkbox => checkbox.value)
                        .join('');

                    if (selectedTechniques) {
                        selectedOptions.push({
                            flag: `--technique="${escapeHTML(selectedTechniques)}"`,
                            order: optionOrder.indexOf('--technique'),
                            section: 'techniques-section'
                        });
                    }
                    break;

            case '-a':
                if (document.getElementById('all').checked) {
                    selectedOptions.push({
                        flag: '-a',
                        order: optionOrder.indexOf('-a'),
                        section: 'enumeration-section'
                    });
                }
                break;
            case '-b':
                if (document.getElementById('banner').checked) {
                    selectedOptions.push({
                        flag: '-b',
                        order: optionOrder.indexOf('-b'),
                        section: 'enumeration-section'
                    });
                }
                break;
            case '--current-user':
                if (document.getElementById('current-user').checked) {
                    selectedOptions.push({
                        flag: '--current-user',
                        order: optionOrder.indexOf('--current-user'),
                        section: 'enumeration-section'
                    });
                }
                break;
            case '--current-db':
                if (document.getElementById('current-db').checked) {
                    selectedOptions.push({
                        flag: '--current-db',
                        order: optionOrder.indexOf('--current-db'),
                        section: 'enumeration-section'
                    });
                }
                break;
            case '--passwords':
                if (document.getElementById('passwords').checked) {
                    selectedOptions.push({
                        flag: '--passwords',
                        order: optionOrder.indexOf('--passwords'),
                        section: 'enumeration-section'
                    });
                }
                break;
            case '--dbs':
                if (document.getElementById('dbs').checked) {
                    selectedOptions.push({
                        flag: '--dbs',
                        order: optionOrder.indexOf('--dbs'),
                        section: 'enumeration-section'
                    });
                }
                break;
            case '--tables':
                if (document.getElementById('tables').checked) {
                    selectedOptions.push({
                        flag: '--tables',
                        order: optionOrder.indexOf('--tables'),
                        section: 'enumeration-section'
                    });
                }
                break;
            case '--columns':
                if (document.getElementById('columns').checked) {
                    selectedOptions.push({
                        flag: '--columns',
                        order: optionOrder.indexOf('--columns'),
                        section: 'enumeration-section'
                    });
                }
                break;
            case '--schema':
                if (document.getElementById('schema').checked) {
                    selectedOptions.push({
                        flag: '--schema',
                        order: optionOrder.indexOf('--schema'),
                        section: 'enumeration-section'
                    });
                }
                break;
            case '--dump':
                if (document.getElementById('dump').checked) {
                    selectedOptions.push({
                        flag: '--dump',
                        order: optionOrder.indexOf('--dump'),
                        section: 'enumeration-section'
                    });
                }
                break;
            case '--dump-all':
                if (document.getElementById('dump-all').checked) {
                    selectedOptions.push({
                        flag: '--dump-all',
                        order: optionOrder.indexOf('--dump-all'),
                        section: 'enumeration-section'
                    });
                }
                break;
            case '-D':
                const db = document.getElementById('db').value.trim();
                if (db) {
                    selectedOptions.push({
                        flag: `-D "${escapeHTML(db)}"`,
                        order: optionOrder.indexOf('-D'),
                        section: 'enumeration-section'
                    });
                }
                break;
            case '-T':
                const tbl = document.getElementById('tbl').value.trim();
                if (tbl) {
                    selectedOptions.push({
                        flag: `-T "${escapeHTML(tbl)}"`,
                        order: optionOrder.indexOf('-T'),
                        section: 'enumeration-section'
                    });
                }
                break;
            case '-C':
                const col = document.getElementById('col').value.trim();
                if (col) {
                    selectedOptions.push({
                        flag: `-C "${escapeHTML(col)}"`,
                        order: optionOrder.indexOf('-C'),
                        section: 'enumeration-section'
                    });
                }
                break;
            case '--os-shell':
                if (document.getElementById('os-shell').checked) {
                    selectedOptions.push({
                        flag: '--os-shell',
                        order: optionOrder.indexOf('--os-shell'),
                        section: 'os-access-section'
                    });
                }
                break;
            case '--os-pwn':
                if (document.getElementById('os-pwn').checked) {
                    selectedOptions.push({
                        flag: '--os-pwn',
                        order: optionOrder.indexOf('--os-pwn'),
                        section: 'os-access-section'
                    });
                }
                break;
            case '--tamper':
                const tamperScripts = Array.from(document.querySelectorAll('.tamper:checked')).map(cb => cb.value);
                if (tamperScripts.length > 0) {
                    const combinedTamper = tamperScripts.map(script => escapeHTML(script)).join(',');
                    selectedOptions.push({
                        flag: `--tamper="${combinedTamper}"`,
                        order: optionOrder.indexOf('--tamper'),
                        section: 'tamper-scripts-section'
                    });
                }
                break;
            default:
                break;
        }
    });

    selectedOptions.sort((a, b) => a.order - b.order);

    const commandElement = document.getElementById('generated-command');
    commandElement.innerHTML = '';

    const fragment = document.createDocumentFragment();

    const sqlmapSpan = document.createElement('span');
    sqlmapSpan.className = 'color-sqlmap';
    sqlmapSpan.textContent = 'sqlmap';
    fragment.appendChild(sqlmapSpan);

    selectedOptions.forEach(option => {
        const section = option.section;
        const colorClass = sectionColors[section];
        const span = document.createElement('span');
        span.className = colorClass ? colorClass : '';
        span.textContent = ` ${option.flag}`;
        fragment.appendChild(span);
        plainCommand += ` ${option.flag}`;
    });

    commandElement.appendChild(fragment);
    commandElement.setAttribute('data-plain', plainCommand);
}


function copyCommand() {
    const commandElement = document.getElementById('generated-command');
    const plainCommand = commandElement.getAttribute('data-plain');

    const targetUrl = document.getElementById('target-url').value.trim();
    const proxy = document.getElementById('proxy').value.trim();

    let hasError = false;
    let errorMessages = [];

    if (targetUrl && !isValidURL(targetUrl)) {
        hasError = true;
        errorMessages.push('Please enter a valid URL in the "Target URL (-u)" field.');
        document.getElementById('target-url').classList.add('invalid-input');
    } else {
        document.getElementById('target-url').classList.remove('invalid-input');
    }

    if (proxy && !isValidURL(proxy)) {
        hasError = true;
        errorMessages.push('Please enter a valid URL in the "Proxy (--proxy)" field.');
        document.getElementById('proxy').classList.add('invalid-input');
    } else {
        document.getElementById('proxy').classList.remove('invalid-input');
    }

    if (hasError) {
        showNotification(errorMessages.join('<br>'), true);
        return;
    }

    navigator.clipboard.writeText(plainCommand).then(() => {
        showNotification('Command copied to clipboard');
    }).catch(err => {
        showNotification('Error copying the command: ' + err, true);
    });
}


function isValidURL(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}


function openTab(evt, tabName) {
    const tabLinks = document.getElementsByClassName('tab-link');
    const tabContents = document.getElementsByClassName('tab-content');

    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }

    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove('active');
    }

    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}


function validateInputs() {
    const targetUrl = document.getElementById('target-url').value.trim();
    const proxy = document.getElementById('proxy').value.trim();

    let isValid = true;
    let errorMessages = [];

    if (targetUrl && !isValidURL(targetUrl)) {
        isValid = false;
        errorMessages.push('Please enter a valid URL in the "Target URL (-u)" field.');
        document.getElementById('target-url').classList.add('invalid-input');
    } else {
        document.getElementById('target-url').classList.remove('invalid-input');
    }

    if (proxy && !isValidURL(proxy)) {
        isValid = false;
        errorMessages.push('Please enter a valid URL in the "Proxy (--proxy)" field.');
        document.getElementById('proxy').classList.add('invalid-input');
    } else {
        document.getElementById('proxy').classList.remove('invalid-input');
    }

    if (!isValid) {
        showNotification(errorMessages.join('<br>'), true);
    }

    return isValid;
}


function showNotification(message, isError = false) {
    let notification = document.getElementById('notification');
    notification.innerHTML = message;
    notification.style.backgroundColor = isError ? '#d3869b' : '#03dac6';
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

const inputs = document.querySelectorAll('input, select, textarea');

inputs.forEach(input => {
    input.addEventListener('input', () => {
        validateInputs();
        updateCommand();
    });
    input.addEventListener('change', () => {
        validateInputs();
        updateCommand();
    });
});

window.onload = updateCommand;
