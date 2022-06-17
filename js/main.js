new Vue({
  el: "#app",
  data: {
    listaEmail: [],
  },
  methods: {
    generate10Emails() {
      this.listaEmail = [];
      const url = "https://flynn.boolean.careers/exercises/api/random/mail";

      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((axiosResp) => {
            this.listaEmail.push(axiosResp.data.response);
            console.log(this.listaEmail);
          });
      }
    },
  },
});
