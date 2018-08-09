'use strict';
// This needs to be cleaned up. Right now it's more a scratch pad than a JS library

// for the noUI multi-range inputs
function suiMultiRangeInputs() {
  const ranges = document.querySelectorAll('div.sui-multi-slider');
  for (let range of ranges) {
    noUiSlider.create(range, {
      start: [range.dataset.sliderMin, range.dataset.sliderMax],
      connect: true,
      tooltips: true,
      // direction: 'rtl',
      format: {
        to: value => Math.round(value),
        from: value => value
      },
      pips: {
        mode: 'positions',
        values: [0, 100],
        density: 25
      },
      range: { 'min': [Number(range.dataset.sliderMin)], 'max': [Number(range.dataset.sliderMax)] }
    });
  }
}

// for the noUI single range inputs
function suiRangeInputs() {
  const ranges = document.querySelectorAll('div.sui-slider');
  for (let range of ranges) {
    noUiSlider.create(range, {
      start: [range.dataset.sliderMin],
      connect: [true, false],
      tooltips: true,
      // direction: 'rtl',
      format: {
        to: value => Math.round(value),
        from: value => value
      },
      pips: {
        mode: 'positions',
        values: [0, 100],
        density: 25
      },
      range: { 'min': [Number(range.dataset.sliderMin)], 'max': [Number(range.dataset.sliderMax)] }
    });
  }
}

// for SUI multi-selection dropdown selection
function handleMultiSelection(dropdown, item, button, tagList) {
  handleSelection(dropdown, item, button);
  //TODO: needs some validation logic to disallow selecting the same item more than once
  let newTag = document.createElement('li');
  newTag.innerHTML =
    `<span class="uk-label sui-tag">${item.innerHTML}<span uk-icon="icon:close;ratio:0.5;"></span></span>`;
  newTag.onclick = (evt) => { newTag.remove(); };
  tagList.appendChild(newTag);
}

// for SUI single selection drodown selection
function handleSelection(dropdown, item, button) {
  button.innerHTML = item.innerHTML;
  UIkit.dropdown(dropdown).hide();
}