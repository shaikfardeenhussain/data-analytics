// Fetch JSON data and render charts
fetch("bangalore_data.json")
  .then((response) => response.json())
  .then((data) => {
    const createChart = (ctxId, chartData) => {
      const ctx = document.getElementById(ctxId).getContext("2d");
      new Chart(ctx, {
        type: chartData.type,
        data: {
          labels: chartData.labels,
          datasets: [
            {
              label: chartData.label,
              data: chartData.values,
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(0, 128, 128, 0.6)",
                "rgba(220, 20, 60, 0.6)",
                "rgba(46, 204, 113, 0.6)",
                "rgba(255, 99, 255, 0.6)",
                "rgba(255, 215, 0, 0.6)",
                "rgba(70, 130, 180, 0.6)",
              ],
              borderColor: chartData.borderColor || "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: true, position: "top" },
            title: { display: true, text: chartData.title },
          },
          scales:
            chartData.type === "pie" || chartData.type === "doughnut"
              ? {}
              : {
                  y: { beginAtZero: true },
                },
        },
      });
    };

    // Create charts
    createChart("chart1", data.chart1);
    createChart("chart2", data.chart2);
    createChart("chart3", data.chart3);
    createChart("chart4", data.chart4);
  })
  .catch((err) => console.error("Error loading JSON:", err));
