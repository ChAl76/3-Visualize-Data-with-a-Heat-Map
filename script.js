document.addEventListener('DOMContentLoaded', () => {
  // Constants
  const dataURL =
    'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json';
  const margin = { top: 100, right: 50, bottom: 100, left: 100 };
  const width = 1200 - margin.left - margin.right;
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

  // Create main container elements
  const container = d3.select('body').append('div').attr('id', 'container');
});
