function compareCranes() {
    const crane1 = document.getElementById('crane1').value;
    const crane2 = document.getElementById('crane2').value;
    const results = document.getElementById('comparisonResults');
  
    const craneData = {
      craneX: { capacity: '50 tons', boomLength: '60m', engine: 'Diesel' },
      craneY: { capacity: '70 tons', boomLength: '80m', engine: 'Electric' },
    };
  
    const crane1Data = craneData[crane1];
    const crane2Data = craneData[crane2];
  
    results.innerHTML = `
      <h2>Comparison Results</h2>
      <table>
        <tr>
          <th>Spec</th>
          <th>Crane Model X</th>
          <th>Crane Model Y</th>
        </tr>
        <tr>
          <td>Load Capacity</td>
          <td>${crane1Data.capacity}</td>
          <td>${crane2Data.capacity}</td>
        </tr>
        <tr>
          <td>Boom Length</td>
          <td>${crane1Data.boomLength}</td>
          <td>${crane2Data.boomLength}</td>
        </tr>
        <tr>
          <td>Engine Type</td>
          <td>${crane1Data.engine}</td>
          <td>${crane2Data.engine}</td>
        </tr>
      </table>
    `;
  }