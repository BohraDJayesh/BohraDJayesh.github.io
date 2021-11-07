let boxes = document.querySelector('.boxes');
for(i in Range(10))
{
    let span = document.createElement('span');
    span.classList.add(`box${i}`);
    boxes.appendChild(span);
}
