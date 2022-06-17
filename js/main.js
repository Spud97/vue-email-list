new Vue({
  el: "#app",
  data: {
    listaEmail: [],
    counterAjax: 0,
  },
  methods: {
    generate10Emails() {
      this.listaEmail = [];
      const url = "https://flynn.boolean.careers/exercises/api/random/mail";

      for (let i = 0; i < 10; i++) {
        counterAjax++;

        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((axiosResp) => {
            counterAjax;
            console.log("Ricevuto risposta ciclo " + i);
            this.listaEmail.push(axiosResp.data.response);
            console.log(listaEmail);
          });
        console.log("Eseguito ciclo " + i);
      }
      console.log("Codice dopo la fine del ciclo");
    },
  },
});
