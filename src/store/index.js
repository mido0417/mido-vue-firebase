import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // job: []
    },
    getters: {
        // getJob(state) {
        //     var Job = [];
        //     Job = state.job.filter(item => item.department !== 'Evaluator');
        //     return Job;
        // },
        // getJobTitle(state) {
        //     var JobTitle = [];
        //     for (i = 0; i < state.job.length; i++) {
        //         let current = JobTitle.filter(item => item == state.job[i].title);
        //         if (current.length == 0 && state.job[i].title != null && state.job[i].department != 'Evaluator') {
        //             JobTitle.push(state.job[i].title);
        //         }
        //     }
        //     return JobTitle;

        // },
        // getCountry(state) {
        //     var Country = [];
        //     for (i = 0; i < state.job.length; i++) {
        //         let current = Country.filter(item => item.country_code == state.job[i].location.country_code);
        //         if (current.length == 0) {
        //             let counObj = {
        //                 country_name: state.job[i].location.country,
        //                 country_code: state.job[i].location.country_code
        //             }
        //             Country.push(counObj);
        //         }
        //     }
        //     return Country;
        // },
        // getDepartment(state) {
        //     var department = [];
        //     for (i = 0; i < state.job.length; i++) {
        //         let current = department.filter(item => item == state.job[i].department);
        //         if (current.length == 0 && state.job[i].department != null) {
        //             department.push(state.job[i].department);
        //         }
        //     }
        //     return department;
        // }
    },
    mutations: {
        // saveJobs(state, payload) {
        //     state.job = payload;
        // },
    }
});