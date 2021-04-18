<template>
  <div class="flex flex-col items-center space-y-5 p-2 xs:p-4 text-chinese-black bg-white rounded-10px shadow-lg">
    <div class="flex flex-col sm:flex-row justify-between items-center space-y-3 xs:space-y-0 w-11/12">
      <span class="text-22px sm:text-20px font-bold">Cash Flow</span>
      <Signal :positive="true" :value="2000"/>
    </div>
    <div class="flex justify-center items-center space-y-2 w-full h-full">
      <VueApexCharts class="w-full h-full" :options="chartOptions" :series="series"/>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts'
import Signal from '@/components/Widgets/Signal'

export default {
  components: {
    VueApexCharts,
    Signal
  },
  setup() {
    return {
      chartOptions: {
        chart: {
          type: 'area',
          toolbar: {
            show: true,
            tools: {
              download: false,
              selection: false,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: false,
              reset: false
            }
          },
          fontFamily: 'Poppins, sans-serif'
        },
        xaxis: {
          categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        colors: ['#5EC565', '#D87777'],
        stroke: {
          curve: 'smooth',
          width: 3
        },
        dataLabels: {
          enabled: false
        },
      },
      series: [
        {
          name: "Income",
          data: [30, 40, 35, 40, 60, 50, 20],
        },
        {
          name: "Spending",
          data: [15, 10, 20, 30, 70, 100, 40],
        }
      ],
    }
  }
}
</script>

<style scoped>
div {
  font-family: 'Poppins', sans-serif;
}
</style>