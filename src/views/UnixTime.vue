<template>
  <v-container class="unix-time">
    <v-row class="ma-2">
      <v-col>
        <div class="d-flex flex-wrap ga-3">
          <div class="text-overline text-medium-emphasis">Shortcut:</div>
          <v-btn size="small" rounded="sm" @click="(_$event: any) => setInput('now')"> Now </v-btn>
          <v-btn size="small" rounded="sm" @click="pasteClipboard"> Clipboard </v-btn>
          <v-btn size="small" rounded="sm" @click="clearInput"> Clear </v-btn>
          <v-btn icon="mdi-cog" size="small" rounded="sm" density="comfortable" />
        </div>
      </v-col>
    </v-row>
    <v-row class="ma-2">
      <v-col :cols="6">
        <v-text-field label="Input" variant="outlined" density="compact"
          hint="Tips: Mathematical operators + - * / are supported" persistent-hint v-model.trim="input"></v-text-field>
      </v-col>
      <v-col :cols="6">
        <v-select label="Type" :model-value="inputType" :items="inputTypeOp" variant="outlined"
          density="compact"></v-select>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="ma-2">
      <v-col :cols="5">
        <div class="">
          <v-text-field label="Local" variant="outlined" density="compact" v-model.lazy="localDate"
            append-inner-icon="mdi-content-copy" @click:append-inner="(_$event: any) => copyToClipboard(localDate)">
          </v-text-field>
          <v-text-field label="UTC (ISO 8601)" variant="outlined" density="compact" v-model.lazy="utcDate"
            append-inner-icon="mdi-content-copy" @click:append-inner="(_$event: any) => copyToClipboard(utcDate)">
          </v-text-field>
          <v-text-field label="Relative" variant="outlined" density="compact" v-model.lazy="relativeDate"
            append-inner-icon="mdi-content-copy" @click:append-inner="(_$event: any) => copyToClipboard(relativeDate)">
          </v-text-field>
          <v-text-field label="Unix time" variant="outlined" density="compact" v-model.lazy="unixTime"
            append-inner-icon="mdi-content-copy" @click:append-inner="(_$event: any) => copyToClipboard(unixTime)">
          </v-text-field>
        </div>
      </v-col>
      <v-col :cols="2">
        <div>
          <v-text-field label="Day of year" variant="outlined" density="compact" v-model.lazy="dayOfYear"
            append-inner-icon="mdi-content-copy" @click:append-inner="(_$event: any) => copyToClipboard(dayOfYear)">
          </v-text-field>
          <v-text-field label="Week of year" variant="outlined" density="compact" v-model.lazy="weekOfYear"
            append-inner-icon="mdi-content-copy" @click:append-inner="(_$event: any) => copyToClipboard(weekOfYear)">
          </v-text-field>
          <v-text-field label="Is leaf year?" variant="outlined" density="compact" v-model.lazy="isLeafYear"
            append-inner-icon="mdi-content-copy" @click:append-inner="(_$event: any) => copyToClipboard(isLeafYear)">
          </v-text-field>
        </div>
      </v-col>
      <v-col :cols="5">
        <v-select label="Format by Country" :items="formatByCountryOp" variant="outlined" density="compact"
          v-model="formatByCountry" clearable></v-select>
        <v-text-field variant="outlined" density="compact" v-model.lazy="dateByFormat"
          append-inner-icon="mdi-content-copy" @click:append-inner="(_$event: any) => copyToClipboard(dateByFormat)">
        </v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" >
import debounce from 'debounce';
import { ref } from 'vue'
import moment from 'moment';
import { clipboard } from 'electron';

export default {
  name: 'UnixTime',
  setup() {
    const input = ref<string | number | null>(null);
    const inputType = ref<string>("unix");
    const localDate = ref<string | null>(null);
    const utcDate = ref<string | null>(null);
    const relativeDate = ref<string | null>(null);
    const unixTime = ref<string | null>(null);
    const dayOfYear = ref<number | null>(null);
    const weekOfYear = ref<number | null>(null);
    const isLeafYear = ref<boolean | null>(null);
    const formatByCountry = ref<string | null>(null);
    const dateByFormat = ref<string | null>(null);
    const relativeDateTimer = ref<any>(null);

    const inputTypeOp = [{
      value: 'unix',
      title: 'Unix time (seconds since epoch)'
    }]

    const formatByCountryOp = [{
      value: 'en-GB',
      title: 'en-GB'
    },
    {
      value: 'en-US',
      title: 'en-US'
    },
    {
      value: 'ko-KR',
      title: 'ko-KR'
    }]

    return {
      input,
      inputType,
      localDate,
      utcDate,
      relativeDate,
      relativeDateTimer,
      unixTime,
      dayOfYear,
      weekOfYear,
      isLeafYear,
      errorMessage: '',
      inputTypeOp,
      formatByCountryOp,
      formatByCountry,
      dateByFormat,
    }
  },
  methods: {
    delay: debounce(function (value: string, callback: Function) {
      callback(value)
    }, 500),
    setInput: function (type: string) {
      if (type === "now") {
        this.input = Date.now();
      }
    },
    executeMath: function parse(str: string) {
      const escapeRegex = str.replace(/[+\-*\/\s]+/gm, "");
      if (escapeRegex.match(/\D/)) {
        // If includes character not a number
        return "";
      }
      return Function(`return (${str})`)()
    },
    pasteClipboard: function () {
      const clipboardValue = clipboard.readText();
      if (clipboardValue) {
        this.input = clipboardValue;
      }
    },
    clearInput: function () {
      this.input = null;
    },
    clearOutput: function () {
      this.localDate = null;
      this.utcDate = null;
      this.unixTime = null;
      this.dayOfYear = null;
      this.weekOfYear = null;
      this.isLeafYear = null;
      this.dateByFormat = null;

      this.relativeDate = null;
      // Clear interval
      if (this.relativeDateTimer) {
        clearInterval(this.relativeDateTimer);
      }
    },
    formatDateByCountry: function (format: string) {
      if (format && this.input) {
        this.dateByFormat = new Date(this.input).toLocaleString(format);
      } else {
        this.dateByFormat = null;
      }
    },
    copyToClipboard: function (value: any) {
      if (value) {
        clipboard.writeText(String(value));
      }
    },
  },
  watch: {
    input: {
      handler: function (val) {
        console.log(val)
        this.delay(val, (input: number | string | null) => {
          const strVal = input ? String(input).trim() : null;
          if (strVal) {
            try {
              const rsDate = strVal.match(/[+\-*\/]+/gm) ? this.executeMath(strVal) : strVal;
              const inputDate = new Date(+rsDate);
              this.localDate = inputDate.toLocaleString();
              this.utcDate = inputDate.toUTCString();
              this.unixTime = String(inputDate.getTime());
              this.dayOfYear = moment(inputDate).dayOfYear();
              this.weekOfYear = moment(inputDate).weeksInYear();
              this.isLeafYear = moment(inputDate).isLeapYear();
              if (this.formatByCountry) {
                this.formatDateByCountry(this.formatByCountry);
              }

              const isLate = moment().isAfter(inputDate);

              const seconds = moment().diff(moment(inputDate), 'seconds')
              const formatted = moment.utc(seconds * 1000).format('HH:mm:ss');
              this.relativeDate = `${formatted} ${isLate ? 'before' : 'ago'}`;
              // Handle for this case
              if (this.relativeDateTimer) {
                clearInterval(this.relativeDateTimer);
              }
              this.relativeDateTimer = setInterval(() => {
                // Auto decrease every seconds.
                // this.relativeDate = moment(inputDate).fromNow();
                const isLate = moment().isAfter(inputDate);

                const seconds = moment().diff(moment(inputDate), 'seconds')
                const formatted = moment.utc(seconds * 1000).format('HH:mm:ss');
                this.relativeDate = `${formatted} ${isLate ? 'before' : 'ago'}`;
                console.log(this.relativeDate)
              }, 500);
            } catch (error: any) {
              this.errorMessage = error.message;
              console.error(error)
            }
          } else {
            this.clearOutput();
          }
        })
      },
      deep: true
    },
    formatByCountry: {
      handler: function (val) {
        if (val) {
          this.formatDateByCountry(val);
        }
      },
      deep: true
    }
  },
  beforeUnmount() {
    if (this.relativeDateTimer) {
      clearInterval(this.relativeDateTimer)
    }
  }
}
</script>
