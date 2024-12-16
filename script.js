document.addEventListener('DOMContentLoaded', () => {
  const dataURL =
    'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json';
  const margin = { top: 60, right: 100, bottom: 100, left: 100 };
  const width = 1300 - margin.left - margin.right;
  const height = 600 - margin.top - margin.bottom;
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const svg = d3
    .select('body')
    .append('svg')
    .attr('id', 'svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .attr('class', 'graph')
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  // Tooltip
  const tooltip = d3
    .select('body')
    .append('div')
    .attr('id', 'tooltip')
    .style('opacity', 0);
});
